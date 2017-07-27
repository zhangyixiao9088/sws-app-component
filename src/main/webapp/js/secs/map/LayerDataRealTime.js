//

//获取点数据集合
//real/action/realTimeDatas!getDatas.action?fileName=CEC/MAP/ZXJCSHOW&dataSource=DS_PO&parameters=null
function getPointDatas(fileName,dataSource,parameters){
	var data = new Object();
	var targetUrl = "real/action/realTimeDatas!getDatas.action";
	var para = {
		"fileName":fileName,
		"dataSource":dataSource,
		"parameters":parameters
	};
	$.ajax({
	 	type:"post",
	 	data:para,
	 	async: false,
        cache: false,
	 	url:targetUrl,
	 	dataType: "json",
	    error: function(e){
	    	throw new Error(e);
	 	},
	    success: function(response){
		  	data = response;
	    }
	 });	
	 return data;
}

//获取最新的集合数据
//real/action/realTimeData!getNewDatas.action?fileName=NYGK/CHART/Pn_SS_SBFZSJ&dataSource=DS_NEW&parameters=null
function getNewDatas(fileName,dataSource,parameters){
	var data = new Object();
	var targetUrl = "real/action/realTimeDatas!getDatas.action";
	var para = {
		"fileName":fileName,
		"dataSource":dataSource,
		"parameters":parameters
	};
	$.ajax({
	 	type:"post",
	 	data:para,
	 	url:targetUrl,
	 	dataType: "json",
	    error: function(e){
	    	throw new Error(e);
	 	},
	    success: function(response){
		  	callback(response);
	    }
	 });
}

//获取点数据  
//realTimeData!getOne.action?fileName=CEC/MAP/ZXJCSHOW&dataSource=DS_JBXX&parameters={ID:99}
function getPointData(fileName,dataSource,parameters){
	var data = new Object();
	var targetUrl = "real/action/realTimeData!getOne.action";
	var para = {
		"fileName":fileName,
		"dataSource":dataSource,
		"parameters":parameters
	};
	$.ajax({
	 	type:"post",
	 	data:para,
	 	async: false,
        cache: false,
	 	url:targetUrl,
	 	dataType: "json",
	    error: function(e){
	    	throw new Error(e);
	 	},
	    success: function(response){
		  	data = response;
	    }
	 });	
	 return data;
}

//取某一监测点的最新数据
function getRealOneData(fileName,dataSource,parameters){
	var data = new Object();
	var targetUrl = "real/action/realTimeDatas!getDatas.action";
	var para = {
		"fileName":fileName,
		"dataSource":dataSource,
		"parameters":parameters
	};
	$.ajax({
	 	type:"post",
	 	data:para,
	 	url:targetUrl,
	 	dataType: "json",
	    error: function(e){
	    	throw new Error(e);
	 	},
	    success: function(response){
		  	callback(response);
	    }
	 });	
	 
}



function init(dest, soapMethod, insCode, startTime, endTime, callback){
	var targetUrl = "ksh/action/stationRealTime!getWebServiceResponse.action";
	var data = {
		"dest":dest,
		"soapMethod":soapMethod,
		"insCode":insCode,
		"startTime":startTime,
		"endTime":endTime
	};
	 $.ajax({
	 	type:"post",
	 	data:data,
	 	url:targetUrl,
	 	dataType: "xml",
	    error: function(){
	         throw new error(e);
	 	},
	    success: function(response){
		   	 var xml = $(response);
		   	 if("00000"!=xml.find("CODE").text()){
		   	 	$("#_edit_SSSTATE").text("数据获取异常");
		   	 }else if(""==xml.find("ROW").text()){
		   	 	$("#_edit_SSSTATE").text("数据暂无记录");
		   	 }else{
		   	 	$("#_edit_SSSTATE").text("已更新");
		   	 	callback(xml);
		   	 }
		   	 
	    }
	 });
}

function kzsInstantData(insCode,callback){
	var targetUrl = "ksh/action/stationRealTime!getKZSWebServiceReponse.action";
	var data = {
		"insCode":insCode
	};
	 $.ajax({
	 	type:"post",
	 	data:data,
	 	url:targetUrl,
	 	dataType: "json",
	    error: function(){
	    	alert(e);
	         throw new error(e);
	 	},
	    success: function(response){
		   	 if(0==response.length){
		   	 	$("#_edit_SSSTATE").text("数据暂无记录");
		   	 }else{
		   	 	$("#_edit_SSSTATE").text("已更新");
		   	 	callback(response);
		   	 }
		   	 
	    }
	 });
}

// 对Date的扩展，将 Date 转化为指定格式的String   
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
// 例子：   
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
Date.prototype.format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}

function getRealTimestamp(date){
	//格式如下：2016-09-06 11:15
	var year=date.substr(0,4);
	var month=date.substring(date.indexOf("-")+1,date.lastIndexOf("-"));
	var day=date.substring(date.lastIndexOf("-")+1,date.indexOf(" "));
	var mi=date.substring(date.indexOf(" ")+1,date.indexOf(":"));
	var second=date.substring(date.lastIndexOf(":")+1,date.length);
	if(month==1){
		month=12;
		year=year-1;
	}
//	console.log(year+"-"+month+"-"+day+" "+mi+":"+second);
//	console.log((new Date(year,month-1,day,mi,second)).format("yyyy-MM-dd mm:ss"));
	return (new Date(year,month-1,day,mi,second)).getTime();
}