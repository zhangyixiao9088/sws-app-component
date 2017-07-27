var Signature = function(controlName){
		this.SignatureControl="SignatureControl";
		if(controlName){
			this.SignatureControl = controlName;
		}
		this.Component = document.getElementById(this.SignatureControl);
		this.init = function(){
			var sgn = document.getElementById(this.SignatureControl);
			if(sgn){
				this.Component = sgn;
				return;
			}
			var insertBodydiv = document.getElementById("_insertBodyDiv");
			if(!insertBodydiv){
				var divStr = "<div id='_insertBodyDiv' style='display:none'></div>"
				 document.body.innerHTML =divStr+ document.body.innerHTML; 
				 insertBodydiv = document.getElementById("_insertBodyDiv");
			}
			var signatureHTML = "<OBJECT id=\""+this.SignatureControl+"\"  classid=\"clsid:D85C89BE-263C-472D-9B6B-5264CD85B36E\" codebase=\"iSignatureHTML.cab#version=7,2,0,216\" width=0 height=0 VIEWASTEXT>"+
				"<param name='ServiceUrl' value='"+this.getRootPath()+"/jsp/admin/account/SignatureService.jsp'>"+			
				"<param name='WebAutoSign' value='0'>  "+
				"<param name='MenuDigitalCert' value=0> "+
				"<param name='MenuAbout' value=0> "+
				"<param name='MenuDocVerify' value=0> "+
				"<param name='MenuMoveSetting' value=0> "+
				"<param name='MenuDocLocked' value=0> "+
				"<param name='AfterBackSignEvent' value=1> "+
			"</OBJECT>";
			insertBodydiv.innerHTML=insertBodydiv.innerHTML+signatureHTML;
			this.Component = document.getElementById(this.SignatureControl);
			var mXml = "<?xml version='1.0' encoding='GB2312' standalone='yes'?>";
				  mXml = mXml + "  <Signature>";
				  mXml = mXml + "    <OtherParam>";
				  mXml = mXml + "	    <AfterBackSignEvent>true</AfterBackSignEvent>";
				  mXml = mXml + "    </OtherParam>";
				  mXml = mXml + "  </Signature>";
			this.Component.XmlConfigParam = mXml;
			//this.Component.WebIsProtect=0;
			this.Component.CheckSignature=0;
			//this.Component.MenuDeleteSign=0;
			this.Component.attachEvent("EventOnSign",this.attrEvent);
		};
		this.attrEvent = function(DocumentId,SignSn,KeySn,Extparam,EventId,Ext1){
			if(EventId==2){ //撤消签章
				if(window.afterBackSign){
					window.afterBackSign(DocumentId,SignSn,KeySn);
				}
			}
		}
		//显示印章
		this.showSignature = function(docId){
			if(!this.Component){
				this.init();
			}
			this.Component.showSignature(docId);
		};
		
		this.setVisiablePro = function(flag){
			var isn =$("object[id='iHtmlSignature']");
			if(isn){
				if(isn.length){
					for(var i=0;i<isn.length;i++){
						var sgn = isn[i];
						sgn.Visiabled=flag;
					}
				}else{
					isn.Visiabled=flag;
				}
			}else{
			}
		};
		
		
		//盖章
		this.runSignature = function(f){
			try{
				if(!this.Component){
					this.init();
				}
				var documentId = this.Component.DocumentID;
				if(!documentId){
					this.Component.DocumentID=(new UUID()).id;
				}
				var rs =  this.Component.RunSignature(f);  
				return rs;
			}catch(e){
				alert(e);
			}
		};
		this.getRootPath=function () {
             //获取当前网址，如： http://localhost:8080/ems/Pages/Basic/Person.jsp
             var curWwwPath = window.document.location.href;
             //获取主机地址之后的目录，如： ems/Pages/Basic/Person.jsp
             var pathName = window.document.location.pathname;
             var pos = curWwwPath.indexOf(pathName);
             //获取主机地址，如： http://localhost:8080
             var localhostPaht = curWwwPath.substring(0, pos);
             //获取带"/"的项目名，如：/ems
             var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
             return(localhostPaht + projectName);
         };
		this.init();
	}
	function doSignXmlById(){
	
	}
	
	function queryXml(fieldList){
		
	}
	function createXmlString(title,id,value){
		result = "<Field>";
		result =result+"<Field Index='Caption'>"+title+"</Field>";	
		result =result+"<Field Index='ID'>"+id+"</Field>";	
		result =result+"<Field Index='VALUE'>"+value+"</Field>";	
		result =result+"<Field Index='ProtectItem'>TRUE</Field>";	
		result =result+"</Field>";
		return result;
	 }
 	function doSignToDiv(id,fieldList,sigCode,signName){
 		try{
 					var sig = new Signature(signName);
 					//同一个ID不能盖同一个章
					var mLength=document.getElementsByName("iHtmlSignature").length; 
					for(var i=0; i<mLength; i++){
						var vItem=document.getElementsByName("iHtmlSignature")[i];
						var eId = vItem.ExtParam2;
						if(eId == id){
							alert("不能重复盖章。");
							return;
						}
					}
					
					if(fieldList){
						sig.Component.FieldsList=fieldList;
						sig.Component.EventResult = true;
					}else{
					  sig.Component.FieldsList = "__forwardRank=内容";
					  sig.Component.EventResult = true;
					}
					sig.Component.Divid=id;
					if(sigCode){
						sig.Component.ExtParam1=sigCode;
					}else{
						var _sigId = (new UUID()).id;
						sig.Component.ExtParam1=_sigId;
					}
					sig.Component.ExtParam2=id;
					var rs = sig.runSignature(true);
					if(rs){
						if(sigCode){
							var rsObject = new Object();
							rsObject.DocumentID= sig.Component.DocumentID;
							rsObject.SignatureID = sig.Component.ExtParam1;
							return rsObject;
						}
						
						return  sig.Component.DocumentID;
					}
		}catch(e){
			alert(e.message);
		}
 	}
	function doSignById(id,fieldList,sigCode,x,y){
		try{
					var sig = new Signature();
					//同一个ID不能盖同一个章
					var mLength=document.getElementsByName("iHtmlSignature").length; 
					for(var i=0; i<mLength; i++){
						var vItem=document.getElementsByName("iHtmlSignature")[i];
						var eId = vItem.ExtParam2;
						if(eId == id){
							alert("不能重复盖章。");
							return;
						}
					}
					
					if(fieldList){
						sig.Component.FieldsList=fieldList;
						sig.Component.EventResult = true;
					}else{
					  sig.Component.FieldsList = "__forwardRank=内容";
					  sig.Component.EventResult = true;
					}
					
					if(x){
						sig.Component.Position(x,y);
					}else{
						var target = document.getElementById(id);
						var tName= target.tagName;
//						if(tName=="SPAN" || tName=="DIV"){
//							sig.Component.Divid=id;
//						}else{
							sig.Component.SetPositionRelativeTag(id,1);
							sig.Component.PositionBySignType = 1;   
//						}
					}
					sig.Component.UserName="lyj"; 
					if(sigCode){
						sig.Component.ExtParam1=sigCode;
					}else{
						var _sigId = (new UUID()).id;
						sig.Component.ExtParam1=_sigId;
					}
					sig.Component.ExtParam2=id;
					var rs = sig.runSignature(true);
					if(rs){
						if(sigCode){
							var rsObject = new Object();
							rsObject.DocumentID= sig.Component.DocumentID;
							rsObject.SignatureID = sig.Component.ExtParam1;
							return rsObject;
						}
						
						return  sig.Component.DocumentID;
					}
		}catch(e){
			alert(e.message);
		}
	}
	
	function DoSign(obj,fieldList){
		if(!obj.id){
			throw "控件ID不存在，无法定位";
		}
		return doSignById(obj.id,fieldList);
	}