package com.ccs.component;

import java.net.URL;
import java.util.LinkedHashSet;
import java.util.Set;

import com.ccs.common.CacheManager;
import com.ccs.common.ClassLoaderUtil;

public class CkInlineEditor extends AbstractInputComponent implements InputComponent {
	private String width;
	private String height;
	private String toolbar;
	
	@Override
	public Set<String> getCssLinks() {
		return null;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( "js/ccs/ckeditor/ckeditor.js");
		js.add( "js/ccs/ckeditor/config.js");
		js.add(this.getScriptFileName("CkEditor/CkInlineEditorSetter.js","utf-8"));
		return js;
	}
	
	@Override
	protected StringBuffer getTemplate(){
		URL templateUrl = ClassLoaderUtil.getResource("assets/vm/default/InlineEditor.vm");
		return CacheManager.readTxt(templateUrl);
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

	public String getToolbar() {
		return toolbar;
	}

	public void setToolbar(String toolbar) {
		this.toolbar = toolbar;
	}
	
	
}
