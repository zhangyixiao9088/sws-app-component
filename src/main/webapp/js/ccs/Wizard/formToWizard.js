/* Created by jankoatwarpspeed.com */

(function($) {
	var maxStep,count;
	var beforeSelect,afterSelect;
    $.fn.formToWizard = function(options) {
        options = $.extend({  
            submitButton: ''  
        }, options); 
        
        var element = this;

        var steps = $(element).find(".wizard");
        count = steps.size();
        
        
        maxStep=count;
        if(options.maxStep){
        	maxStep = options.maxStep;
        }
        if(options.submitButton){
	        var submmitButtonName = "#" + options.submitButton;
	        $(submmitButtonName).hide();
        }

        // 2
        $(element).before("<ul id='Wizard_steps'></ul>");

        steps.each(function(i) {
            $(this).wrap("<div id='Wizard_step" + i + "' class='Wizard_step_content'></div>");

            // 2
            var name = $(this).find("legend").html();
            $("#Wizard_steps").append("<li id='Wizard_stepDesc" + i + "' style='cursor:hand;' ><strong> " + (i + 1) + ".</strong>" + name + "</li>");

            if (i == 0) {
                selectStep(i);
            }
            else if (i == count - 1) {
                $("#Wizard_step" + i).hide();
            }
            else {
                $("#Wizard_step" + i).hide();
            }
            
            creatStepButton(i);
        });
        function creatStepButton(i){
        	$("#Wizard_stepDesc" + i).bind("click", function(e) {
                selectStep(i);
            });	
        }
    };
    //���õ�ǰ����
    $.fn.setCurrent = function(i){
    	selectStep(i);
    }
    
    //���������
    $.fn.maxStep =function(i){
    	maxStep = i;
    };
    //����ѡ�����ǰ���¼�
    $.fn.setBeforeSelect=function(fn){
    	beforeSelect = fn;
    }
    
    //����ѡ���경�����¼�
    $.fn.setAfterSelect=function(fn){
    	afterSelect = fn;
    }
    function selectStep(i) {
    	if(beforeSelect){
    		beforeSelect(i);
    	}
    	for(var j=0;j<count;j++){
			$("#Wizard_step" + j).hide();
		}
		$("#Wizard_steps li").removeClass("current");
		$("#Wizard_stepDesc" + i).addClass("current");
    	if(i<maxStep){
    		var stepName = "Wizard_step" + i;
    		$("#" + stepName).show();
    		if(afterSelect){
    			afterSelect(i);
        	}
    	}else{
    		var mStep = "����"+(maxStep);
    		alert("�����["+mStep+"]�������ݡ�");
    		selectStep(maxStep-1);
    	}
    }
})(jQuery); 