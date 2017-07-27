package com.ccs.component;

import java.io.File;
import java.util.LinkedHashSet;
import java.util.Set;

import com.ccs.common.AppConstants;

public class AutoComplete extends Text {
	private String data;
	private String query;
	private String showItem;
	private String delay="10";
	private String minChars="2";
	private String matchSubset="1";
	private String matchContains="1";
	private String cacheLength ="10";
	private String onItemSelect = "selectItem";
	private String onFindValue = "findValue";
	private String formatItem = "formatItem";
	private String autoFill = "true";
	@Override
	public String getTempleFileName() {
		if(this.getBuilder()!=null){
			String path=this.getBuilder().getTempletBasePath()+File.separator+"AutoComplete.vm";	
			File f=new File(path);
			if(f.exists()){
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"AutoComplete.vm";
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getQuery() {
		return query;
	}
	public void setQuery(String query) {
		this.query = query;
	}
	public String getDelay() {
		return delay;
	}
	public void setDelay(String delay) {
		this.delay = delay;
	}
	public String getMinChars() {
		return minChars;
	}
	public void setMinChars(String minChars) {
		this.minChars = minChars;
	}
	public String getMatchSubset() {
		return matchSubset;
	}
	public void setMatchSubset(String matchSubset) {
		this.matchSubset = matchSubset;
	}
	public String getMatchContains() {
		return matchContains;
	}
	public void setMatchContains(String matchContains) {
		this.matchContains = matchContains;
	}
	public String getCacheLength() {
		return cacheLength;
	}
	public void setCacheLength(String cacheLength) {
		this.cacheLength = cacheLength;
	}
	public String getOnItemSelect() {
		return onItemSelect;
	}
	public void setOnItemSelect(String onItemSelect) {
		this.onItemSelect = onItemSelect;
	}
	public String getOnFindValue() {
		return onFindValue;
	}
	public void setOnFindValue(String onFindValue) {
		this.onFindValue = onFindValue;
	}
	public String getFormatItem() {
		return formatItem;
	}
	public void setFormatItem(String formatItem) {
		this.formatItem = formatItem;
	}
	public String getAutoFill() {
		return autoFill;
	}
	public void setAutoFill(String autoFill) {
		this.autoFill = autoFill;
	}
	public String getShowItem() {
		return showItem;
	}
	public void setShowItem(String showItem) {
		this.showItem = showItem;
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> css = new LinkedHashSet<String>();
		css.add("css/ccs/AutoComplete/jquery.autocomplete.css");
		return css;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/AutoComplete/jquery.autocomplete.js");
		return js;
	}
}
