package com.ccs.component.bootstrap;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ccs.common.JsonUtil;
import com.ccs.common.StrUtils;
import com.ccs.common.VOParser;
import com.ccs.core.views.htmlView.component.HtmlComponent;
import com.ccs.core.views.htmlView.component.HtmlLayout;
import com.ccs.core.views.htmlView.component.layout.LayoutManager;

public class BTabsLayout implements LayoutManager {
	private HtmlComponent parent;
	private String active;
	
	private Map context=new HashMap();//≈‰÷√±‰¡ø
	public void initParams(HtmlComponent parent, String jsonString) {
		Map map=null;
		if(StrUtils.isNotBlank(jsonString)){
			map= JsonUtil.getMap4Json(jsonString);
		}else{
			map = new HashMap();
		}
		initParams(parent, map);
	}

	public void initParams(HtmlComponent parent, Map property) {
		HtmlLayout layout = (HtmlLayout) parent;
//		layout.appendJsLink("js/ccs/jquery/uilayout/jquery.layout-latest.js");
//		layout.appendCssLink("css/ccs/jquery/uilayout/jquery.layout.css");
		this.parent = parent;
		VOParser.setObjectValues(this, property);
		String[] fields = VOParser.getFieldNames(BTabsLayout.class);
		context.putAll(property);
		for(int i=0;i<fields.length;i++){
			this.context.remove(fields[i]);
		}
	}

	public StringBuffer layout(List<HtmlComponent> coms) {
		String id = this.parent.getId();
		StringBuffer nav=new StringBuffer("<ul id=\""+id+"\" class=\"nav nav-tabs\">");
		StringBuffer body = new StringBuffer("<div id=\""+id+"_conent\" class=\"tab-content\">");
//		StringBuffer script = new StringBuffer();
		boolean isActive=true;
		if(StrUtils.isNotBlank(this.active)){
			isActive = false;
		}
		for (int i = 0; i < coms.size(); i++) {
			HtmlComponent com = coms.get(i);
			String name = com.getName();
			StringBuffer label = com.printLabel();
			StringBuffer view = com.printView();
			String bodyId = id+"_"+name+"_body";
			if(name.equals(this.active)){
				isActive = true;
			}
			//nav
			nav.append("<li");
			if(isActive){
				nav.append(" class=\"active\"");
			}
			nav.append("><a href=\"#"+bodyId+"\" data-toggle=\"tab\">");
			nav.append(label);
			nav.append("</a></li>");
			
			//body
			body.append("<div class=\"tab-pane fade");
			if(isActive){
				body.append(" in active");
				isActive=false;
			}
			body.append("\" id=\""+bodyId+"\">");
			body.append(view);
			body.append("</div>");
		}
		nav.append("</ul>");
		body.append("</div>");
		
//		script.append("<script>");
//		script.append("$('#"+id+" a').click(function (e) {  e.preventDefault();  $(this).tab('show');});");
//		if(StrUtils.isNotBlank(this.active)){
//			String bodyId = id+"_"+active+"_body";
//			script.append("");
//		}
//		script.append("</script>");
		StringBuffer all=new StringBuffer();
		all.append(nav);
		all.append(body);
		return all;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

}
