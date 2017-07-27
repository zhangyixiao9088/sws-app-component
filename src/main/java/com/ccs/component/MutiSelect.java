package com.ccs.component;

import java.util.LinkedHashSet;
import java.util.Set;


public class MutiSelect extends AbstractInputComponent{
	private String dlgWidth;
	private String dlgHeight;
	private String dlgSrc;
	private String btnName;
	private String btnClass;
	private String isShow;

	public String getDlgWidth() {
		return dlgWidth;
	}
	public void setDlgWidth(String dlgWidth) {
		this.dlgWidth = dlgWidth;
	}
	public String getDlgHeight() {
		return dlgHeight;
	}
	public void setDlgHeight(String dlgHeight) {
		this.dlgHeight = dlgHeight;
	}
	public String getDlgSrc() {
		return dlgSrc;
	}
	public void setDlgSrc(String dlgSrc) {
		this.dlgSrc = dlgSrc;
	}
	public String getBtnName() {
		return btnName;
	}
	public void setBtnName(String btnName) {
		this.btnName = btnName;
	}
	public String getBtnClass() {
		return btnClass;
	}
	public void setBtnClass(String btnClass) {
		this.btnClass = btnClass;
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> css = new LinkedHashSet<String>();
		css.add("css/ccs/MutiSelect/default.css");
		css.add("css/ccs/jquery/jquery-ui-1.8.16.custom.css");
		return css;
	}
	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/jquery/jquery-ui-1.8.custom.min.js");
		js.add("js/ccs/MutiSelect/MutiSelect.js");
		js.add("UIFrame/frame/js/attention/zDialog/zDrag.js");
		js.add("UIFrame/frame/js/attention/zDialog/zDialog.js");
		
		return js;
	}
	public String getIsShow() {
		return isShow;
	}
	public void setIsShow(String isShow) {
		this.isShow = isShow;
	}

}
