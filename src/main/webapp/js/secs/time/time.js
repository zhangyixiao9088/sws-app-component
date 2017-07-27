function onckFromDate(){
	var dc=document.getElementById("dateType");
	var v = dc.options[dc.selectedIndex].value;
	if(v=="Y"){
		WdatePicker({el:'dateFrom',dateFmt:'yyyy',disabledDates:['^19','^200']}); 
	}else if(v=="S"){
		WdatePicker({el:'dateFrom',dateFmt:'yyyy',disabledDates:['^19','^200']}); 
	}else if(v=="M"){
		WdatePicker({el:'dateFrom',dateFmt:'yyyy-MM',disabledDates:['^19','^200']}); 
	}else if(v=="D"){
		WdatePicker({el:'dateFrom',dateFmt:'yyyy-MM-dd',disabledDates:['^19','^200']}); 
	} else if(v=="H"){
		WdatePicker({el:'dateFrom',dateFmt:'yyyy-MM-dd HH',disabledDates:['^19','^200']}); 
	} 
}
function onckToDate(){
	var dc=document.getElementById("dateType");
	var v = dc.options[dc.selectedIndex].value;
	if(v=="Y"){
		WdatePicker({el:'dateTo',dateFmt:'yyyy',disabledDates:['^19','^200']}); 
	}else if(v=="S"){
		WdatePicker({el:'dateTo',dateFmt:'yyyy',disabledDates:['^19','^200']}); 
	}else if(v=="M"){
		WdatePicker({el:'dateTo',dateFmt:'yyyy-MM',disabledDates:['^19','^200']}); 
	}else if(v=="D"){
		WdatePicker({el:'dateTo',dateFmt:'yyyy-MM-dd',disabledDates:['^19','^200']}); 
	} else if(v=="H"){
		WdatePicker({el:'dateTo',dateFmt:'yyyy-MM-dd HH',disabledDates:['^19','^200']}); 
	} 
}
function initDate(){
	 var dc=document.getElementById("dateType");
	 var type = dc.options[dc.selectedIndex].value;

	 var dateFrom = document.getElementById("dateFrom");
	 var dateTo = document.getElementById("dateTo");
	 
	 var date=new Date();
	 var year=date.getFullYear(); 
	 var month=date.getMonth()+1;
	 var day=date.getDate();
	 var hour=date.getHours();
	 var minutes = date.getMinutes();
	 
	 month =(month<10 ? "0"+month:month); 
	 var monthFrom =((month-1)<10 ? "0"+(month-1):(month-1));
	 
	 var dayFrom = ((day-1)<10?"0"+(day-1):(day-1));
	 var hourFrom = ((hour-1)<10?"0"+(hour-1):(hour-1));
	 
	 day =(day<10 ? "0"+day:day); 
	 if(type=='Y'){
	 	if(dateFrom){
	 		dateFrom.value= year-10;
	 	}
	 	dateTo.value=year;
	 }else if(type=='M'){
	 	if(dateFrom){
	 		dateFrom.value= ((year-1).toString()+"-0"+(date.getMonth()-4));
	 	}
	 	dateTo.value=(year.toString()+"-"+month.toString());
	 }else if(type=='D'){
	 	if(dateFrom){
	 		dateFrom.value= (year.toString()+"-"+(monthFrom).toString()+"-"+day.toString());
	 	}
	 	dateTo.value=(year.toString()+"-"+month.toString()+"-"+day.toString());
	 }else if(type=='H'){
	 	if(dateFrom){
	 		dateFrom.value= (year.toString()+"-"+(month).toString()+"-"+(dayFrom).toString());
	 	}
	 	dateTo.value=(year.toString()+"-"+month.toString()+"-"+day.toString());
	 }else if(type=='S'){
	 	var quarter = document.getElementById("quarter");
	 	var monthS=date.getMonth()+1;
	 	if(dateFrom){
	 		if(monthS<=3){
				quarter.value = "4";
				dateFrom.value= year-1;
			 }else if(monthS<=6){
				quarter.value = "1";
				dateFrom.value= year;
			 }else if(monthS<=9){
			 	dateFrom.value= year;
				quarter.value = "2";
			 }else if(monthS<=12){
				dateFrom.value= year;
				quarter.value = "3";
			 }
	 	}
	 	if(dateTo){
	 		dateTo.value= year;
	 		if(monthS<=3){
				quarter.value = "1";
			 }else if(monthS<=6){
				quarter.value = "2";
			 }else if(monthS<=9){
				quarter.value = "3";
			 }else if(monthS<=12){
				quarter.value = "4";
			 }
	 	}
	 }	
}

