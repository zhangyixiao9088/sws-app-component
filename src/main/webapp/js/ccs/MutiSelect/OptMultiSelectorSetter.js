mutiSelect = {
	init:function(){
		HandleConfig.registConfig('OptMultiSelector', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var comid = viewName+'_'+comName;
		var v = $('#'+comid).getValue();
		return v;
	},
	_setter:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		//1,2,3,4;aa,ss,cc,ee
		if(value){
			$(document).ready(function(){
				$('#'+comid).setValue(value);
			});
		}
	},
	_disable:function(viewName,comName,value,parametes){
		if(!value){
			value = false;
		}
		var comid = viewName+'_'+comName;
		var objs=document.getElementById(comid);
		if(objs){
			objs.disabled = value;
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

mutiSelect.init();