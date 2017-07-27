'use strict';
$(document).ready(function(){
	$('#energy-down').on('click', function(event){
		event.stopPropagation();
		var menus = new Array();
		menus[0] = {'title':'能耗强度','summary':'能耗强度(吨标煤/万元)','big':'0.81','rate':'8.3%','arrow':'down'};
		menus[1] = {'title':'能耗总量','summary':'能耗总量(万吨标煤)','big':'174.2','rate':'3.1%','arrow':'up'};
		menus[2] = {'title':'能耗增量','summary':'能耗增量(万吨标煤)','big':'70','rate':'70%','arrow':'up'};
		var $wrap_slideDown = makeSildeMenu(menus,'menu-energy');
		$(this).after($wrap_slideDown);
		$(this).toggleClass('active');
		$wrap_slideDown.toggleClass('hide');
	});

	$('#environment-down').on('click', function(event){		
		event.stopPropagation();
		var menus = new Array();
		menus[0] = {'title':'废气总量','summary':'全年城区空气环境质量','big':'2级','rate':'达标','arrow':'no'};
		menus[1] = {'title':'废水总量','summary':'全年城区水环境质量','big':'1级','rate':'达标','arrow':'no'};
		menus[2] = {'title':'SO2总量','summary':'全年城区SO2环境质量','big':'3级','rate':'不达标','arrow':'no'};
		menus[3] = {'title':'COD总量','summary':'全年城区COD环境质量','big':'2级','rate':'达标','arrow':'no'};
		menus[4] = {'title':'NOx总量','summary':'全年城区NOx环境质量','big':'1级','rate':'达标','arrow':'no'};
		menus[5] = {'title':'氨氮总量','summary':'全年城区氨氮环境质量','big':'2级','rate':'达标','arrow':'no'};
		var $wrap_slideDown = makeSildeMenu(menus,'menu-environment');
		$(this).after($wrap_slideDown);
		$(this).toggleClass('active');
		$wrap_slideDown.toggleClass('hide');
	});

	$('#capacity-down').on('click', function(event){
		event.stopPropagation();
		var menus = new Array();
		menus[0] = {'title':'原煤产量','summary':'发电总量(亿千瓦时)','big':'57.4','rate':'4.8%','arrow':'up'};
		menus[1] = {'title':'钢材产量','summary':'钢材总量(吨)','big':'23.4','rate':'4.9%','arrow':'down'};
		menus[2] = {'title':'单晶硅产量','summary':'单晶硅总量(吨)','big':'36.2','rate':'4.0%','arrow':'up'};
		menus[3] = {'title':'多晶硅部量','summary':'多晶硅总量(吨)','big':'89.2','rate':'5.0%','arrow':'down'};
		menus[4] = {'title':'光伏发电量','summary':'光伏发电总量(亿千瓦时)','big':'77.1','rate':'3.8%','arrow':'down'};
		var $wrap_slideDown = makeSildeMenu(menus,'menu-capacity');
		$(this).after($wrap_slideDown);
		$(this).toggleClass('active');
		$wrap_slideDown.toggleClass('hide');
	});

	$('#economy-down').on('click', function(event){
		event.stopPropagation();
		var menus = new Array();
		menus[0] = {'title':'第一产业','summary':'地区生产总值(亿元)','big':'404.9','rate':'8.1%','arrow':'up'};
		menus[1] = {'title':'第二产业','summary':'地区生产总值(亿元)','big':'405.9','rate':'8.5%','arrow':'down'};
		menus[2] = {'title':'第三产业','summary':'地区生产总值(亿元)','big':'403.9','rate':'8.2%','arrow':'up'};
		menus[3] = {'title':'三产结构比','summary':'地区生产总值(亿元)','big':'22.6','rate':'2.3%','arrow':'down'};
		var $wrap_slideDown = makeSildeMenu(menus,'menu-economy');
		$(this).after($wrap_slideDown);
		$(this).toggleClass('active');
		$wrap_slideDown.toggleClass('hide');
	});

	$('.line-title').delegate('.slide-menu-ul li','click',function(){
		var summary = $(this).find('a').data('summary');
		var big = $(this).find('a').data('big');
		var rate = $(this).find('a').data('rate');
		var arrow = $(this).find('a').data('arrow');
		$(this).parent().parent().find('p').html(summary);
		$(this).parent().parent().next('.line-data').find('.value').html(big);
		$(this).parent().parent().next('.line-data').find('.value').attr('data-num',big);
		$(this).parent().parent().next('.line-data').find('.rank').html(rate + '<em class="arrow-'+arrow+'"></em>');
		$(this).parent().parent().next('.line-data').find('.rank').attr('data-num',rate);
		$(this).parent().parent().find('a').removeClass('active');
		$(this).parent().parent().find('ul').addClass('hide');

	});

	$(document).on('click',function(){
		if(!$(".slide-menu-ul").hasClass("hide"));{
            $(".slide-menu-ul").addClass("hide");
			$('.line-title').find('a.active').removeClass('active');
        };
	});

	$('#monitoring-point-data ul li').each(function(index){
		var targetId = "target-" + index;
		var resultId = "result-" + index;
		var bdata = $('#'+targetId).text();
		var adata = $('#'+resultId).text();
		var temp = parseInt(bdata);
		setInterval(function(){
			if (temp >= parseInt(adata)) {
				temp = parseInt(bdata);
			};
			$('#'+targetId).html( temp += 10);
			
		},1000);
	});

	$('.intnum').each(function(index){
		var targetId = "num-" + index;  
		var val = $(this).text();
		setInterval(function(){
			val = parseInt(val);
			var randomnum = Math.random();
			var resultnum = parseInt(randomnum*10+1);			
			if(randomnum == 0){
				val = val - resultnum;
			}else{
				val = val + resultnum;
			}
			$('#'+targetId).html(val);	
		},2000);	
	});

	$('.fastgo .btns button').on('click',function(){
		$('.fastgo .btns button').removeClass('active');
		$(this).toggleClass('active');
	});

	$('.sub-sys-in .btns button').on('click',function(){
		$('.sub-sys-in .btns button').removeClass('active');
		$(this).toggleClass('active');
	});

})

