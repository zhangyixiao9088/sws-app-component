package com.ccs.component;

import java.util.LinkedHashSet;
import java.util.Set;


public class PaneMutiSelect extends AbstractInputComponent{
	private String dataType;
	private String dataSet;
	
	
	public String getDataSet() {
		return dataSet;
	}
	public void setDataSet(String dataSet) {
		this.dataSet = dataSet;
	}
	public String getDataType() {
		return dataType;
	}
	public void setDataType(String dataType) {
		this.dataType = dataType;
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> css = new LinkedHashSet<String>();
		css.add("css/ccs/MutiSelect/PaneMutiSelect.css");
		return css;
	}
	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("s/ccs/MutiSelect/PeneMutiSelect.js");
		return js;
	}

}
