package com.ccs.component;

import java.io.File;
import java.util.LinkedHashSet;
import java.util.Set;

import com.ccs.common.AppConstants;

public class Text extends AbstractComponent implements InputComponent {
	
	private String size;

	private String format;
	private String canNull = "true";

	private String canEdit = "true";

	private String maxlength;

	public String getMaxlength() {
		return maxlength;
	}

	public void setMaxlength(String maxlength) {
		this.maxlength = maxlength;
	}

	public String getCanEdit() {
		return canEdit;
	}

	public void setCanEdit(String canEdit) {
		this.canEdit = canEdit;
	}

	public String getCanNull() {
		return canNull;
	}

	public void setCanNull(String canNull) {
		this.canNull = canNull;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	@Override
	public String getTempleFileName() {
		if (this.getBuilder() != null) {
			String path = this.getBuilder().getTempletBasePath() + File.separator + "Text.vm";
			File f = new File(path);
			if (f.exists()) {
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath() + File.separator + "Text.vm";
	}

	public String parseValue(Object value) {
		return value.toString();
	}

	@Override
	public Set<String> getCssLinks() {
		return null;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/text/textformat.js");
		return js;
	}

	public String getFormat() {
		return format;
	}

	public void setFormat(String format) {
		this.format = format;
	}

}
