popSelect = {
	init:function(){
		HandleConfig.registConfig('popSelect', this._getter, this._setter,this._disable,this._validate);
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
		var dataName = document.getElementById("data_"+comid).value;
		var fileName=_getFileName();
		var objs=document.getElementById(comid);
		if(objs){
			if(value){
				var u="XmlDataAction.action?__fileName="+fileName+"&__dataSet="+dataName+"&KEY="+value;
				jQuery.ajax({
			             url: u,
			             dataType:   "xml", //这里注意的是应该加上这个
			             async: false,
			             error: function(XMLHttpRequest, textStatus, errorThrown){
      					 }, 
			             success: function(xml){
			             	var bool='false';
			             	if(xml){
				             	$(xml).find("ds>r").each(function(){ 
				             		var key = $(this).find("[n='KEY']").text();
				             		var value = $(this).find("[n='VALUE']").text();
				             		if(key){
				             			var item = new Object();
				             			item.KEY=key;
				             			item.VALUE=value;
				             			
				             			objs.value = key;
				             			document.getElementById("label_"+comid).value=value;
				             		}
				             	});
			             	} 
					     }
				});
			}
			//objs.value=value;
		}
		return;
	},
	_disable:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		var objs=document.getElementById(comid);
		if(objs){
			objs.disabled =value;
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

popSelect.init();