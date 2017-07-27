function getTree(id,setting,zNode){
	$.fn.zTree.init($("#"+id), setting, zNode);
}
function getTreeObject(id)
{
	var zTree = $.fn.zTree.getZTreeObj(id);
	return 	zTree;
}
function getDocument(id){
	return document.getElementById(id);
}
/** 获取浏览器高度和宽度 **/
var myWidth = 0, myHeight = 0, isOpen = 0, heightRecord = 350,
editor = null;//高亮代码编辑器
if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
} 
else if(document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight)){
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;  
}

window.onresize = function () 
{ 
    if( typeof( window.innerWidth ) == 'number' ) {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } 
    else if(document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight)){
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;  
    }
    mapheight();
} 

/** 显示还是隐藏 **/
function Contextdisplay(whichID){
	getDocument(whichID).style.display=(getDocument(whichID).style.display!= 'block'? 'block' : 'none');
}
/** 隐藏 **/
function displayHidden(whichID){
	getDocument(whichID).style.display= 'none';
}
/** 显示 **/
function displayBlock(whichID){
	getDocument(whichID).style.display= 'block';
}
/** 设置地图容器高度 **/
function mapheight(){
	if(getDocument("container")){
		getDocument("container").style.height = myHeight - 76 + "px";
	}
    
}



//sub tab
function subTitle1On1(){
    getDocument("subTitle1").style.background = '#eaeaea url(js/secs/map/img/tab-a.png) no-repeat 0 3px';
    getDocument("subTitle1a").style.background = '#eaeaea url(js/secs/map/img/tab-b.png) no-repeat 100% 3px';
}

function subTitle2On2(){
    getDocument("subTitle2").style.background = '#eaeaea url(js/secs/map/img/tab-a.png) no-repeat 0 3px';
    getDocument("subTitle2a").style.background = '#eaeaea url(js/secs/map/img/tab-b.png) no-repeat 100% 3px';
}

function subTitle1On2(){
    getDocument("subTitle2").style.background = '#eaeaea url(js/secs/map/img/tab-a.png) no-repeat 0 3px';
    getDocument("subTitle2a").style.background = '#eaeaea url(js/secs/map/img/tab-b.png) no-repeat 100% 3px';
}

function subTitle3On3(){
    getDocument("subTitle3").style.background = '#eaeaea url(js/secs/map/img/tab-a.png) no-repeat 0 3px';
    getDocument("subTitle3a").style.background = '#eaeaea url(js/secs/map/img/tab-b.png) no-repeat 100% 3px';
}
