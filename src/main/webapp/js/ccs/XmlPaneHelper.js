XPath = {  
    getIEXmlAX:function (){  
        var i,activeXarr;  
        var activeXarr = [            
            "MSXML4.DOMDocument",  
            "MSXML3.DOMDocument",  
            "MSXML2.DOMDocument",  
            "MSXML.DOMDocument",  
            "Microsoft.XmlDom"  
        ];    
        for(i=0; i<activeXarr.length; i++){  
            try{  
                var o = new ActiveXObject(activeXarr[i]);  
                return o;  
            }catch(e){}  
        }  
        return false;  
    }  
    ,  
    parseXML:function(source){  
        try{  
            var domParser = new DOMParser();  
            var o = domParser.parseFromString(source,'text/xml');     
            return o.documentElement;  
        }catch(e){  
            try{  
                var o = this.getIEXmlAX();  
                o.loadXML(source);  
                return o.documentElement;  
            }catch(e){  
                return null;  
            }  
        }  
    }  
    ,  
    loadXML:function(path){  
        var xmlDoc=null;  
        if (window.ActiveXObject){  
            xmlDoc=this.getIEXmlAX();  
        }else if (document.implementation && document.implementation.createDocument){  
            xmlDoc=document.implementation.createDocument("","",null);  
        }else{  
            alert('Your browser cannot handle this script');  
        }  
        xmlDoc.async=false;  
        xmlDoc.load(path);  
        return xmlDoc;  
    }  
    ,  
    getChildren:function(node,name){  
        var nodes = [];  
        for(var i=0;i<node.childNodes.length;i++){  
            if(node.childNodes[i].nodeName == name){  
                nodes[nodes.length] = node.childNodes[i];  
            }  
        }  
        return nodes;  
    }  
    ,  
    getChild:function(node,name){
        for(var i=0;i<node.childNodes.length;i++){  
			//alert(node.childNodes[i].nodeName);
            if(node.childNodes[i].nodeName == name){  
                return node.childNodes[i];  
            }  
        }  
        return null;  
    }  
    ,  
    selectNodes:function(node,path,child){
        var paths = path.split("/");
        for(var i=0;i<paths.length;i++){  
            node = this.getChild(node,paths[i]); 
            if(node == null){  
                return [];  
            }  
        }  
        return this.getChildren(node,child);          
    }  
    ,  
    selectSingleNode:function(node,path){  
        var paths = path.split("/");  
        for(var i=0;i<paths.length;i++){  
            node = this.getChild(node,paths[i]);  
            if(node == null){  
                return null;  
            }  
        }         
        return node;  
    }  
    ,  
    getNodeValue:function(node){  
	
		if( node.firstChild){
			return node.firstChild.nodeValue;  
		}else{
			return '';
		}
        
    }  
};  

