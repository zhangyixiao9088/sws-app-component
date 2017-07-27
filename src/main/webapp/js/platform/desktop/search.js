	function clearTooltip(){
		$("input:text").each(function(){
			if($(this).val() == this.title){
				$(this).val("");
			}
		});
	}
$(document).ready(function() {
	$(".search").each(function(){
		$(this).hide();
		//this.title=$(this).val();
		//$(this).val("");
		var htmltxt = $(this).parent().html();
		var divhtml = "<div class='searchinputdiv' align='left'>"+this.title+"</div>";
		$(this).parent().append(divhtml);
		//alert($(this).parent().html());
		if($(this).val()!=""){
			$(this).show();
			$(this).next().hide();
		}
	});
	$(".searchinputdiv").focus(function(){
		$(this).hide();
		var searchtxt = $(this).prev();
		searchtxt.show();
		searchtxt.focus();
		if(searchtxt.attr("class")=="Wdate search"){
			searchtxt.click();
		}
		if(searchtxt.val() == searchtxt.title){
			searchtxt.val("");
		}
	});
	$(".search").blur(function(){		
		if($(this).val()==""){
			if($(this).attr("class")=="Wdate search"){
				;
			}else{
				$(this).hide();
				$(this).next().show();	
			}
		}
	});
	$(".Wdate").change(function(){
		if($(this).attr("class")=="Wdate search"&&$(this).val()==""){
			$(this).hide();
			$(this).next().show();	
		}else{
			$(this).show();
			$(this).prev().hide();	
		}
	});
});	
