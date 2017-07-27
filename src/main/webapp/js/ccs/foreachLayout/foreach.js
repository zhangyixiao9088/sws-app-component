function TableOptObject(){
		this.comNames;
		this.bundleComs="";
		this.selectRow;
		this.selectName="_TableOptObjectSelect";
		this.id;
		this.viewName;
		this.maxRow = 0;
		this.btnHtml;
		this.dataSet;
		this.bakComs;
		this.initDataSet = function(dataSet){
			this.dataSet=dataSet;
			var ds = dataPool.getData(this.dataSet);
			if(ds){
				for(var k in ds.data){
					this.add();
				}
			}
		};
		this.copy=function(){
		    var tr =this.getTR();
			if(!tr){
				alert("请选择要复制的行。");
				return;
			}
			var fromId = tr.id;
			var content= tr.innerHTML;
			this.addContent(content,fromId);
		};
		this.add=function(){
			var d = document.getElementById(this.id);
			var content= d.innerHTML;
			this.addContent(content);
		};
		this.addContent=function(content,fromIndex){
		 	var me = this;
		 	var rowId = this.id+"_tr_"+this.maxRow;
		 	var str = this.replaceId(content,rowId,fromIndex);
		 	var newNameTD = this.addRow(rowId,str);
			var ds = dataPool.getData(this.dataSet);
			if(ds){
				if(this.bundleComs){
					if(!this.bakComs){
						var bDs = ds.data[0];
						this.bakComs = bDs.components;
					}
					var viewName = ds.viewName;
					var bundleComArr = this.getArr(this.bundleComs);
					var zeroComs = this.bakComs;
					for(var i=0;i< bundleComArr.length;i++){
						var cName = bundleComArr[i];
						var cId = viewName+"_"+cName;
						if(zeroComs[cId]){
							var com = zeroComs[cId];
							var n = cName+this.swapIndex(rowId);
							ds.bandle(viewName,n,com.type,com.data,com.defaultValue,com.parametes,com.validate,com.canEdit,this.maxRow);
						}
					}
				}				
			}
			this.maxRow =this.maxRow+1;
		}
		this.addRow=function(rowId,content){
			var me = this;
			var rowName = this.id+this.selectName;
			var tableObj = document.getElementById(this.id+"_table");
			var v_num= tableObj.rows.length;
			var newTR = tableObj.insertRow(v_num);
			newTR.id= rowId;
			newTR.name=rowName;
			newTR.onclick= function(){
				var di  = document.getElementsByTagName("tr");
				for(var i=0;i<di.length;i++){
					if(di[i].name==rowName){
						di[i].style.backgroundColor='';
					}
				}
				me.selectRow = this;
				this.style.backgroundColor='#d9e8f8';
			};
			var newNameTD=newTR.insertCell(0);//加一列
			newNameTD.innerHTML = content;
			return 	newTR;
		};
		this.getTR=function(){
			return this.selectRow;
		};
		this.del=function(){
			var tr =this.getTR();
			if(!tr){
				alert("请选择要删除的行。");
				return;
			}
			this.selectRow=undefined;
			if(!confirm("是否删除？")){
				return;
			}
			var trId = parseInt(this.replaceAll(tr.id,this.id+"_tr_",""));
			var tableObj = document.getElementById(this.id+"_table");
			
			var rIndex = tr.rowIndex;
			tableObj.deleteRow(rIndex);
			var ds = dataPool.getData(this.dataSet);
			if(ds){
				ds.delRow(trId);
			}
		};
		this.replaceId = function(str,rowIndex,fromIndex){
			var comArr = this.getArr(this.comNames);
			var newStr = str;
			for(var i=0;i<comArr.length;i++){
				var cA = this.viewName+"_"+comArr[i];
				var toCa =  cA+this.swapIndex(rowIndex);
				if(fromIndex){
					cA = cA+this.swapIndex(fromIndex);
				}
				newStr = this.replaceAll(newStr,cA,toCa);
			}
			return newStr;
		};
		this.getArr = function(str){
			var comArr = new Array();
			if(str.indexOf(",")<0){
				comArr[0] = str;
			}else{
				comArr = str.split(",");
			}
			return comArr;
		};
		this.replaceAll = function(str,AFindText,ARepText){
			var raRegExp = new RegExp(AFindText,"g");
			return str.replace(raRegExp,ARepText);
		}
		this.swapIndex = function(rowIndex){
			return "___"+rowIndex+"___";
		};
	}