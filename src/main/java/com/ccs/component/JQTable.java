package com.ccs.component;

import java.io.File;
import java.util.LinkedHashSet;
import java.util.Set;

import com.ccs.common.AppConstants;

public class JQTable extends HtmlTable{
	@Override
	public String getTempleFileName() {
		if(this.getBuilder()!=null){
			String path=this.getBuilder().getTempletBasePath()+File.separator+"JQTable.vm";	
			File f=new File(path);
			if(f.exists()){
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"JQTable.vm";
	}

	@Override
	public Set<String> getCssLinks() {
		Set<String> css = new LinkedHashSet<String>();
		css.add("css/ccs/TableView/TableView.css");
		return css;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/TableView/PagerView.js");
		js.add("js/ccs/TableView/TableView.js");
		return js;
	}

}
