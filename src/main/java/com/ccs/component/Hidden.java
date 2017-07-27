package com.ccs.component;

import java.io.File;
import java.util.Set;

import com.ccs.common.AppConstants;

public class Hidden extends AbstractComponent implements InputComponent {
	
	private String label;

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	@Override
	public String getTempleFileName() {
		if (this.getBuilder() != null) {
			String path = this.getBuilder().getTempletBasePath()+ File.separator + "Hidden.vm";
			File f = new File(path);
			if (f.exists()) {
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath() + File.separator + "Hidden.vm";
	}

	public String getCanEdit() {
		return null;
	}

	public String getCanNull() {
		return null;
	}

	public String parseValue(Object value) {
		return value.toString();
	}

	public void setCanEdit(String canEdit) {

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
