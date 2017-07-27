package com.ccs.component;

import java.io.File;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

import com.ccs.common.AppConstants;
import com.ccs.common.StrUtils;
import com.ccs.core.builder.Builder;
import com.ccs.core.datamodel.DataSet;
import com.ccs.core.description.PageDescription;
import com.ccs.core.description.XmlHtmlComponentDescriptor;
import com.ccs.core.views.htmlView.component.HtmlComponent;

public class PopSelect extends AbstractInputComponent implements InputComponent{
	private String btnOnclick;
	private String btnOnClose;
	private String pane;
	private String data;
	private String label;
	private String idCom;
	private String style;
	private String editPane;
	private String width="220px";
	private HtmlComponent editPaneCom;
	private String canNull="true";
	private String canEdit="true";
	public String getCanEdit() {
		return canEdit;
	}

	public void setCanEdit(String canEdit) {
		this.canEdit = canEdit;
	}

	public String getIdCom() {
		return idCom;
	}

	public void setIdCom(String idCom) {
		this.idCom = idCom;
	}

	public String getCanNull() {
		return canNull;
	}

	public void setCanNull(String canNull) {
		this.canNull = canNull;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}


	@Override
	public String getTempleFileName() {
		if(this.getBuilder()!=null){
		String path=this.getBuilder().getTempletBasePath()+File.separator+"PopSelect.vm";	
		File f=new File(path);
		if(f.exists()){
			return path;
		}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"PopSelect.vm";
	}
	public StringBuffer print() {
		Map<String,Object> context =super.getExtern();
		if(StrUtils.isNotBlank(data)){
			DataSet ds=this.getBuilder().getDataSet(data,context);
			Map<String,Object> row = ds.getSingleData();
			if(row != null){
				context.putAll(row);
			}
		}
		if(StrUtils.isNotBlank(this.editPane)){
			Builder builder = super.getBuilder();
			PageDescription pageDescription = builder.getPageDescription();
			XmlHtmlComponentDescriptor childComDesc=(XmlHtmlComponentDescriptor) pageDescription.findDesciption(PageDescription.Components, editPane);
			this.editPaneCom =childComDesc.createComponent(builder,pageDescription,context);
		}
		return super.print();
	}
	
	public String parseValue(Object value) {
		return value.toString();
	}
	public String getBtnOnclick() {
		return btnOnclick;
	}

	public void setBtnOnclick(String btnOnclick) {
		this.btnOnclick = btnOnclick;
	}

	@Override
	public Set<String> getCssLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/layer/layer.css");
		
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
		if(this.editPaneCom!= null){
			Set c = this.editPaneCom.printJSLink();
			if(c!=null){
				js.addAll(c);
			}
		}
		return js;
	}
//	public StringBuffer printInitJS(){
//		
//	}
//	public StringBuffer printEndJS(){
//		
//	}
//	public StringBuffer printInitCSS(){
//		
//	}
	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

	public String getPane() {
		return pane;
	}

	public void setPane(String pane) {
		this.pane = pane;
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

	public String getBtnOnClose() {
		return btnOnClose;
	}

	public void setBtnOnClose(String btnOnClose) {
		this.btnOnClose = btnOnClose;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getWidth() {
		return width;
	}

	public void setWidth(String width) {
		this.width = width;
	}
}
