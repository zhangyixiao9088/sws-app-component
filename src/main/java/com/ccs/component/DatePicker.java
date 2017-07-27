package com.ccs.component;

import java.io.File;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Set;

import com.ccs.common.AppConstants;
import com.ccs.common.DateUtil;

public class DatePicker extends Text implements InputComponent{
	private String format="9999-99-99";
	@Override
	public String getTempleFileName() {
		if(this.getBuilder()!=null){
		String path=this.getBuilder().getTempletBasePath()+File.separator+"DatePicker.vm";	
		File f=new File(path);
		if(f.exists()){
			return path;
		}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"DatePicker.vm";
	}
	public String parseValue(Object value) {
		if(value instanceof Date){
			
			return DateUtil.simpleFormat((Date)value);
		}
		return value.toString();
	}
	@Override
	public Set<String> getCssLinks() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/dataPicker/WdatePicker.js");
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
