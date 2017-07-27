tagsinputReg = {
	init:function(){
		HandleConfig.registConfig('BMultiselect', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var comid = viewName+'_'+comName;
		var v = $("#"+comid).multiselect('getSelected').val();
		return v.join(', ') + '';;
	},
	_setter:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		var valArr = value.split(",");
		$('#'+comid).multiselect('select', valArr);
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
tagsinputReg.init();