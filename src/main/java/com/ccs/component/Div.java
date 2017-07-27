package com.ccs.component;

import java.io.File;
import java.util.Set;

import com.ccs.common.AppConstants;

public class Div extends AbstractComponent {
	private String label;
	public String getTempleFileName() {
		if(this.getBuilder()!=null){
			String path=this.getBuilder().getTempletBasePath()+File.separator+"Div.vm";	
			File f=new File(path);
			if(f.exists()){
				return path;
			}
			}
			return AppConstants.getDefaultComponentPath()+File.separator+"Div.vm";

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
