$(function(){
	$("input[type=button]").click(function(){
		if($("input[type=button]").focus()){
			this.blur();
		}
	})
})