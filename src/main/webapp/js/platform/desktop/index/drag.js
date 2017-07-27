//http://boring.youngpup.net/2001/domdrag/

/**
 * Base class of Drag
 * 鍙嫋鎷?Element 镄勫师褰紝鐢ㄦ潵灏?event 缁戝畾鍒板悇涓挬瀛愶紝杩欓儴鍒嗗竞姣旇缉阃氱敤镄勶紝netvibes 涔熸槸鍩烘湰瀹屽叏鐩稿悓镄勫疄鐜帮紝杩欓儴鍒嗘帹钻愮湅 dindin 镄勮繖涓紝涔熶细甯侄鐞呜В锛宧ttp://www.jroller.com/page/dindin/?anchor=pro_javascript_12
 * @example:
 * Drag.init( header_element, element );
 */
var Drag = {
	// 瀵硅繖涓猠lement镄勫紩鐢紝涓€娆″彧鑳芥嫋鎷戒竴涓狤lement
	obj: null , 
	/**
	 * @param: elementHeader	used to drag..
	 * @param: element			used to follow..
	 */
	init: function(elementHeader, element) {
		// 灏?start 缁戝畾鍒?onmousedown 浜嬩欢锛屾寜涓嬮紶镙囱Е鍙?start
		elementHeader.onmousedown = Drag.start;
		// 灏?element 瀛桦埌 header 镄?obj 閲岄溃锛屾柟渚?header 鎷栨嫿镄勬椂链椤紩鐢?
		elementHeader.obj = element;
		// 鍒濆鍖栫粷瀵圭殑鍧愭爣锛屽洜涓轰笉鏄?position = absolute 镓€浠ヤ笉浼氲捣浠€涔堜綔鐢紝浣嗘槸阒叉鍚庨溃 onDrag 镄勬椂链?parse 鍑洪敊浜?
		if(isNaN(parseInt(element.style.left))) {
			element.style.left = "0px";
		}
		if(isNaN(parseInt(element.style.top))) {
			element.style.top = "0px";
		}
		// 鎸备笂绌?Function锛屽垵濮嫔寲杩椤嚑涓垚锻桡紝鍦?Drag.init 琚皟鐢ㄥ悗镓嶅府瀹氩埌瀹为台镄勫嚱鏁?
		element.onDragStart = new Function();
		element.onDragEnd = new Function();
		element.onDrag = new Function();
	},
	// 寮€濮嬫嫋鎷界殑缁戝畾锛岀粦瀹氩埌榧犳爣镄勭Щ锷ㄧ殑 event 涓?
	start: function(event) {
		var element = Drag.obj = this.obj;
		// 瑙ｅ喅涓嶅悓娴忚鍣ㄧ殑 event 妯″瀷涓嶅悓镄勯棶棰?
		event = Drag.fixE(event);
		// 鐪嬬湅鏄笉鏄乏阌偣鍑?
		if(event.which != 1){
			// 闄や简宸﹂敭閮戒笉璧蜂綔鐢?
			return true ;
		}
		// 鍙傜収杩欎釜鍑芥暟镄勮В閲婏紝鎸备笂寮€濮嬫嫋鎷界殑阍╁瓙
		element.onDragStart();
		// 璁板綍榧犳爣鍧愭爣
		element.lastMouseX = event.clientX;
		element.lastMouseY = event.clientY;
		// 缁戝畾浜嬩欢
		document.onmouseup = Drag.end;
		document.onmousemove = Drag.drag;
		return false ;
	}, 
	// Element姝ｅ湪琚嫋锷ㄧ殑鍑芥暟
	drag: function(event) {
		event = Drag.fixE(event);
		if(event.which == 0 ) {
		 	return Drag.end();
		}
		// 姝ｅ湪琚嫋锷ㄧ殑Element
		var element = Drag.obj;
		// 榧犳爣鍧愭爣
		var _clientX = event.clientY;
		var _clientY = event.clientX;
		// 濡傛灉榧犳爣娌″姩灏变粈涔堥兘涓崭綔
		if(element.lastMouseX == _clientY && element.lastMouseY == _clientX) {
			return	false ;
		}
		// 鍒氭墠 Element 镄勫潗镙?
		var _lastX = parseInt(element.style.top);
		var _lastY = parseInt(element.style.left);
		// 鏂扮殑鍧愭爣
		var newX, newY;
		// 璁＄畻鏂扮殑鍧愭爣锛氩师鍏堢殑鍧愭爣+榧犳爣绉诲姩镄勫€煎樊
		newX = _lastY + _clientY - element.lastMouseX;
		newY = _lastX + _clientX - element.lastMouseY;
		// 淇敼 element 镄勬樉绀哄潗镙?
		element.style.left = newX + "px";
		element.style.top = newY + "px";
		// 璁板綍 element 鐜板湪镄勫潗镙囦緵涓嬩竴娆＄Щ锷ㄤ娇鐢?
		element.lastMouseX = _clientY;
		element.lastMouseY = _clientX;
		// 鍙傜収杩欎釜鍑芥暟镄勮В閲婏紝鎸傛帴涓?Drag 镞剁殑阍╁瓙
		element.onDrag(newX, newY);
		return false;
	},
	// Element 姝ｅ湪琚喷鏀剧殑鍑芥暟锛屽仠姝㈡嫋鎷?
	end: function(event) {
		event = Drag.fixE(event);
		// 瑙ｉ櫎浜嬩欢缁戝畾
		document.onmousemove = null;
		document.onmouseup = null;
		// 鍏堣褰曚笅 onDragEnd 镄勯挬瀛愶紝濂界Щ闄?obj
		var _onDragEndFuc = Drag.obj.onDragEnd();
		// 鎷栨嫿瀹屾瘯锛宱bj 娓呯┖
		Drag.obj = null ;
		return _onDragEndFuc;
	},
	// 瑙ｅ喅涓嶅悓娴忚鍣ㄧ殑 event 妯″瀷涓嶅悓镄勯棶棰?
	fixE: function(ig_) {
		if( typeof ig_ == "undefined" ) {
			ig_ = window.event;
		}
		if( typeof ig_.layerX == "undefined" ) {
			ig_.layerX = ig_.offsetX;
		}
		if( typeof ig_.layerY == "undefined" ) {
			ig_.layerY = ig_.offsetY;
		}
		if( typeof ig_.which == "undefined" ) {
			ig_.which = ig_.button;
		}
		return ig_;
	}
};

