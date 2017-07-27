fckEditorSetter = {
	init:function(){
		HandleConfig.registConfig('FckEditor', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var comid = viewName+'_'+comName;
		var oEditor =FCKeditorAPI.GetInstance(comid) ;
		if(oEditor){
			var v = oEditor.GetXHTML(true)
			return v;
		}
		return "";
	},
	_setter:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		try{
			var oEditor =FCKeditorAPI.GetInstance(comid) ;
			if(oEditor){
				oEditor.SetHTML(value);
			}
		}catch(e){
			//如果 FCKeditorAPI 没有定义过0.8秒再执行一次
			setTimeout(function(){
				fckEditorSetter._setter(viewName,comName,value,parametes);
			},800);
		}
	},
	_disable:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
	},
	_validate:function(viewName,comName,pval,parametes){
		
	}
}

fckEditorSetter.init();

