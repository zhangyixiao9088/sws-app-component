function addLoadEvent(func) { 
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') { 
		window.onload = func; 
	} else { 
		window.onload = function() { 
			oldonload(); 
			func(); 
		} 
	} 
}

function parserParametes(pars){
	var obj = new Object();
	if(pars){
		var parametes = pars.split('|&');
		for(var i=0;i<parametes.length;i++){
			var entry = parametes[i].split('|=');
			obj[entry[0]]=entry[1];
		}
	}
	return obj;
}

function dyniframesize(iframe) { 
		try{
			iframe.scrolling="no";
			iframe.frameborder="0";
			iframe.height ="100%";
			var bHeight = iframe.contentWindow.document.body.scrollHeight;
			var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
			var height = Math.max(bHeight, dHeight);
			iframe.height =  height;
		}catch (ex){}
}

function _getDialogId(fileName, viewName) {
	var dialogId = "";
	var regExp = new RegExp("/", "g");
	fileName = fileName.replace(regExp, "_");
	dialogId = "_Dialog_" + fileName + "_" + viewName;
	return dialogId;
}
function _getDialogDocument(dlgId){
	return top.document.getElementById("_DialogFrame_"+dlgId).contentWindow;
}
function _lstGetDialog(title,url){
	var nUrl = _lstParserOpenUrl(url);
	var diag = new top.Dialog();
	top.dialogParentObj = this;
	if(!title || title == ""){
		diag.Title = title;
	}
	diag.URL = nUrl;
	return diag;
}
/************************************************
表单相关接口
************************************************/
function _lstParserOpenUrl(url){
	var locationPath = window.location.pathname;
	var index = locationPath.lastIndexOf('/');
	if(index>0){
		locationPath = locationPath.substring(0, index);
	}
	var nUrl=locationPath+"/"+url;
	return nUrl;
}
function _getFileName(){
	return pageform.__fileName.value;
}
function _getViewName(){
	return pageform.__viewName.value;
}
function _getComId(comName){
	return _getViewName()+"_"+comName;
}
function _lstAddRow(fileName,title,viewName,pars,width){
	if(!viewName){
		viewName = "edit";
	}
	var url = "xmlPaneAction.action?fileName="+fileName+"&viewName="+viewName;
	if(pars){
		url = url + pars;
	}
	if(!title || title == ""){
		title = "添加";
	}
	var diag = _lstGetDialog(title,url);
	diag.ID = _getDialogId(fileName, viewName);
	diag.Width=width?width:830;  //zzx add	
	diag.Height='100';
	diag.ShowButtonRow=true;
	diag.OkButtonText=" 保 存11  ";
	diag.OKEvent = function(){
		var flag = diag.innerFrame.contentWindow._savePanel("add",'','');
		if(!flag){
			top.Dialog.alert("填写不符全要求。");
		}
	};
	diag.show();
}
function _lstAddRow_big(fileName,title,viewName,pars)    //full  window
{
	var width = '100';
	_lstAddRow(fileName,title,viewName,pars,width);
}
function _openDialog(id,url,title,width,pars){
	var nUrl = _lstParserOpenUrl(url);
	var diag = new top.Dialog();
	top.dialogParentObj = this;
	if(!title || title != ""){
		diag.Title = title;
	}
	diag.URL = nUrl;
	diag.ID = id;
	diag.pars = pars;
	diag.Width=width?width:830;
	diag.Height='100';
	diag.show();
	return diag;
}
function _lstEditRow(fileName,id,title,viewName,pars,width){
	if(!viewName){
		viewName = "edit";
	}
	var url = "xmlPaneAction.action?fileName="+fileName+"&viewName="+viewName+"&id="+id;
	if(pars){
		url = url + pars;
	}
	if(!title || title == ""){
		title = "修改";
	}
	var diag = _lstGetDialog(title,url);
	diag.ID = _getDialogId(fileName, viewName);
	diag.Width=width?width:830;
	diag.Height='100';
	diag.ShowButtonRow=true;
	diag.OkButtonText="  保 存 ";
	diag.OKEvent = function(){
		var flag = diag.innerFrame.contentWindow._savePanel("update",'','');
		if(!flag){
			top.Dialog.alert("填写不符全要求。");
		}
	};
	diag.show();
}


function _lstEditRow_big(fileName,id,title,viewName,pars)    //full  window
{
	var width = '100';
	_lstEditRow(fileName,id,title,viewName,pars,width);
}

