package com.ccs.component.charts.models;

import net.sf.json.JSONObject;

public class BaseNode {
	private JSONObject properties = new JSONObject() ;
	
	public BaseNode(){
		
	}

	public void put(String key,Object value){
		getProperties().put(key,value);
	}
	public JSONObject getProperties() {
		return properties;
	}

	public void setProperties(JSONObject properties) {
		this.properties = properties;
	}
}
