/**
 *****************************************************************
 * 模块：默认数据规则
 * 作者：csat
 * 时间：2012-12-25
 *****************************************************************
 */

if (common_util.isUndefined(dRule_dt)) { // 判断对象是否未定义
	var dRule_dt = new DataRule_Default();
}

function DataRule_Default() {
	
}

// 保存默认规则
DataRule_Default.prototype.editDefaultDataRule = function(){
	var form = document.getElementById("form1");
	
	if(common_util.isNullObjValue(form.name)){
		alert("规则名称不能为空");
		form.name.focus();
		return;
	}
	form.dbRangePage.value = dRule.parseHTMLToPageContent($("#"+dRuleAndTemplate.contentDivId).attr("innerHTML"));
	form.dbRange.value = dRuleAndTemplate.parsePageContentToRuleContent(form.dbRangePage.value);
	if(common_util.isNullString(form.dbRange.value)){
		alert("规则内容不能为空");
		return;
	}
	dwr.engine.setAsync(false);
	if(!this.isValidDefaultRule(form.dbRange.value)){
		alert("规则内容格式不正确，请参照页面上给出的格式进行填写");
		return;
	}
	dwr.engine.setAsync(true);
	if(confirm("确定保存吗？")) {
		form.submit();
	}
}

// 验证默认规则格式是否正确
DataRule_Default.prototype.isValidDefaultRule = function(content){
	var flag = false;
	PlatformDwrService.isValidDefaultRule(content, function(data){
		flag = data;
	});
	return flag;
}