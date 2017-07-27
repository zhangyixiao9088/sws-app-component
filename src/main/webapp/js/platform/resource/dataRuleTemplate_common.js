/**
 *****************************************************************
 * 模块：数据规则模板
 * 作者：csat
 * 时间：2012-12-25
 *****************************************************************
 */

if (common_util.isUndefined(drTemplate)) { // 判断对象是否未定义
	var drTemplate = new DataRuleTemplate();
}

function DataRuleTemplate() {
	
}

// 验证数据规则模板的输入值是否包含非法字符
DataRuleTemplate.prototype.checkInput = function(input) {
	if (/^.*?[\[\]【】].*?$/.test($(input).val())) {
		$(input).focus();
		throw "输入值不能包含以下字符：[ ] 【 】";
	}
}

// 选择动态配置
DataRuleTemplate.prototype.selectDataRuleConfig = function() {
	top.editRuleTemplate = window;
	var url = "pageAction.action?fileName=platform/resource/dataRule/listDataRuleConfig&viewName=listDataRuleConfig";
	top.Dialog.open({URL: url, Title: "选择动态配置", Height: 400, Width: 600});
}