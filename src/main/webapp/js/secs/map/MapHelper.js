﻿/*
*负责初始化地图MAP。
*/
function MapHelper(){};

MapHelper.init=function(id){
	var map = new SuperMap.Map(
						id,
						{controls: [
						    new SuperMap.Control.ScaleLine(),
							new SuperMap.Control.PanZoomBar({
									showSlider:true,
									levelsDesc:{
										levels: [],
										textSources: []}
								}),
		                    new SuperMap.Control.Navigation({
		                        dragPanOptions: {
		                                            enableKinetic: true
		                                        }
		                    })],
	                    allOverlays: true
	                });
               mapExtent = new SuperMap.Bounds(-180,-90,180,90);
               map.maxExtent = mapExtent;
	return map;
};

	
/*
*添加基础图层
*/
MapHelper.initBaseMap=function(map){
	//初始化矢量地图范围
	mapExtent_dlg = new SuperMap.Bounds(-180,-90,180,90);
	//初始化影像地图范围
    mapExtent_dom = new SuperMap.Bounds(114.352,27.5237,115.539,28.1172);
    
	map.maxExtent = mapExtent_dlg;
	loadWMTSService_dom();
	loadWMTSService_dlg();
	loadWMTSService_sgsdlg();
	//图层添加并显示指定级别
    map.addLayers([wmtsLayer_dlg]);  
    map.setCenter(new SuperMap.LonLat((114.71505+115.12865)/2, (27.7242+27.931)/2), 0);
    showdlgLayer(map);
    
};

//wmtsLayer_dlg矢量图 , wmtsLayer_dom影像图, wmtsLayer_sgsdlg国土矢量图, 矢量图的范围, 影像图的范围
var map, center, wmtsLayer_dlg,wmtsLayer_dom,wmtsLayer_sgsdlg, wmsLayer,wmtsLayer2, resolutions, mapExtent;		
//影像地图链接
var wmtsUrl_dom = "http://190.168.100.53:8090/dfc/services/ogc/wmts/YingXiangDiTu";
//国土地图链接
var wmtsUrl_dlg = "http://10.65.24.1:8719/wmts";
//矢量地图链接
var wmtsUrl_sgsdlg = "http://190.168.100.53:8090/dfc/services/ogc/wmts/ShiLiangDiTu";
		var tempFeature = 0;
		var lineLayer,drawLine, measureControl,polygonLayer, drawPolygon;
		var style = {strokeColor: "#304DBE",
				     strokeWidth: 2,
				     pointerEvents: "visiblePainted",
				     fillColor: "#304DBE",
				     fillOpacity: 0.8
				    };
		var layer, vectorLayer, vector_style, vector_style_select, myFilter, drawings = null, draw = null;		
		var markerLayer_sfs = null;
//影像图的界限
var resolutions_dom = [0.0003433227539065218415658857953073151,
					0.0001716613769517643134834234595075500,
					0.00008583068847737876404123116789988247,
					0.00004291534423719277472109614580383378,
					0.00002145767211859638736054807290191689,
					0.00001072883606079480097979347459706592,
					0.000005364418030397400489896737298532959,
					0.000002682209015198700244948368649266479,
					0.000001341104506102742822954746178525766];
