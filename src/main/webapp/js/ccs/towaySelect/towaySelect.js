  /* ���ѡ����� */
    function towayAdd(ObjSource, ObjTarget) {
       if(ObjSource.find("option:selected").size()>0){
	        ObjSource.find('option:selected').each(function(index, item){
	       		$(this).remove().appendTo(ObjTarget);
	       });
       }
    }
    /* ���ȫ�� */
    function towayAddAll(ObjSource, ObjTarget) {
        ObjTarget.append(ObjSource.html()); // Ŀ���б��HTML����ԭ�б������HTML
        ObjSource.empty(); // ԭ�б����
    }
    function towayOrder(ObjSource,action) {                
        var size = ObjSource.find("option").size();
        var selsize = ObjSource.find("option:selected").size();
        if (size > 0 && selsize > 0){                    
            ObjSource.find("option:selected").each(function(index, item){
                if (action == "up") {
                    $(item).prev().insertAfter($(item));
                    return false;
                }
                else if (action == "down") {
                    $(item).next().insertBefore($(item));
                    return false;
                }
            })
        }
        return false;
    }
    function towayInit(id,data){
    	var ObjSource=$("#"+id+"_dltSource");
    	ObjSource.empty();
    	$.each(data,function(n,item) {  
    			var txt = "<option value='"+item.KEY+"'>"+item.VALUE+"</option>"
    			$(txt).appendTo(ObjSource);
        });  
    }