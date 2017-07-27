UploadImage = {
	init:function(){
		HandleConfig.registConfig('uploadImage', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var comid = viewName+'_'+comName;
		var comVar = "fileId_"+comid;
		var v = document.getElementById(comVar).value;
		if(v){
			return v;
		}
		return "";
	},
	_setter:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		var comVar = "fileId_"+comid;
		var imgUrl = "showimg_"+comid;
		document.getElementById(comVar).value=value;
		if(value){
			setImgUrl(value,imgUrl);
		}
	},
	_disable:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		var conId = 'imgButton_'+comid;
		if(value){
			document.getElementById(conId).style.display ="none";
		}else{
			document.getElementById(conId).style.display ="block";
		}
	},
	_validate:function(viewName,comName,pval,parametes){
		
	}
}
UploadImage.init();