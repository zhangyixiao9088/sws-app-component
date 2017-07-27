package com.ccs.component;

import java.io.File;

import com.ccs.common.AppConstants;
import com.ccs.common.StrUtils;

public class IconButton extends Button implements Component {
	
	private String target="_self";
	private String icon;
	

	
	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		if(StrUtils.isBlank(target)){
			target="_self";
		}
		this.target = target;
	}

	public String getTempleFileName() {
		if(this.getBuilder()!=null){
		String path=this.getBuilder().getTempletBasePath()+File.separator+"IconButton.vm";	
		File f=new File(path);
		if(f.exists()){
			return path;
		}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"IconButton.vm";
	}
}
