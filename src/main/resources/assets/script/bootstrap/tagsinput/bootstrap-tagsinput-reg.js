tagsinputReg = {
	init:function(){
		HandleConfig.registConfig('tagsInput', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var comid = viewName+'_'+comName;
		var objs=document.getElementById(comid);
		if(objs){
			var v = $("#"+comid).val();
			if(v && v.length){
				var rs="";
				for (var i = 0; i < v.length; i++) {
					if (rs) { //选中
						rs =rs+","+ v[i];
					}else{
						rs = v[i];
					}
				}
				return rs;
			}
		}
		return "";
	},
	_setter:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName;
		var dataName = document.getElementById("data_"+comid).value;
		var limit = document.getElementById("data_"+comid+"_limit").value;
		var fileName=_getFileName();
		var objs=document.getElementById(comid);
		if(value){
			var arr = String(value).split(",");
			for(var i=0;i<arr.length;i++){
				if(limit =="1"){
					$("#"+comid).tagsinput('removeAll');
				}
				var u="XmlDataAction.action?__fileName="+fileName+"&__dataSet="+dataName+"&KEY="+arr[i];
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
				             			$("#"+comid).tagsinput('add', item);
				             		}
				             	});
			             	} 
					     }
				});
			}
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
	}
}
tagsinputReg.init();