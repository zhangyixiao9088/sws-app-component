package com.ccs.component.bootstrap;

import java.net.URL;
import java.util.LinkedHashSet;
import java.util.Set;

import com.ccs.common.CacheManager;
import com.ccs.common.ClassLoaderUtil;
import com.ccs.component.AbstractComponent;

public class StarRating extends AbstractComponent {
	private String min="0";
	private String max="5";
	private String step="0.5";
	private String dataStars="0";
	
	@Override
	protected StringBuffer getTemplate(){
		URL templateUrl = ClassLoaderUtil.getResource("assets/vm/bootstrap/star/starRating.vm");
		return CacheManager.readTxt(templateUrl);
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getCssFileName("bootstrap/star/css/star-rating.min.css","utf-8"));
		return js;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getScriptFileName("bootstrap/star/js/star-rating.js","utf-8"));
		js.add( this.getScriptFileName("bootstrap/star/js/star-rating-reg.js","utf-8"));
		return js;
	}
	public String getMin() {
		return min;
	}
	public void setMin(String min) {
		this.min = min;
	}
	public String getMax() {
		return max;
	}
	public void setMax(String max) {
		this.max = max;
	}
	public String getStep() {
		return step;
	}
	public void setStep(String step) {
		this.step = step;
	}
	public String getDataStars() {
		return dataStars;
	}
	public void setDataStars(String dataStars) {
		this.dataStars = dataStars;
	}

}
