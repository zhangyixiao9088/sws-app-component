	function openimgupload(id)
	{
		var diag = _lstGetDialog("头像上传",'xmlPaneAction.action?fileName=tellhow/ccs/uploadImage/uploadImage&viewName=view1&comId='+id);
		diag.ID="__uploadImage";
		diag.Width=700;  
		diag.Height=500;
		diag.show();
	}

	function getImgUrl(fileId){
		var url = 'UploadImageAction_getImageUrl.action?fileUploadAD.id='+fileId;
		$.ajax({
	            url: url,
	            dataType:   "text", //这里注意的是应该加上这个
	            error: function(XMLHttpRequest, textStatus, errorThrown){
	            	alert("连接服务器失败。");
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
	            dataType:   "text", //这里注意的是应该加上这个
	            error: function(XMLHttpRequest, textStatus, errorThrown){
	            	alert("连接服务器失败。");
	  			}, 
	            success: function(serverData){
	            	if(serverData){
	            		document.getElementById(imgUrl).src=serverData;
	            	}
			    }
			});
		 } 