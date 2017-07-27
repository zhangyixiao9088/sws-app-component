package com.ccs.component;

import java.io.File;
import java.util.Set;

import com.ccs.common.AppConstants;

public class Button extends AbstractComponent {
	private String label;
	private String link="";
	public String getTempleFileName() {
		if(this.getBuilder()!=null){
			String path=this.getBuilder().getTempletBasePath()+File.separator+"Button.vm";	
			File f=new File(path);
			if(f.exists()){
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"Button.vm";
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	@Override
	public Set<String> getCssLinks() {
		return null;
	}

	@Override
	public Set<String> getJsLinks() {
		return null;
	}

}
