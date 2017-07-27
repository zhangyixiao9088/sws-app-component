package com.ccs.component;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.ccs.common.StrUtils;
import com.ccs.core.datamodel.DataSet;


public class TwoWaySelect extends AbstractInputComponent{
	private String width="500px";
	private String height="300px";
	private String data;
	private List<Map<String,Object>> dataList;
	
	public StringBuffer print() {
		if(StrUtils.isNotBlank(data)){
			DataSet ds=this.getBuilder().getDataSet(data,this.getExtern());
			this.setDataList(ds.getData());
		}
		return super.print();
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> css = new LinkedHashSet<String>();
		return css;
	}
	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/towaySelect/towaySelect.js");
		
		return js;
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
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public List<Map<String, Object>> getDataList() {
		return dataList;
	}
	public void setDataList(List<Map<String, Object>> dataList) {
		this.dataList = dataList;
	}
}