function XMLComponent(){
	this.id='';
	this.viewName='';
	this.comName='';
	this.type = '';
	this.data = '';
	this.defaultValue='';
	this.parametes='';
	this.dataModel;
	this.rowData;
	this.validate;
	this.canEdit=true;
	this.rowIndex=0;
	this.initValue="";
	
	this.fireFillData=function(){
		var v = this.defaultValue;
		if(this.rowData){
			v = this.rowData.getValue(this.data);
		}
		if(!v){//去除undefined
			v="";
			if(this.defaultValue){
				v = this.defaultValue;
			}	
		}
		if(!this.initValue){
			this.initValue=v;
		}
		
		HandleConfig.setValue(this.viewName,this.comName,this.type,v,this.parametes);
		
		HandleConfig.setDisable(this.viewName,this.comName,this.type,(!this.canEdit),this.parametes);
		//validate[required]
		if(this.validate){
			try{
				var jsonVal = this.validate;
				HandleConfig.setValidate(this.viewName,this.comName,this.type,jsonVal,this.parametes);
			}catch(e){
				alert(e);
			}		
		}
		
//		if( this.comName=="AQSUBMIT"){
//			alert("dddd:"+v+":"+HandleConfig.getValue(this.viewName,this.comName,this.type,this.parametes));
//		}
	};
	
	this.fireUpdateData = function(){
		
		var value = HandleConfig.getValue(this.viewName,this.comName,this.type,this.parametes);
		if(!value){//去除undefined
			value="";
		}
		var comId = this.viewName+'_'+this.comName; 
		var com = HandleConfig.configComponent[comId];
		if(com){
			var initVal = com.initValue;
			if(initVal!=value){
				if(this.dataModel){
					this.dataModel.changed=true;
				}
			}
		}
		if(this.rowData){
			this.rowData.setValue(this.data,value);
		}else{
			var d=new Data();
			d.dataModel=this.dataModel;
			d.setValue(this.data, value);
			this.dataModel.data[this.rowIndex] = d;
		}
	};
	
	this.clearData = function(){
		HandleConfig.setValue(this.viewName,this.comName,this.type,'',this.parametes);
	};
	
	this.clone=function(){
		var newCom = new XMLComponent();
		newCom.id=this.id;
		newCom.viewName=this.viewName;
		newCom.comName=this.comName;
		newCom.type = this.type;
		newCom.data = this.data;
		newCom.defaultValue=this.defaultValue;
		newCom.parametes=this.parametes;
		newCom.dataModel=this.dataModel;
		newCom.rowData=this.rowData;
		newCom.rowIndex=this.rowIndex;
		return newCom;
	};
}
function DataPool(){
	this.dataLink = new Array();
	this.data=new Array();
	//检查是否修改
	this.checkChanged=function(){
		this.flush();
		for(var key in data){
			var ds = data[key];
			var cgd = ds.checkChanged();
			if(cgd==true){
				return true;
			}
		}
		return false;
	};
	this.addData=function(name,d){
		this.data[name]=d;
		d.name=name;
	};
	this.addLink=function(dataSet,pkName,fkName,condition,linkDataSet,linkPkName,lazy){
		var l = new DataLink();
		l.dataSet=dataSet;
		l.pkName=pkName;
		l.fkName=fkName;
		l.condition=condition;
		l.linkDataSet=linkDataSet;
		l.linkPkName=linkPkName;
		l.lazy=lazy;
		l.datapool = this;
		this.dataLink.push(l);
	}
	//触发修改页面数据
	this.flush=function(){
		for(var key in this.data){
			var d = this.data[key];
			if(d && typeof(d.flush)=="function"){
				d.flush();
			}
		}
	}
	
	this.getLength = function(){
		return this.data.length;
	};
	this.getData = function(key){
		return this.data[key];
	};
	
	this.toXml=function(){
		var str = "<dp>";
		for(var key in this.data){
			var d = this.data[key];
			if(typeof(d.toXml)=="function"){
				str=str+d.toXml();
			}
		}
		for(var i=0;i<this.dataLink.length;i++){
			var l = this.dataLink[i];
			if(typeof(l.toXml)=="function"){
				str=str+l.toXml();
			}
		}
		str=str+"</dp>";
		return str;
	}
}
function DataLink(){
	this.dataSet="";
	this.pkName="";
	this.fkName="";
	this.condition="";
	this.linkDataSet="";
	this.linkPkName="";
	this.lazy="";
	this.datapool;
	this.toXml=function(){
		var str="<dl dataSet='"+this.dataSet+"'"+
				   " pkName='"+this.pkName+"'"+
				   " fkName='"+this.fkName+"'"+
				   " condition='" +this.condition +"'"+
				   " linkDataSet='"+this.linkDataSet+"'"+
				   " linkPkName='"+this.linkPkName+"'"+
				   " lazy='"+this.lazy+"'/>";
		
		return str;
	}

}
/**
 *
 **/
