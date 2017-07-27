package com.ccs.component;

import java.io.File;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.ccs.common.AppConstants;
import com.ccs.common.StrUtils;
import com.ccs.core.datamodel.DataSet;

public class OptMultiSelector extends AbstractInputComponent{
	private String title;
	private String data;
	private String maxItem;
	private List<Map<String,Object>> dataList;
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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
	public StringBuffer print() {
		
		if(StrUtils.isNotBlank(data)){
			DataSet ds=this.getBuilder().getDataSet(data,this.getExtern());
			this.setDataList(ds.getData());
		}
		return super.print();
	}
	@Override
	public String getTempleFileName() {
		if(this.getBuilder()!=null){
		String path=this.getBuilder().getTempletBasePath()+File.separator+"OptMultiSelector.vm";	
		File f=new File(path);
		if(f.exists()){
			return path;
		}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"OptMultiSelector.vm";
	}

	@Override
	public Set<String> getCssLinks() {
		Set<String> css = new LinkedHashSet<String>();
		return css;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("UIFrame/frame/js/attention/zDialog/zDrag.js");
		js.add("UIFrame/frame/js/attention/zDialog/zDialog.js");
		js.add("js/ccs/MutiSelect/OptMultiSelector.js");
		return js;
	}

	public String getMaxItem() {
		return maxItem;
	}

	public void setMaxItem(String maxItem) {
		this.maxItem = maxItem;
	}
}
