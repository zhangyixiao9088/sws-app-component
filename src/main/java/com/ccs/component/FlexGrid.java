package com.ccs.component;

import java.io.File;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

import com.ccs.common.AppConstants;
import com.ccs.common.JsonUtil;

public class FlexGrid extends AbstractComponent{
	private String dataSet;
	private String options;
	@Override
	public String getTempleFileName() {
		if(this.getBuilder()!=null){
			String path=this.getBuilder().getTempletBasePath()+File.separator+"FlexGrid.vm";	
			File f=new File(path);
			if(f.exists()){
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"FlexGrid.vm";
	}
	public void setParamete(String jsonString) {
		Map jsonMap=JsonUtil.getMap4Json(jsonString);
		if(jsonMap.containsKey("dataSet")){
			this.dataSet = jsonMap.get("dataSet").toString();
		}
		if(jsonMap.containsKey("options")){
			this.options = jsonMap.get("options").toString();
		}
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> css = new LinkedHashSet<String>();
		css.add("css/ccs/flexGrid/flexigrid.pack.css");
		return css;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/flexGrid/flexgrid2.js");
		return js;
	}
	public String getOptions() {
		return options;
	}
	public void setOptions(String options) {
		this.options = options;
	}
	public String getDataSet() {
		return dataSet;
	}
	public void setDataSet(String dataSet) {
		this.dataSet = dataSet;
	}

}