function makeSildeMenu(menus,menuid){
	var $wrap_slideDown = "";
	if($('#'+menuid).length>0){
		$wrap_slideDown = $('#'+menuid);
	}else{
		$wrap_slideDown = $('<ul />',{'class':'hide slide-menu-ul','id':menuid,'style':'position:absolute;right:0; top:34px;z-index:9999;width: 120px;margin-top:-3px;margin-right:2px;'});
		for(var data in menus){
			var len = menus.length;
			var $menuLi = "";
			if(data == 0){						
				$menuLi = $('<li />',{'style':'list-style:none;background:url("../assets/images/menu_1.png") 0 -53px no-repeat; height:25px;width:120px;color: #fff;border:none;padding-left:10px;padding-top:5px;'})
						.append($('<a />',{'data-summary':menus[data].summary,'data-big':menus[data].big,'data-rate':menus[data].rate,'data-arrow':menus[data].arrow,'style':'text-decoration: none;width:100%;background:none;'}).html(menus[data].title));
			}else{
				$menuLi = $('<li />',{'style':'list-style:none;background:url("../assets/images/menu_1.png") 0 -86px no-repeat; height:24px;width:120px;color: #fff;border:none;padding-left:10px;padding-top:5px;','data-summary':menus[data].summary,'data-big':menus[data].big,'data-rate':menus[data].rate,'data-arrow':menus[data].arrow})
						.append($('<a />',{'data-summary':menus[data].summary,'data-big':menus[data].big,'data-rate':menus[data].rate,'data-arrow':menus[data].arrow,'style':'text-decoration: none;width:100%;background:none'}).html(menus[data].title));
			}
			$wrap_slideDown.append($menuLi);
		}
	}				
	return $wrap_slideDown;
}