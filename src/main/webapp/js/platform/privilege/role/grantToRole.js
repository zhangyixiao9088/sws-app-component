var tab; // tab标签对象

// 页面初始化
function inital() {
	tab = new Tab("tab","click");
    tab.aswitch(0);
    
    $(".select_mainTemplate").click(function(){
		var objectId = $(this).attr("id");
		var textarea = $(this).parents("ul").find("textarea")[0];
    	top.grantAuthorityToRole = window;
		var url = "pageAction.action?fileName=platform/resource/dataRule/listDataRule&viewName=selectDataRule&systemId="+$("#systemId").val()+"&objectId="+textarea.id+"&ruleType=";
		var title;
		if(objectId.indexOf("dr_business_selectButton_")>-1) {
			url += "business_default";
			title = "选择业务默认规则";
		} else if(objectId.indexOf("cr_business_selectButton_")>-1) {
			url += "business_custom";
			title = "选择业务自定义规则";
		} else if(objectId.indexOf("dr_resource_selectButton_")>-1) {
			url += "resource_default";
			title = "选择资源默认规则";
		} else if(objectId.indexOf("cr_resource_selectButton_")>-1) {
			url += "resource_custom";
			title = "选择资源自定义规则";
		}
		top.Dialog.open({URL: url, Title: title, Height: 500, Width: 700});
	})
    
	$(".delete_mainTemplate").click(function(){
		var objectId = $(this).attr("id");
		var deleteId;
		if(objectId.indexOf("dr_deleteButton_")>-1) {
			deleteId = $("#dr_id_"+objectId.substring("dr_deleteButton_".length)).val();
			if(deleteId.length!=0){
				if($("#deleted_drIds").val().length==0){
					$("#deleted_drIds").val(deleteId);
				} else {
					$("#deleted_drIds").val($("#deleted_drIds").val() + "," + deleteId);
				}
			}
		} else {
			deleteId = $("#cr_id_"+objectId.substring("cr_deleteButton_".length)).val();
			if(deleteId.length!=0){
				if($("#deleted_crIds").val().length==0){
					$("#deleted_crIds").val(deleteId);
				} else {
					$("#deleted_crIds").val($("#deleted_crIds").val() + "," + deleteId);
				}
			}
		}
		
		$(this).parents("ul").remove();
		setIframeHeight();
	})
}

// 授予角色业务数据权限
function grantBusinessAuthorityToRole() {
	try {
		check("请先选择规则"); // 校验
	
		if(confirm("确定保存吗？")) {
			document.getElementById("form1").submit();
		}
	} catch(e) {
		alert(e);
	}
}

// 授予角色资源数据权限
function grantResourceAuthorityToRole() {
	try {
		check("请先选择规则"); // 校验
	
		if(confirm("确定保存吗？")) {
			document.getElementById("form1").submit();
		}
	} catch(e) {
		alert(e);
	}
}

// 校验
function check(info) {
	$(".name").each(function(){
		var objectId = $(this).attr("id");
		if(objectId.indexOf("dr_name_")>-1){
			if(objectId!="dr_name_drIndex" && $(this).val()=="") {
				tab.aswitch(0);
				$(this).focus();
				throw info;
			}
		} else {
			if(objectId!="cr_name_crIndex" && $(this).val()=="") {
				tab.aswitch(1);
				$(this).focus();
				throw info;
			}
		}
	});
}

// 设置iframe高度
function setIframeHeight() {
//	$(window.parent.document).find("#grant_iframe").height($(document.body).height());
}

// 设置克隆元素的id并扩展至上级结点
function setIdAndAppendTo(clone, oldStr, newStr, parent) {
	$(clone).attr("id", function(){
		var temp_id = this.id;
		temp_id = temp_id.replace(oldStr, newStr);
		return temp_id;
	})
	$(clone).appendTo(parent);
}

// 设置克隆元素的input, select子元素的id和name
function setIdAndNameOfChilds(clone, oldStr, newStr) {
	$(clone).find("input,select,textarea").each(function(){
		$(this).attr("id", function(){
			var temp_id = this.id;
			temp_id = temp_id.replace(oldStr, newStr);
			return temp_id;
		});
		
		$(this).attr("name", function(){
			var temp_name = this.name;
			temp_name = temp_name.replace(oldStr, newStr);
			return temp_name;
		});
	});
}

// 增加默认规则
function addDefaultRule() {
	var drNum = $("#defaultRuleNum");
	var drIndex = $(drNum).val();
	var clone = $("#dr_mainTemplate_drIndex").clone(true);
	setIdAndAppendTo(clone, "drIndex", drIndex, $("#defaultRule"));
	setIdAndNameOfChilds(clone, "drIndex", drIndex);
	$("#dr_add_"+drIndex).val(true); // 设置为新增状态
	setIframeHeight();
	$(drNum).val(Number($(drNum).val()) + 1);
}

// 增加自定义规则
function addCustomRule() {
	var crNum = $("#customRuleNum");
	var crIndex = $(crNum).val();
	var clone = $("#cr_mainTemplate_crIndex").clone(true);
	setIdAndAppendTo(clone, "crIndex", crIndex, $("#customRule"));
	setIdAndNameOfChilds(clone, "crIndex", crIndex);
	$("#cr_add_"+crIndex).val(true); // 设置为新增状态
	setIframeHeight();
	$(crNum).val(Number($(crNum).val()) + 1);
}