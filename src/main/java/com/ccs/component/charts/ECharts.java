package com.ccs.component.charts;

import java.net.URL;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.sf.json.JSONObject;

import com.ccs.common.CacheManager;
import com.ccs.common.ClassLoaderUtil;
import com.ccs.common.StrUtils;
import com.ccs.common.VelocityParser;
import com.ccs.component.AbstractComponent;

public class ECharts extends AbstractComponent{
	private String pool;
	private String theme;
	private String width;
	private String height;
	private String jsonString;

	public void setParamete(String jsonString) {
		this.jsonString = jsonString;
	}
	public StringBuffer print(){
		Map<String,Object> context =super.getExtern();
		if(StrUtils.isBlank(jsonString)){
			return new StringBuffer();
		}
		this.jsonString = VelocityParser.paintComponent(new StringBuffer(jsonString), context).toString();
		
		return super.print();
	}
	@Override
	public Set<String> getJsLinks() {
		String[] arrs = {"dark","infographic","macarons","roma","shine","vintage"};
		List<String> themes =Arrays.asList(arrs) ;
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getScriptFileName("echarts/echarts.min.js","utf-8"));
		if(StrUtils.isNotBlank(theme)){
			if(themes.contains(theme)){
				js.add( this.getScriptFileName("echarts/theme/"+theme+".js","utf-8"));
			}
		}
		return js;
	}
	
	@Override
	public StringBuffer getTemplate() {
		URL templateUrl = ClassLoaderUtil.getResource("assets/vm/highcharts/echarts.vm");
		return CacheManager.readTxt(templateUrl);
	}

	@Override
	public Set<String> getCssLinks() {
		return null;
	}
	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public String getPool() {
		return pool;
	}

	public void setPool(String pool) {
		this.pool = pool;
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
	public String getJsonString() {
		return jsonString;
	}
	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}
}
