(function($){
	var me;
	var bundleComs=[];
	var opts;
	var viewName;
	var id;
	var content;
	var pane;
	var maxRow=0;
	var dataSet;
	var zeroComs;
	
	$.fn.foreachRow=function(options){
		var defualts = {
			rowPrex:"_tr_",
			comPrex:"_table",
			addBtnPrex:"_addBtn",
			copyBtnPrex:"_copyBtn",
			delBtnPrex:"_delBtn",
			dataSet:datamodel
		};        
		opts = $.extend({}, defualts, options);        
		me = this; 
		_init();
	};
	$.fn.addRow = function(){
		var index = _addNewRow();
		_bandleRow(index);	
	}
	$.fn.delRow = function(index){
		_removeRow(index);	
	}
	$.fn.copyRow = function(index){
		_copyRow(index);	
	}
	function _init(){
		id		=	$(me).attr("id");
		content	=	$(me).html();
		$(me).html("");
		pane	=	$("#"+id+opts.comPrex);
		viewName=	opts.viewName;
		dataSet = 	opts.dataSet;
		//新增按钮
		$("#"+id+opts.addBtnPrex).click(function(){
			var index = _addNewRow();
			_bandleRow(index);
		});
		$("#"+id+opts.copyBtnPrex,pane).click(function(){
			var rowId = id + opts.rowPrex;
			var row = $(this).parents("[id*="+ rowId +"]").last();
			var fRow = row.attr("id");
			var index = _getRowIndex(fRow);
			if(!index){
				index=0;
			}else{
				index = parseInt(index);
			}
			_copyRow(index);
		});
		$("#"+id+opts.delBtnPrex,pane).live("click",function(){
			var rowId = id + opts.rowPrex;
			var row = $(this).parents("[id*="+ rowId +"]").last();
			var fRow = row.attr("id");
			var index = _getRowIndex(fRow);
			if(!index){
				index=0;
			}else{
				index = parseInt(index);
			}
			_removeRow(index);
		});
		if(opts.comIds){
			bundleComs = getArr(opts.comIds);
		}
		
		if(dataSet){
			for(var k=0;k< dataSet.data.length;k++){
				var index = _addNewRow();
				_bandleRow(index);
			}
		}else{
			_addNewRow();
		}
	};
	function _addNewRow(){
		var oldRowId = id + opts.rowPrex;
		var index = maxRow;
		maxRow++;
		if(index==0){
			$(content).appendTo(pane);
		}else{
			var newRowId = getRowId(index);
			var str = replaceAll(content,oldRowId,newRowId);
			if(bundleComs){
				for(var i=0;i<bundleComs.length;i++){
					var comName = bundleComs[i] ;
					var newComName = comName + wrapIndex(index);
					str = replaceAll(str,comName,newComName);
				}
			}else{
				throw "没有初始化comIds参数";
			}		
			$(str).appendTo(pane);
		}
		return index;
	};
	
	function _removeRow(rowIndex){
		if(dataSet){
			var rowid = getRowId(rowIndex);
			$("#"+rowid,pane).remove();
			dataSet.data[rowIndex]=undefined;
		}
	};
	
	function _copyRow(rowIndex){
		if(dataSet){
			var newRowIndex = _addNewRow();
			var data = dataSet.data[rowIndex]
			var newData = dataSet.data[newRowIndex];
			if(newData){
				throw "数据集中存在 "+newRowIndex+" 值。";
			}
			newData = data.Clone();
			newData.components=[];
			dataSet.data[newRowIndex] = newData;
			_bandleRow(newRowIndex);
		}
	};

	function _bandleRow(rowIndex){
		if(dataSet){
			if(!zeroComs){
				var zeroData = dataSet.data[0];
				if(zeroData){
					zeroComs = zeroData.components;
				}else{
					throw "没有初始化 dataSet的数据绑定 参数。";
				}
			}
			if(!zeroComs){
				throw "没有初始化 dataSet的数据绑定 参数。";
			}
			for(var i in zeroComs){
				var com = zeroComs[i];
				var n = com.comName+wrapIndex(rowIndex);
				dataSet.bandle(com.viewName,n,com.type,com.data,com.defaultValue,com.parametes,com.validate,com.canEdit,rowIndex);
			}
		}else{
			throw "没有初始化 dataSet 参数";
		}
	};
	function replaceAll(str,AFindText,ARepText){
		var raRegExp = new RegExp(AFindText,"g");
		return str.replace(raRegExp,ARepText);
	};
	function getRowId(rowIndex){
		return id + opts.rowPrex + wrapIndex(rowIndex);
	}
	function wrapIndex(rowIndex){
		if(rowIndex==0){
			return "";
		}
		return "___"+rowIndex+"___";
	};
	function _getRowIndex(rowId){
	    var regex=new RegExp("("+id + opts.rowPrex +"___)(\\d+)(___)");
		var newId= rowId.replace(regex,function(matched,$1,$2,$3){
	      return $2;
	    });
		if(newId != rowId){
			return newId;
		}
	};
	function getArr(str){
		var comArr = new Array();
		if(str.indexOf(",")<0){
			comArr[0] = str;
		}else{
			comArr = str.split(",");
		}
		return comArr;
	};
})(jQuery);