package com.ccs.component;

import java.io.File;
import java.util.Set;

import com.ccs.common.AppConstants;

public class Label extends AbstractComponent {

	private String isTag="false";
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
			String path = this.getBuilder().getTempletBasePath()
					+ File.separator + "Label.vm";
			File f = new File(path);
			if (f.exists()) {
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath() + File.separator
				+ "Label.vm";
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

	public String getIsTag() {
		return isTag;
	}

	public void setIsTag(String isTag) {
		this.isTag = isTag;
	}
}
