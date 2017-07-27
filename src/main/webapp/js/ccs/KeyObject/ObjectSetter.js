ObjectSetter = {
	init:function(){
		HandleConfig.registConfig('Object', this._getter, this._setter,this._disable,this._validate);
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
				objs.value == value	
				}
		return;
	},
	_disable:function(viewName,comName,pdis,parametes){
		var comid = viewName+'_'+comName;
		var objs=document.getElementById(comid);
		if(objs){
			objs.disabled =pdis;
		}
	},
	_validate:function(viewName,comName,pval,parametes){
		var comid = viewName+'_'+comName+"_star";
		var el = document.getElementById(comid);
		if(el){
			if(pval){
				var v = "validate["+pval+"]";
				$("#"+viewName+'_'+comName).addClass(v);
				el.innerHTML="*";
			}else{
				el.innerHTML="";
			}
		}
	}
}

QuInputSetter.init();