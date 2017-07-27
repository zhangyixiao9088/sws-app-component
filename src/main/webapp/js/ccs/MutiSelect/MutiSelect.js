(function($){
	var me;
	var btn;
	var clsBtn;
	var dlg;
	var dlgIFm;
	$.fn.mutiSelect=function(){
		me=this;
		var id=$(this).attr('id');
		btn = $('#'+id+'_btn');
		clsBtn = $('#'+id+'_clsbtn');
		dlgIFm = $('#'+id+'_dialog_iframe');
		dlg = $('#'+id+'_dialog');
        $(this).sortable();
	}
	
	$.fn.getValues=function(){
		var arr=[];
		$(this).find('li').each(function(index){
			var obj=new Object();
			var key = $(this).attr('ref');
			var value = $(this).text();
			obj.key = key;
			obj.value=value;
			arr[index]=obj;
		});
		return arr;
	}
	$.fn.getKeys=function(){
		var values='';
		$(this).find('li').each(function(index){
			
			if(values==''){
				values=$(this).attr('ref');
			}else{
				values=values+","+$(this).attr('ref');
			}
		});
		return values;
	}
	$.fn.getLabels=function(){
		var values='';
		$(this).find('li').each(function(index){
			if(values==''){
				values=$(this).text();
			}else{
				values=values+","+$(this).text();
			}
		});
		return values;
	}
	
	$.fn.clearAll=function(){
		$(this).find('li').each(function(index){
			$(this).remove();
		});
	}
	$.fn.appendItem=function(value,label){
		var span = "<span onclick=\"if(confirm('是否删除'+$(this).parent().text()+'？')){$(this).parent().remove();}\"></span>"
		$(this).append("<li ref='"+value+"'>"+label+span+"</li>");
	}
	$.fn.hasElement=function(key){
		var rs = 0;
		$(this).find('li').each(function(index){
			var v=$(this).attr('ref');
			if(v==key){
				rs = 1;
			}
		});
		if(rs>0){
			return true;
		}else{
			return false;
		}
	}
	$.fn.setDisabled=function(v){
		btn.attr('disabled',v);
		clsBtn.attr('disabled',v);
	}
	$.fn.setBtnValue=function(v){
		btn.attr('value',v);
	}
	$.fn.showSelectDlg=function(u){
		dlgIFm.attr("src",u);
		dlg.dialog("open");
	}
})(jQuery);