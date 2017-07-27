/**
 *****************************************************************
 * 模块：自定义数据规则模板
 * 作者：csat
 * 时间：2012-12-25
 *****************************************************************
 */

if (common_util.isUndefined(drTemplate_cm)) { // 判断对象是否未定义
	var drTemplate_cm = new DataRuleTemplate_Custom();
}

function DataRuleTemplate_Custom() {
	
}

// 自定义规则模板页面初始化
DataRuleTemplate_Custom.prototype.initialize = function() {
	var select = document.getElementById("columnName");
	this.setColumn(select, $("#tableName").val());
}

// 设置数据表中的字段
DataRuleTemplate_Custom.prototype.setColumn = function(selectObject, tableName) {
	dwr.engine.setAsync(false);
	PlatformDwrService.getTableColumns(tableName, function(data) {
		selectObject.options.length = 1;
		for(var i in data) {
			var option = new Option(data[i].remark==null?data[i].name:data[i].remark, data[i].name);
			selectObject.options.add(option);
		}
	});
	dwr.engine.setAsync(true);
}

// 将内容添加到自定义规则模板中
DataRuleTemplate_Custom.prototype.addContentToCustomRuleTemplate = function() {
	try {
		var array = new Array();
		var logicalOperator = $("#logicalOperator").val();
		var tableName = $("#tableName").val();
		var columnName = $("#columnName").val();
		var relationalOperator = $("#relationalOperator").val();
		var input = $("#input").val();
		drTemplate.checkInput($("#input"));
		
		if(common_util.isNotNullString(logicalOperator)) {
			array[array.length++] = dRuleAndTemplate.space;
			array[array.length++] = logicalOperator;
			array[array.length++] = dRuleAndTemplate.space;
		}
		if(common_util.isNotNullString(columnName)) {
			array[array.length++] = tableName + ".";
			array[array.length++] = columnName;
		}
		if(common_util.isNotNullString(relationalOperator)) {
			array[array.length++] = dRuleAndTemplate.space;
			array[array.length++] = relationalOperator;
			array[array.length++] = dRuleAndTemplate.space;
		}
		array[array.length++] = input;
		dRuleAndTemplate.addArrayContent(array, "right");
	} catch (e) {
		alert(e);
	}
}

// 保存自定义规则模板
DataRuleTemplate_Custom.prototype.editCustomDataRuleTemplate = function(ruleType){
	var form = document.getElementById("form1");
	
	if(common_util.isNullObjValue(form.name)){
		alert("规则模板名称不能为空");
		form.name.focus();
		return;
	}
	form.dbRangePage.value = dRuleAndTemplate.parseHTMLToPageContent($("#"+dRuleAndTemplate.contentDivId).attr("innerHTML"));
	form.dbRange.value = dRuleAndTemplate.parsePageContentToRuleContent(form.dbRangePage.value);
	if(common_util.isNullString(form.dbRange.value)){
		alert("规则模板内容不能为空");
		return;
	}
	dwr.engine.setAsync(false);
	if(!this.isValidCustomRuleTemplate(form.tableName.value, form.dbRange.value)){
		alert("规则模板内容格式不正确，请参照页面上给出的格式进行填写");
		return;
	}
	dwr.engine.setAsync(true);
	if(confirm("确定保存吗？")) {
		form.submit();
	}
}

// 验证自定义规则模板格式是否正确
DataRuleTemplate_Custom.prototype.isValidCustomRuleTemplate = function(tableName, content){
	var flag = false;
	PlatformDwrService.isValidCustomRuleTemplate(tableName, content, function(data){
		flag = data;
	});
	return flag;
}