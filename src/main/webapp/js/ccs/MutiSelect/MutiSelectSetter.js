mutiSelect = {
	init:function(){
		HandleConfig.registConfig('MutiSelect', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var comid = viewName+'_'+comName;
		var v = $('#'+comid).getValues();
		var keys="";
		var values="";
		for(var i=0;i<v.length;i++){
			var obj = v[i];
			if(keys==""){
				keys = obj.key;
				values=obj.value;
			}else{
				keys = keys+","+obj.key;
				values=values+","+obj.value;
			}
		}
		if(keys){
			return keys+"|"+values;
		}
		return "";
	},
	_setter:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		//1,2,3,4;aa,ss,cc,ee
		if(value){
			var kAndV = value.split("|");
			if(kAndV.length==2){
				var keys = kAndV[0].split(",");
				var values = kAndV[1].split(",");
				if(keys.length != values.length){
					alert("数据格式不对："+value);
					return;
				}
				
				for(var i=0;i<keys.length;i++){
					$('#'+comid).appendItem(keys[i],values[i]);
				}
			}
		}
	},
	_disable:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
	},
	_validate:function(viewName,comName,pval,parametes){
		
	}
}

mutiSelect.init();