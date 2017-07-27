towaySelect = {
	init:function(){
		HandleConfig.registConfig('TwoWaySelect', this._getter, this._setter,this._disable,this._validate);
	},
	_getter:function(viewName,comName,parametes){
		var comid = viewName+'_'+comName+"_dltTarget";
		var v = $('#'+comid+" option").val();
		var keys="";
		var values="";
		$('#'+comid+" option").each(function(i){
			var key = this.value;
			
			if(key){
				var title = $(this).html();
				if(keys==""){
					keys = key;
					values=title;
				}else{
					keys = keys+","+key;
					values=values+","+title;
				}
			}
		});
		if(keys){
			return keys+"|"+values;
		}
		return "";
	},
	_setter:function(viewName,comName,value,parametes){
		var comid = viewName+'_'+comName+"_dltTarget";
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
		var comid1 = viewName+'_'+comName+"_div1";
		var comid2 = viewName+'_'+comName+"_div2";
		$("#"+comid2).find("input").attr("disabled",value);
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

towaySelect.init();