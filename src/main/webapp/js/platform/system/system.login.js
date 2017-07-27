// 用户选择系统
function selectSystem(systemId) {
	document.getElementById("systemId").value = systemId;
	document.getElementById("form1").submit();
	top.Dialog.close();
}

// session过期后重定向到登录页面
function redirectToLogin(path) {
	var url = "";
	//if (window.top.location.href.indexOf("loginAdmin.action") != -1) {
	//	url = path + "/system/system/action/system!gotoLoginAdmin.action";
	//} else {
	//	url = path + "/system/system/action/system!gotoLogin.action";
	//}
	url = path+"/system/system/action/system!gotoIndexLogin.action";
	window.top.location.href = url;
}
