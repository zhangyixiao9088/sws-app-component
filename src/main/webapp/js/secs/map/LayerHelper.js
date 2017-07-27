
/*
*负责新建图层，传入的参数是station集合，legend集合。
*/
function LayerHelper() {
}
/*
* layerName:图层名称
* stations:点集信息, [{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050209","code":"36050209","mapUrl":"secs/images/greed.jpeg","name":"江西飞宇电子公司","positon":{"address":"新余市渝水区飞宇街道夏花社区","latitude":"31.79472355","longitude":"119.9279645774"},"proKey":"008001","type":"工业监测点","value":99},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050211","code":"36050211","mapUrl":"secs/images/greed.jpeg","name":"江西春龙控股集团公司","positon":{"address":"新余市渝水区春龙街道控股社区","latitude":"35.79472355","longitude":"142.9279645774"},"proKey":"008001","type":"工业监测点","value":95},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050208","code":"36050208","mapUrl":"secs/images/greed.jpeg","name":"新华金属制品公司","positon":{"address":"新余市渝水区新华街道苗圃社区","latitude":"23.79472355","longitude":"118.9279645774"},"proKey":"008001","type":"工业监测点","value":78},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050210","code":"36050210","mapUrl":"secs/images/greed.jpeg","name":"江西新余发电公司","positon":{"address":"新余市渝水区瑶湖街道发电社区","latitude":"33.79472355","longitude":"122.9279645774"},"proKey":"008001","type":"工业监测点","value":66},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050204","code":"36050204","mapUrl":"secs/images/greed.jpeg","name":"煤炭工业管理总公司","positon":{"address":"新余市渝水区站前东路附近","latitude":"26.79472355","longitude":"115.9279645774"},"proKey":"008001","type":"工业监测点","value":51},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050206","code":"36050206","mapUrl":"secs/images/greed.jpeg","name":"新德工业泵制造厂","positon":{"address":"新余市渝水区赣西大道北湖新城","latitude":"17.79472355","longitude":"144.9279645774"},"proKey":"008001","type":"工业监测点","value":51},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050207","code":"36050207","mapUrl":"secs/images/greed.jpeg","name":"江西赛维ＬＤＫ太阳能公司","positon":{"address":"新余市渝水区新钢街道赛维大道","latitude":"21.79472355","longitude":"134.9279645774"},"proKey":"008001","type":"工业监测点","value":42},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050205","code":"36050205","mapUrl":"secs/images/greed.jpeg","name":"林业工业公司","positon":{"address":"新余市分宜县新钢街道港下巷87号","latitude":"37.79472355","longitude":"124.9279645774"},"proKey":"008001","type":"工业监测点","value":32},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050219","code":"36050219","mapUrl":"secs/images/greed.jpeg","name":"江西新余南方建材有限公司","positon":{"address":"新余市渝水区袁河街道迎家新村社区","latitude":"27.7790111579","longitude":"114.8843585353"},"proKey":"008001","type":"工业监测点","value":25},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050212","code":"36050212","mapUrl":"secs/images/greed.jpeg","name":"江西省双强化工有限公司","positon":{"address":"新余市渝水区袁河街道夏家管理处","latitude":"27.7745176487","longitude":"114.9020620737"},"proKey":"008001","type":"工业监测点","value":14}]
* legends:图例集合信息,[{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/greed.jpeg","maxValue":100,"minValue":0,"proKey":"008001","type":"工业监测点"},{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/yellow.jpeg","maxValue":300,"minValue":100,"proKey":"008001","type":"工业监测点"},{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/red.jpeg","maxValue":0,"minValue":300,"proKey":"008001","type":"工业监测点"}]
*/
LayerHelper.addNewLayer = function (layerName, stations, legends, popUpShowInfoCallback, hideCallback) {
	var markers = new SuperMap.Layer.Markers(layerName);
 //将点添加到markers里面
	$.each(stations, function (idx, item) {
 	//生成弹出层
		var contentHTML = "<div style='font-size:.8em; opacity: 0.8; overflow-y:hidden;'>";
		contentHTML += "<div>" + item.name + ":" + item.value + "</div></div>";
		//var log = parseFloat(item.positon.longitude) + 0.0699025037;
		//var lat = parseFloat(item.positon.latitude) - 0.001;
		var log = item.positon.longitude;
		var lat = item.positon.latitude;
		var popup = new SuperMap.Popup.FramedCloud("popwin", new SuperMap.LonLat(log, lat), null, contentHTML, null, true);
		var point = new SuperMap.Geometry.Point(log, lat), size = new SuperMap.Size(24, 24), offset = new SuperMap.Pixel(-(size.w / 2), -size.h), icon = new SuperMap.Icon(item.mapUrl, size, offset);
		var newMarker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y), icon);
		newMarker.events.on({"click":function () {
			var code = item.code;
			if(code.indexOf('赣')>-1){
				code = code.substr(1,code.length);
			}
			_lstViewRow(item.clickUrl, code, "\u67e5\u770b", "edit", "&proKey=" + item.proKey);
		}, "mouseover":function () {
			$("#container").css("cursor", "pointer");
			popUpShowInfoCallback(popup);
		}, "mouseout":function () {
			$("#container").css("cursor", "default");
			hideCallback(popup);
		}});
		markers.addMarker(newMarker);
	});
	$("#legendLi").empty();
	var desc = document.createElement("span");
	desc.appendChild(document.createTextNode(legends[0].desc + ":"));
	$("#legendLi").append(desc);
	for (var i = 0, size = legends.length; i < size; i++) {
		var span = document.createElement("span");
		span.style.background = "url(" + legends[i].mapUrl + ")";
		span.style.margin = "0px 2px 0px 2px";
		span.style.padding = "0px 5px 0px 5px";
		if (i == size - 1) {
			var context = document.createTextNode(legends[i].minValue + "+");
			span.appendChild(context);
		} else {
			var context = document.createTextNode(legends[i].minValue + "-" + legends[i].maxValue);
			span.appendChild(context);
		}
		$("#legendLi").append(span);
	}
	return markers;
};

