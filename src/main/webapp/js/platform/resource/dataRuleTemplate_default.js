/**
 *****************************************************************
 * 模块：默认数据规则模板
 * 作者：csat
 * 时间：2012-12-25
 *****************************************************************
 */

if (common_util.isUndefined(drTemplate_dt)) { // 判断对象是否未定义
	var drTemplate_dt = new DataRuleTemplate_Default();
}

function DataRuleTemplate_Default() {
	
}

// 将内容添加到默认规则模板中
DataRuleTemplate_Default.prototype.addContentToDefaultRuleTemplate = function(){
	try {
		var array = new Array();
		var logicalOperator = $("#logicalOperator").val();
		var relationalOperator = $("#relationalOperator").val();
		var input = $("#input").val();
		drTemplate.checkInput($("#input"));
		if (relationalOperator == "LIKE" || relationalOperator == "NOT LIKE") {
			input = common_util.removeAllCharByRight(input, "0"); // 删除系统权限编码右侧的所有"0"字符
		}
		if(common_util.isNotNullString(logicalOperator)){
			array[array.length++] = dRuleAndTemplate.space;
			array[array.length++] = logicalOperator;
			array[array.length++] = dRuleAndTemplate.space;
		}
		array[array.length++] = $("#leftSquareBracket").val();
		if(common_util.isNotNullString(relationalOperator)){
			array[array.length++] = relationalOperator;
			array[array.length++] = dRuleAndTemplate.space;
		}
		if(common_util.isNotNullString(input)){
			array[array.length++] = "'";
			array[array.length++] = input;
			array[array.length++] = "'";
		}
		array[array.length++] = $("#rightSquareBracket").val();
		dRuleAndTemplate.addArrayContent(array, "right");
	} catch(e) {
		alert(e);
	}
}

// 保存默认规则模板
DataRuleTemplate_Default.prototype.editDefaultDataRuleTemplate = function(){
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
	if(!this.isValidDefaultRuleTemplate(form.dbRange.value)){
		alert("规则模板内容格式不正确，请参照页面上给出的格式进行填写");
		return;
	}
	dwr.engine.setAsync(true);
	if(confirm("确定保存吗？")) {
		form.submit();
	}
}

// 验证默认规则模板格式是否正确
DataRuleTemplate_Default.prototype.isValidDefaultRuleTemplate = function(content){
	var flag = false;
	PlatformDwrService.isValidDefaultRuleTemplate(content, function(data){
		flag = data;
	});
	return flag;
}

// 选择范围
DataRuleTemplate_Default.prototype.selectScope = function(inputId, systemId) {
	top.editRuleTemplateParent = window;
	top.Dialog.open({URL: "resource/dataRule/action/dataRule!jumpSelectScopeTree.action?inputId="+inputId+"&systemId="+systemId, Title: "选择范围", Height: 400, Width: 300});
}