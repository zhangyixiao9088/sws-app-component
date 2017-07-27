package com.ccs.component;

import java.io.File;
import java.util.LinkedHashSet;
import java.util.Set;

import com.ccs.common.AppConstants;

public class Tree  extends AbstractComponent {
	private String root;
	private String data;
	private String idKey;
	private String idValue;
	private String children;
	private String text;
	private String action;
	@Override
	public String getTempleFileName() {
		if(this.getBuilder()!=null){
			String path=this.getBuilder().getTempletBasePath()+File.separator+"Tree.vm";	
			File f=new File(path);
			if(f.exists()){
				return path;
			}
			}
			return AppConstants.getDefaultComponentPath()+File.separator+"Tree.vm";
	}
	public String getRoot() {
		return root;
	}
	public void setRoot(String root) {
		this.root = root;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getIdKey() {
		return idKey;
	}
	public void setIdKey(String idKey) {
		this.idKey = idKey;
	}
	public String getIdValue() {
		return idValue;
	}
	public void setIdValue(String idValue) {
		this.idValue = idValue;
	}
	public String getChildren() {
		return children;
	}
	public void setChildren(String children) {
		this.children = children;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> css = new LinkedHashSet<String>();
		css.add("js/ccs/tree/xtree.css");
		return css;
	}
	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/tree/xtree.js");
		js.add("js/ccs/tree/xmlextras.js");
		js.add("js/ccs/tree/xloadtree.js");
		js.add("js/ccs/tree/xtreeConfig.js");
		return js;
	}
}
