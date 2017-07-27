radioboxlist = {
	init:function(){
		HandleConfig.registConfig('radioboxlist', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var item = $("input[name='"+comName+"'][type='radio']:checked").val();
		return item;
	},
	_setter:function(viewName,comName,value,parametes){
		$.each($("input[name='"+comName+"'][type='radio']"),function(){
             if($(this).val() == value) {
                 $(this).attr("checked","checked");
             }
         });
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
radioboxlist.init();