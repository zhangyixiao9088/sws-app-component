var TableView = function(grid,keys,dataSet,comId){

		this.grid=grid;
		this.keys = keys;
		this.dataSet = dataSet;
		this.comId = comId;
		this.action='';
		this.curRow=[];
		this.timmer;
		
		this.startThread = function(){
			var me = this;
			if(this.timmer){
				this.stopThread();
			}
			this.timmer = setInterval(function(){
				me.savePane();
			}, 500);
		};
		
		this.stopThread = function(){
			if(this.timmer){
				try{
					clearTimeout(this.timmer);  
				}catch(e){};
				this.timmer="";
			}
		};
		this.initData=function(){
			var me = this;
			$(document).ready(function(){
				me.grid.init();
				var ds;
				try{
					if(me.dataSet){
			   			ds = eval("datamodel_"+me.dataSet);
			   		}else{
			   			ds = eval("datamodel");
			   		}
		   		}catch(e){
		   		}
		   		if(ds){
					me.addTableData(ds);
				}else{
					me.loadData(me.dataSet);
				}
				
				me.grid.attachEvent("onRowSelect", function(id,ind){
					me.stopThread();
					me.action = "edit";
					$("#pane_"+me.comId).show();
					var rowData = me.grid.getUserData(id,"data");
					me.bandleData(rowData);
					me.startThread();
					//eval("dataBandle_"+me.comId)(rowData);
				});
				//alert(me.grid.selectedRows.length);
				me.grid.clearSelection();
			});
		};
		this.clearData = function(){
			this.grid.clearAll();
		}
		
		this.loadData = function(dataName,pars){
			try{
				var me = this;
				var fileName = _getFileName();
				if(fileName){
					var dbUrl = "XmlDataAction.action?__fileName="+fileName+"&__dataSet="+dataName;
					if(pars){
						for(var p in pars){
							dbUrl = dbUrl+"&"+p+"="+pars[p];
						}
					}	
					 $.ajax({
				             url: dbUrl,
				             dataType:   "text", //这里注意的是应该加上这个
				             async: false,
				             error: function(XMLHttpRequest, textStatus, errorThrown){
				             	alert("调用数据失败。");
       						 }, 
				             success: function(xml){
				             	me.clearData();
				             	if(xml){
				             		var datamodel =new DataSet();
				             		var __xmlDoc=XPath.parseXML(xml);
				             		datamodel.parserXml(__xmlDoc);
				             		me.addTableData(datamodel);
				             	}
						     }
					});
				}
			}catch(e){
			
			}
		}
		
		this.getSelectData = function(){
			var selectId = this.grid.getSelectedId();
			if(selectId){
				var rowData = this.grid.getUserData(selectId,"data");
				return rowData;
			}
		}
		/*增加数据集*/
		this.addTableData=function(datamodel){
			var data = datamodel.data;
			for(var key in data){
				var row = data[key];
				this.addTableRow(row);
			}
		};

		/*增加行*/
		this.addTableRow = function(row,rowId){
			try{
				if(!row){
					row = new Data();
				}
				var mygrid = this.grid;
				var newId ="";
				if(rowId){
					newId = rowId;
				}else{
				 	newId = UUID.prototype.createUUID();
				}
		       	var cData=[];
		       	var keysArr = this.keys.split(",");
		       	for(var i=0;i<keysArr.length;i++){
		       		var key =keysArr[i];
		       		if(! row.fields[key]){
		       			cData[i] = "";
		       		}else{
			       		var value = row.fields[key].value;
			       		cData[i] = value;
		       		}
		       	}
		       	mygrid.addRow(newId, cData, mygrid.getRowsNum());
		       	mygrid.selectRowById(newId);
			   	mygrid.setUserData(newId, "data", row);
			   	return newId;
		   	}catch(e){
		   		alert(e.message);
		   	}
		};
		
		/** 删除行 */
		this.removeRow=function(){
			$("#pane_"+this.comId).hide();
			var selectId = this.grid.getSelectedId();
			if(selectId){
				this.grid.deleteRow(selectId);
				this.flush();
			}else{
				alert("请选择要删除的行。");
			}
		};
		
		//打开新增面板
		this.openAddPane=function(){
			
			$("#pane_"+this.comId).show();
			try{
				this.action = "add";
				var rowData =new Data();
				//this.addTableRow(rowData);
				this.curRow = rowData;
				this.bandleData(rowData);
				//eval("dataBandle_"+this.comId)(rowData);
			}catch(e){
				alert(e);
			}
		};
		//打开修改面板
		this.openEditPane=function(){
			var selectId=this.grid.getSelectedId();
			if(selectId){
				this.action = "edit";
				$("#pane_"+this.comId).show();
				var rowData = this.grid.getUserData(selectId,"data");
				this.bandleData(rowData);
				//eval("dataBandle_"+this.comId)(rowData);
			}else{
				alert("请选择行。");
			}
		};
		this.savePane = function(){
			try{
				var me = this;
				var rowId="";
				if(me.action=="add"){
					rowId= this.addTableRow(this.curRow);
					me.action="edit";
				}else{
					rowId=me.grid.getSelectedRowId();
				}
				if(rowId){
					var rInd = me.grid.getRowIndex(rowId); 
					var rowData = me.grid.getUserData(rowId,"data");
					rowData.flush();
					var keysArr = this.keys.split(",");
		       	     me.grid.forEachCell(rowId,function(cellObj,ind){
		       	     	var key = keysArr[ind];
		       			var value = rowData.fields[key].value;
			       		cellObj.setValue(value);
					});
					me.flush();
				}else{
					alert("请选择行。");
				}				
			 }catch(e){
				alert(e);
			}
		};
		this.bandleData = function(rowData){
			var ds;
			if(this.dataSet){
	   			ds = eval("datamodel_"+this.dataSet);
	   		}else{
	   			ds = eval("datamodel");
	   		}
	   		ds.clearComponentBundle();
			eval("dataBandle_"+this.comId)(rowData);
		}
		this.flush = function(){
				var me = this;
				var ds;
				if(this.dataSet){
		   			ds = eval("datamodel_"+me.dataSet);
		   		}else{
		   			ds = eval("datamodel");
		   		}
		   		ds.data=new Array();
				me.grid.forEachRow(function(rId){
					var row = me.grid.getUserData(rId,"data");
					var rInd = me.grid.getRowIndex(rId); 
					ds.addData(rInd,row);
				 });
		}
}
