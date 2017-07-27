package com.ccs.component;

import java.util.Map;
import java.util.Set;

import com.ccs.core.builder.Builder;

class NullComponent implements Component {
	private String name;
	public StringBuffer print(Map<String,Object> context) {
		return new StringBuffer("");
	}
	public void setParamete(String jsonString) {
	}
	public String getName() {
		return name;
	}
	public void setBuilder(Builder htmlBuilder) {
	}
	public void setName(String name) {
		this.name=name;
	}
	public StringBuffer print() {
		return new StringBuffer("");
	}
	public Set<String> getCssLinks() {
		return null;
	}
	public Set<String> getJsLinks() {
		return null;
	}
	public void setTemplate(StringBuffer template) {
		
	}
}
