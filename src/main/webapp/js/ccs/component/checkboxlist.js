checkboxlist = {
	init:function(){
		HandleConfig.registConfig('checkboxlist', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var objs=document.getElementsByName(comName);
		if(objs){
			var rs="";
			for (var i=0; i<objs.length; i++){
				if(objs[i].checked){
					var temp=objs[i].value;
					if(rs==""){
						rs=temp;
					}else{
						rs=rs+","+temp;
					}
				}
			}
			return rs;
		}
		return "";
	},
	_setter:function(viewName,comName,value,parametes){
		var objs=document.getElementsByName(comName);
		if(objs){
			var values = value.split(",");
			for(var i=0; i<values.length; i++) {
				for(var j=0; j<objs.length; j++) {
					if (values[i] == objs[j].value) {
						objs[j].checked = true;
						break;
					}
				}
			}
			return;
		}
	},
	_disable:function(viewName,comName,pdis,parametes){
		var objs=document.getElementsByName(comName);
		if(objs){
			for(var j=0; j<objs.length; j++) {
				objs[j].disabled = pdis;
			}
		}
	},
	_validate:function(viewName,comName,pval,parametes){
	
	}
}
checkboxlist.init();