//矢量地图的界限
var resolutions_dlg = [0.00034332275390625,0.000171661376953125,0.0000858306884765625,0.00004291534423828125,0.00002145767211914062,0.00001072883605957031,0,0,0];
//加载影像地图								
function loadWMTSService_dom(){
	//wmts或许所需要的matrixID信息
    var matrixIds = [];
    for (var i=0; i<9; ++i) {
        matrixIds[i] = {identifier:i+2};
    };
    //当前图层的分辨率数组信息,和matrixIds一样，需要用户从wmts服务获取并明确设置,resolutions数组和matrixIds数组长度相同
   
    //新建图层
    wmtsLayer_dom = new SuperMap.Layer.WMTS({name: "影像图",
        	url: wmtsUrl_dom,
          layer: "YingXiangDiTu",
          style: "default",
          matrixSet: "CustomCRS4326ScaleShiLiangTu",
          format: "image/png",
          resolutions:resolutions_dom,
          matrixIds:matrixIds,
          opacity: 1,
          requestEncoding:"KVP"});
}

		/**0
		 * 加载WMTS服务
		 */
		function loadWMTSService_dlg(){
			//wmts或许所需要的matrixID信息
		    var matrixIds = [];
		    for (var i=0; i<6; ++i) {
		        matrixIds[i] = {identifier:i+12};
		    };
		    //当前图层的分辨率数组信息,和matrixIds一样，需要用户从wmts服务获取并明确设置,resolutions数组和matrixIds数组长度相同
		   
		    //新建图层
		    wmtsLayer_dlg = new SuperMap.Layer.WMTS({name: "矢量图",
		        	url: wmtsUrl_dlg,
		          layer: "xinyudlg",
		          style: "Default",
		          matrixSet: "epsg:4490",
		          format: "image/png",
		          resolutions:resolutions_dlg,
		          matrixIds:matrixIds,
		          opacity: 1,
		          requestEncoding:"REST"});

		    //图层添加并显示指定级别
			
		    map.addLayers([wmtsLayer_dlg]);  
		    map.setCenter(new SuperMap.LonLat((114.71505+115.12865)/2, (27.7242+27.931)/2), 0);
		} 
		 
		function loadWMTSService_dom(){
			//wmts或许所需要的matrixID信息
		    var matrixIds = [];
		    for (var i=0; i<9; ++i) {
		        matrixIds[i] = {identifier:i+2};
		    };
		    //当前图层的分辨率数组信息,和matrixIds一样，需要用户从wmts服务获取并明确设置,resolutions数组和matrixIds数组长度相同
		   
		    //新建图层
		    wmtsLayer_dom = new SuperMap.Layer.WMTS({name: "影像图",
		        	url: wmtsUrl_dom,
		          layer: "YingXiangDiTu",
		          style: "default",
		          matrixSet: "CustomCRS4326ScaleYingXiangDiTu",
		          format: "image/png",
		          resolutions:resolutions_dom,
		          matrixIds:matrixIds,
		          opacity: 1,
		          requestEncoding:"KVP"});

			//wmtsLayer.resolutions = resolutions;
			//wmtsLayer.projection = new SuperMap.Projection("EPSG:4326");

		    //图层添加并显示指定级别
		    //map.addLayers([wmtsLayer_dom]); 
		    //map.setCenter(new SuperMap.LonLat((114.71505+115.12865)/2, (27.7242+27.931)/2), 0);

		}
		
		function loadWMTSService_sgsdlg(){
			//wmts或许所需要的matrixID信息
		    var matrixIds = [];
		    for (var i=0; i<9; ++i) {
		        matrixIds[i] = {identifier:i+2};
		    };
		    //当前图层的分辨率数组信息,和matrixIds一样，需要用户从wmts服务获取并明确设置,resolutions数组和matrixIds数组长度相同
		   
		    //新建图层
		    wmtsLayer_sgsdlg = new SuperMap.Layer.WMTS({name: "矢量图sgs",
		        	url: wmtsUrl_sgsdlg,
		          layer: "ShiLiangDiTu",
		          style: "default",
		          matrixSet: "CustomCRS4326ScaleShiLiangDiTu",
		          format: "image/png",
		          resolutions:resolutions_dom,
		          matrixIds:matrixIds,
		          opacity: 1,
		          requestEncoding:"KVP"});

			//wmtsLayer.resolutions = resolutions;
			//wmtsLayer.projection = new SuperMap.Projection("EPSG:4326");

		    //图层添加并显示指定级别
		    //map.addLayers([wmtsLayer_dom]); 
		    //map.setCenter(new SuperMap.LonLat((114.71505+115.12865)/2, (27.7242+27.931)/2), 0);

		}

//显示国土局矢量图
		var mapExtent_dlg = new SuperMap.Bounds(-180,-90,180,90);
		function showdlgLayer(){
			//mapExtent = new SuperMap.Bounds(-180,-90,180,90);
			swap();
	        map.maxExtent = mapExtent_dlg;
			map.resolutions = resolutions_dlg;
			
			map.addLayers([wmtsLayer_dlg]);
			//alert(map.getLayerIndex(wmtsLayer_dom));
			if(map.getLayerIndex(wmtsLayer_dom) > -1){
				map.removeLayer(wmtsLayer_dom,wmtsLayer_dlg);
				//map.setLayerIndex(wmtsLayer_dlg,1);
				//map.setLayerIndex(wmtsLayer_dom,0);
				
			}	
			//if(markerLayer_sfs != null) {
			//	map.removeLayer(markerLayer_sfs,wmtsLayer_dlg);
			//}
			synchronize();
			//map.setBaseLayer(wmtsLayer_dlg);
			//map.raiseLayer(wmtsLayer_dlg,1);
			
		}
	//显示SGS影像图
		var mapExtent_dom = new SuperMap.Bounds(114.352,27.5237,115.539,28.1172);
		function showdomLayer(){
			swap();
			//mapExtent = new SuperMap.Bounds(114.71505,27.7242,115.12865,27.931);
	        map.maxExtent = mapExtent_dom;
			map.resolutions = resolutions_dom;
		
			map.addLayers([wmtsLayer_dom]); 
			//alert(map.getLayerIndex(wmtsLayer_dlg));
			if(map.getLayerIndex(wmtsLayer_dlg) > -1){
				map.removeLayer(wmtsLayer_dlg,wmtsLayer_dom);
				//map.setLayerIndex(wmtsLayer_dom,2);		
				//map.setLayerIndex(wmtsLayer_dlg,0);	
				//queryBySFS();
			}
			if(map.getLayerIndex(wmtsLayer_sgsdlg) > -1){
				map.removeLayer(wmtsLayer_sgsdlg,wmtsLayer_dom);

			}
			//if(markerLayer_sfs != null) {
			//	map.removeLayer(markerLayer_sfs,wmtsLayer_dom);
			//}
			//queryBySFS();
			if(markerLayer_sfs != null) {
				markerLayer_sfs.maxExtent =  mapExtent_dom;
			}
			
			//map.setBaseLayer(wmtsLayer_dom);	
			map.raiseLayer(wmtsLayer_dom,-1);			
			synchronize();
			//map.setBaseLayer(wmtsLayer_dom);			
			//map.raiseLayer(wmtsLayer_dom,1);
		}

