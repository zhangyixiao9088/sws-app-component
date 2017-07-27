handsonTableReg = {
	init:function(){
		HandleConfig.registConfig('handsonTable', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var comid = viewName+'_'+comName+'_ck';
		var objs=document.getElementById(comid);
		if(objs){
			if(objs.checked){
				return "1";
			}else{
				return "0";
			}
		}
		return "";
	},
	_setter:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName+'_ck';
		var objs=document.getElementById(comid);
		if(objs){
			if (value.toUpperCase() == "TRUE" || value.toUpperCase() == "1") {
				objs.checked = true;
			} else {
				objs.checked = false;
			}
		}
		return;
	},
	_disable:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		var objs=document.getElementById(comid);
		if(objs){
				$('#'+comid).bootstrapSwitch('setDisabled', value);
		}
	},
	_validate:function(viewName,comName,pval,parametes){
	}
}
handsonTableReg.init();