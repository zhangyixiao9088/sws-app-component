package com.ccs.component;

import java.io.File;
import java.util.Set;

import com.ccs.common.AppConstants;
import com.ccs.common.StrUtils;

public class IFrame extends AbstractComponent {
	private String src;
	private String width;
	private String height;
	private String onclick;
	
	
	public String getOnclick() {
		if(StrUtils.isBlank(this.onclick)){
			return "this.height="+this.getId()+".document.body.scrollHeight";
		}
		return onclick;
	}


	public void setOnclick(String onclick) {
		this.onclick = onclick;
	}


	public String getSrc() {
		return src;
	}


	public void setSrc(String src) {
		this.src = src;
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


	@Override
	public String getTempleFileName() {
		if(this.getBuilder()!=null){
		String path=this.getBuilder().getTempletBasePath()+File.separator+"IFrame.vm";	
		File f=new File(path);
		if(f.exists()){
			return path;
		}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"IFrame.vm";
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