function DataSet(){
	this.viewName="";
	this.tableName="";
	this.pkName="";
	this.name='';
	this.rowCount='';
	this.pageIndex='';
	this.pageRowCount='';
	this.pageCount='';
	this.isSplitPage='';
	this.changed=false;
	this.data=new Array();
	this.aggregate = {};
	
	
	
	this.addData=function(i,d){
		if(d){
			d.dataModel=this;
		}
		this.data[i]=d;
	};
	
	//触发修改页面数据
	this.flush=function(){
		for(var key in this.data){
			var d = this.data[key];
			if(d && typeof(d.flush)=="function"){
				d.flush();
			}
		}
	};
	
	//检查是否修改
	this.checkChanged=function(){
		this.changed=false;
		this.flush();
		return this.changed;
	};
	this.createComponent = function(rollbackFun,comName,comtype,dataField,defaultValue,parametes,validate,canEdit,rowIndex){
		//ajax创建控件
		var ajax = XPath.getIEXmlAX(); //将xmlhttprequest对象赋值给一个变量．  
		if(ajax){
			var me = this;
			var fileName = pageform.__fileName.value;
			var viewName = pageform.__viewName.value;
			var url="/ccs/xmlComAction.action?fileName="+fileName+"&viewName="+viewName+"&comName="+comName;
			ajax.open("get",url,true);//设置请求方式，请求文件，异步请求  
			ajax.onreadystatechange = function(){//你也可以这里指定一个已经写好的函数名称  
			    if(ajax.readyState==4){//数据返回成功  
			            var xmlData = ajax.responseText;
			            var xml =  XPath.parseXML(xmlData);
			            
			            var par = new Object();
			            par.name=XPath.getChild(xml,"name");
			            par.message =   xmlData;//控件内容
			            rollbackFun(par); 
			            me.bandle(viewName,comName,comtype,dataField,defaultValue,parametes,validate,canEdit,rowIndex);
			    }  
			}  
		
		}
		
	};
	
	
	//数据绑定控件，并初始填充数据
	/**
	viewName:视图名
	comName：控件名
	comtype：控件类型
	dataField：字段类型
	defaultValue：默认值
	parametes：参数
	rowIndex：行号
	**/
	this.bandle=function(viewName,comName,comtype,dataField,defaultValue,parametes,validate,canEdit,rowIndex){
		var comid = viewName+'_'+comName; 
		var rIndex=0;
		if(rowIndex){
			rIndex=rowIndex;
		}
		var d = this.data[rIndex];
		if(!d){
			d = new Data();
			d.dataModel=this;
			this.data[rIndex] = d;
		}
		d.bandle(viewName,comName,comtype,dataField,defaultValue,parametes,validate,canEdit);
	}
	
	this.bandleByPk = function(viewName,comName,comtype,dataField,defaultValue,parametes,validate,canEdit,pkValue){
		var comid = viewName+'_'+comName; 
		if(this.pkName){
			var nr = this.findRowByPK(pkValue);
			if(nr){
				if(!nr){
					nr = new Data();
					nr.pkName=this.pkName;
					nr.setValue(this.pkName,pkValue);
					nr.dataModel=this;
					var len = this.data.length;
					this.data[len]=nr;
				}
				nr.bandle(viewName,comName,comtype,dataField,defaultValue,parametes,validate,canEdit);
			}
		}else{
			throw "bandleByPk方法需要定义pkName.";
		}
	};
	//消除行
	this.clearRow = function(rowIndex){
		if(this.data[rowIndex]){
			var nr = this.data[rowIndex];
			for(var key in nr.components){
				var com = nr.components[key];
				com.clearData();
			}
		}
	};
	this.clearRowByPk = function(pkValue){
		var nr = this.findRowByPK(pkValue);
		if(nr){
			for(var key in nr.components){
				var com = nr.components[key];
				com.clearData();
			}
		}
	};
	this.delRow=function(rowIndex){
		if(this.data[rowIndex]){
			this.data[rowIndex]= undefined;
		}
	}
	//填充行
	this.fillRow=function(rowIndex){
		if(this.data[rowIndex]){
			var nr = this.data[rowIndex];
			for(var key in nr.components){
				var com = nr.components[key];
				com.clearData();
				com.rowData = nr;
				com.rowIndex=rowIndex;
				com.fireFillData();
			}
		}
	};
	this.fillRowByPk = function(pkValue){
		var nr =  this.findRowByPK(pkValue);
		if(nr){
			for(var key in nr.components){
				var com = nr.components[key];
				com.clearData();
				com.rowData = nr;
				com.fireFillData();
			}
		}
	};
	this.findRowByPK = function(pkValue){
		if(this.pkName){
			for(var key in this.data){
				var d = this.data[key];
				if(d && d[this.pkName]){
					if(pkValue == d[this.pkName]){
						return d;
					}
				}
			}
		}
	};
	this.setValue = function(fieldName,value){
		if(this.data.length==0){
			var d=new Data();
			d.dataModel=this;
			d.setValue(fieldName, value);
			this.addData(0,d);
		}else if(this.data.length==1){
			this.data[0].setValue(fieldName, value);
		}else if(this.data.length>1){
			for(var i=0;i< this.data.length;i++){
				this.data[i].setValue(fieldName, value[i]);
			}
		}
	};
	this.setValueByPk =  function(pkValue,fieldName,value){
		var nr = this.findRowByPK(pkValue);
		if(nr){
			nr.setValue(fieldName, value);
		}
	};
	//得到单条记录中的字段值
	this.getValue = function(fieldName){
		if(this.data.length==1){
			return this.data[0].getValue(fieldName);
		}else if(this.data.length>1){
			var rs=[];
			for(var i=0;i< this.data.length;i++){
				rs.push(this.data[i].getValue(fieldName));
			}
			return rs;
		}
	};
	this.getValueByPk =  function(pkValue,fieldName){
		var nr =  this.findRowByPK(pkValue);
		if(nr){
			return nr.getValue(fieldName);
		}
	}
	//得到单条记录中的子数据集
	this.getChildDataSet = function(dsName){
		if(this.data.length==1){
			return this.data[0].dataSet[dsName];
		}else if(this.data.length>1){
			var rs=[];
			for(var i=0;i< this.data.length;i++){
				rs.push(this.data[i].dataSet[dsName]);
			}
			return rs;
		}
	};
	this.getLength = function(){
		return this.data.length;
	};
	this.getData = function(index){
		return this.data[index];
	};
	this.findComponentName=function(comid){
		if(comid){
			var vN = this.viewName+'_';
			return comid.substr(vN.length);
		}
	};
	this.clearComponentBundle = function(){
		for(var i=0;i< this.data.length;i++){
			var d= this.data [i];
			if(d){
				d.components=[];
			}
		}
	};
	this.toXml=function(){
		var str = "<ds";
		if(this.name){ str = str +" name='"+this.name+"'"};
		if(this.rowCount){ str = str +" rowCount='"+this.rowCount+"'"};
		if(this.pageIndex){ str = str +" pageIndex='"+this.pageIndex+"'"};
		if(this.pageRowCount){ str = str +" pageRowCount='"+this.pageRowCount+"'"};
		if(this.pageCount){str = str + " pageCount='" + this.pageCount +"'"}
		if(this.isSplitPage){ str = str +" isSplitPage='"+this.isSplitPage+"'"};
		if(this.tableName){str = str +" tableName='"+this.tableName+"'"};
		if(this.pkName){str = str +" pkName='"+this.pkName+"'"};
		str = str+">";
		
		for(var i=0;i< this.data.length;i++){
			var d= this.data [i];
			if(d){
				if(typeof(d.toXml)=="function"){
					str = str +d.toXml();
				}
			}
		}
		
		str = str +"<agg>";
		for(var key in this.aggregate){
			var value = this.aggregate[key];
			str = str +"<d n='"+key+"'>"+value+"</d>";
		}
		str = str +"</agg>";
		str = str +"</ds>";
		return str;
	};

	this.parserXml=function(node){
		this.name = node.getAttribute("name");
		this.tableName = node.getAttribute("tableName");
		this.pkName = node.getAttribute("pkName");
		this.rowCount = node.getAttribute("rowCount");
		this.pageIndex = node.getAttribute("pageIndex");
		this.pageRowCount = node.getAttribute("pageRowCount");
		this.pageCount = node.getAttribute("pageCount");
		this.isSplitPage = node.getAttribute("isSplitPage");
		var nodes=XPath.getChildren(node,'r');
		for (var i=0;i<nodes.length;i++){
			var d = new Data();
			d.pkName=this.pkName;
			d.parserXml(nodes[i]);
			this.addData(''+i,d);
		}
		
		var aggNodes = XPath.getChildren(node,'agg');
		for (var i=0;i<aggNodes.length;i++){
			var aggNode = aggNodes[i];
			var name = aggNode.getAttribute("n");
		 	var value= XPath.getNodeValue(aggNode);
		 	this.aggregate [name] = value;
		}
	};
	
	this.parserForm=function(frm){
		for(var key in frm){
			var value = frm[key];
			this.setValue(key,value);
		}
	};
}

