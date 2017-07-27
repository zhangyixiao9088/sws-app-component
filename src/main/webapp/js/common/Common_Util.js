/**
 *****************************************************************
 * 功能：常用工具
 * 作者：csat
 * 时间：2012-11-02
 *****************************************************************
 */

if(typeof common_util == "undefined") {
	var common_util = new Common_Util();
}

function Common_Util() {
	
}
	
/** 
 * getElementById函数封装
 * @param id : 对象id
 */
Common_Util.prototype.$ = function(id) {
	return document.getElementById(id);
}

/**
 * 判断对象是否未定义
 * @param object : 待处理对象
 */
Common_Util.prototype.isUndefined = function (object) {
	return "undefined" == typeof object;
}

/**
 * 判断对象是否已定义
 * @param object : 待处理对象
 */
Common_Util.prototype.isDefined = function (object) {
	return !this.isUndefined(object);
}

/**
 * 获取对象的类型
 * @param object : 待处理对象
 */
Common_Util.prototype.type = function(object) {
    switch(object) {
        case null:
            return "null";
        case undefined:
            return "undefined";
    }
	var s = Object.prototype.toString.call(object);
    switch(s) {
    	case "[object String]":
       		return "string";
       	case "[object Number]":
           	return "number";
       	case "[object Boolean]":
           	return "boolean";
       	case "[object Array]":
           	return "array";
       	case "[object Date]":
           	return "date";
       	case "[object Function]":
           	return "function";
       	case "[object RegExp]":
           	return "regExp";
       	case "[object Object]":
           	return "object";
       	default:
           	return "object";
	}
}

/**
 * 编码中文字符
 * @param string：中文字符
 */
Common_Util.prototype.encode = function(string) {
	return encodeURI(encodeURI(decodeURIComponent(string)));
}

/** 获取配置列表的参数 */
Common_Util.prototype.getParametes = function() {
	var parametes = decodeURIComponent(document.forms[0].parametes.value);
	var jsonObject = eval("("+ parametes +")");
	for(var name in jsonObject) {
		jsonObject[name] = decodeURIComponent(jsonObject[name]);	// 解码
	}
	return jsonObject;
}

/** 获取当前链接地址中的参数 */
/**
 * This function parses ampersand-separated name=value argument pairs from 
 * the query string of the URL. It stores the name=value pairs in 
 * properties of an object and returns that object. Use it like this: 
 * 
 * var args = getArgs();  // Parse args from URL 
 * var q = args.q || "";  // Use argument, if defined, or a default value 
 * var n = args.n ? parseInt(args.n) : 10; 
 */
Common_Util.prototype.getArgs = function() {
    var args = new Object();
    var query = location.search.substring(1);	// 获取url中query部分，并把url中的?号去掉
    var pairs = query.split("&");
    for(var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');		// 查找"name=value"键值对
        if (pos == -1) continue;
        var argname = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);      // 解码
        args[argname] = value;
    }
    return args;
}

/**
 * 限制最大字符长度，超出则进行截断
 * 有待改进
 * @param object : 待处理对象
 * @param maxLength : 最大字符长度
 */
Common_Util.prototype.maxLength = function(object, maxLength) {
 	if(object.value.length > maxLength) {
 		object.value = object.value.substring(0, maxLength);
 	}
}

/**
 * 去掉左右所有空格
 * @param string : 待处理字符串
 */
Common_Util.prototype.trim = function(string) {
	var expression = /(^\s*)|(\s*$)/g;
	return string.replace(expression, "");
}

/**
 * 去掉左边所有空格
 * @param string : 待处理字符串
 */
Common_Util.prototype.ltrim = function(string) {
	var expression = /(^\s*)/g;
	return string.replace(expression, "");
}

/**
 * 去掉右边所有空格
 * @param string : 待处理字符串
 */
Common_Util.prototype.rtrim = function(string) {
	var expression = /(\s*$)/g;
	return string.replace(expression, "");
}

/**
 * 居中弹出窗口
 * 如果设置了id属性值，则所有id属性值相同的窗口共用一个窗口，详情请查阅winodw.open方法的用法
 * @param url：链接地址
 * @param id：窗口唯一标识符
 * @param height：窗口高度
 * @param width：窗口宽度
 */