//图标的属性：desc,longitude,latitude,onclickCallback,popupInfoShowCallback(popup),popupInfoHideCallback(popup)
LayerHelper.addCityLayer = function (layerName, citys) {
	var markers = new SuperMap.Layer.Markers(layerName);
	 //将点添加到markers里面
	$.each(citys, function (idx, item) {
	 	//生成弹出层
		var contentHTML = "<div style='font-size:.8em; opacity: 0.8; overflow-y:hidden;'>";
		contentHTML += "<div>" + item.desc + "</div></div>";
		var popup = new SuperMap.Popup.FramedCloud("popwin", new SuperMap.LonLat(item.longitude, item.latitude), null, contentHTML, null, true);
		var point = new SuperMap.Geometry.Point(item.longitude, item.latitude), size = new SuperMap.Size(44, 33), offset = new SuperMap.Pixel(-(size.w / 2), -size.h), icon = new SuperMap.Icon(item.mapUrl, size, offset);
		var newMarker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y), icon);
		newMarker.events.on({"click":function () {
			if (item.nextLayerName) {
				item.onclickCallback(item.nextLayerName);
			} else {
				item.onclickCallback();
			}
		}, "mouseover":function () {
			$("#container").css("cursor", "pointer");
			item.popupInfoShowCallback(popup);
		}, "mouseout":function () {
			$("#container").css("cursor", "default");
			item.popupInfoHideCallback(popup);
		}});
		markers.addMarker(newMarker);
	});
	$("#legendLi").empty();
	return markers;
};
/*
* layerName:图层名称
* stations:点集信息, [{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050209","code":"36050209","mapUrl":"secs/images/greed.jpeg","name":"江西飞宇电子公司","positon":{"address":"新余市渝水区飞宇街道夏花社区","latitude":"31.79472355","longitude":"119.9279645774"},"proKey":"008001","type":"工业监测点","value":99},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050211","code":"36050211","mapUrl":"secs/images/greed.jpeg","name":"江西春龙控股集团公司","positon":{"address":"新余市渝水区春龙街道控股社区","latitude":"35.79472355","longitude":"142.9279645774"},"proKey":"008001","type":"工业监测点","value":95},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050208","code":"36050208","mapUrl":"secs/images/greed.jpeg","name":"新华金属制品公司","positon":{"address":"新余市渝水区新华街道苗圃社区","latitude":"23.79472355","longitude":"118.9279645774"},"proKey":"008001","type":"工业监测点","value":78},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050210","code":"36050210","mapUrl":"secs/images/greed.jpeg","name":"江西新余发电公司","positon":{"address":"新余市渝水区瑶湖街道发电社区","latitude":"33.79472355","longitude":"122.9279645774"},"proKey":"008001","type":"工业监测点","value":66},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050204","code":"36050204","mapUrl":"secs/images/greed.jpeg","name":"煤炭工业管理总公司","positon":{"address":"新余市渝水区站前东路附近","latitude":"26.79472355","longitude":"115.9279645774"},"proKey":"008001","type":"工业监测点","value":51},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050206","code":"36050206","mapUrl":"secs/images/greed.jpeg","name":"新德工业泵制造厂","positon":{"address":"新余市渝水区赣西大道北湖新城","latitude":"17.79472355","longitude":"144.9279645774"},"proKey":"008001","type":"工业监测点","value":51},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050207","code":"36050207","mapUrl":"secs/images/greed.jpeg","name":"江西赛维ＬＤＫ太阳能公司","positon":{"address":"新余市渝水区新钢街道赛维大道","latitude":"21.79472355","longitude":"134.9279645774"},"proKey":"008001","type":"工业监测点","value":42},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050205","code":"36050205","mapUrl":"secs/images/greed.jpeg","name":"林业工业公司","positon":{"address":"新余市分宜县新钢街道港下巷87号","latitude":"37.79472355","longitude":"124.9279645774"},"proKey":"008001","type":"工业监测点","value":32},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050219","code":"36050219","mapUrl":"secs/images/greed.jpeg","name":"江西新余南方建材有限公司","positon":{"address":"新余市渝水区袁河街道迎家新村社区","latitude":"27.7790111579","longitude":"114.8843585353"},"proKey":"008001","type":"工业监测点","value":25},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050212","code":"36050212","mapUrl":"secs/images/greed.jpeg","name":"江西省双强化工有限公司","positon":{"address":"新余市渝水区袁河街道夏家管理处","latitude":"27.7745176487","longitude":"114.9020620737"},"proKey":"008001","type":"工业监测点","value":14}]
* legends:图例集合信息,[{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/greed.jpeg","maxValue":100,"minValue":0,"proKey":"008001","type":"工业监测点"},{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/yellow.jpeg","maxValue":300,"minValue":100,"proKey":"008001","type":"工业监测点"},{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/red.jpeg","maxValue":0,"minValue":300,"proKey":"008001","type":"工业监测点"}]
*/
LayerHelper.addProjectLayer = function (layerName, stations, legends, popUpShowInfoCallback, hideCallback) {
	var markers = new SuperMap.Layer.Markers(layerName);
 //将点添加到markers里面
	$.each(stations, function (idx, item) {
 	//生成弹出层
		var contentHTML = "<div style='font-size:.8em; opacity: 0.8; overflow-y:hidden;'>";
		contentHTML += "<div>" + item.name + "<br>" + item.typeName + "<br>" + item.positon.address + "</div></div>";
		//var log = parseFloat(item.positon.longitude) + 0.0699025037;
		//var lat = parseFloat(item.positon.latitude) - 0.001;
		var log = item.positon.longitude;
		var lat = item.positon.latitude;
		var popup = new SuperMap.Popup.FramedCloud("popwin", new SuperMap.LonLat(log, lat), null, contentHTML, null, true);
		var point = new SuperMap.Geometry.Point(log, lat), size = new SuperMap.Size(20, 20), offset = new SuperMap.Pixel(-(size.w / 2), -size.h), icon = new SuperMap.Icon(item.mapUrl, size, offset);
		var newMarker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y), icon);
		newMarker.events.on({"click":function () {
			_lstViewRow(item.clickUrl, item.code, "\u67e5\u770b", "main");
		}, "mouseover":function () {
			$("#container").css("cursor", "pointer");
			popUpShowInfoCallback(popup);
		}, "mouseout":function () {
			$("#container").css("cursor", "default");
			hideCallback(popup);
		}});
		markers.addMarker(newMarker);
	});
	$("#legendLi").empty();
	var desc = document.createElement("span");
	desc.appendChild(document.createTextNode(legends[0].desc + ":"));
	$("#legendLi").append(desc);
	for (var i = 0, size = legends.length; i < size; i++) {
		var span = document.createElement("span");
		span.style.background = "url(" + legends[i].mapUrl + ")";
		span.style.margin = "0px 2px 0px 2px";
		span.style.padding = "0px 5px 0px 5px";
		if (i == size - 1) {
			var context = document.createTextNode(legends[i].minValue + "+");
			span.appendChild(context);
		} else {
			var context = document.createTextNode(legends[i].minValue + "-" + legends[i].maxValue);
			span.appendChild(context);
		}
		$("#legendLi").append(span);
	}
	return markers;
};
/*
* layerName:图层名称
* stations:点集信息, [{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050209","code":"36050209","mapUrl":"secs/images/greed.jpeg","name":"江西飞宇电子公司","positon":{"address":"新余市渝水区飞宇街道夏花社区","latitude":"31.79472355","longitude":"119.9279645774"},"proKey":"008001","type":"工业监测点","value":99},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050211","code":"36050211","mapUrl":"secs/images/greed.jpeg","name":"江西春龙控股集团公司","positon":{"address":"新余市渝水区春龙街道控股社区","latitude":"35.79472355","longitude":"142.9279645774"},"proKey":"008001","type":"工业监测点","value":95},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050208","code":"36050208","mapUrl":"secs/images/greed.jpeg","name":"新华金属制品公司","positon":{"address":"新余市渝水区新华街道苗圃社区","latitude":"23.79472355","longitude":"118.9279645774"},"proKey":"008001","type":"工业监测点","value":78},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050210","code":"36050210","mapUrl":"secs/images/greed.jpeg","name":"江西新余发电公司","positon":{"address":"新余市渝水区瑶湖街道发电社区","latitude":"33.79472355","longitude":"122.9279645774"},"proKey":"008001","type":"工业监测点","value":66},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050204","code":"36050204","mapUrl":"secs/images/greed.jpeg","name":"煤炭工业管理总公司","positon":{"address":"新余市渝水区站前东路附近","latitude":"26.79472355","longitude":"115.9279645774"},"proKey":"008001","type":"工业监测点","value":51},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050206","code":"36050206","mapUrl":"secs/images/greed.jpeg","name":"新德工业泵制造厂","positon":{"address":"新余市渝水区赣西大道北湖新城","latitude":"17.79472355","longitude":"144.9279645774"},"proKey":"008001","type":"工业监测点","value":51},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050207","code":"36050207","mapUrl":"secs/images/greed.jpeg","name":"江西赛维ＬＤＫ太阳能公司","positon":{"address":"新余市渝水区新钢街道赛维大道","latitude":"21.79472355","longitude":"134.9279645774"},"proKey":"008001","type":"工业监测点","value":42},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050205","code":"36050205","mapUrl":"secs/images/greed.jpeg","name":"林业工业公司","positon":{"address":"新余市分宜县新钢街道港下巷87号","latitude":"37.79472355","longitude":"124.9279645774"},"proKey":"008001","type":"工业监测点","value":32},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050219","code":"36050219","mapUrl":"secs/images/greed.jpeg","name":"江西新余南方建材有限公司","positon":{"address":"新余市渝水区袁河街道迎家新村社区","latitude":"27.7790111579","longitude":"114.8843585353"},"proKey":"008001","type":"工业监测点","value":25},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050212","code":"36050212","mapUrl":"secs/images/greed.jpeg","name":"江西省双强化工有限公司","positon":{"address":"新余市渝水区袁河街道夏家管理处","latitude":"27.7745176487","longitude":"114.9020620737"},"proKey":"008001","type":"工业监测点","value":14}]
* legends:图例集合信息,[{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/greed.jpeg","maxValue":100,"minValue":0,"proKey":"008001","type":"工业监测点"},{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/yellow.jpeg","maxValue":300,"minValue":100,"proKey":"008001","type":"工业监测点"},{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/red.jpeg","maxValue":0,"minValue":300,"proKey":"008001","type":"工业监测点"}]
*/
LayerHelper.addAlarmLayer = function (layerName, stations, legends, popUpShowInfoCallback, hideCallback) {
	var markers = new SuperMap.Layer.Markers(layerName);
 //将点添加到markers里面
	$.each(stations, function (idx, item) {
 	//生成弹出层
		var contentHTML = "<div style='font-size:.8em; opacity: 0.8; overflow-y:hidden;'>";
		contentHTML += "<div>" + item.levelName + "<br>" + item.alarmTime + "<br>" + item.summary + "<br>" + item.description + "</div></div>";
		//var log = parseFloat(item.longitude) + 0.0699025037;
		//var lat = parseFloat(item.latitude) - 0.001;
		var log = item.longitude;
		var lat = item.latitude;
		var popup = new SuperMap.Popup.FramedCloud("popwin", new SuperMap.LonLat(log, lat), null, contentHTML, null, true);
		var point = new SuperMap.Geometry.Point(log, lat), 
			size = new SuperMap.Size(20, 20), offset = new SuperMap.Pixel(-(size.w / 2), -size.h), 
			icon = new SuperMap.Icon(item.mapUrl, size, offset);
		var newMarker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y), icon);
		newMarker.events.on({"click":function () {
			_lstViewRow(item.clickUrl, item.inscode, "\u67e5\u770b", "main", "&insCode="+item.insCode+"&entryCode="+item.entryCode);
		}, "mouseover":function () {
			$("#container").css("cursor", "pointer");
			popUpShowInfoCallback(popup);
		}, "mouseout":function () {
			$("#container").css("cursor", "default");
			hideCallback(popup);
		}});
		markers.addMarker(newMarker);
	});
	$("#legendLi").empty();
	var desc = document.createElement("span");
	desc.appendChild(document.createTextNode(legends.desc + ":"));
	$("#legendLi").append(desc);
	for (var i = 0, size = legends.levels.length; i < size; i++) {
		var span = document.createElement("span");
		span.style.background = "url(" + legends.levels[i].url + ")";
		span.style.margin = "0px 2px 0px 2px";
		span.style.padding = "0px 5px 0px 5px";
		var context = document.createTextNode(legends.levels[i].name);
		span.appendChild(context);
		$("#legendLi").append(span);
	}
	return markers;
};


