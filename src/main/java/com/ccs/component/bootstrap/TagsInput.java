package com.ccs.component.bootstrap;

import java.net.URL;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

import com.ccs.common.CacheManager;
import com.ccs.common.ClassLoaderUtil;
import com.ccs.common.StrUtils;
import com.ccs.component.AbstractComponent;
import com.ccs.core.builder.Builder;
import com.ccs.core.description.PageDescription;
import com.ccs.core.description.XmlHtmlComponentDescriptor;
import com.ccs.core.views.htmlView.component.HtmlComponent;

public class TagsInput extends AbstractComponent {
	private String width="240px";
	private String limit="undefined";
	private String data;
	private String editPane;
	private HtmlComponent editPaneCom;
	
	public StringBuffer print() {
		Map<String,Object> context =super.getExtern();
		if(StrUtils.isNotBlank(this.editPane)){
			Builder builder = super.getBuilder();
			PageDescription pageDescription = builder.getPageDescription();
			XmlHtmlComponentDescriptor childComDesc=(XmlHtmlComponentDescriptor) pageDescription.findDesciption(PageDescription.Components, editPane);
			this.editPaneCom =childComDesc.createComponent(builder,pageDescription,context);
		}
		return super.print();
	}
	@Override
	protected StringBuffer getTemplate(){
		URL templateUrl = ClassLoaderUtil.getResource("assets/vm/bootstrap/TagsInput.vm");
		return CacheManager.readTxt(templateUrl);
	}
	
	@Override
	public Set<String> getCssLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getCssFileName("bootstrap/tagsinput/bootstrap-tagsinput.css","utf-8"));
		if(this.editPaneCom!= null){
			Set c = this.editPaneCom.printCssLink();
			if(c!=null){
				js.addAll(c);
			}
		}
		return js;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getScriptFileName("bootstrap/tagsinput/angular.min.js","utf-8"));
		js.add( this.getScriptFileName("bootstrap/tagsinput/bootstrap-tagsinput.js","utf-8"));
		js.add( this.getScriptFileName("bootstrap/tagsinput/bootstrap-tagsinput-angular.js","utf-8"));
		js.add( this.getScriptFileName("bootstrap/tagsinput/bootstrap-tagsinput-reg.js","utf-8"));
		
		if(this.editPaneCom!= null){
			Set c = this.editPaneCom.printJSLink();
			if(c!=null){
				js.addAll(c);
			}
		}
		return js;
	}
	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
	public String getEditPane() {
		return editPane;
	}
	public void setEditPane(String editPane) {
		this.editPane = editPane;
	}
	public HtmlComponent getEditPaneCom() {
		return editPaneCom;
	}
	public void setEditPaneCom(HtmlComponent editPaneCom) {
		this.editPaneCom = editPaneCom;
	}
	public String getWidth() {
		return width;
	}
	public void setWidth(String width) {
		this.width = width;
	}
	public String getLimit() {
		return limit;
	}
	public void setLimit(String limit) {
		this.limit = limit;
	}
}
