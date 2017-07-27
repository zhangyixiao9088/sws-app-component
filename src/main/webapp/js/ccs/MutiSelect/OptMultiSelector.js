(function($){
	var me;
	var id;
	var linkIds;
	var diag;
	var com_input;
	var com_table;
	var com_allS;
	var com_fanS;
	var com_canS;
	var com_ok;
	var com_div;
	var opts;
	var html;
	var canEditAble;
	var maxItem;
	$.fn.ckMultiSelect=function(options){
		var defualts = {
			Title:"请选择",
			canEditAble:true
		};        
		opts = $.extend({}, defualts, options);
		me=this;
		var viewName = $("INPUT[name='__viewName']").val();
		maxItem = opts.maxItem;
		if(opts.cnNameCom){
			linkIds = viewName + "_" + opts.cnNameCom;
		}
		id=$(this).attr('id');
		com_div = $("#"+id+"_html");
		com_input = $("#"+id);	
		com_allS = $("#"+id+"_allSelect");
		com_fanS = $("#"+id+"_fanSelect");
		com_canS = $("#"+id+"_canSelect");
		com_ok	 = $("#"+id+"_ok");
		com_table= $("#"+id+"_table");
		
		canEditAble =opts.canEditAble;
		init();
	}
	$.fn.setValue = function(values){
		if(values){
			var v = values.split(",");
			com_div.find("[type='checkbox']").each(function(){
				var checkBoxCom = $(this);
				var	cv = $(this).val();
				var f = false;
				$.each( v, function(i, n){
					if(n==cv){
						f=true;
					}
				});
				$(this).attr("checked",f);
			});
		}

		fireValueChanged();
	}
	$.fn.setEditAble = function(flag){
		canEditAble = flag;
	}
	$.fn.getValue = function(){
		var rs="";
		com_div.find("[type='checkbox']").each(function(){
			
			if($(this).attr("checked")){
				var	cv = $(this).val();
				if(rs){
					rs = rs+","+ cv;
				}else{
					rs = cv;
				}
			}
		});
		return rs;
	}
	function fireValueChanged(maxItem){
	    var checkedSize = com_table.find("input:checked").length;
		var inputValue="";
		if(maxItem!=undefined && checkedSize > maxItem){
		    alert("最多只能选择"+maxItem+"个工程！")
		    return false;
		}else{
		    com_table.find("input:checkbox").each(function(){
				var checked = $(this).attr("checked");
				if(checked){
					var v =  $(this).val();
					var nId = id+"_option_"+v;
					var txt = $("#"+nId).formhtml();
					if(inputValue){
						inputValue = inputValue+","+txt;
					}else{
						inputValue = txt;
					}
				}
		    });
		    
		    if(linkIds){
		    	$("#"+linkIds).val(inputValue);
		    }
		    com_input.val(inputValue);
		    return true;
		}
		
	}
	function init(){
		diag = new top.Dialog();
		diag.Title = opts.Title;
		diag.ShowButtonRow=true;
		diag.OkButtonText=" 确 定 ";
		diag.OKEvent = function(){
			var doc=diag.getDialogDiv();
			com_table.html($(doc).find("#"+id+"_table").formhtml());
			if(maxItem!=undefined){
			    if(fireValueChanged(maxItem)){
			        diag.close();
			    }
			}else{
			    fireValueChanged();
			    diag.close();
			}
		};
		me.live("click",function(){
			if(canEditAble){
				html = com_div.formhtml();
				diag.InnerHtml = html;
				diag.show();
			}
		});
		fireValueChanged();
	}
	
	
	 var oldHTML = $.fn.html;   
    $.fn.formhtml = function() {
		if (arguments.length) return oldHTML.apply(this,arguments);        
		$("input,textarea,button", this).each(function() {            
			this.setAttribute('value',this.value);        
		});        
		$(":radio,:checkbox", this).each(function() {            
			if (this.checked) this.setAttribute('checked', 'checked');            
			else this.removeAttribute('checked');        
		});        
		$("option", this).each(function() {            
			if (this.selected) this.setAttribute('selected', 'selected');            
			else this.removeAttribute('selected');        
		});        
		return oldHTML.apply(this);
	
	}
})(jQuery);