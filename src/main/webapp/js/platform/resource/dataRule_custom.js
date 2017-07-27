/**
 *****************************************************************
 * 模块：自定义数据规则
 * 作者：csat
 * 时间：2012-12-25
 *****************************************************************
 */

if (common_util.isUndefined(dRule_cm)) { // 判断对象是否未定义
	var dRule_cm = new DataRule_Custom();
}

function DataRule_Custom() {
	
}

// 保存自定义规则
DataRule_Custom.prototype.editCustomDataRule = function(ruleType){
	var form = document.getElementById("form1");
	
	if(common_util.isNullObjValue(form.name)){
		alert("规则名称不能为空");
		form.name.focus();
		return;
	}
	if(common_util.isNullObjValue(form.tableName)){
		if(ruleType=="business_custom"){
			alert("数据表不能为空");
		} else {
			alert("资源不能为空");
		}
		form.btn_select.focus();
		return;
	}
	form.dbRangePage.value = dRule.parseHTMLToPageContent($("#"+dRuleAndTemplate.contentDivId).attr("innerHTML"));
	form.dbRange.value = dRuleAndTemplate.parsePageContentToRuleContent(form.dbRangePage.value);
	if(common_util.isNullString(form.dbRange.value)){
		alert("规则内容不能为空");
		return;
	}
	dwr.engine.setAsync(false);
	if(!this.isValidCustomRule(form.tableName.value, form.dbRange.value)){
		alert("规则内容格式不正确，请参照页面上给出的格式进行填写");
		return;
	}
	dwr.engine.setAsync(true);
	if(confirm("确定保存吗？")) {
		form.submit();
	}
}

// 验证自定义规则格式是否正确
DataRule_Custom.prototype.isValidCustomRule = function(tableName, content){
	var flag = false;
	PlatformDwrService.isValidCustomRule(tableName, content, function(data){
		flag = data;
	});
	return flag;
}

// 选择数据表/资源
DataRule_Custom.prototype.selectResource = function(ruleType) {
	try {
		top.editRule = window;
		var url = "pageAction.action?fileName=platform/privilege/role/selectResourceToRole";
		if(ruleType=="business_custom"){
			top.Dialog.open({URL: url+"&viewName=selectTable", Title: "选择数据表", Height: 600, Width: 800});
		} else if(ruleType=="resource_custom"){
			top.Dialog.open({URL: url+"&viewName=selectResource", Title: "选择资源", Height: 280, Width: 600});
		} else {
			throw "参数错误:"+ruleType;
		}
	} catch(e) {
		alert(e);
	}
}

// 选择数据规则模板
DataRule_Custom.prototype.selectDataRuleTemplate = function(ruleType, admin, systemId) {
	try {
		var form = document.getElementById("form1");
		var tableName = form.tableName.value;
		if(common_util.isNullString(tableName)){
			form.btn_select.focus();
			if(ruleType=="business_custom"){
				throw "数据表不能为空";
			} else {
				throw "资源不能为空";
			}
		}
		dRule.selectDataRuleTemplate(ruleType, admin, systemId, tableName);
	} catch(e) {
		alert(e);
	}
}