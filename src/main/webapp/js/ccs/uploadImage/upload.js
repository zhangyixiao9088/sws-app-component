	function openimgupload(id)
	{
		var diag = _lstGetDialog("ͷ���ϴ�",'xmlPaneAction.action?fileName=tellhow/ccs/uploadImage/uploadImage&viewName=view1&comId='+id);
		diag.ID="__uploadImage";
		diag.Width=700;  
		diag.Height=500;
		diag.show();
	}

	function getImgUrl(fileId){
		var url = 'UploadImageAction_getImageUrl.action?fileUploadAD.id='+fileId;
		$.ajax({
	            url: url,
	            dataType:   "text", //����ע�����Ӧ�ü������
	            error: function(XMLHttpRequest, textStatus, errorThrown){
	            	alert("���ӷ�����ʧ�ܡ�");
	  			}, 
	            success: function(serverData){
	            	setUrl(serverData);
			    }
			});
		 } 
		 
	function setImgUrl(fileId,imgUrl){
		var url = 'UploadImageAction_getImageUrl.action?fileUploadAD.id='+fileId;
		$.ajax({
	            url: url,
	            dataType:   "text", //����ע�����Ӧ�ü������
	            error: function(XMLHttpRequest, textStatus, errorThrown){
	            	alert("���ӷ�����ʧ�ܡ�");
	  			}, 
	            success: function(serverData){
	            	if(serverData){
	            		document.getElementById(imgUrl).src=serverData;
	            	}
			    }
			});
		 } 