var DragDrop = Class.create();
DragDrop.prototype = {
	initialize: function(elementHeader_id , element_id){
		var element = document.getElementById(element_id);
		var elementHeader = document.getElementById(elementHeader_id);
		this._dragStart = ((typeof this.start_Drag == "function") ? this.start_Drag : start_Drag);
		this._drag = ((typeof this.when_Drag == "function") ? this.when_Drag : when_Drag);
		this._dragEnd = ((typeof this.end_Drag == "function") ? this.end_Drag : end_Drag);
		this._afterDrag = ((typeof this.after_Drag == "function") ? this.after_Drag : after_Drag);
		this.isDragging = false;
		this.elm = element;
		this.header = $(elementHeader.id);
		this.hasIFrame = this.elm.getElementsByTagName("IFRAME").length > 0;
		if( this.header) {
			this.header.style.cursor = "move";
			Drag.init( this.header, this.elm);
			this.elm.onDragStart = this._dragStart.bind(this);
			this.elm.onDrag = this._drag.bind(this);
			this.elm.onDragEnd = this._dragEnd.bind(this);
		}
	}
};

var DragUtil = new Object();
// 銮峰缑娴忚鍣ㄤ俊鎭?
DragUtil.getUserAgent = navigator.userAgent;
DragUtil.isGecko = DragUtil.getUserAgent.indexOf("Gecko") != -1;
DragUtil.isOpera = DragUtil.getUserAgent.indexOf("Opera") != -1;
// 璁＄畻姣忎釜鍙嫋鎷界殑鍏幂礌镄勫潗镙?
DragUtil.reCalculate = function(el) {
	for( var i = 0 ; i < DragUtil.dragArray.length; i++ ) {
		var ele = DragUtil.dragArray[i];
		var position = Position.positionedOffset(ele.elm);
		ele.elm.pagePosLeft = position[0];
		ele.elm.pagePosTop = position[1];
	}

};
// 鎷栧姩鍏幂礌镞舵樉绀虹殑鍗犱綅妗?
DragUtil.ghostElement = null ;
DragUtil.getGhostElement = function(){
	if(!DragUtil.ghostElement){
		DragUtil.ghostElement = document.createElement("DIV");
		DragUtil.ghostElement.className = "modbox";
		DragUtil.ghostElement.style.border = "2px dashed #aaa";
		DragUtil.ghostElement.innerHTML = "&nbsp;";
	}
	return DragUtil.ghostElement;
};

