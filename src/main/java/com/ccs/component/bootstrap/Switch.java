package com.ccs.component.bootstrap;

import java.net.URL;
import java.util.LinkedHashSet;
import java.util.Set;

import com.ccs.common.CacheManager;
import com.ccs.common.ClassLoaderUtil;
import com.ccs.component.AbstractInputComponent;

public class Switch extends AbstractInputComponent {
	private String onText="ÊÇ";
	private String offText="·ñ";

	public String getOnText() {
		return onText;
	}

	public void setOnText(String onText) {
		this.onText = onText;
	}

	public String getOffText() {
		return offText;
	}

	public void setOffText(String offText) {
		this.offText = offText;
	}

	@Override
	public Set<String> getCssLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getCssFileName("bootstrap/switch/css/bootstrap3/bootstrap-switch.min.css","utf-8"));
		return js;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getScriptFileName("bootstrap/switch/js/bootstrap-switch.min.js","utf-8"));
		js.add( this.getScriptFileName("bootstrap/switch/js/bootstrap-switch-reg.js","utf-8"));
		return js;
	}
	@Override
	protected StringBuffer getTemplate(){
		URL templateUrl = ClassLoaderUtil.getResource("assets/vm/bootstrap/switch.vm");
		return CacheManager.readTxt(templateUrl);
	}

}