/*
*负责新建图层，传入的参数是station集合，legend集合。
*/
LayerHelper.addMarkersLayer = function(layerName, stations, legends, proKey, popUpShowInfoCallback, hideCallback){
	var markers = new SuperMap.Layer.Markers(layerName);
	//添加图层
	$.each(stations, function(idx, item){
	    var viewName = "edit";
		var contentHTML = "<div style='font-size:.8em; opacity: 0.8; overflow-y:hidden;'>";
		//各个监测点数据
		var name = item.NAME;
		var address = item.ADDRESS||item.positon.address;
		contentHTML = name+"<br/>"+"地址："+address;
		
		if(layerName == "历年已完工项目"||layerName=="本年已完工"||layerName=="在建项目"||layerName=="规划拟建项目"||layerName=="待建项目"
		||layerName=="太阳能光伏发电"||layerName=="光热应用"||layerName=="地源热泵"){
		    viewName = "main";
			contentHTML += addInfo(item.PROJECTNO);
			contentHTML += addInfo(item.NATURENAME);
			contentHTML += addInfo(item.UNITNAME);
			contentHTML += addInfo(item.INVESTMENTAMOUNT);
			contentHTML += addInfo(item.COALSAVING);
			contentHTML += addInfo(item.OILSAVING);
			contentHTML += addInfo(item.GASSSAVING);
			contentHTML += addInfo(item.ELETRICITYSAVING);
			contentHTML += addInfo(item.OTHERSAVING);
			contentHTML += addInfo(item.WATERSAVING);
			contentHTML += addInfo(item.CO2CER);
			contentHTML += addInfo(item.COALSAVING);
			contentHTML += addInfo(item.CODCER);
			contentHTML += addInfo(item.NH3_NCER);
			contentHTML += addInfo(item.OTHERCER);
		}
		if(layerName == "光伏装机容量"){
			contentHTML += addInfo(item.FLOORS);
			contentHTML += addInfo(item.ZJRL);
			contentHTML += addInfo(item.JZMJ);
			contentHTML += addInfo(item.KTMJ);
			contentHTML += addInfo(item.NSJCRL);
			contentHTML += addInfo(item.NSJFDL);
			contentHTML += addInfo(item.NSJCNL);
			contentHTML += addInfo(item.FDL);
			contentHTML += addInfo(item.CGNYTDL);
			contentHTML += addInfo(item.FZD);
			contentHTML += addInfo(item.EYHL);
			contentHTML += addInfo(item.EYHT);
			contentHTML += addInfo(item.FC);
		}
		
		if(layerName == "光热建筑应用面积"){
			contentHTML += addInfo(item.FLOORS);
			contentHTML += addInfo(item.ZJRL);
			contentHTML += addInfo(item.JZMJ);
			contentHTML += addInfo(item.KTMJ);
			contentHTML += addInfo(item.NSJCRL);
			contentHTML += addInfo(item.NSJFDL);
			contentHTML += addInfo(item.NSJCNL);
			contentHTML += addInfo(item.FDL);
			contentHTML += addInfo(item.CGNYTDL);
			contentHTML += addInfo(item.FZD);
			contentHTML += addInfo(item.EYHL);
			contentHTML += addInfo(item.EYHT);
			contentHTML += addInfo(item.FC);
		}
		
		if(layerName == "地源热泵建筑应用面积"){
			contentHTML += addInfo(item.FLOORS);
			contentHTML += addInfo(item.ZJRL);
			contentHTML += addInfo(item.JZMJ);
			contentHTML += addInfo(item.KTMJ);
			contentHTML += addInfo(item.NSJCRL);
			contentHTML += addInfo(item.NSJFDL);
			contentHTML += addInfo(item.NSJCNL);
			contentHTML += addInfo(item.FDL);
			contentHTML += addInfo(item.CGNYTDL);
			contentHTML += addInfo(item.FZD);
			contentHTML += addInfo(item.EYHL);
			contentHTML += addInfo(item.EYHT);
			contentHTML += addInfo(item.FC);
		}
		
		if(layerName == "常规能源替代量"){
			contentHTML += addInfo(item.FLOORS);
			contentHTML += addInfo(item.ZJRL);
			contentHTML += addInfo(item.JZMJ);
			contentHTML += addInfo(item.KTMJ);
			contentHTML += addInfo(item.NSJCRL);
			contentHTML += addInfo(item.NSJFDL);
			contentHTML += addInfo(item.NSJCNL);
			contentHTML += addInfo(item.FDL);
			contentHTML += addInfo(item.CGNYTDL);
			contentHTML += addInfo(item.FZD);
			contentHTML += addInfo(item.EYHL);
			contentHTML += addInfo(item.EYHT);
			contentHTML += addInfo(item.FC);
		}
		
		if(layerName == "建筑总电耗"||layerName == "建筑总水耗"||layerName == "建筑总能耗"||layerName == "建筑单位面积电耗"||layerName == "建筑单位面积能耗"){
			contentHTML += addInfo(item.BUILDSQUARE);
			contentHTML += addInfo(item.BUILDTYPE);
			contentHTML += addInfo(item.BUILDFUNCTION);
			contentHTML += addInfo(item.ZNH);
			contentHTML += addInfo(item.DWMJNH);
			contentHTML += addInfo(item.ZDH);
			contentHTML += addInfo(item.DWMJDH);
			contentHTML += addInfo(item.ZMCZDH);
			contentHTML += addInfo(item.DLSBDH);
			contentHTML += addInfo(item.KTSBDH);
			contentHTML += addInfo(item.TSSBDH);
			contentHTML += addInfo(item.ZSH);
		}
		contentHTML += "</div>";
		
		//经度纬度
		var log = item.LONGITUDE||item.positon.LONGITUDE;
		var lat = item.LATITUDE||item.positon.LATITUDE;
		var popup = new SuperMap.Popup.FramedCloud("popwin", new SuperMap.LonLat(log, lat), null, contentHTML, null, true);
		var point = new SuperMap.Geometry.Point(log, lat), size = new SuperMap.Size(24, 24), offset = new SuperMap.Pixel(-(size.w / 2), -size.h), icon = new SuperMap.Icon(item.mapUrl, size, offset);
		var newMarker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y), icon);
		
		//覆盖点添加点位信息
		newMarker.events.on({"click":function () {
			//城市总览的点击事件
			if (item.nextLayerName) {
				item.onclickCallback(item.nextLayerName);
			}else{
				var code = item.CODE + "";
				if (code.indexOf("\u8d63") > -1) {
					code = code.substr(1, code.length);
				}
				if(item.CLICKURL=='renewableSys/ksh/renewable' || item.CLICKURL=='architecture/ksh/architec'){
					var schema = "kzs.";
					if(item.CLICKURL=='architecture/ksh/architec'){
						schema = "jz.";
					}
					_lstViewRow( 'secs/common/time', code, "\u67e5\u770b", "edit", "&targetFileName="+item.CLICKURL+"&platform="+schema+"&proKey=" + item.proKey+"&module=kzsksh&view="+viewName);
				}else
				{
					_lstViewRow(item.CLICKURL, code, "\u67e5\u770b", viewName, "&proKey=" + item.proKey);
				}
				
			}
			hideCallback(popup);
		}, "mouseover":function () {
			$("#container").css("cursor", "pointer");
			popUpShowInfoCallback(popup);
		}, "mouseout":function () {
			$("#container").css("cursor", "default");
			hideCallback(popup);
		}});
		markers.addMarker(newMarker);
	});
	
	//添加图例信息
	$("#legendLi").empty();
	if(legends){
		var desc = document.createElement("span");
		desc.appendChild(document.createTextNode(legends[0].desc + ":"));
		$("#legendLi").append(desc);
		for (var i = 0, size = legends.length; i < size; i++) {
			var span = document.createElement("span");
			span.style.background = "url(" + legends[i].mapUrl + ")";
			span.style.margin = "0px 2px 0px 2px";
			span.style.padding = "0px 5px 0px 5px";
			if (i == size - 1) {
				var context = document.createTextNode(legends[i].minValue + "+");
				span.appendChild(context);
			} else {
				var context = document.createTextNode(legends[i].minValue + "-" + legends[i].maxValue);
				span.appendChild(context);
			}
			$("#legendLi").append(span);
		}
	}else{
		$("#legendLi").append("全市总览");
	}
	
	return markers;
} 
/*
* layerName:图层名称
* stations:点集信息, [{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050209","code":"36050209","mapUrl":"secs/images/greed.jpeg","name":"江西飞宇电子公司","positon":{"address":"新余市渝水区飞宇街道夏花社区","latitude":"31.79472355","longitude":"119.9279645774"},"proKey":"008001","type":"工业监测点","value":99},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050211","code":"36050211","mapUrl":"secs/images/greed.jpeg","name":"江西春龙控股集团公司","positon":{"address":"新余市渝水区春龙街道控股社区","latitude":"35.79472355","longitude":"142.9279645774"},"proKey":"008001","type":"工业监测点","value":95},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050208","code":"36050208","mapUrl":"secs/images/greed.jpeg","name":"新华金属制品公司","positon":{"address":"新余市渝水区新华街道苗圃社区","latitude":"23.79472355","longitude":"118.9279645774"},"proKey":"008001","type":"工业监测点","value":78},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050210","code":"36050210","mapUrl":"secs/images/greed.jpeg","name":"江西新余发电公司","positon":{"address":"新余市渝水区瑶湖街道发电社区","latitude":"33.79472355","longitude":"122.9279645774"},"proKey":"008001","type":"工业监测点","value":66},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050204","code":"36050204","mapUrl":"secs/images/greed.jpeg","name":"煤炭工业管理总公司","positon":{"address":"新余市渝水区站前东路附近","latitude":"26.79472355","longitude":"115.9279645774"},"proKey":"008001","type":"工业监测点","value":51},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050206","code":"36050206","mapUrl":"secs/images/greed.jpeg","name":"新德工业泵制造厂","positon":{"address":"新余市渝水区赣西大道北湖新城","latitude":"17.79472355","longitude":"144.9279645774"},"proKey":"008001","type":"工业监测点","value":51},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050207","code":"36050207","mapUrl":"secs/images/greed.jpeg","name":"江西赛维ＬＤＫ太阳能公司","positon":{"address":"新余市渝水区新钢街道赛维大道","latitude":"21.79472355","longitude":"134.9279645774"},"proKey":"008001","type":"工业监测点","value":42},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050205","code":"36050205","mapUrl":"secs/images/greed.jpeg","name":"林业工业公司","positon":{"address":"新余市分宜县新钢街道港下巷87号","latitude":"37.79472355","longitude":"124.9279645774"},"proKey":"008001","type":"工业监测点","value":32},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050219","code":"36050219","mapUrl":"secs/images/greed.jpeg","name":"江西新余南方建材有限公司","positon":{"address":"新余市渝水区袁河街道迎家新村社区","latitude":"27.7790111579","longitude":"114.8843585353"},"proKey":"008001","type":"工业监测点","value":25},{"clickUrl":"pageAction?filename=secs/test.xml&inscode=36050212","code":"36050212","mapUrl":"secs/images/greed.jpeg","name":"江西省双强化工有限公司","positon":{"address":"新余市渝水区袁河街道夏家管理处","latitude":"27.7745176487","longitude":"114.9020620737"},"proKey":"008001","type":"工业监测点","value":14}]
* legends:图例集合信息,[{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/greed.jpeg","maxValue":100,"minValue":0,"proKey":"008001","type":"工业监测点"},{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/yellow.jpeg","maxValue":300,"minValue":100,"proKey":"008001","type":"工业监测点"},{"desc":"总能耗（万吨标准煤）","mapUrl":"secs/images/red.jpeg","maxValue":0,"minValue":300,"proKey":"008001","type":"工业监测点"}]
* popUpShowInfoCallback:显示弹出框JS方法
* hideCallback:隐藏弹出框JS方法
*/
LayerHelper.addCommonLayer = function(layerName, stations, legends, proKey, popUpShowInfoCallback, hideCallback){
	var markers = new SuperMap.Layer.Markers(layerName);
	//添加图层
	$.each(stations, function(idx, item){
		var contentHTML = "<div style='font-size:.8em; opacity: 0.8; overflow-y:hidden;'>";
		var icon_height = 24;
		var icon_width = 24;
		//城市总览的数据
		if(item.desc){
			icon_height = 48;
			icon_width = 48;
			contentHTML += item.desc;
		}else{
			//各个监测点数据
			var type = item.type;
			var name = item.NAME;
			var address = item.positon.address;
			contentHTML = name+"<br/>"+"地址："+address;
			if("工业监测点"==type){
				contentHTML += addInfo(item.P008001);
				contentHTML += addInfo(item.P006);
				contentHTML += addInfo(item.P011);
				contentHTML += addInfo(item.P013);
				contentHTML += addInfo(item.P093);
			}
			if("建筑监测点"==type){
				contentHTML += addInfo(item.P020004);
				contentHTML += addInfo(item.P021001);
				contentHTML += addInfo(item.P021001006);
				contentHTML += addInfo(item.P020003);
			}
			if("照明监测点"==type){
				contentHTML += addInfo(item.P028002);
				contentHTML += addInfo(item.P028003);
				contentHTML += addInfo(item.P028004);
				contentHTML += addInfo(item.P028005);
				contentHTML += addInfo(item.P028008);
				contentHTML += addInfo(item.P028009);
			}
			if("可再生能源应用监测点"==type){
				contentHTML += addInfo(item.P031001);
				contentHTML += addInfo(item.P031002);
				contentHTML += addInfo(item.P031003);
				contentHTML += addInfo(item.P031004);
			}
			
			if("交通监测点"==type){
				contentHTML += addInfo(item.P022);
				contentHTML += addInfo(item.P090);
				contentHTML += addInfo(item.P026);
				contentHTML += addInfo(item.P027);
				contentHTML += addInfo(item.P091);
				contentHTML += addInfo(item.PLATENUMBER);
			}
			if("废气监测点"==type){
				contentHTML += addInfo(item.P046001001);
				contentHTML += addInfo(item.P046001002);
				contentHTML += addInfo(item.P046001005);
				contentHTML += addInfo(item.P046001006);
				contentHTML += addInfo(item.P046001007);
				contentHTML += addInfo(item.P046001008);
				contentHTML += addInfo(item.P046001009);
				contentHTML += addInfo(item.P046001010);
				contentHTML += addInfo(item.P046001011);
				contentHTML += addInfo(item.P046001012);
			}
			if("废水监测点"==type){
				contentHTML += addInfo(item.P046002001);
				contentHTML += addInfo(item.P046002010);
				contentHTML += addInfo(item.P046002002);
				contentHTML += addInfo(item.P046002005);
				contentHTML += addInfo(item.P046002006);
				contentHTML += addInfo(item.P046002007);
				contentHTML += addInfo(item.P046002008);
				contentHTML += addInfo(item.P046002009);
			}
			if("空气质量监测点"==type){
				contentHTML += addInfo(item.P046004001);
				contentHTML += addInfo(item.P046004002);
				contentHTML += addInfo(item.P046004003);
				contentHTML += addInfo(item.P046004004);
				contentHTML += addInfo(item.P046004005);
				contentHTML += addInfo(item.P046004006);
				contentHTML += addInfo(item.P046004007);
				contentHTML += addInfo(item.P046004008);
				contentHTML += addInfo(item.P046004009);
				contentHTML += addInfo(item.P046004010);
				contentHTML += addInfo(item.P046004011);
				contentHTML += addInfo(item.P046004012);
			}
			if("城市噪声监测点"==type){
				contentHTML += addInfo(item.P046012001);
				contentHTML += addInfo(item.P046012002);
				contentHTML += addInfo(item.P046012003);
				contentHTML += addInfo(item.P046012004);
				contentHTML += addInfo(item.P046012005);
				contentHTML += addInfo(item.P046012006);
				contentHTML += addInfo(item.P046012007);
				contentHTML += addInfo(item.P046012008);
				contentHTML += addInfo(item.P046012009);
				contentHTML += addInfo(item.P046012010);
				contentHTML += addInfo(item.P046012011);
				contentHTML += addInfo(item.P046012012);
				contentHTML += addInfo(item.P046012013);
			}
			if("地表水监测点"==type){
				contentHTML += addInfo(item.P046001001);
				contentHTML += addInfo(item.P046001002);
				contentHTML += addInfo(item.P046001003);
				contentHTML += addInfo(item.P046001004);
				contentHTML += addInfo(item.P046001005);
				contentHTML += addInfo(item.P046001006);
				contentHTML += addInfo(item.P046001007);
				contentHTML += addInfo(item.P046001008);
				contentHTML += addInfo(item.P046001009);
				contentHTML += addInfo(item.P046001010);
				contentHTML += addInfo(item.P046001011);
			}
		}
		
		contentHTML += "</div>";
		
		//经度纬度
		var log = item.positon.longitude;
		var lat = item.positon.latitude;
		var popup = new SuperMap.Popup.FramedCloud("popwin", new SuperMap.LonLat(log, lat), null, contentHTML, null, true);
		var point = new SuperMap.Geometry.Point(log, lat), size = new SuperMap.Size(icon_width, icon_height), offset = new SuperMap.Pixel(-(size.w / 2), -size.h), icon = new SuperMap.Icon(item.mapUrl, size, offset);
		var newMarker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y), icon);
		
		//覆盖点添加点位信息
		newMarker.events.on({"click":function () {
			//城市总览的点击事件
			if (item.nextLayerName) {
				item.onclickCallback(item.nextLayerName);
			}else{
				var code = item.CODE;
				if (code.indexOf("\u8d63") > -1) {
					code = code.substr(1, code.length);
				}
				if(item.CLICKURL=='secs/ksh/architec' || item.CLICKURL=='secs/ksh/renewable'){
					var schema = "kzs.";
					if(item.CLICKURL=='secs/ksh/architec'){
						schema = "jz.";
					}
					_lstViewRow( 'secs/common/time', code, "\u67e5\u770b", "edit", "&targetFileName="+item.CLICKURL+"&platform="+schema+"&proKey=" + item.proKey+"&module=kzsksh&view=edit");
				}else if(item.CLICKURL=='secs/ksh/enterprise' || item.CLICKURL=='secs/ksh/environmentfq'||item.CLICKURL=='secs/ksh/environmentfs'||item.CLICKURL=='secs/ksh/environmentdbs'||item.CLICKURL=='secs/ksh/lighting'||item.CLICKURL=='secs/ksh/environmentzs'||item.CLICKURL=='secs/ksh/environmentkq'){
					_lstViewRow( 'secs/common/time', code, "\u67e5\u770b", "edit", "&targetFileName="+item.CLICKURL+"&proKey=" + item.proKey+"&module=kzsksh&view=edit");
				}else
				{
					_lstViewRow(item.CLICKURL, code, "\u67e5\u770b", "edit", "&proKey=" + item.proKey);
				}
				
				//_lstViewRow(item.CLICKURL, code, "\u67e5\u770b", "edit", "&proKey=" + item.proKey);
			}
			hideCallback(popup);
		}, "mouseover":function () {
			$("#container").css("cursor", "pointer");
			popUpShowInfoCallback(popup);
		}, "mouseout":function () {
			$("#container").css("cursor", "default");
			hideCallback(popup);
		}});
		markers.addMarker(newMarker);
	});
	
	//添加图例信息
	$("#legendLi").empty();
	if(legends){
		var desc = document.createElement("span");
		desc.appendChild(document.createTextNode(legends[0].desc + ":"));
		$("#legendLi").append(desc);
		for (var i = 0, size = legends.length; i < size; i++) {
			var span = document.createElement("span");
			span.style.background = "url(" + legends[i].mapUrl + ")";
			span.style.margin = "0px 2px 0px 2px";
			span.style.padding = "0px 5px 0px 5px";
			if (i == size - 1) {
				var context = document.createTextNode(legends[i].minValue + "+");
				span.appendChild(context);
			} else {
				var context = document.createTextNode(legends[i].minValue + "-" + legends[i].maxValue);
				span.appendChild(context);
			}
			$("#legendLi").append(span);
		}
	}else{
		$("#legendLi").append("全市总览");
	}
	
	return markers;
}

function addInfo(info){
	if(info){
		return "<br/>" + info;
	}
	return "";
}