DragUtil.getSortIndex = function(){
	//var col_array = [ 'col_1' , 'col_2' , 'col_3'];
	var col_array = new Array();
	var j=0;
	for(var i=0;i<6;i++){
		j = i+1;
		if(document.getElementById('col_'+j) != null){
			col_array[i] = 'col_'+j;
		}
	}
	
	//alert(col_array.toString());
	var sortIndex = '';
	for(var i = 0; i < col_array.length ; i++){
		sortIndex += col_array[i] + ":";
		var childs = document.getElementsByClassName('drag_div' , col_array[i]);
		//alert(i+":"+childs.length+":"+document.getElementById(col_array[i]).innerHTML);
		for(var j = 0 ; j < childs.length ; j++){
			if(!Element.hasClassName(childs[j] , 'no_drag')){
				sortIndex += childs[j].id + ',';
			}
		}
		sortIndex += ";";
	}
	return sortIndex;
}


// 鍒濆鍖栨墍链夊彲鎷栨嫿镄勫厓绱狅紝渚濋潬 className 鏉ョ‘瀹氭槸鍚﹀彲鎷栨嫿锛屽彲鎷栨嫿镄勯儴鍒嗙殑 id 涓鸿鍏幂礌 id 锷犱笂 _h
var initDrag = function() {
	
	var tmpElements = document.getElementsByClassName('drag_div');
	DragUtil.dragArray = new Array();

	for(var i = 0 ; i < tmpElements.length ; i++){
		var tmpElement = tmpElements[i];
		var tmpElementId = tmpElement.id;
		var tmpHeaderElementId = tmpElement.id + '_h';
		DragUtil.dragArray[i] = new DragDrop(tmpHeaderElementId , tmpElementId);
	}
};

// 寮€濮嬫嫋鎷?
function start_Drag(){
	DragUtil.reCalculate(this);	// 閲嶆柊璁＄畻镓€链夊彲鎷栨嫿鍏幂礌镄勪綅缃?
	this.origNextSibling = this.elm.nextSibling;
	var _ghostElement = DragUtil.getGhostElement();
	var offH = this.elm.offsetHeight;
	if(DragUtil.isGecko){	// 淇 Gecko 寮曟搸镄勬€櫀
		offH -= parseInt(_ghostElement.style.borderTopWidth)  *   2 ;
	}
	var offW = this.elm.offsetWidth;
	var position = Position.positionedOffset(this.elm);
	var offLeft = position[0];
	var offTop = position[1];
	// 鍦ㄥ厓绱犵殑鍓嶉溃鎻掑叆鍗犱綅铏氱嚎妗?
	_ghostElement.style.height = offH + "px";
	this.elm.parentNode.insertBefore(_ghostElement,  this .elm.nextSibling);
	// 璁剧疆鍏幂礌镙峰纺灞炴€?
	this.elm.style.width = offW + "px";
	this.elm.style.position = "absolute";
	this.elm.style.zIndex = 100;
	this.elm.style.left = offLeft + "px";
	this.elm.style.top = offTop + "px";
	this.isDragging = false;
	return false;
}

