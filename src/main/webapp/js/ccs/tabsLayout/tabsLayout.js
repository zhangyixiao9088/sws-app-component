function tabsLayoutActive(tabId_prefix, tabSum, tabId_index, objectId) {
	for(var index=0; index<tabSum; index++) {
 		document.getElementById(tabId_prefix + (index + 1)).style.display = "none";
 	}
 	document.getElementById(tabId_prefix + tabId_index).style.display = ""
 	
	var object = document.getElementById(objectId);
	if(object.nodeName == "IFRAME") {
		closeProgress();
		showProgressBar();
		object.src = object.title;
	}
}