function _lstViewRow(fileName,id,title,viewName,pars,width){
	if(!viewName){
		viewName = "view";
	}
	var url = "xmlPaneAction.action?fileName="+fileName+"&viewName="+viewName+"&id="+id+"&_table_state=read";
	if(pars){
		url = url + pars;
	}
	if(!title || title == ""){
		title = "查看鿴";
	}
	var diag = _lstGetDialog(title,url);
	diag.ID = _getDialogId(fileName, viewName);
	diag.Width=width?width:830;
	diag.Height='100';
	diag.show();
}
function _lstViewRow_big(fileName,id,title,viewName,pars)   //full  window
{
	var width = '100';
	_lstViewRow(fileName,id,title,viewName,pars,width);
}

function _lstDelRow(fileName,id,viewName,pars,width){
		var forMap = new Object();
		forMap["__method"] = "delById";
		forMap["__fileName"]=fileName;
		forMap["__viewName"]=viewName;
		forMap["__action"]="_crud";
		forMap.id = id;
		ccs.validate(forMap,function(data){
		 	if(data){
		 		if(data.result=='pass'){
			 		top.Dialog.confirm("ȷ��ɾ����确定删除吗？",function(){
						if(!viewName){
							viewName = "edit";
						}
						var url = "xmlDataHandle.action?__fileName="+fileName+"&__viewName="+viewName+"&__action=_crud&__method=delById&__forwardType=_QU_PARENT_FRAME_SUBMIT&id="+id;
						if(pars){
							url = url + pars;
						}
						var diag = _lstGetDialog("删除",url);
						diag.Width=width?width:830;
						diag.Height='100';
						diag.show();
					});
	 		}else{
	 			var msg = data.message;
	 		 	var str ="检查到以下内容不符合要求,不允许提交：\n";
	 		 	var idx = 1;
	 		 	for(var key in msg){
	 		 		str+=idx+"、"+msg[key]+"\n"
	 		 		idx+=1;
	 		 	}
	 		 	alert(str);
	 		}
	 	}
	 });
}


function _lstDelRow_big(fileName,id,viewName,pars)   //full  window
{
	var width = '100';
	_lstDelRow(fileName,id,viewName,pars,width);
}
var _savePanelFlag=false;

function _getPanelData(flowName,stepName){
	var access=true;
	if(window.pageValidate){
		var sevAccess= window.pageValidate(flowName,stepName);
		if(sevAccess==false){
			return;
		}
	}
	var res=new Object();
	if(access==true){
		if(datamodel){
			datamodel.flush();
			dataPool.flush();
			var data = datamodel.toXml();
			var poolData = dataPool.toXml();
			
			res.xmlData = data;
			res.xmlPoolData = poolData;
		}
	}
	return res;
}
function _savePanel(type,urlVO,defaultType,fun){
	if(_savePanelFlag==true){
		alert("操作过快，请稍后再试。");
	}else{
		var access=true;
		access=$('#pageComsform').validationEngine({returnIsValid:true});
		if(window.pageValidate){
			var sevAccess= window.pageValidate();
			if(sevAccess==false){
				return;
			}
		}
		if(access==true){
			try{
				datamodel.flush();
				dataPool.flush();
				pageform.__xmlData.value=datamodel.toXml();
				pageform.__xmlPoolData.value=dataPool.toXml();
				pageform.__action.value='_crud';
				pageform.__method.value= type;
				if(defaultType=='ajax'){
					 var formMap = dwr.util.getValues("pageform");
					 ccs.save(formMap,{},function(data){
					 	if(data){
					 		if(data.result=='pass'){
					 			var rs = data.resv;
					 			if(fun){
					 				fun(rs);
					 			}else{
					 				alert("操作成功。");
					 			}
					 		}else{
					 			var msg = data.message;
					 		 	var str ="检查到以下内容不符合要求,不允许提交：\n";
					 		 	var idx = 1;
					 		 	for(var key in msg){
					 		 		if(typeof(msg[key])!="function") {
						 		 		str+=idx+"、"+msg[key]+"\n"
						 		 		idx+=1;
					 		 		}
					 		 	}
					 		 	alert(str);
					 		}
					 	}
					 });
					 return true;
				}else{
					if(urlVO){
						pageform.__forwardType.value= urlVO.type;
						pageform.__forward.value= urlVO.value;
						pageform.__forwardInfo.value = urlVO.info;
					}else{
						if(defaultType=='target'){
							pageform.__forwardType.value= "_MESSAGE";
							pageform.target="pageJumpIfram";
						}else{
							pageform.__forwardType.value= "_QU_PARENT_FRAME_SUBMIT";
						}
					}
					 var formMap = dwr.util.getValues("pageform");
					 ccs.validate(formMap,function(data){
					 	if(data){
					 		if(data.result=='pass'){
					 			_savePanelFlag=true;
								pageform.submit();
					 		}else{
					 			var msg = data.message;
					 		 	var str ="检查到以下内容不符合要求,不允许提交：\n";
					 		 	var idx = 1;
					 		 	for(var key in msg){
					 		 		if(typeof(msg[key])!="function") {
						 		 		str+=idx+"、"+msg[key]+"\n"
						 		 		idx+=1;
					 		 		}
					 		 	}
					 		 	alert(str);
					 		}
					 	}
					 });
					return true;
				}
			}catch(e){
				alert("保存出错："+e);
				return false;
			}
		}else{	
			return false;
		}
	}
}
function _pageAddMessage(msg,par){
		var time = 2;
		var tipsDiv = '<div class="tipsClass">' + msg + '</div>'; 
		$( 'body' ).append( tipsDiv ); 
		$( 'div.tipsClass' ).css({ 
				'position' : 'absolute', 
				'top' : '40%', 
				'left' :  '40%', 
				'font-weight':'bold',
				'padding' : '30px 20px', 
				'background': '#8FBC8F', 
				'font-size' : 16 + 'px', 
				'margin' : '0 auto', 
				'text-align': 'center', 
				'width' : 'auto', 
				'color' : 'red', 
				'opacity' : '0.8' 
				}).show(); 
		setTimeout( function(){
			$( 'div.tipsClass' ).fadeOut();
			if(window._pageAfterMessage){
				_pageAfterMessage(par);
			}
			_savePanelFlag=false;//把标志改回来
		}, ( time * 600 ) ); 
}

