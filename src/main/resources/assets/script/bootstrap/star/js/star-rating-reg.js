starRatingReg = {
	init:function(){
		HandleConfig.registConfig('starRating', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var comid = viewName+'_'+comName;
		var objs=document.getElementById(comid);
		if(objs){
			return objs.value;
		}
		return "";
	},
	_setter:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		var objs=document.getElementById(comid);
		if(objs){
			objs.value=value;
		}
		return;
	},
	_disable:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		var objs=document.getElementById(comid);
		if(objs){
			objs.disabled =value;
		}
	},
	_validate:function(viewName,comName,pval,parametes){
	}
}
starRatingReg.init();