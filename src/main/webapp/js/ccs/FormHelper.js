FormHelper={
	showComponent:function(target,formMap,parametes,callback){
		 ccs.showComponent(formMap,parametes,function(data){
		 	if("pass"==data.result){
		 		var recv = data.resv;
		 		var xml =  XPath.parseXML(recv);
		 		//view
		 		callback(xml);
		 	}else{
		 	
		 	}
		 });
	},
	showComponentView:function(targetId,formMap,parametes){
		 ccs.showComponent(formMap,parametes,function(data){
		 	if("pass"==data.result){
		 		var recv = data.resv;
		 		var xml =  XPath.parseXML(recv);
		 		var node=XPath.getChild(xml,'View');
		 		var html = XPath.getNodeValue(node);
		 		document.getElementById(targetId).innerHTML=html;
		 	}else{
		 	
		 	}
		 });
	},
	
	submit:function(action){
		try{
			datamodel.flush();
			dataPool.flush();
			pageform.__xmlData.value=datamodel.toXml();
			pageform.__xmlPoolData.value=dataPool.toXml();
			if(action){
				pageform.__action.value=action;
			}else{
				pageform.__action.value='_crud';
			}
			var method = pageform.__method.value;
			if(!method){
				alert("未定义method");
			}
			this.ajaxSave();
		 }catch(e){
			alert("保存出错："+e);
			return false;
		}
	},
	save:function(){
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
	},
	ajaxSave:function(){
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
	
	}
	
	
	
	
}
