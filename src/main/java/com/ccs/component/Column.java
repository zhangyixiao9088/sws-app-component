package com.ccs.component;

import java.io.File;
import java.util.Set;

import com.ccs.common.AppConstants;

public class Column extends AbstractComponent{
	public String view;
	public String colSpan;
	
	public Column(){
	}
	
	public String getView() {
		return view;
	}

	public void setView(String view) {
		this.view = view;
	}
	
	public String getColSpan() {
		return colSpan;
	}

	public void setColSpan(String colSpan) {
		this.colSpan = colSpan;
	}

	public String getTempleFileName() {
		if(this.getBuilder()!=null){
		String path=this.getBuilder().getTempletBasePath()+File.separator+"Column.vm";	
		File f=new File(path);
		if(f.exists()){
			return path;
		}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"Column.vm";
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
