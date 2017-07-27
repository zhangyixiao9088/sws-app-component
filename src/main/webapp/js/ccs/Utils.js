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
//tree
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
	var pathName = window.location.pathname.substring(1);
    var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
    var nurl;
    if (webName == "") {
        nurl = window.location.protocol + '//' + window.location.host;
    }
    else {
        nurl = window.location.protocol + '//' + window.location.host + '/' + webName;
    }
    nurl  =  nurl + "/" + url;
    return nurl
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
	diag.Width=width?width:960;  //zzx add	
	diag.Height='100';
	diag.ShowButtonRow=true;
	diag.OkButtonText=" 保 存 ";
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
	diag.Width=width?width:960;
	diag.Height='100';
	diag.show();
	return diag;
}

function _delDialog(title, url, height, width, id,img,precent) {
	var dialog = _lstGetDialog(title, url,img,precent);
	dialog.Height = height?height:430;
  	dialog.Width = width?width:430;
  	if (id) {
  		dialog.ID = id;
  	}
  	dialog.show();
}
function _openPrintDialog(id,url,title,width,pars){
	var nUrl = _lstParserOpenUrl(url);
	var diag = new top.Dialog();
	top.dialogParentObj = this;
	if(!title || title != ""){
		diag.Title = title;
	}
	diag.URL = nUrl;
	diag.ID = id;
	diag.pars = pars;
	diag.Width=width?width:960;
	diag.Height='100';
	diag.ShowButtonRow=true;
	diag.OkButtonText="  打印... ";
	diag.OKEvent = function(){
		diag.innerFrame.contentWindow._print();
	};
	diag.show();
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
	diag.Width=width?width:960;
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
		title = "查看?";
	}
	var diag = _lstGetDialog(title,url);
	diag.ID = _getDialogId(fileName, viewName);
	diag.Width=width?width:960;
	diag.Height='100';
	diag.show();
}
function _lstViewRow_big(fileName,id,title,viewName,pars)   //full  window
{
	var width = '100';
	_lstViewRow(fileName,id,title,viewName,pars,width);
}
function _lstConfirmJump(fileName,id,viewName,method,OptionTitle,pars,width){
		var forMap = new Object();
		var _action="_crud";
		var _method="delById";
		var _title = "删除";
		if(method){
			_action = method;
			_method = method;
		} 
		if(OptionTitle){ 
			_title = OptionTitle;
		}
		forMap["__method"] =_method;
		forMap["__fileName"]=fileName;
		forMap["__viewName"]=viewName;
		forMap["__action"]="_crud";
		forMap.id = id;
		ccs.validate(forMap,function(data){
		 	if(data){
		 		if(data.result=='pass'){
			 		top.Dialog.confirm("确定"+_title+"吗？",function(){
						if(!viewName){
							viewName = "edit";
						}
						var url = "xmlDataHandle.action?__fileName="+fileName+"&__viewName="+viewName+"&__action="+_action+"&__method="+_method+"&__forwardType=_QU_PARENT_FRAME_SUBMIT&id="+id;
						if(pars){
							url = url + pars;
						}
						window.location.href=url;
					});
	 		}else{
	 			var msg = data.message;
	 		 	var str ="检查到以下内容不符合要求,不允许"+_title+"：\n";
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
function _lstConfirm(fileName,id,viewName,method,OptionTitle,pars,width){
		var forMap = new Object();
		var _action="_crud";
		var _method="delById";
		var _title = "删除";
		if(method){
			_action = method;
			_method = method;
		} 
		if(OptionTitle){ 
			_title = OptionTitle;
		}
		forMap["__method"] =_method;
		forMap["__fileName"]=fileName;
		forMap["__viewName"]=viewName;
		forMap["__action"]="_crud";
		forMap.id = id;
		ccs.validate(forMap,function(data){
		 	if(data){
		 		if(data.result=='pass'){
			 		top.Dialog.confirm("确定"+_title+"吗？",function(){
						if(!viewName){
							viewName = "edit";
						}
						var url = "xmlDataHandle.action?__fileName="+fileName+"&__viewName="+viewName+"&__action="+_action+"&__method="+_method+"&__forwardType=_QU_PARENT_FRAME_SUBMIT&id="+id;
						if(pars){
							url = url + pars;
						}
						var diag = _lstGetDialog(_title,url);
						diag.Width=width?width:960;
						diag.Height='100';
						diag.show();
					});
	 		}else{
	 			var msg = data.message;
	 		 	var str ="检查到以下内容不符合要求,不允许"+_title+"：\n";
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

function _lstDelRow(fileName,id,viewName,pars,width){
	_lstConfirm(fileName,id,viewName);
}

function _lstDelRowByIds(fileName,ids,viewName,pars,width){
		var forMap = new Object();
		forMap["__method"] = "delByIds";
		forMap["__fileName"]=fileName;
		forMap["__viewName"]=viewName;
		forMap["__action"]="_crud";
		forMap.id = ids;
		ccs.validate(forMap,function(data){
		 	if(data){
		 		if(data.result=='pass'){
			 		top.Dialog.confirm("确定删除吗？",function(){
						if(!viewName){
							viewName = "edit";
						}
						var url = "xmlDataHandle.action?__fileName="+fileName+"&__viewName="+viewName+"&__action=_crud&__method=delByIds&__forwardType=_QU_PARENT_FRAME_SUBMIT&ids="+ids;
						if(pars){
							url = url + pars;
						}
						var diag = _lstGetDialog("删除",url);
						diag.Width=width?width:960;
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
function _queryPanel(target){
		var access =PageValidate.form();
		if(access==true){
			try{
				datamodel.flush();
				dataPool.flush();
				pageform.__xmlData.value=datamodel.toXml();
				pageform.__xmlPoolData.value=dataPool.toXml();
				pageform.__action.value='_crud';
				pageform.__method.value= "query";
				if(target){
					pageform.target=target;
				}
				pageform.submit();
			}catch(e){
				alert("查询出错："+e);
				return false;
			}
		}
}
function _savePanel(type,urlVO,defaultType,fun){
	if(_savePanelFlag==true){
		alert("操作过快，请稍后再试。");
	}else{
		var access =PageValidate.form();
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
	diag.Width=width?width:960;
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
				//target.options.add(new Option("---?????---",""));
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
				//target.options.add(new Option("---?????---",""));
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

/**弹出模块窗口
*url要弹出的页面链接
*saw弹出的窗口的宽
*sah弹出的窗口的高
**/
function openNew(url,saw,sah){
	var bro=$.browser;
	if(bro.msie){ //判断ie
		screenW = screen.availWidth + "px";
		screenH = screen.availHeight + "px";
	}else{
		screenW = screen.availWidth;
		screenH = screen.availHeight;
	}
	var sw = saw ? saw + "px":screenW + "px";
	var sh = sah ? sah + "px":screenH + "px";
	paramers = "dialogWidth:" + sw + ";dialogHeight:" + sh + ";minimize:yes;maximize:yes;help:no;";
	if(url.indexOf("?")==-1){
		url = url + "?random="+Math.random();
	}else{
		url = url + "&random="+Math.random();
	}
	window.showModalDialog(url,window,paramers);
	location.reload();
	//onmousedown(2)="return false";
}

/**
 * 金额按千位逗号分割
 * @character_set UTF-8
 * @author Jerry.li(hzjerry@gmail.com)
 * @version 1.2014.08.24.2143
 *  Example
 * 	<code>
 *      alert($.formatMoney(1234.345, 2)); //=>1,234.35
 *      alert($.formatMoney(-1234.345, 2)); //=>-1,234.35
 *      alert($.unformatMoney(1,234.345)); //=>1234.35
 *      alert($.unformatMoney(-1,234.345)); //=>-1234.35
 * 	</code>
 */
;(function($)
{
    $.extend({
        /**
         * 数字千分位格式化
         * @public
         * @param mixed mVal 数值
         * @param int iAccuracy 小数位精度(默认为2)
         * @return string
         */
        formatMoney:function(mVal, iAccuracy){
            var fTmp = 0.00;//临时变量
            var iFra = 0;//小数部分
            var iInt = 0;//整数部分
            var aBuf = new Array(); //输出缓存
            var bPositive = true; //保存正负值标记(true:正数)
            /**
             * 输出定长字符串，不够补0
             * <li>闭包函数</li>
             * @param int iVal 值
             * @param int iLen 输出的长度
             */
            function funZero(iVal, iLen){
                var sTmp = iVal.toString();
                var sBuf = new Array();
                for(var i=0,iLoop=iLen-sTmp.length; i<iLoop; i++)
                    sBuf.push('0');
                sBuf.push(sTmp);
                return sBuf.join('');
            };

            if (typeof(iAccuracy) === 'undefined')
                iAccuracy = 2;
            bPositive = (mVal >= 0);//取出正负号
            fTmp = (isNaN(fTmp = parseFloat(mVal))) ? 0 : Math.abs(fTmp);//强制转换为绝对值数浮点
            //所有内容用正数规则处理
            iInt = parseInt(fTmp); //分离整数部分
            iFra = parseInt((fTmp - iInt) * Math.pow(10,iAccuracy) + 0.5); //分离小数部分(四舍五入)

            do{
                aBuf.unshift(funZero(iInt % 1000, 3));
            }while((iInt = parseInt(iInt/1000)));
            aBuf[0] = parseInt(aBuf[0]).toString();//最高段区去掉前导0
            return ((bPositive)?'':'-') + aBuf.join(',') +'.'+ ((0 === iFra)?'00':funZero(iFra, iAccuracy));
        },
        /**
         * 将千分位格式的数字字符串转换为浮点数
         * @public
         * @param string sVal 数值字符串
         * @return float
         */
        unformatMoney:function(sVal){
            var fTmp = parseFloat(sVal.replace(/,/g, ''));
            return (isNaN(fTmp) ? 0 : fTmp);
        },
    });
    
   
})(jQuery);
$(document).ready(function(){
 	$(".money").each(function(){
    	try{
    		var numStr = $(this).html();
    		if(numStr){
    			if(numStr!="-"){
    				var num = Number(numStr);
	   				$(this).html($.formatMoney(num, 2));
    			}
    		}
    	}catch(e){
    	}
    });
});
