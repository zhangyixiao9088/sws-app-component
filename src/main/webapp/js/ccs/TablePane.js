
var PageContext=[];
/**
设置字段对应的控件对象的值
**/
function setFieldValue(tableobject_id,fieldName, value) {
		var form=getForm(fieldName);
		var controlName=getControlName(tableobject_id,fieldName);
		if(fieldName == "__page" ){
			controlName="curPage";
		}
		if(PageContext[controlName]){
			PageContext[controlName].value=value;
		}
		if (typeof (eval("document.all[controlName]")) != "undefined") {
			var objs = document.all(controlName);
			var obj;
			if (objs.type=="hidden"){
				objs.value=value;
				return;
			}
			if (objs.type == "select-one") {
				for (var i = 0; i < objs.length; i++) {
					if (objs[i].value == value) {
						objs[i].selected = true;
						return;
					}
				}
			}
			if (objs.length > 1) {
				obj = objs[0];
			} else {
				obj = objs;
			}
				//
			if (obj.type == "radio") {
				var radioName = obj.name;
				var r = document.all[radioName];
				for (var i = 0; i < r.length; i++) {
					if (r[i].value == value) { //选中
						r[i].checked = true;
						return;
					}
				}
			} else {
				if (obj.type == "checkbox") {
					if (value.toUpperCase() == "TRUE" || value.toUpperCase() == "1") {
						obj.checked = true;
					} else {
						obj.checked = false;
					}
					return;
				} else {
					obj.value = value;
					return;
					
				}
			}
		}else{
			//alert("错误：找不到控件ＩＤ为"+controlName+"的控件");
			if(fieldName =="fileName" || fieldName =="viewName" || fieldName =="__page" ){
				return ;
			}
			PageContext[controlName]={formName:tableobject_id,key:fieldName,value:value};
			//alert(fieldName);
			//加入隐藏控件
			
			var com=document.createElement("input");
			com.setAttribute("id",controlName);
			com.setAttribute("type","hidden");
			com.setAttribute("name",fieldName);
			com.setAttribute("value",value);
			form.appendChild(com);
		}
}
function resetDefaultForm(viewName){
	var form=getForm(fieldName);
	form.reset();
	for(var controlName in PageContext){
		if(controlName.indexOf(viewName+"_")==0){
			var pageValue=PageContext[controlName];
			var fieldName=pageValue.key;
			var value=pageValue.value;
			setFieldValue(viewName,fieldName,value);
		}
	}
}
function getFieldValue(viewName,fieldName){
	var controlName=getControlName(viewName,fieldName);
	var rs=PageContext[controlName];
	if(rs){
		return rs.value;
	}
}
function getControlName(viewName,fieldName) {
	return viewName+"_"+fieldName;
}
function getForm(viewName){
	var f = document.getElementById(viewName);
	if(f){
		return f;
	}
	f=document.getElementsByName(viewName)[0];
	if(f){
		return f;
	}
	return document.getElementById("listPageForm");
}
function formSubmit(formName,actionName){
 	var form=getForm(fieldName);
	form.action=actionName;
 	form.submit();
}
function getCurrentUrl(id){
	
	if(id){
		return encodeURI(document.location.href+"#"+id);
	}
	return encodeURI(document.location.href);
}
$(document).ready(function(){});
function queryDataForSelect(u,targetId){
	 //1.如果返回的是JSONArray对象，那么用下面的方法打出来值
	//var u="AdmdataQuery.action?fileName="+fileName+"&viewName="+viewName+"&dName="+dName+"&key="+par;
	var target=document.getElementById(targetId);
	if(target){
		$.getJSON(
			u,
			{jsonString:''},
			function(data){
				target.options.length = 1;
				//target.options.add(new Option("---请选择---",""));
				var len = data.length;  
				for(var i=0;i<len;i++){
					var text=data[i].VALUE;
					var value=data[i].KEY;
					target.options.add(new Option(text,value));
				}
			}
		);
	}
}

function is_array(value){   
    return value&&(typeof value==='object')&& (typeof value.length==='number')&& (typeof value.splice==='function')&& !(value.propertyIsEnumerable('length'));    
}; 

function exportXLS(formName,dbName){
	var str = "exportXlsAction.action?parametes="+formName.parametes.value+"&dbName="+dbName;
	window.open(str);
}
function exportPDF(formName,dbName){
	var str = "exportXlsAction.action?parametes="+formName.parametes.value+"&dbName="+dbName;
	window.open(str);
}