function Data(){
	this.dataModel;
	this.components =[];
	this.pkName;
	this.pkValue;
	this.fields=new Array();
	this.dataSet = new Array();
	//触发修改页面数据
	this.flush=function(){
		for(var key in this.components){
			var com = this.components[key];
			if(com.fireUpdateData){
				com.fireUpdateData();
			}
		}
	}
	this.bandle=function(viewName,comName,comtype,dataField,defaultValue,parametes,validate,canEdit){
		if(validate==undefined){
			validate= "";
		}
		if(canEdit == undefined){
			canEdit = true;
		}
	
		var comid = viewName+'_'+comName; 
		var comObj=new XMLComponent();
		comObj.rowData=this;
		comObj.id = comid;
		comObj.viewName=viewName;
		comObj.comName=comName;
		comObj.type = comtype;
		comObj.data = dataField;
		comObj.defaultValue=defaultValue;
		comObj.parametes = parametes;
		comObj.validate = validate;
		comObj.canEdit = canEdit;
		comObj.dataModel=this.dataModel;
		
		//注册控件
		HandleConfig.registComponent(comid,comObj);
		this.components[dataField] = comObj;
		comObj.fireFillData();
	}
	this.fieldsLen = function(){
		if(this.fields.length){
			return this.fields.length;
		}
		return 0;
	}
	this.addField=function(f){
		this.fields[f.name]=f;
	}
	
	this.addDataSet=function(ds){
		this.dataSet[ds.name]=ds;
	}
	this.setValue=function(name,value){
		if(typeof(value)=='object'){
			if(this.dataSet[name]){//ds
				this.dataSet[name]=value;
			}else{
				value.name=name;
				this.addDataSet(value);
			}
		}else{
			if(this.fields[name]){//值
				this.fields[name].value=value;
			}else{
				var f = new Field();
				f.name=name;
				f.value=value;
				this.addField(f);
			}
		}
	}
	this.getValue=function(name){
		if(this.fields[name]){
			return this.fields[name].value;
		}else if(this.dataSet[name]){
			return this.dataSet[name];
		}
	}
	this.toXml=function(){
		var str = "";
		for(var key in this.fields){
			var f = this.fields[key];
			if(typeof(f.toXml)=="function"){
				str = str + f.toXml();
			}
			if(f.isPk()==true){
				this.pkValue = f.value;
			}
		}	
		for(var keyds in this.dataSet){
			var d = this.dataSet[keyds];
			if(typeof(d.toXml)=="function"){
				str = str + d.toXml();
			}
		}
		str = str +"</r>";
		
		if(this.pkValue){
			str = "<r pk='"+this.pkValue+"'>" +str;
		}else{
			str = "<r>" +str;
		}
		return str;
	}

	this.parserXml=function(node){
		this.pkValue = node.getAttribute("pk");
	
		var datanodes=XPath.getChildren(node,'d');
		for (var i=0;i<datanodes.length;i++){
			var f = new Field();
			f.pkName = this.pkName;
			f.parserXml(datanodes[i]);
			this.addField(f);
		}

		var dsNodes = XPath.getChildren(node,'ds');
		for (var j=0;j<dsNodes.length;j++){
			var ds= new DataSet();
			ds.parserXml(dsNodes[j]);
			this.addDataSet(ds);
		}
	}
}
function Field(){
	this.pkName;
	this.name='';
	this.value='';
	this.isPk = function(){
		return this.name==this.pkName;
	};
	this.toXml=function(){
		var str = "<d n='"+this.name+"'><![CDATA["+this.value+"]]></d>";
		return str;
	};	
	this.parserXml=function(node){
		this.name = node.getAttribute("n");
		this.value= XPath.getNodeValue(node);
	}
}