function onckDate(){
	var dc=document.getElementById("dateSel");
	var v = dc.options[dc.selectedIndex].value;
	if(v=="Y"){
		WdatePicker({el:'dateIpt',dateFmt:'yyyy',disabledDates:['^19','^200']}); 
	}else if(v=="S"){
		WdatePicker({el:'dateIpt',dateFmt:'yyyy',disabledDates:['^19','^200']}); 
	}else if(v=="M"){
		WdatePicker({el:'dateIpt',dateFmt:'yyyy-MM',disabledDates:['^19','^200']}); 
	}else if(v=="D"){
		WdatePicker({el:'dateIpt',dateFmt:'yyyy-MM-dd',disabledDates:['^19','^200']}); 
	} else if(v=="H"){
		WdatePicker({el:'dateIpt',dateFmt:'yyyy-MM-dd-HH',disabledDates:['^19','^200']}); 
	} 
}

function getDate(){
	var dc=document.getElementById("dateSel");
	var v = dc.options[dc.selectedIndex].value;
	var dataInp = document.getElementById("dateIpt");
	var rs=""; 
	if(v=="Y"){
		rs =  v+dataInp.value;
	}else if(v=="S"){
		var dcs=document.getElementById("dateSeason");
		var vs = dcs.options[dcs.selectedIndex].value;
		rs= v+dataInp.value+vs;
	}else if(v=="M"){
		var rs = v+dataInp.value;
		rs = rs.replace(/-/g, ""); 
	}else if(v=="D"){
		var rs = v+dataInp.value;
		rs = rs.replace(/-/g, ""); 
	}else if(v=="H"){
		var rs = v+dataInp.value;
		rs = rs.replace(/-/g, ""); 
	}
	return rs;
}
function setDate(){
	var dcs=document.getElementById("dateSeason");
	dcs.style.display="none";
	var dc=document.getElementById("dateSel");
	var dataInp = document.getElementById("dateIpt");
	var v = dc.options[dc.selectedIndex].value;

	 var date=new Date();
	 var year=date.getFullYear(); 
	 var month=date.getMonth()+1;
	 var hour=date.getHours();
	 var season = "01";
	 if(month<=3){
		season = "01";
	 }else if(month<=6){
		season = "02";
	 }else if(month<=9){
		season = "03";
	 }else if(month<=12){
		season = "04";
	 }
	 var day=date.getDate();
	 month =(month<10 ? "0"+month:month); 
	 day =(day<10 ? "0"+day:day); 


	 var myMondate = (year.toString()+"-"+month.toString()); 
	 var myDaydate = (year.toString()+"-"+month.toString()+"-"+day.toString()); 
	 var myHourdate = (year.toString()+"-"+month.toString()+"-"+day.toString()+"-"+hour.toString()); 
	 if(v=="Y"){ 
		dataInp.value=year.toString();
	     dataInp.value = dataInp.value-1;
		dataInp.size=4;
	}else if(v=="S"){ 
		dataInp.value=year.toString();		
		dcs.style.display="";
		dataInp.size=4;
		for(var i=0;i<dcs.options.length;i++){
			var vs = dcs.options[i].value;
			if(vs==season){
				dcs.options[i].selected=true;
			}else{
				dcs.options[i].selected=false;
			}
		}							
	}else if(v=="M"){ 
		dataInp.value=myMondate;
		dataInp.size=7;
	}else if(v=="D"){ 
		dataInp.value=myDaydate;							
		dataInp.size=10;
	}else if(v=="H"){ 
		dataInp.value=myHourdate;							
		dataInp.size=13;
	}
 
}