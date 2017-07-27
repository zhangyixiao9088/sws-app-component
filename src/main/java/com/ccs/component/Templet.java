package com.ccs.component;

import java.io.File;
import java.util.LinkedHashSet;
import java.util.Set;

import net.sf.json.JSONArray;

import com.ccs.common.AppConstants;
import com.ccs.common.CacheManager;
import com.ccs.common.StrUtils;
import com.ccs.core.datamodel.DataSet;
import com.ccs.core.datamodel.simple.SimpleDataSet;

public class Templet extends AbstractComponent {
	private String rootPath = AppConstants.CONFIG_ROOT+ "Templet/components/";

	private String type;
	private String data;
	
	public String getRootPath() {
		return rootPath;
	}

	public void setRootPath(String rootPath) {
		this.rootPath = rootPath;
	}


	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public StringBuffer print() {
		if(StrUtils.isNotBlank(data)){
			DataSet ds=this.getBuilder().getDataSet(data,this.getExtern());
			this.getContext().put("data", new SimpleDataSet(ds));
		}
		return super.print();
	}

	@Override
	public String getTempleFileName() {
		String fileName = rootPath+this.getType()+".vm";
		return fileName;
	}

	@Override
	public Set<String> getCssLinks() {
		String fileName = rootPath+this.getType()+"_css.vm";
		File file = new File(fileName);
		if(file.exists()){
			Set<String> js = new LinkedHashSet<String>();
			String ctx = CacheManager.readTxt(fileName).toString().trim();
			JSONArray jsarr = JSONArray.fromObject(ctx);
			js.addAll(jsarr);
			return js;
		}
		return null;
	}

	@Override
	public Set<String> getJsLinks() {
		String fileName = rootPath+this.getType()+"_js.vm";
		File file = new File(fileName);
		if(file.exists()){
			Set<String> js = new LinkedHashSet<String>();
			String ctx = CacheManager.readTxt(fileName).toString().trim();
			JSONArray jsarr = JSONArray.fromObject(ctx);
			js.addAll(jsarr);
			return js;
		}
		return null;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
