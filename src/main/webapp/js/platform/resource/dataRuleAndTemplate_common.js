/**
 *****************************************************************
 * 模块：数据规则、模板
 * 作者：csat
 * 时间：2012-12-25
 *****************************************************************
 */

if (common_util.isUndefined(dRuleAndTemplate)) { // 判断对象是否未定义
	var dRuleAndTemplate = new DataRuleAndTemplate();
}

function DataRuleAndTemplate() {
	this.baseWindow = window; // 保存当前窗口对象
	this.contentDivId = "contentDiv"; // 规则内容对应的div的id
	this.space = "&nbsp;"; // 空格的转义字符串
	this.selectedDiv = null; // 选中的单个div元素
}

// 初始化
DataRuleAndTemplate.prototype.inital = function() {
	var object = this;
	this.baseWindow.$("#"+this.contentDivId+" div").each(function(){
    	$(this).click(function() {
    		object.selectElement($(this));
    	});
    });
}

// 选中元素
DataRuleAndTemplate.prototype.selectElement = function(element) {
	this.baseWindow.$("#"+this.contentDivId+" div").each(function(){
		$(this).css("background-color", "#C9E4F2"); // 设置为非选中样式
    });
	element.css("background-color", "#44BB23"); // 设置为选中样式
	this.selectedDiv = element;
}

// 创建包含指定内容的div
DataRuleAndTemplate.prototype.createDiv = function(string) {
	var values = string.split("#@#");
	var strLength = values.length;
	if (strLength == 2 || strLength == 1) {
		var content = values[0];
		if(common_util.isNotNullString(content)) {
			content = this.escape(content);
			var newDiv;
			if (strLength == 2) {
				newDiv = this.baseWindow.$('<div template_id="【'+values[1]+'】">'+content+'</div>'); // 生成数据规则模板结点
			} else {
				newDiv = this.baseWindow.$("<div>"+content+"</div>"); // 生成普通文本结点
			}
			var object = this;
			newDiv.click(function() {
		   		object.selectElement(newDiv);
		   	});
		   	return newDiv;
		} else {
			return null;
		}
	} else {
		throw "无法解析参数string："+string;
	}
}

// 将特殊字符进行转义
DataRuleAndTemplate.prototype.escape = function(content) {
	return content.replace(/ +/g, "&nbsp;").replace(/>/g, "&gt;").replace(/</g, "&lt;");
}

// 将数组的内容用div包装，并扩展至数据规则内容对应的div中指定元素的前/后面。如果没有选中元素，则扩展至最前/后
DataRuleAndTemplate.prototype.addArrayContent = function(content, position) {
	if(common_util.isArray(content)) { // 验证是否为数组
		if("left" == position || "right" == position) {
			var expandPosition = this.selectedDiv; // 定义扩展位置
			for(var i=0; i<content.length; i++) {
				if(common_util.isNotNullString(content[i])) {
					var newElement = this.createDiv(content[i]);
					if(newElement != null) {
						if (expandPosition == this.selectedDiv) { // 第一个扩展元素
							if(expandPosition != null) { // 扩展位置不为空
								if("left" == position) {
									newElement.insertBefore(expandPosition); // 扩展至扩展位置之前
								} else {
									newElement.insertAfter(expandPosition); // 扩展至扩展位置之后
								}
							} else {
								var childsNum = this.baseWindow.$("#"+this.contentDivId+" div").length;
								if(childsNum != 0) { // 存在子元素
									if("left" == position) {
										newElement.insertBefore(this.baseWindow.$("#"+this.contentDivId+" div:first")); // 扩展至最前
									} else {
										newElement.insertAfter(this.baseWindow.$("#"+this.contentDivId+" div:last")); // 扩展至最后
									}
								} else {
									this.baseWindow.$("#"+this.contentDivId).append(newElement);
								}
							}
						} else { // 其余扩展元素
							newElement.insertAfter(expandPosition); // 扩展至扩展位置之后
						}
						expandPosition = newElement;
					}
				}
			}
		} else {
			throw "无法解析参数position："+position;
		}
	} else {
		throw "参数object只能为数组";
	}
}

// 删除选中的内容
DataRuleAndTemplate.prototype.deleteSelectedContent = function() {
	if(this.selectedDiv != null) { // 已经选中div
		this.selectedDiv.remove();
		this.selectedDiv = null;
	}
}

// 清空内容
DataRuleAndTemplate.prototype.clearContent = function() {
	this.baseWindow.$("#"+this.contentDivId).attr("innerHTML", "");
	this.selectedDiv = null;
}

// 将数据规则内容对应的div的内容解析为数据规则页面展现内容
DataRuleAndTemplate.prototype.parseHTMLToPageContent = function(content) {
	return content.replace(/<(div|DIV)(.*?)>/g, "<div>").replace(/<\/(div|DIV)>/g, "</div>").replace(/(&nbsp;)+/g, "&nbsp;").replace(/\r/g, "").replace(/\n/g, "");
}

// 将数据规则页面展现内容解析为数据规则内容
DataRuleAndTemplate.prototype.parsePageContentToRuleContent = function(rulePage) {
	return rulePage.replace(/<.+?>/g, "").replace(/&nbsp;/g, " ").replace(/&gt;/g, ">").replace(/&lt;/g, "<");
}