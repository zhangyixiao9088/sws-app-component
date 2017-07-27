var PageContext=[];
HandleConfig={
	validate:{
		 debug: false, 
		 focusInvalid: false, 
		 onkeyup: false,   
		 rules:{},
		 messages:{}
	},
	configs:[],
	configIds:[],
	configTypes:[],
	configComponent:[],
	init:function(){
		this.registConfig('hidden',this.commonReader,this.commonSetter,this.commonDisable,this.commonValidate);
		this.registConfig('label',this.commonReader,this.commonSetter,this.commonDisable,this.commonValidate);
		this.registConfig('datePicker',this.commonReader,this.commonSetter,this.commonDisable,this.commonValidate);
		this.registConfig('select',this.commonReader,this.commonSetter,this.commonDisable,this.commonValidate);
		this.registConfig('checkbox',this.commonReader,this.commonSetter,this.commonDisable,this.commonValidate);
		this.registConfig('text',this.commonReader,this.commonSetter,this.commonDisable,this.commonValidate);
		this.registConfig('password',this.commonReader,this.commonSetter,this.commonDisable,this.commonValidate);
		this.registConfig('AutoComplete',this.commonReader,this.commonSetter,this.commonDisable,this.commonValidate);
		this.registConfig('textArea',this.commonReader,this.commonSetter,this.commonDisable,this.commonValidate);
		this.registConfig('inputlabel',__inputLabel_getter,__inputLabel_setter,this.commonDisable,this.commonValidate);
		this.registConfig('radio',__radio_getter,__radio_setter,this.commonDisable,this.commonValidate);
		this.registConfig('QuRadioCheck',__radio_getter,__radio_setter,this.commonDisable,this.commonValidate);
	},
	registComponent:function(comId,com){
		if(!this.configComponent[comId]){
			this.configComponent[comId] = new Object();
		}
		
		this.configComponent[comId] = com;
	},
	
	getComponent:function(comId){
		return this.configComponent[comId];
	},
	setComponentValue:function(comId,value){
		var com = this.configComponent[comId];
		if(com){
			this.setValue(com.viewName,com.comName,com.type,value,com.parametes);
		}
	},
	getComponentValue:function(comId){
		var com = this.configComponent[comId];
		if(com){
			var value = this.getValue(com.viewName,com.comName,com.type,com.parametes);
			return value;
		}
	},
	registConfigById:function(comId,rf,wf,ef,vf){
		
		if(!this.configIds[comId]){
			this.configIds[comId] = new Object();
		}
		this.configIds[comId].Rfun = rf;
		this.configIds[comId].Wfun = wf;
		if(ef){
			this.configIds[comId].Efun = ef;
		}
		if(vf){
			this.configIds[comId].Vfun = vf;
		}
	},
	registConfig:function(t,rf,wf,ef,vf){
		var type=t.toUpperCase();
		if(!this.configs[type]){
			this.configs[type] = new Object();
		}
		this.configs[type].Rfun = rf;
		this.configs[type].Wfun = wf;
		if(!ef){
			ef = this.commonDisable;
		}
		this.configs[type].Efun = ef;
		if(vf){
			vf=this.commonValidate;
		}
		this.configs[type].Vfun = vf;
	},
	setValidate:function(viewName,comName,t,pVal,parametes){
		var comid = viewName+'_'+comName;
		var type = t.toUpperCase();
		try{
			if(this.configIds[comid] && this.configIds[comid]['Vfun']){
				var f =this.configIds[comid]['Vfun'];
				if(f){
					f(viewName,comName,pVal,parametes,type);
				}
			}else{
				if(this.configs[type] && this.configs[type]['Vfun']){
					var f =this.configs[type]['Vfun'];
					if(f){
						f(viewName,comName,pVal,parametes,type);
					}
				}else{
					alert('没有注册'+type+'类型的validate方法。');
				}
			}
		}catch(e){
			alert(comid+" 校验报错："+e.message); 
		}
	},
	setDisable:function(viewName,comName,t,pdis,parametes){
		var comid = viewName+'_'+comName;
		var type = t.toUpperCase();
		try{
			if(this.configIds[comid] && this.configIds[comid]['Efun']){
				var f =this.configIds[comid]['Efun'];
				if(f){
					f(viewName,comName,pdis,parametes,type);
				}
			}else{
				if(this.configs[type] && this.configs[type]['Efun']){
					var f =this.configs[type]['Efun'];
					if(f){
						f(viewName,comName,pdis,parametes,type);
					}
				}else{
					alert('没有注册'+type+'类型的disable方法。');
				}
			}
		}catch(e){
			alert(comid+"设值报错："+e.message); 
		}
	},
	setValue:function(viewName,comName,t,data,parametes){
		var comid = viewName+'_'+comName;
		var type = t.toUpperCase();
		this.configTypes[comid]=type;
		try{
			if(this.configIds[comid] && this.configIds[comid]['Wfun']){
				var f =this.configIds[comid]['Wfun'];
				f(viewName,comName,data,parametes,type);
			}else{
				if(this.configs[type] && this.configs[type]['Wfun']){
					var f =this.configs[type]['Wfun'];
					f(viewName,comName,data,parametes,type);
				}else{
					alert('没有注册'+type+'类型的写方法。');
				}
			}
		}catch(e){
			alert(comid+"设值报错："+e.message); 
		}
	},
	getValue:function(viewName,comName,t,parametes){
		var comid = viewName+'_'+comName;
		var type = t.toUpperCase();
		try{
			if(this.configIds[comid] && this.configIds[comid]['Rfun']){
				var f =this.configIds[comid]['Rfun'];
				return f(viewName,comName,parametes,type);
			}else{
				if(this.configs[type] && this.configs[type]['Rfun']){
					var f =this.configs[type]['Rfun'];
					return f(viewName,comName,parametes,type);
				}else{
					alert('没有注册'+type+'类型的读方法。');
				}
			}
		}catch(e){
			alert(comid+"取值报错："+e.message); 
		}
	},

	commonSetter:function(viewName,comName,value,parametes){
			var comid = viewName+'_'+comName;
			var objs=document.getElementById(comid);
			if(objs){
				if (objs.type=="hidden"){
					objs.value=value;
					return;
				}
				if (objs.type == "select-one") {
					var fromComIds = "hid_"+comid;
					var fromCom = document.getElementById(fromComIds);
					if(fromCom){
						$("#hidVal_"+comid).val(value);
						var dName= $("#hidData_"+comid).val();
						var from = $("#"+fromComIds).val();
						if(from){
							var arr = from.split(",");
							var par = "";
							for(var i=0;i<arr.length;i++){
								var key = arr[i];
								var type = HandleConfig.configTypes[viewName+'_'+key];
								if(!type){
									alert("没有设置"+key+"的值");
								}
								var v =  HandleConfig.getValue(viewName,key,type);
								par = par+"&"+key+"="+v;
							}
							var fName = _getFileName();
							var vName = _getViewName();
							var u="AdmdataQuery.action?fileName="+fName+"&viewName="+vName+"&dName="+dName+"&type=panel"+par;
							var target=document.getElementById(comid);
							jQuery.getJSON(
								u,
								{jsonString:''},
								function(data){
									target.options.length = 1;
									//target.options.add(new Option("---请选择---",""));
									var len = data.length;  
									for(var i=0;i<len;i++){
										var text=data[i].VALUE;
										var optV=data[i].KEY;
										var opt = new Option(text,optV);
										target.options.add(opt);
										if(optV==value){
											$("#hidVal_"+comid).val(value);
											opt.selected = true;
										}
									}
								}
							);
						}else{
							for (var i = 0; i < objs.length; i++) {
								if (objs[i].value == value) {
									objs[i].selected = true;
									return;
								}
							}
						}
					}else{
						for (var i = 0; i < objs.length; i++) {
							if (objs[i].value == value) {
								objs[i].selected = true;
								return;
							}
						}
					}
				}
				if (objs.type == "radio") {
					var radioName = objs.name;
					var r = document.all[radioName];
					for (var i = 0; i < r.length; i++) {
						if (r[i].value == value) { //选中
							r[i].checked = true;
							return;
						}
					}
				}
				
				if (objs.type == "checkbox") {
					if (value.toUpperCase() == "TRUE" || value.toUpperCase() == "1") {
						objs.checked = true;
					} else {
						objs.checked = false;
					}
					return;
				} else {
					objs.value = value;
					return;
				}
			}
		},
		commonReader:function(viewName,comName,parametes){
			var comid = viewName+'_'+comName;
			var objs=document.getElementById(comid);
			if(objs){
				if (objs.type=="hidden"){
					return objs.value;
				}
				if (objs.type == "select-one") {
					for (var i = 0; i < objs.length; i++) {
						if (objs[i].selected) {
							return objs[i].value;
						}
					}
				}
				if (objs.type == "radio") {
					var radioName = obj.name;
					var r = document.all[radioName];
					for (var i = 0; i < r.length; i++) {
						if (r[i].checked == true) { //选中
							return r[i].value;
						}
					}
				} 
					
				if (objs.type == "checkbox") {
					if(objs.checked){
						return "1";
					}else{
						return "0";
					}
				}
				return objs.value;
			}
		},
		commonDisable:function(viewName,comName,pdis,parametes,type){
			if(!pdis){
				pdis = false;
			}
			var comid = viewName+'_'+comName;
			var objs=document.getElementById(comid);
			if(objs){
				if (objs.type=="hidden"){
					objs.disabled =pdis;
				}else  if (objs.type == "select-one") {
					objs.disabled =pdis;
				}else  if (objs.type == "radio") {
					objs.disabled =pdis;
				}else  if (objs.type == "checkbox") {
					objs.disabled =pdis;
				}else  if (objs.type == "text") {
					objs.disabled=pdis;
				}else{
					objs.disabled =pdis;
				}
			}
		},
		commonValidate:function(viewName,comName,pval,parametes){
			var comid = viewName+'_'+comName;
			var el = document.getElementById(comid);
			if(el){
				if(pval.rules){
					var rule=pval.rules; 
					HandleConfig.validate.rules[comName]=rule;
				}
				if(pval.messages){
					var msg = pval.messages;
					HandleConfig.validate.messages[comName]=msg;
				}
			}
		}
}

