function LayerObject(map, url, layerName){
	this.url = url;
	this.map = map;
	this.layerName = layerName;
	
	var objs = [];
	var infoWin = null;
	//解析返回的XML
	this.showMarker=function(xml) {
		$(xml).find("FeatureMember").each(function(i){
			var fields = $(this).find("Fields");
	
			var obj = new Object();
			obj.smid = $(fields).find("SMID").text();
			obj.smx = $(fields).find("SMX").text();
			obj.smy = $(fields).find("SMY").text();
			obj.name = $(fields).find("NAME").text();
			obj.addr = $(fields).find("ADDRESS").text();
			objs.push(obj);
		});
	    //获取加载的图层
		var getMarkerLayer = function(map, layerName) {
			var markerLayers = map.getLayersByName(layerName), markers = null;
			if (markerLayers.length > 0) {
				return markerLayers[0];
			} else {
				markers = new SuperMap.Layer.Markers(layerName);
				map.addLayer(markers);
				return markers;
			}
		};
		//点击弹出事件
		var openInfoWin=function() {
			var marker = this;
			var smid = this.smid;
			var name = "", addr = "";
			alert(smid);
		};
		// 当鼠标移动上去显示的信息
		var showInfoWin = function(){
			var marker = this;
			var smid = this.smid;
			var name = "", addr = "";
		
			for(var i=0; i<objs.length; i++){
				if(objs[i].smid == smid){
					name = objs[i].name;
					addr = objs[i].addr;
					break;
				}
			}
			
			var str = "名称：" + name + "</br>" + "地址：" + addr;
		
			var lonlat = marker.getLonLat();
			var contentHTML = "<div style=\'font-size:.8em; opacity: 0.8; overflow-y:hidden;\'>";
			contentHTML += "<div>" + str + "</div></div>";
		
			var popup = new SuperMap.Popup.FramedCloud("popwin",
					new SuperMap.LonLat(lonlat.lon, lonlat.lat), null,
					contentHTML, null, true);
			infoWin = popup;
			map.addPopup(popup);
		};
		// 当鼠标移开之后删除的信息
		var closeShowInfoWin = function(){
			if(infoWin){
				try{
					infoWin.hide();
					infoWin.destroy();
				}catch(e){
				}
			}
		};
		var markerLayer = getMarkerLayer(map, layerName);
		for(var i=0; i<objs.length; i++){
			var point = new SuperMap.Geometry.Point(objs[i].smx, objs[i].smy), 
				size = new SuperMap.Size(44, 33), 
				offset = new SuperMap.Pixel(-(size.w / 2), -size.h), 
				icon = new SuperMap.Icon("js/secs/map/theme/images/marker.png", size, offset);
			var newMarker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y), icon);
			newMarker.smid = objs[i].smid;
			newMarker.events.on({
				"click" : openInfoWin,
				"mouseover" : showInfoWin,
				"mouseout" : closeShowInfoWin
			});
			markerLayer.addMarker(newMarker);
		}
	};
}

LayerObject.prototype = {
	getUrl:function(){
		return "view/secs/map/httpproxy.jsp?url=" + encodeURIComponent(this.url);
		//return "http://localhost:8080/SECS/console/js/secs/map/testdata/httpproxy.jsp?url=" + encodeURIComponent(this.url);
		//return this.url;
	},
	addLayer:function(){
		var sfsObj ={};
		sfsObj.url = this.getUrl();
		sfsObj.showMarker = this.showMarker; 
		// SFS的Filter查询
		$.ajax({
			type : "GET",
			url : sfsObj.url,
			async : false,
			contentType : "application/x-www-form-urlencoded:charset=UTF-8",
			success: function(xml){
				sfsObj.showMarker(xml);
			},
			error: function(info){
				alert(info);
			}
		});
	},
	clearLayer:function(){
		var markerLayers = this.map.getLayersByName(this.layerName);
		if (markerLayers.length > 0) {
			map.removeLayer(markerLayers[0], true);
		}
		 
		
	}
	
};
	

