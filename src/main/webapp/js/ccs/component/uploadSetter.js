UploadSelect = {
	init:function(){
		HandleConfig.registConfig('upload', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var comid = viewName+'_'+comName;
		var comVar = "business_"+comid;
		var v = document.getElementById(comVar).value;
		if(v){
			return v;
		}
		return "";
	},
	_setter:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		var comVar = "business_"+comid;
		document.getElementById(comVar).value=value;
		queryFileLst(comid);
	},
	_disable:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		var conId = 'uploadContent_'+comid;
		var edId = 'editable_'+comid
		if(value){
			document.getElementById(conId).style.display ="none";
			document.getElementById(edId).value="false";
		}else{
			document.getElementById(conId).style.display ="block";
			document.getElementById(edId).value="true";
		}
		
	},
	_validate:function(viewName,comName,pval,parametes){
		
	}
}

UploadSelect.init();