package com.ccs.component;

import java.io.File;
import java.util.Set;

import com.ccs.common.AppConstants;

public class Radio extends AbstractInputComponent implements InputComponent {
	private String value;
	private String label;
	private String canNull="true";
	private String canEdit="true";
	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public void setCanNull(String canNull) {
		this.canNull = canNull;
	}

	public String getTempleFileName() {
		if(this.getBuilder()!=null){
		String path=this.getBuilder().getTempletBasePath()+File.separator+"Radio.vm";	
		File f=new File(path);
		if(f.exists()){
			return path;
		}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"Radio.vm";
	}

	public String getCanEdit() {
		return canEdit;
	}

	public void setCanEdit(String canEdit) {
		this.canEdit = canEdit;
	}

	public String parseValue(Object value) {
		return value.toString();
	}

	public String getCanNull() {
		return canNull;
	}

	@Override
	public Set<String> getCssLinks() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Set<String> getJsLinks() {
		// TODO Auto-generated method stub
		return null;
	}
}
