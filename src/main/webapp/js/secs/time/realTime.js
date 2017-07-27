function onckFromDate(){
	var dc=document.getElementById("dateType");
	var v = dc.options[dc.selectedIndex].value;
	if(v=="Y"){
		WdatePicker({el:'dateFrom',dateFmt:'yyyy'}); 
	}else if(v=="S"){
		WdatePicker({el:'dateFrom',dateFmt:'yyyy-MM-dd HH:mm'}); 
	}else if(v=="M"){
		WdatePicker({el:'dateFrom',dateFmt:'yyyy-MM'}); 
	}else if(v=="D"){
		WdatePicker({el:'dateFrom',dateFmt:'yyyy-MM-dd'}); 
	} else if(v=="H"){
		WdatePicker({el:'dateFrom',dateFmt:'yyyy-MM-dd HH'}); 
	} 
}
function onckToDate(){
	var dc=document.getElementById("dateType");
	var v = dc.options[dc.selectedIndex].value;
	if(v=="Y"){
		WdatePicker({el:'dateTo',dateFmt:'yyyy'}); 
	}else if(v=="S"){
		WdatePicker({el:'dateTo',dateFmt:'yyyy-MM-dd HH:mm'}); 
	}else if(v=="M"){
		WdatePicker({el:'dateTo',dateFmt:'yyyy-MM'}); 
	}else if(v=="D"){
		WdatePicker({el:'dateTo',dateFmt:'yyyy-MM-dd'}); 
	} else if(v=="H"){
		WdatePicker({el:'dateTo',dateFmt:'yyyy-MM-dd HH'}); 
	} 
}

function _initYear(){
	var date=new Date();
	var dateFrom = document.getElementById("dateFrom");
	var dateTo = document.getElementById("dateTo");
	var year=date.getFullYear();
	dateFrom.value=year-10;
	dateTo.value=year;
}

function _initMonth(){
	var date=new Date();
	var dateFrom = document.getElementById("dateFrom");
	var dateTo = document.getElementById("dateTo");
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	dateTo.value=year+"-"+month;
	
	date.setMonth(date.getMonth()-12);
	
	year=date.getFullYear();
	month=date.getMonth()+1;
	dateFrom.value=year+"-"+month;
}

function _initDay(){
	var date=new Date();
	var dateFrom = document.getElementById("dateFrom");
	var dateTo = document.getElementById("dateTo");
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	dateTo.value=year+"-"+month+"-"+day;
	
	date.setDate(date.getDate()-31);
	
	year=date.getFullYear();
	month=date.getMonth()+1;
	day=date.getDate();
	dateFrom.value=year+"-"+month+"-"+day;
}

function _initHour(){
	var date=new Date();
	var dateFrom = document.getElementById("dateFrom");
	var dateTo = document.getElementById("dateTo");
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	var hour=date.getHours();
	dateTo.value=year+"-"+month+"-"+day+" "+hour;
	
	date.setHours(date.getHours()-24);
	
	year=date.getFullYear();
	month=date.getMonth()+1;
	day=date.getDate();
	hour=date.getHours();
	dateFrom.value=year+"-"+month+"-"+day+" "+hour;
}

function _initMinutes(){
	var date=new Date();
	var dateFrom = document.getElementById("dateFrom");
	var dateTo = document.getElementById("dateTo");
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	var hour=date.getHours();
	var minutes = date.getMinutes();
	dateTo.value=year+"-"+month+"-"+day+" "+hour+":"+minutes;
	
	date.setMinutes(date.getMinutes()-120);
	
	year=date.getFullYear();
	month=date.getMonth()+1;
	day=date.getDate();
	hour=date.getHours();
	minutes = date.getMinutes();
	dateFrom.value=year+"-"+month+"-"+day+" "+hour+":"+minutes;
}


function initDate(){
	var dc=document.getElementById("dateType");
	var type = dc.options[dc.selectedIndex].value;
	if(type=='Y'){
		_initYear();
	}else if(type=='M'){
		_initMonth();
	}else if(type=='D'){
		_initDay();
	}else if(type=='H'){
		_initHour();
	}else if(type=='S'){
		_initMinutes();
	}
}
