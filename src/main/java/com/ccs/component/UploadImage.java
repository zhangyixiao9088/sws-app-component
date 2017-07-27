package com.ccs.component;

import java.util.LinkedHashSet;
import java.util.Set;


public class UploadImage extends AbstractComponent{
	private String businessId;//业务ID
	private String service;
	private String editable="true";//是否可编辑
	
	private String width = "100px";
	
	private String height = "100px";
	private String url = "js/ccs/uploadImage/imgs/noimg.png";
	
	
	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/uploadImage/upload.js");
		return js;
	}
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Set<String> getCssLinks() {
		return null;
	}

	public String getWidth() {
		return width;
	}

	public void setWidth(String width) {
		this.width = width;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getBusinessId() {
		return businessId;
	}

	public void setBusinessId(String businessId) {
		this.businessId = businessId;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getEditable() {
		return editable;
	}

	public void setEditable(String editable) {
		this.editable = editable;
	}

}
