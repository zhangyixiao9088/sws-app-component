package com.ccs.component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.ccs.common.StrUtils;
import com.ccs.core.builder.Builder;

public class Group implements Component {
	private String name ="";
	private String clazz = "btn-group";
	private Builder viewer;
	private List<Component> coms=new ArrayList<Component>();
	public StringBuffer print(Map<String,Object> context) {
		StringBuffer sbf=new StringBuffer();
		sbf.append("<div id='"+viewer.getName()+"_"+name+"'");
		if(StrUtils.isNotBlank(clazz)){
			sbf.append(" class='"+clazz+"'");
		}
		sbf.append(">");
		for(Component com:coms){
			sbf.append(com.print(context));
		}
		sbf.append("</div>");
		return sbf;
	}

	public void setParamete(String jsonString) {
		JSONArray jsonArray=JSONArray.fromObject(jsonString);
		for (int i = 0; i < jsonArray.size(); i++) {
			JSONObject jsonObject = jsonArray.getJSONObject(i);
			
			String type=jsonObject.getString("type");
			String str=jsonObject.getString("param");
			Component com= null;
			if(coms.size()>i){
				com=coms.get(i);
			}else{
				com=ComponentFactory.createComponent(type);
				coms.add(com);
			}
			com.setParamete(str);
			com.setBuilder(this.viewer);
		}
	}

	public String getName() {
		return "";
	}

	public void setBuilder(Builder htmlBuilder) {
		this.viewer = htmlBuilder;
	}

	public void setName(String name) {
		this.name = name;
	}

	public StringBuffer print() {
		return this.print(null);
	}

	public Set<String> getCssLinks() {
		return null;
	}

	public Set<String> getJsLinks() {
		return null;
	}

	public void setTemplate(StringBuffer template) {
		
	}

	public String getClazz() {
		return clazz;
	}

	public void setClazz(String clazz) {
		this.clazz = clazz;
	}
	
}
	
