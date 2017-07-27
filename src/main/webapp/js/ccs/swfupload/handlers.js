function fileQueueError(file, errorCode, message) {
	try {
		var imageName = "<font color='red'>文件上传错误</font>";
		var errorName = "";
		if (errorCode == SWFUpload.errorCode_QUEUE_LIMIT_EXCEEDED) {
			errorName = "You have attempted to queue too many files.";
		}
		if (errorName !== "") {
			alert(errorName);
			return;
		}
		
		switch (errorCode) {
		case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
			alert("对不起，您选择的文件太多，你最多还能添加"+message+"个文件！");	
			break;
		case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
			imageName = "<font color='red'>文件大小为0</font>";
			break;
		case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
			imageName = "<font color='red'>文件太大</font>";
			break;
		case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
		case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
		default:
			imageName = "<font color='red'>服务器异常"+message+"</font>";	
			break;
		}
		addReadyFileInfo(file,this.customSettings.view_id,imageName,"无法上传");
	} catch (ex) {
		this.debug(ex);
	}
}

function fileDialogComplete(numFilesSelected, numFilesQueued) {
	try {
		if (numFilesQueued > 0) {
			document.getElementById('btnCancel'+"_"+this.customSettings.view_id).disabled = "";
			this.startUpload();
		}
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadProgress(file, bytesLoaded) {
	try {
		var percent = Math.ceil((bytesLoaded / file.size) * 100);
		var tableId=this.customSettings.view_id;
		addFileInfo(tableId,file.id," "+percent+"%",'');	
//		var progress = new FileProgress(file,  this.customSettings.upload_target);
//		progress.setProgress(percent);
//		if (percent === 100) {
//			progress.setStatus("<font color='red' style='font: 12px/1.4em Helvetica, Arial, sans-serif'>正在保存文件，请您稍候......</font>");//正在创建缩略图...
//			progress.toggleCancel(false, this);
//		} else {
//			progress.setStatus("<font color='red' style='font: 12px/1.4em Helvetica, Arial, sans-serif'>正在上传......</font>");
//			progress.toggleCancel(true, this);
//		}
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadSuccess(file, serverData) {
	try {
		var tableId=this.customSettings.view_id;
		if(serverData){
			if(serverData.indexOf('t:')>=0){
				var info = serverData.substr(2);
				addSuccessFileInfo(this,tableId,file.id,"成功",info);	
			}else if(serverData.indexOf('f:')>=0){
				var info = serverData.substr(2);
				addFileInfo(tableId,file.id,"失败",'');	
			}
		}
			
	} catch (ex) {
		this.debug(ex);
	}
}

function delFileFromServer(swfu,tableId,fileId,par){
	if(confirm('是否删除？')){
		var url = 'XmlFileAction_delFile.action?fileId='+par;
		var service = document.getElementById("service_"+tableId).value;
		if(service){
			url = url+"&service="+service;
		}
		$.ajax({
	            url: url,
	            dataType:   "text", //这里注意的是应该加上这个
	            error: function(XMLHttpRequest, textStatus, errorThrown){
	            	alert("连接服务器失败。");
	  			}, 
	            success: function(serverData){
	            	if(serverData.indexOf('t:')>=0){
						var info = serverData.substr(2);
						deleteFile(swfu,tableId,fileId);
					}else{
						var info = serverData.substr(2);
						alert("错误："+info);
					}
			    }
		});
	}
}
function addSuccessFileInfo(swfu,tableId,fileId,message,pars){
	var pFId = pars.split("&&");
	if(pFId.length!=2){
		alert("参数错误："+pars);
	}
	var par = pFId[0];
	var busId = pFId[1];
	document.getElementById("business_"+tableId).value=busId;
	//加文件时记录businessId
	swfu.addPostParam("busId",busId);
	
	//var url = 'XmlFileAction_viewFile.action?fileId='+par;
	var service = document.getElementById("service_"+tableId).value;
//	if(service){
//		url = url+"&service="+service;
//	}
	
	var row = document.getElementById(tableId+"_"+fileId);
	var cel1Txt = row.cells[0].innerHTML;
	
	var url = "javascript:showFileView('"+busId+"','"+
				par+"','"+
				cel1Txt+"','"+service+"');";
				
	row.cells[0].innerHTML = "<a href='#' onclick=\""+url+"\">"+cel1Txt+"</a>";
//	row.cells[0].innerHTML = "<a href='"+url+"' target='_blank'>"+cel1Txt+"</a>";
	row.cells[2].innerHTML = "<font color='green'>"+message+"</font>";
	
	var node = row.cells[3].children(0);
	row.cells[3].removeChild(node);
	var js = "javascript:delFileFromServer(swfu_"+tableId+",'"+tableId+"','"+fileId+"','"+par+"')";
	row.cells[3].innerHTML = "<a href=\""+js+"\">删除</a>";
}
function addFileInfo(tableId,fileId,message,par){
	var row = document.getElementById(tableId+"_"+fileId);
	row.cells[2].innerHTML = "<font color='green'>"+message+"</font>";
}

function fileQueued(file){
	//加文件时记录businessId
	var vId = this.customSettings.view_id;
	this.addPostParam("busId",document.getElementById("business_"+vId).value);
	var fileName = encodeURIComponent(file.name);
	this.addFileParam(file.id,"_fileName",fileName);
	this.addFileParam(file.id,"_fileSize",getFileSize(file.size,2));
	addReadyFileInfo(file,vId,"待传","");
}


function addServerFile(service,busId,tableId,fileId,fileName,fileSize,msg,isEdit){
//	var url = 'XmlFileAction_viewFile.action?fileId='+fileId;
//	if(service){
//		url = url+"&service="+service;
//	}
	//showFileView('"+busId+"','"+fileId+"','"+fileName+"','"+service+"');
	var url = "javascript:showFileView('"+busId+"','"+
				fileId+"','"+
				fileName+"','"+service+"');";
	var row = addTableRow(tableId,fileId,isEdit);
	row.cells[0].innerHTML = "<a href='#' onclick=\""+url+"\">"+fileName+"</a>";
//	row.cells[0].innerHTML = "<a href='"+url+"' target='_blank'>"+fileName+"</a>";
	row.cells[1].innerHTML= fileSize + "KB";
	if(isEdit){
		row.cells[2].innerHTML = "<font color='green'>"+msg+"</font>";
		var js = "javascript:delFileFromServer(swfu_"+tableId+",'"+tableId+"','"+fileId+"','"+fileId+"')";
		row.cells[3].innerHTML = "<a href=\""+js+"\">删除</a>";
	}
}

function showFileView(busId,fileId,fileName,service){
//	alert(busId);
//	alert(fileId);
//	alert(fileName);
//	alert(service);
	var fileType =/\.[^\.]+$/.exec(fileName);
	var url = "xmlPaneAction.action?fileName=ccs/swfupload/showFilePane&viewName=view"+
						"&busId="+busId+
						"&fileId="+fileId+
						"&fileType="+fileType+
						"&service="+service;
						
 window.open(url,'图片上传');
	//var nUrl = _lstParserOpenUrl(url);
	//var diag = new top.Dialog();
	//diag.Title = "查看附件";
	//diag.URL = nUrl;
	//diag.Width="100";
	//diag.Height='100';
	//diag.show();
}

function uploadComplete(file) {
	try {
		/*  I want the next upload to continue automatically so I'll call startUpload here */
		if (this.getStats().files_queued > 0) {
			this.startUpload();
		} else {
			var progress = new FileProgress(file,  this.customSettings.upload_target);
			progress.setComplete();
			progress.setStatus("<font color='green' style='font: 12px/1.4em Helvetica, Arial, sans-serif'>所有文件上传完毕!</b></font>");
			progress.toggleCancel(false);
		}
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadError(file, errorCode, message) {
	var imageName =  "<font color='red'>上传出错!</font>";
	var progress;
	try {
		switch (errorCode) {
		case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
			try {
				progress = new FileProgress(file,  this.customSettings.upload_target);
				progress.setCancelled();
				progress.setStatus("<font color='red'>取消上传!</font>");
				progress.toggleCancel(false);
			}
			catch (ex1) {
				this.debug(ex1);
			}
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
			try {
				progress = new FileProgress(file,  this.customSettings.upload_target);
				progress.setCancelled();
				progress.setStatus("<font color='red'>停止上传!</font>");
				progress.toggleCancel(true);
			}
			catch (ex2) {
				this.debug(ex2);
			}
		case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
			imageName = "<font color='red'>文件太大!</font>";
			break;
		default:
			alert(message);
			break;
		}
		addFileInfo(this.customSettings.view_id,file.id,imageName,'');

	} catch (ex3) {
		this.debug(ex3);
	}

}


function addImage(src) {
	var newImg = document.createElement("img");
	newImg.style.margin = "5px";

	document.getElementById("thumbnails").appendChild(newImg);
	if (newImg.filters) {
		try {
			newImg.filters.item("DXImageTransform.Microsoft.Alpha").opacity = 0;
		} catch (e) {
			// If it is not set initially, the browser will throw an error.  This will set it if it is not set yet.
			newImg.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + 0 + ')';
		}
	} else {
		newImg.style.opacity = 0;
	}

	newImg.onload = function () {
		fadeIn(newImg, 0);
	};
	newImg.src = src;
}

function fadeIn(element, opacity) {
	var reduceOpacityBy = 5;
	var rate = 30;	// 15 fps


	if (opacity < 100) {
		opacity += reduceOpacityBy;
		if (opacity > 100) {
			opacity = 100;
		}

		if (element.filters) {
			try {
				element.filters.item("DXImageTransform.Microsoft.Alpha").opacity = opacity;
			} catch (e) {
				// If it is not set initially, the browser will throw an error.  This will set it if it is not set yet.
				element.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + opacity + ')';
			}
		} else {
			element.style.opacity = opacity / 100;
		}
	}

	if (opacity < 100) {
		setTimeout(function () {
			fadeIn(element, opacity);
		}, rate);
	}
}



/* ******************************************
 *	FileProgress Object
 *	Control object for displaying file info
 * ****************************************** */

function FileProgress(file, targetID) {
	this.fileProgressID = "divFileProgress";
	this.fileProgressWrapper = document.getElementById(this.fileProgressID);
	if (!this.fileProgressWrapper) {
		this.fileProgressWrapper = document.createElement("div");
		this.fileProgressWrapper.className = "progressWrapper";
		this.fileProgressWrapper.id = this.fileProgressID;

		this.fileProgressElement = document.createElement("div");
		this.fileProgressElement.className = "progressContainer";

		var progressCancel = document.createElement("a");
		progressCancel.className = "progressCancel";
		progressCancel.href = "#";
		progressCancel.style.visibility = "hidden";
		progressCancel.appendChild(document.createTextNode(" "));

		var progressText = document.createElement("div");
		progressText.className = "progressName";
		progressText.appendChild(document.createTextNode("上传文件: "+file.name+" ("+getFileSize(file.size,2)+")"));

		var progressBar = document.createElement("div");
		progressBar.className = "progressBarInProgress";

		var progressStatus = document.createElement("div");
		progressStatus.className = "progressBarStatus";
		progressStatus.innerHTML = "&nbsp;";

		this.fileProgressElement.appendChild(progressCancel);
		this.fileProgressElement.appendChild(progressText);
		this.fileProgressElement.appendChild(progressStatus);
		this.fileProgressElement.appendChild(progressBar);

		this.fileProgressWrapper.appendChild(this.fileProgressElement);
		document.getElementById(targetID).style.height="53px";
		document.getElementById(targetID).appendChild(this.fileProgressWrapper);
		fadeIn(this.fileProgressWrapper, 0);

	} else {
		this.fileProgressElement = this.fileProgressWrapper.firstChild;
		this.fileProgressElement.childNodes[1].firstChild.nodeValue = "上传文件: "+file.name+" ("+getFileSize(file.size,2)+")";
	}

	this.height = this.fileProgressWrapper.offsetHeight;

}
FileProgress.prototype.setProgress = function (percentage) {
	this.fileProgressElement.className = "progressContainer green";
	this.fileProgressElement.childNodes[3].className = "progressBarInProgress";
	this.fileProgressElement.childNodes[3].style.width = percentage + "%";
};
FileProgress.prototype.setComplete = function () {
	this.fileProgressElement.className = "progressContainer blue";
	this.fileProgressElement.childNodes[3].className = "progressBarComplete";
	this.fileProgressElement.childNodes[3].style.width = "";

};
FileProgress.prototype.setError = function () {
	this.fileProgressElement.className = "progressContainer red";
	this.fileProgressElement.childNodes[3].className = "progressBarError";
	this.fileProgressElement.childNodes[3].style.width = "";

};
FileProgress.prototype.setCancelled = function () {
	this.fileProgressElement.className = "progressContainer";
	this.fileProgressElement.childNodes[3].className = "progressBarError";
	this.fileProgressElement.childNodes[3].style.width = "";

};
FileProgress.prototype.setStatus = function (status) {
	this.fileProgressElement.childNodes[2].innerHTML = status;
};

FileProgress.prototype.toggleCancel = function (show, swfuploadInstance) {
	this.fileProgressElement.childNodes[0].style.visibility = show ? "visible" : "hidden";
	if (swfuploadInstance) {
		var fileID = this.fileProgressID;
		this.fileProgressElement.childNodes[0].onclick = function () {
			swfuploadInstance.cancelUpload(fileID);
			return false;
		};
	}
};

function getFileSize(filesize,how){
	var unit = "MB";
	var size = filesize/1024/1024
	if(size < 0.01){
		size = filesize/1024;
		unit = "KB";
	}
	if(size < 0.01){
		size = filesize;
		unit = "Byte";
	}
	size = Math.round (size*Math.pow(10,how))/Math.pow(10,how);
	return size+unit;

}
function queryFileLst(tableId){
	//
	var busId = document.getElementById("business_"+tableId).value;
	var service = document.getElementById("service_"+tableId).value;
	var url = 'XmlFileAction_queryFlies.action?busId='+busId+"&timetmp="+new Date();
	if(service){
		url = url+"&service="+service;
	}
	$.ajax({
           url: url,
           dataType:   "xml", //这里注意的是应该加上这个
           error: function(XMLHttpRequest, textStatus, errorThrown){
           	alert("连接服务器失败。");
 			}, 
           success: function(serverData){
           		var infoTable = document.getElementById("infoTable_"+tableId);
				var rows = infoTable.rows;
				if(rows!=null){
					for(var i=rows.length-1;i>=0;i--){
						infoTable.deleteRow(rows[i].rowIndex);
					}	
				}
				var isEdit = (document.getElementById("editable_"+tableId).value=="true");
           		$(serverData).find("ds>r").each(function(){ 
           			var busId =  $(this).find("[n='busId']").text();
	           		var fileId = $(this).find("[n='fileId']").text();
					var fileName = $(this).find("[n='fileName']").text();
            		var fileSize = $(this).find("[n='fileSize']").text();
            		addServerFile(service,busId,tableId,fileId,fileName,fileSize,'已上传',isEdit);
            	});
	    	}
	});
}
//取消所有上传文件
function cancelUpload(swfObj,tableId){
	var infoTable = document.getElementById("infoTable_"+tableId);
	var rows = infoTable.rows;
	if(rows==null){
		return false;
	}
	for(var i=rows.length-1;i>=0;i--){
		deleteFile(swfObj,tableId,rows[i].title);
	}	
}
function addTableRow(tableId,fileId,isEdit){
	var infoTable = document.getElementById("infoTable_"+tableId);
	var row = infoTable.insertRow();
	row.id = tableId+"_"+fileId;
	row.title=fileId;
	var col1= row.insertCell();
	var col2= row.insertCell();
	
	col1.style.width="320";
	col2.style.width="60";
	col1.style.fontSize="12px";
	col2.style.fontSize="12px"; 
	col1.align="left";
	col2.align="left";
	
	if(isEdit){
		//控件内容
		var col3= row.insertCell();
		var col4= row.insertCell();
		col3.style.width="95";
		col4.style.width="35";
		col3.style.fontSize="12px";
		col4.style.fontSize="12px"; 
		col3.align="left";
		col4.align="center";
	}
	return row;
}
//用表格显示
function addReadyFileInfo(file,tableId,message,status){
	if(file==null){
		return false;
	}
	var infoTable = document.getElementById("infoTable_"+tableId);
	var row = infoTable.insertRow();
	row.id = tableId+"_"+file.id;
	row.title=file.id;
	var col1= row.insertCell();
	var col2= row.insertCell();
	col1.innerHTML=file.name;
	col2.innerHTML=getFileSize(file.size,2);
	col1.style.width="320";
	col2.style.width="60";
	col1.style.fontSize="12px";
	col2.style.fontSize="12px";
	col1.style.border="solid 1px #7FAAFF";
	col2.style.border="solid 1px #7FAAFF";
	col1.align="left";
	col2.align="left";
	
	//控件内容
	var col3= row.insertCell();
	var col4= row.insertCell();
	if(status!=null&&status!=""){
		col3.innerHTML="<font color='red'>"+status+":"+message+"</font>";
	}else{
		col3.innerHTML=message;
	}
	col4.innerHTML="<a href='javascript:deleteFile(swfu_"+tableId+",\""+tableId+"\",\""+file.id+"\")'>取消</a>";
	col3.style.width="95";
	col4.style.width="35";
	col3.style.fontSize="12px";
	col4.style.fontSize="12px";
	col3.style.border="solid 1px #7FAAFF";
	col4.style.border="solid 1px #7FAAFF";
	col3.align="left";
	col4.align="center";
}
function deleteFile(swfu,tableId,fileId){
	//用表格显示
	if(fileId==null||fileId==""){
		return false;
	}	
	var infoTable = document.getElementById("infoTable_"+tableId);
	var row = document.getElementById(tableId+"_"+fileId);
	infoTable.deleteRow(row.rowIndex);
	swfu.cancelUpload(fileId,false);
}