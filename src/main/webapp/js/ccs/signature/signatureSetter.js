signatureSetter = {
	init:function(){
		HandleConfig.registConfig('signature', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var sig = new Signature();
		return sig.Component.DocumentID;
	},
	_setter:function(viewName,comName,value,parametes){
		if(value){
			$(document).ready(function(){
				var sig = new Signature();
				sig.showSignature(value);
			});
		}
	},
	_disable:function(viewName,comName,value,parametes){
		var sig = new Signature();
		if(value==true){
			sig.Component.MenuDeleteSign=0;
		}else{
			sig.Component.MenuDeleteSign=1
		}
	},
	_validate:function(viewName,comName,pval,parametes){
	}
}

signatureSetter.init();