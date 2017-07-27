/**
 *****************************************************************
 * 模块：数据规则
 * 作者：csat
 * 时间：2012-12-25
 *****************************************************************
 */

if (common_util.isUndefined(dRule)) { // 判断对象是否未定义
	var dRule = new DataRule();
}

function DataRule() {
	
}

// 选择数据规则模板
DataRule.prototype.selectDataRuleTemplate = function(ruleType, admin, systemId, tableName) {
	top.editRule = window;
	var url = "pageAction.action?fileName=platform/resource/dataRule/selectDataRuleTemplate&viewName=listDataRuleTemplate";
	url += "&ruleType="+ruleType+"&admin="+admin+"&systemId="+systemId+"&tableName="+tableName;
	top.Dialog.open({URL: url, Title: "选择数据规则模板", Height: 500, Width: 700});
}

// 将数据规则内容对应的div的内容解析为数据规则页面展现内容
DataRule.prototype.parseHTMLToPageContent = function(content) {
	content = content.replace(/<(div|DIV)\s([^>]*?)(template_id|TEMPLATE_ID)\=\"【/g, "<div>【").replace(/】\"(.*?)<\/(div|DIV)>/g, "】</div>");
	content = dRuleAndTemplate.parseHTMLToPageContent(content);
	return content;
}