// 鎷栧姩镞惰Е鍙戣繖涓嚱鏁帮纸姣忔榧犳爣鍧愭爣鍙桦寲镞讹级
function when_Drag(clientX , clientY){
	if (!this.isDragging){	// 绗竴娆＄Щ锷ㄩ紶镙囷紝璁剧疆瀹幂殑镙峰纺
		this.elm.style.filter = "alpha(opacity=70)";
		this.elm.style.opacity = 0.7;
		this.isDragging = true;
	}
	// 璁＄畻绂诲綋鍓嶉紶镙囦綅缃渶杩戠殑鍙嫋鎷界殑鍏幂礌锛屾妸璇ュ厓绱犳斁鍒?found 鍙橀噺涓?
	var found = null;
	var max_distance = 100000000;
	for(var i = 0 ; i < DragUtil.dragArray.length; i++) {
		var ele = DragUtil.dragArray[i];
		var distance = Math.sqrt(Math.pow(clientX - ele.elm.pagePosLeft, 2 ) + Math.pow(clientY - ele.elm.pagePosTop, 2 ));
		if(ele == this ) {
			continue;
		}
		if(isNaN(distance)){
			continue;
		}
		if(distance < max_distance){
			max_distance = distance;
			found = ele;
		}
	}
	// 鎶婅櫄绾挎鎻掑埌 found 鍏幂礌镄勫墠闱?
	var _ghostElement = DragUtil.getGhostElement();
	//document.getElementById("ttt").innerHTML+=":"+_ghostElement.nextSibling.outerHTML+":"+found.elm.outerHTML;
	if(found != null && _ghostElement.nextSibling != found.elm) {
		found.elm.parentNode.insertBefore(_ghostElement, found.elm);
		if(DragUtil.isOpera){	// Opera 镄勬瘘鐥?
			document.body.style.display = "none";
			document.body.style.display = "";
		}
	}
}
// 缁撴潫鎷栨嫿
function end_Drag(){
	if(this._afterDrag()){
		// 鍦ㄨ繖鍙互锅氢竴浜涙嫋鎷芥垚锷熷悗镄勪簨锛屾瘮濡?Ajax 阃氱煡链嶅姟鍣ㄧ淇敼鍧愭爣锛屼互渚夸笅娆＄敤鎴疯繘鏉ユ椂浣岖疆涓嶅彉
		var str = DragUtil.getSortIndex();
		//var par = 'actionType=ddorder&str='+str
		//alert("end_Drag():"+str);
		//saveDrag('operCookie.jsp',par);
		initNewsPic();
		saveorder();
		
		//鍒ゆ柇鍏幂礌鏄惁鍚湁iframe 濡傛灉链夊垯鍒锋柊璇ュ厓绱?
		if(this.hasIFrame|this.elm.innerHTML.indexOf("IFRAME")>0){
			var dragId = this.elm.id;
			dragId = dragId.replace("drag_","");
			//desktopWhole.jsp涓殑鍒锋柊鏂规硶
			loadDragContent(dragId);
		}
	}
	return true;
}

function saveDrag(url,par){

	queryString = par;
	new Ajax.Request
	(
		url,
		{
			method: "post",	
			onSuccess : function(resp)
						{
							//alert(resp.responseText)
							
						},
			onFailure : function()
						{
							//alert(url);
							
						},
			parameters : queryString
		}
	);

}

// 缁撴潫鎷栨嫿镞惰皟鐢ㄧ殑鍑芥暟
function after_Drag(){
	var returnValue = false;
	// 鎶婃嫋锷ㄧ殑鍏幂礌镄勬牱寮忓洖澶嶅埌铡熸潵镄勭姸镐?
	this.elm.style.position = "";
	this.elm.style.top = "";
	this.elm.style.left = "";
	this.elm.style.width = "";
	this.elm.style.zIndex = "";
	this.elm.style.filter = "";
	this.elm.style.opacity = "";
	// 鍦ㄨ櫄绾挎镄勫湴鏂规彃鍏ユ嫋锷ㄧ殑杩欎釜鍏幂礌
	var ele = DragUtil.getGhostElement();
	if(ele.nextSibling != this.origNextSibling) {
		ele.parentNode.insertBefore( this.elm, ele.nextSibling);
		returnValue = true;
	}
	// 鍒犻櫎铏氱嚎妗?
	ele.parentNode.removeChild(ele);
	if(DragUtil.isOpera) {
		document.body.style.display = "none";
		document.body.style.display = "" ;
	}
	return returnValue;
}