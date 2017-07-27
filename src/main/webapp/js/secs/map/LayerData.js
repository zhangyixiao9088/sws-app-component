function LayerData(){};
function LayerData(type, actionName, proKey ){
	var stations;
	var legends;
	var stationType = encodeURI(encodeURI(type));
	var legendUrl = "ksh/action/station!getLegend.action?proKey="+proKey+"&stationType="+stationType;
	var stationUrl = "ksh/action/station!"+actionName+".action?proKey="+proKey+"&stationType="+stationType;
	$.ajax({
		   url: legendUrl,
		   dataType: "json",
		   async:false,
		   error: function(XMLHttpRequest, textStatus, errorThrown){
		           	alert("暂无数据。");
		 				   },
		   success: function(json){
			   	legends= json;
		   }
		});
	$.ajax({
		   url: stationUrl,
		   dataType: "json",
		   async:false,
		   error: function(XMLHttpRequest, textStatus, errorThrown){
		           	alert("暂无数据。");
		 				   },
		   success: function(json){
			   	stations= json;
		   }
		});
	this.stations = stations;
	this.legends = legends
};

function MarkersLayerData(type, proKey, size){
	var stations;
	var legends;
	var markersType = encodeURI(encodeURI(type));
	var legendUrl = "ksh/action/markers!getMarkersLegend.action?proKey=" + proKey + "&markersType="+ markersType;
	var stationUrl = "ksh/action/markers!getMarkers.action?proKey=" + proKey + "&markersType=" + markersType + "&size=" + size;
	$.ajax({
		   url: legendUrl,
		   dataType: "json",
		   async:false,
		   error: function(XMLHttpRequest, textStatus, errorThrown){
		           	alert("暂无数据。");
		 				   },
		   success: function(json){
			   	legends= json;
		   }
		});
	$.ajax({
		   url: stationUrl,
		   dataType: "json",
		   async:false,
		   error: function(XMLHttpRequest, textStatus, errorThrown){
		           	alert("暂无数据。");
		 				   },
		   success: function(json){
			   	stations= json;
		   }
		});
	this.stations = stations;
	this.legends = legends
	
}


function JZLayerData(type, qualifier, size, actionName, proKey ){
	var stations;
	var legends;
	var stationType = encodeURI(encodeURI(type));
	if(!size){
		size = -1;
	}
	var legendUrl = "ksh/action/jZStation!getLegend.action?proKey="+proKey+"&stationType="+stationType;
	var stationUrl = "ksh/action/jZStation!"+actionName+".action?proKey="+proKey+"&stationType="+stationType+"&size="+size+"&qualifier="+qualifier;
	$.ajax({
		   url: legendUrl,
		   dataType: "json",
		   async:false,
		   error: function(XMLHttpRequest, textStatus, errorThrown){
		           	alert("暂无数据。");
		 				   },
		   success: function(json){
			   	legends= json;
		   }
		});
	$.ajax({
		   url: stationUrl,
		   dataType: "json",
		   async:false,
		   error: function(XMLHttpRequest, textStatus, errorThrown){
		           	alert("暂无数据。");
		 				   },
		   success: function(json){
			   	stations= json;
		   }
		});
	this.stations = stations;
	this.legends = legends
};


function ProjectLayerData(type, actionName, proKey, state){
	var stations;
	var legends;
	var stationType = encodeURI(encodeURI(type));
	var legendUrl = "ksh/action/project!getLegend.action?proKey=" + proKey + "&stationType="+ stationType;
	var stationUrl = "ksh/action/project!" + actionName + ".action?proKey=" + proKey + "&stationType=" + stationType + "&projectStateId=" + state;
	$.ajax({
		   url: legendUrl,
		   dataType: "json",
		   async:false,
		   error: function(XMLHttpRequest, textStatus, errorThrown){
		           	alert("暂无数据。");
		 				   },
		   success: function(json){
			   	legends= json;
		   }
		});
	$.ajax({
		   url: stationUrl,
		   dataType: "json",
		   async:false,
		   error: function(XMLHttpRequest, textStatus, errorThrown){
		           	alert("暂无数据。");
		 				   },
		   success: function(json){
			   	stations= json;
		   }
		});
	this.stations = stations;
	this.legends = legends
};

function AlarmLayerData(type, actionName, levelId){
	var stations;
	var legends = {
					"desc":"预警报警级别",
					"levels":[{"name":"一级预警","url":"image/secs/yjya/green.png"},
						{"name":"二级预警","url":"image/secs/yjya/yellow.png"},
						{"name":"三级预警","url":"image/secs/yjya/red.png"}]
				  };
	var stationType = encodeURI(encodeURI(type));
	var stationUrl = "ksh/action/alarm!" + actionName + ".action?levelId=" + levelId + "&stationType=" + stationType;
	$.ajax({
		   url: stationUrl,
		   dataType: "json",
		   async:false,
		   error: function(XMLHttpRequest, textStatus, errorThrown){
		           	alert("暂无数据。");
		 				   },
		   success: function(json){
			   	stations= json;
		   }
		});
	
	this.stations = stations;
	this.legends = legends;
};
