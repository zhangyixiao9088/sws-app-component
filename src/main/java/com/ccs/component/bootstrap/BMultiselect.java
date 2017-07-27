package com.ccs.component.bootstrap;

import java.net.URL;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.ccs.common.CacheManager;
import com.ccs.common.ClassLoaderUtil;
import com.ccs.common.StrUtils;
import com.ccs.component.AbstractInputComponent;
import com.ccs.core.datamodel.DataSet;

public class BMultiselect extends AbstractInputComponent {

	private String multiple;//是否多选
	private String includeSelectAllOption;//是否包含全选
	private String enableFiltering;//是否有过滤器
	private String maxHeight;//最大高度
	private String buttonClass;//按钮样式
	private String buttonWidth;//宽度
	private String showItems="4";//最大显示数量
	private String data;//数据源
	private List<Map<String,Object>> dataList;

	public StringBuffer print() {
		if(StrUtils.isNotBlank(data)){
			DataSet ds=this.getBuilder().getDataSet(data,this.getExtern());
			this.setDataList(ds.getData());
		}
		return super.print();
	}
	@Override
	protected StringBuffer getTemplate(){
		URL templateUrl = ClassLoaderUtil.getResource("assets/vm/bootstrap/BMultiselect.vm");
		return CacheManager.readTxt(templateUrl);
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getCssFileName("bootstrap/Multiselect/bootstrap-multiselect.css","utf-8"));
		return js;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getScriptFileName("bootstrap/Multiselect/bootstrap-multiselect.js","utf-8"));
		js.add( this.getScriptFileName("bootstrap/Multiselect/bootstrap-multiselect-reg.js","utf-8"));
		
		return js;
	}
	public String getMultiple() {
		return multiple;
	}
	public void setMultiple(String multiple) {
		this.multiple = multiple;
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
	public String getIncludeSelectAllOption() {
		return includeSelectAllOption;
	}
	public void setIncludeSelectAllOption(String includeSelectAllOption) {
		this.includeSelectAllOption = includeSelectAllOption;
	}
	public String getEnableFiltering() {
		return enableFiltering;
	}
	public void setEnableFiltering(String enableFiltering) {
		this.enableFiltering = enableFiltering;
	}
	public String getMaxHeight() {
		return maxHeight;
	}
	public void setMaxHeight(String maxHeight) {
		this.maxHeight = maxHeight;
	}
	public String getButtonClass() {
		return buttonClass;
	}
	public void setButtonClass(String buttonClass) {
		this.buttonClass = buttonClass;
	}
	public String getButtonWidth() {
		return buttonWidth;
	}
	public void setButtonWidth(String buttonWidth) {
		this.buttonWidth = buttonWidth;
	}
	public String getShowItems() {
		return showItems;
	}
	public void setShowItems(String showItems) {
		this.showItems = showItems;
	}
}