//radio
var __radio_getter = function(viewName,comName,parametes){
	var r = document.getElementsByName(comName);
	for (var i = 0; i < r.length; i++) {
		if (r[i].checked == true) { //选中
			return r[i].value;
		}
	}
}

var __radio_setter = function(viewName,comName,value,parametes){
	var r = document.getElementsByName(comName);
	for (var i = 0; i < r.length; i++) {
		if (r[i].value == value) { //选中
			r[i].checked = true;
			return;
		}
	}
}

//inputLabel
var __inputLabel_getter = function(viewName,comName,parametes){
		var comid = viewName+'_'+comName;
		var label = document.getElementById(comid);
		if(label){
			var str = label.value;
			return str;
		}
		return "";
	};
var __inputLabel_setter = function(viewName,comName,value,parametes){
	var comid = viewName+'_'+comName;
	var objs=document.getElementById(comid);
	if(objs){
		objs.value = value;
	}
	objs=document.getElementById('_'+comid);
	if(objs){
		objs.innerHTML = value;
	}
};
HandleConfig.init();


PageHandle={
	getFileName:function(){
		return pageform.__fileName.value;
	},
	getViewName:function(){
		return pageform.__viewName.value;
	},
	getComId:function(comName){
		return this.getViewName()+"_"+comName;
	},
	getValue:function(comName){
		var comId = this.getComId(comName);
		var value = HandleConfig.getComponentValue(comId);
		return value;
	},
	setValue:function(comName,value){
		var comId = this.getComId(comName);
		var com = HandleConfig.configComponent[comId];
		if(com){
			HandleConfig.setValue(com.viewName,com.comName,com.type,value,com.parametes);
		}
	}
}

var PageValidate;
$(function(){
	PageValidate= $("#pageComsform").validate(HandleConfig.validate);
});