Common_Util.prototype.openWindow = function(url, id, height, width) {
	var top = (screen.availHeight - height) / 2;
	var left = (screen.availWidth - width) / 2;
	url = this.addTimestamp(url);
 	window.open(url, id, "height="+height+", width="+width+", top="+top+", left="+left+","
 			 + "toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=yes");
}

/**
 * 居中弹出窗口。窗口高度：400，窗口宽度：600
 * 如果设置了id属性值，则所有id属性值相同的窗口共用一个窗口，详情请查阅winodw.open方法的用法
 * @param url：链接地址
 * @param id：窗口唯一标识符
 */
Common_Util.prototype.openWindowA = function(url, id) {
	var height = 400;
	var width = 600;
	this.openWindow(url, id, height, width);
}

/**
 * 居中弹出窗口。窗口高度：500，窗口宽度：700
 * 如果设置了id属性值，则所有id属性值相同的窗口共用一个窗口，详情请查阅winodw.open方法的用法
 * @param url：链接地址
 * @param id：窗口唯一标识符
 */
Common_Util.prototype.openWindowB = function(url, id) {
	var height = 500;
	var width = 700;
	this.openWindow(url, id, height, width);
}

/**
 * 居中弹出窗口。窗口高度：600，窗口宽度：800
 * 如果设置了id属性值，则所有id属性值相同的窗口共用一个窗口，详情请查阅winodw.open方法的用法
 * @param url：链接地址
 * @param id：窗口唯一标识符
 */
Common_Util.prototype.openWindowC = function(url, id) {
	var height = 600;
	var width = 800;
	this.openWindow(url, id, height, width);
}

/**
 * 居中弹出窗口。窗口高度：700，窗口宽度：1000
 * 如果设置了id属性值，则所有id属性值相同的窗口共用一个窗口，详情请查阅winodw.open方法的用法
 * @param url：链接地址
 * @param id：窗口唯一标识符
 */
Common_Util.prototype.openWindowD = function(url, id) {
	var height = 700;
	var width = 1000;
	this.openWindow(url, id, height, width);
}

///////////////////////////////////////////////
//                数字验证
///////////////////////////////////////////////

/**
 * 验证是否为整数
 * 有待改进
 * @param string : 待处理字符串
 */
Common_Util.prototype.isInt = function(string) {
	var expression = /^[0-9]+$/;
	return expression.test(string);
}

/**
 * 验证是否为单精度浮点数
 * 有待改进
 * @param string : 待处理字符串
 */
Common_Util.prototype.isFloat = function(string) {
	var expression = /^[+-]?(0|[1-9]\d*)(\.\d+)?$/;
	return expression.test(string);
}

/**
 * 验证是否为正双精度浮点数
 * 小数点前保留7位，小数点后保留2位
 * @param string : 待处理字符串
 */
Common_Util.prototype.isDouble = function(string) {
	var expression = /^(0|[1-9]\d{0,6})(\.\d{1,2})?$/;
	return expression.test(string);
}

/**
 * 验证是否为string类型或String对象
 * @param object : 待处理对象
 */
Common_Util.prototype.isString = function (object) {
    return "[object String]" == Object.prototype.toString.call(object);
}

/**
 * 验证是否为number类型或Number对象
 * @param object : 待处理对象
 */
Common_Util.prototype.isNumber = function (object) {
    return "[object Number]" == Object.prototype.toString.call(object) && isFinite(object);
}

/**
 * 验证是否为Boolean对象
 * @param object : 待处理对象
 */
Common_Util.prototype.isBoolean = function(object) {
    return typeof object == 'boolean';
}

/**
 * 验证是否为Object对象
 * @param object : 待处理对象
 */
Common_Util.prototype.isObject = function (object) {
    return object && typeof object == 'object';
}

/**
 * 验证是否为数组
 * @param object : 待处理对象
 */
Common_Util.prototype.isArray = function(object) {
	return "[object Array]" == Object.prototype.toString.call(object);
}

/**
 * 验证是否为function或Function实例
 * @param object : 待处理对象
 */
