function changeSys() {
	var viewName = getListViewName();
	var systemId = document.getElementById(viewName + "_systemId").value;
	var _url = "system/system/action/system!changeSystem.action?systemId=" + systemId;
	$.ajax({type:"POST", url:_url, success:callback, async:true});
}

function callback(data) {
	var viewName = getListViewName();
	document.getElementById(viewName).submit();
}

function getSystemId(systemId) {
	if(systemId==""){
		systemId = document.getElementById(getListViewName()+"_systemId").value;
		if(systemId==""){
    		throw "请先选择系统";
    	}
	}
	return systemId;
}