//显示SGS矢量图-服务聚合
		function showsgsdlgLayer(){
			//mapExtent = new SuperMap.Bounds(114.71505,27.7242,115.12865,27.931);
	        map.maxExtent = mapExtent_dom;
			map.resolutions = resolutions_dom;
		
			map.addLayers([wmtsLayer_sgsdlg]); 
			//alert(map.getLayerIndex(wmtsLayer_dlg));
			if(map.getLayerIndex(wmtsLayer_dlg) > -1){
				map.removeLayer(wmtsLayer_dlg,wmtsLayer_sgsdlg);
				//map.setLayerIndex(wmtsLayer_dom,2);		
				//map.setLayerIndex(wmtsLayer_dlg,0);	
				//queryBySFS();
			}
			//if(markerLayer_sfs != null) {
			//	map.removeLayer(markerLayer_sfs,wmtsLayer_sgsdlg);
			//}
			//queryBySFS();
			if(markerLayer_sfs != null) {
				markerLayer_sfs.maxExtent =  mapExtent_dom;
			}
			map.raiseLayer(wmtsLayer_sgsdlg,-1);
			//map.setBaseLayer(wmtsLayer_sgsdlg);	
			synchronize();			
			//map.raiseLayer(wmtsLayer_dom,1);
		}

//显示国土局矢量-服务聚合
function showgtdlgLayer(){
	        map.maxExtent = mapExtent_dlg;
			map.resolutions = resolutions_dlg;
			
			map.addLayers([wmtsLayer_dlg]);
			//alert(map.getLayerIndex(wmtsLayer_dom));
			if(map.getLayerIndex(wmtsLayer_sgsdlg) > -1){
				map.removeLayer(wmtsLayer_sgsdlg,wmtsLayer_dlg);
				//map.setLayerIndex(wmtsLayer_dlg,1);
				//map.setLayerIndex(wmtsLayer_dom,0);
				
			}	
			//if(markerLayer_sfs != null) {
			//	map.removeLayer(markerLayer_sfs,wmtsLayer_dlg);
			//}
			
			//queryBySFS();
			if(markerLayer_sfs != null) {
			    markerLayer_sfs.maxExtent =  mapExtent_dom;
			}
			//map.setBaseLayer(wmtsLayer_dlg);
			map.raiseLayer(wmtsLayer_dlg,-1);
			synchronize();
			//map.raiseLayer(wmtsLayer_dlg,1);
			
		}
		
function reloadLayer(map, layer){
	if(third_Layer){
		map.removeLayer(third_Layer,layer);
		map.addLayers([third_Layer]);
	}
	
}
function checkMapZoom(map){
	var mapzoom = map.getZoom();
	if (map.getLayersByName('矢量图') != null && map.getLayersByName('矢量图') != '' && mapzoom > 3) {
		showsgsdlgLayer();
	}
	if (map.getLayersByName('矢量图sgs') != null && map.getLayersByName('矢量图sgs') != '' && mapzoom < 4) {
		showgtdlgLayer();
	}
}

function swap(){
	var div1 = document.getElementById("div_dlg");
	var div2 = document.getElementById("div_dom");
	var temp = div1.style.display;
	div1.style.display = div2.style.display;
	div2.style.display = temp;
}

function synchronize(){
	map.pan(0.1,0,null);
	map.pan(-0.1,0,null);
}
