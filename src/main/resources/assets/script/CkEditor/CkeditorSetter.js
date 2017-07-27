CkEditorSetter = {
	init:function(){
		HandleConfig.registConfig('CkEditor', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var comid = viewName+'_'+comName;
		var oEditor =CKEDITOR.instances[comid];
		if(oEditor){
			var v = oEditor.getData();
			return v;
		}
		return "";
	},
	_setter:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		try{
			var oEditor =CKEDITOR.instances[comid];
			if(oEditor){
				oEditor.setData(value);
			}
		}catch(e){
			//��� FCKeditorAPI û�ж����0.8����ִ��һ��
			setTimeout(function(){
				fckEditorSetter._setter(viewName,comName,value,parametes);
			},800);
		}
	},
	_disable:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		CKEDITOR.on( 'instanceReady', function ( ev ) {
			var editor = ev.editor;
			var name = editor.name;
			if(name == comid ){
				editor.setReadOnly( value );
			}
		} );
	},
	_validate:function(viewName,comName,pval,parametes){
		
	}
}

CkEditorSetter.init();