/**************流程有关表单修改方法************************/
function _lstEditRow_flow(filePath,id,title,width){
	if(!title || title == ""){
		title = "修改";
	}
	var diag = _lstGetDialog(title,filePath);
	diag.ID = _getDialogId(filePath);
	diag.Width=width?width:830;
	diag.Height='100';
	diag.ShowButtonRow=true;
	diag.OkButtonText=" 保 存 ";
	diag.OKEvent = function(){
		var flag = diag.innerFrame.contentWindow._savePanel("update");
		if(!flag){
			top.Dialog.alert("填写不符全要求。");
		}
	};
	diag.show();
}

function _getValue(comName) {
	var comId = pageform.__viewName.value+"_"+comName;
	var value = HandleConfig.getComponentValue(comId);
	if(value){
		return value;
	}else{
		throw "信息不完整，请检查表单是否填写完成。";
	}
}
function to_queryForSelect(srcObj,tarS,dName){
	var vName=document.getElementById("viewName").value;
	var fName = document.getElementById("fileName").value;
	var tarId = vName+"_"+tarS;
	var sName=srcObj.name;
	var srcId = vName+"_"+sName;
	var par = HandleConfig.getValue(vName,sName,"select");
	var u="AdmdataQuery.action?fileName="+fName+"&viewName="+vName+"&dName="+dName+"&type=panel&parentCode="+par;
	var target=document.getElementById(tarId);
	if(target){
		jQuery.getJSON(
			u,
			{jsonString:''},
			function(data){
				target.options.length = 1;
				//target.options.add(new Option("---��ѡ��---",""));
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

function to_setSeletValue(pValue,tarS,dName,sValue){
	var vName=document.getElementById("viewName").value;
	var fName = document.getElementById("fileName").value;
	var tarId = vName+"_"+tarS;
	var u="AdmdataQuery.action?fileName="+fName+"&viewName="+vName+"&dName="+dName+"&type=panel&parentCode="+pValue;
	var target=document.getElementById(tarId);
	if(target){
		jQuery.getJSON(
			u,
			{jsonString:''},
			function(data){
				target.options.length = 1;
				//target.options.add(new Option("---��ѡ��---",""));
				var len = data.length;  
				for(var i=0;i<len;i++){
					var text=data[i].VALUE;
					var optV=data[i].KEY;
					var opt = new Option(text,optV);
					target.options.add(opt);
					if(optV==sValue){
						$("#hidVal_"+tarId).val(sValue);
						opt.selected = true;
					}
				}
			}
		);
	}
}