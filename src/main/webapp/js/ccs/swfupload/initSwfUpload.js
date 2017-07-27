var swfu;
window.onload = function () {
	swfu = new SWFUpload({
		upload_url: "/swfUploadServlet/upload",
		post_params: {"name" : "huliang"},
		
		// File Upload Settings
		file_size_limit : "${perMaxSize} ${sizeUnit}",
		file_types : "${fileTypes}",
		file_types_description : "${fileTypesDesc}",
		file_upload_limit : "${fileNums}", // 一次上传的文件个数限制
						
		file_queue_error_handler : fileQueueError,
		file_dialog_complete_handler : fileDialogComplete,　// 选择好文件后提交
		file_queued_handler: fileQueued,
		upload_progress_handler : uploadProgress,
		upload_error_handler : uploadError,
		upload_success_handler : uploadSuccess,
		upload_complete_handler : uploadComplete,
		
		// Button Settings
		button_image_url : "${imgUrl}image/ccs/swfupload/SmallSpyGlassWithTransperancy_17x18.png",
		button_placeholder_id : "spanButtonPlaceholder",
		button_width: 400,
		button_height: 18,
		button_text : '<span class="button">选择文件 <span class="buttonSmall">(单个文件大小限制：${perMaxSize} ${sizeUnit})</span></span>',
		button_text_style : '.button { font-family: Helvetica, Arial, sans-serif; font-size: 12pt; } .buttonSmall { font-size: 12pt; }',
		button_text_top_padding: 0,
		button_text_left_padding: 18,
		button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
		button_cursor: SWFUpload.CURSOR.HAND,
		button_action : "${single}",
		
		// Flash Settings
		flash_url : "js/ccs/swfupload/swfupload.swf",

		custom_settings : {
			upload_target : "divFileProgressContainer"
		},
		// Debug Settings
		debug: false  //是否显示调试窗口
	});
};

function startUploadFile(){
	swfu.startUpload();
}