Common_Util.prototype.isFunction = function (object) {
    // chrome下,'function' == typeof /a/ 为true.
    return "[object Function]" == Object.prototype.toString.call(object);
}

/**
 * 验证是否为Element对象
 * @param object : 待处理对象
 */
Common_Util.prototype.isElement = function (object) {
    return object && object.nodeName && object.nodeType == 1;
}

//是否是日期格式yyyy-mm-dd
Common_Util.prototype.isDate = function(strDate){
	var myReg = /^\d{4}[\/\-]?((((0?[13578])|(1[02]))\-?((0?[1-9]|[0-2][0-9])|(3[01])))|(((0?[469])|(11))\-?((0?[1-9]|[0-2][0-9])|(30)))|(0?[2]\-?(0?[1-9]|[0-2][0-9])))$/;
	if(myReg.test(strDate)) return true;
	return false;
}

//两日期比较
Common_Util.prototype.compareData = function(start, end){
	var date1 = new Date((start.value.replace("-","/")));
	var date2 = new Date((end.value.replace("-","/")));

	if(date2 > date1){
		return true;
	} else {
		return false;
	}
}

///////////////////////////////////////////////
//                字符串验证
///////////////////////////////////////////////

/**
 * 验证是否为空字符串
 * @param string : 待处理字符串
 */
Common_Util.prototype.isNullString = function(string) {
	return string == null || this.trim(string) == "";
}

/**
 * 验证是否为非空字符串
 * @param string : 待处理字符串
 */
Common_Util.prototype.isNotNullString = function(string) {
	return !this.isNullString(string);
}

/**
 * 验证对象的值是否为空
 * @param object : 待处理对象
 */
Common_Util.prototype.isNullObjValue = function(object) {
	if (object) {
		var value = object.value;
		if(this.isNullString(value)) {
			object.value = "";
			return true;
		} else if (value != this.trim(value)) {
			object.value = this.trim(value);
		}
		return false;
	} else {
		return true;
	}
}

/**
 * 验证对象的值是否为非空
 * @param object : 待处理对象
 */
Common_Util.prototype.isNotNullObjValue = function(object) {
	return !this.isNullObjValue(object);
}

///////////////////////////////////////////////
//                常用数据类型验证
///////////////////////////////////////////////

/**
 * 验证是否为汉字
 * @param string : 待处理字符串
 */
Common_Util.prototype.isCN = function(string) {
	var expression = /^[\u4e00-\u9fa5]+$/;
	return expression.test(string);
}

/**
 * 验证是否为英文字母
 * @param string : 待处理字符串
 */
Common_Util.prototype.isLetter = function(string) {
	var expression = /^[A-Za-z]+$/;
	return expression.test(string);
}

/**
 * 验证用户名
 * 只允许包含字母、数字和下划线，且长度在6到20位之间
 * @param string : 待处理字符串
 */
Common_Util.prototype.isUsername = function(string) {
	var expression = /^[a-zA-Z0-9_]{6,20}$/;
	return expression.test(string);
}

/**
 * 验证密码
 * 长度在6到20位之间
 * @param string : 待处理字符串
 */
Common_Util.prototype.isPassword = function(string) {
	var expression = /^.{6,20}$/;
	return expression.test(string);
}

/**
 * 验证固定电话
 * 3-4位区号+ '-' +7-8位直播号码+ '-' +1-4位分机号
 * @param string : 待处理字符串
 */
Common_Util.prototype.isTelephone = function(string) {
	var expression = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
	return expression.test(string);
}

/**
 * 验证手机
 * 包含至今所有号段
 * @param string : 待处理字符串
 */
Common_Util.prototype.isMobile = function(string) {
	var expression = /^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/;
	return expression.test(string);
}

/**
 * 验证电子邮箱格式
 * 有待改进
 * @param string : 待处理字符串
 */
Common_Util.prototype.isEmail = function(string) {
	var expression = /^([\S])+[@]{1}([\S])+[.]{1}(\S)+$/;
	return expression.test(string);
}

/**
 * 验证QQ
 * @param string : 待处理字符串
 */
Common_Util.prototype.isQQ = function(string) {
	var expression = /^[1-9]\d{4,8}$/;
	return expression.test(string);
}

/**
 * 验证身份证号
 * 规则：14或17位数字+1位数字或大写字母X
 * @param string : 待处理字符串
 */
Common_Util.prototype.isIdCard = function(string) {
	var expression = /^([0-9]{14}|[0-9]{17})[0-9X]{1}$/;
	return expression.test(string);
}

/**
 * 验证组织机构代码证号
 * @param string : 待处理字符串
 */
Common_Util.prototype.isOrganCode = function(string) {
  	var expression = /^[A-Z0-9]{8}-[A-Z0-9]{1}$/;
	return expression.test(string);
}

/**
 * 替换全部字符串
 * @param string : 待处理字符串
 * @param oldChar : 原字符串
 * @param newChar : 新字符串
 */
Common_Util.prototype.replaceAll = function(string, oldChar, newChar) {
	var regExp = new RegExp(oldChar, "g");
	return string.replace(regExp, newChar);
}

/**
 * 判断列表项是否选中，只能选中一个，并返回选中的值
 */
Common_Util.prototype.getSingleSelectedValues = function() {
	var selected = getSelectValues();
	if(selected == "") {
		throw "请先进行选择！";
	}
	if(selected.split(",").length > 1) {
		throw "只能选择一项！";
	}
	return selected;
}

/**
 * 判断列表项是否选中，可以选中多个，并返回选中的用逗号分隔的值字符串
 */
Common_Util.prototype.getMultipleSelectedValues = function() {
	var selected = getSelectValues();
	if(selected == "") {
		throw "请先进行选择！";
	}
	return selected;
}

/**
 * 判断字符串是否以某某字符串为开始
 * @param startStr：开始的字符串
 * @param str：所要做验证的字符串
 */
Common_Util.prototype.startWith = function(startStr,str) {
	 if(startStr==null||startStr==""||str.length==0||startStr.length>str.length)
        return false;
     if(str.substr(0,startStr.length)==startStr)
        return true;
     else
        return false;
     return true;
}

/**
 * 判断字符串是否以某某字符串为结束
 * @param endStr：结束的字符串
 * @param str：所要做验证的字符串
 */
Common_Util.prototype.endWith = function(endStr,str) {
	 if(endStr==null||endStr==""||str.length==0||endStr.length>str.length)
        return false;
     if(str.substr(str.length-endStr.length)==endStr)
        return true;
     else
        return false;
     return true;
}

/**
 * 在链接地址中增加时间戳，目的是防止浏览器的缓存功能
 * @param url：链接地址
 */
Common_Util.prototype.addTimestamp = function(url) {
	var timestamp = new Date().valueOf();
	if (url.indexOf("?") >= 0) {
		url = url + "&_timestamp=" + timestamp;
	} else {
		url = url + "?_timestamp=" + timestamp;
	}
	return url;
}

/**
 * 删除字符串左侧的所有指定字符
 * @param string：待处理字符串
 * @param character：待删除字符
 */
Common_Util.prototype.removeAllCharByLeft = function(string, character) {
	if (string != null && typeof string == 'string') {
		if (character != null && typeof character == 'string' && character.length==1) {
			while (string.charAt(0) == character) { // 如果第一个字符是待删除字符，则删除，并继续循环；否则跳出循环
				string = string.slice(1);
			}
			return string;
		} else {
			throw "方法removeAllCharByRight的参数character必须为单个字符";
		}
	} else {
		throw "方法removeAllCharByRight的参数string必须为字符串";
	}
}

/**
 * 删除字符串右侧的所有指定字符
 * @param string：待处理字符串
 * @param character：待删除字符
 * @throws
 */
Common_Util.prototype.removeAllCharByRight = function(string, character) {
	if (string != null && typeof string == 'string') {
		if (character != null && typeof character == 'string' && character.length==1) {
			while (string.slice(-1) == character) { // 如果最后一个字符是待删除字符，则删除，并继续循环；否则跳出循环
				string = string.slice(0, -1);
			}
			return string;
		} else {
			throw "方法removeAllCharByRight的参数character必须为单个字符";
		}
	} else {
		throw "方法removeAllCharByRight的参数string必须为字符串";
	}
}
