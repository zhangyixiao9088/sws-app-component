package com.ccs.component.charts;

import java.net.URL;
import java.util.LinkedHashSet;
import java.util.Set;

import com.ccs.common.CacheManager;
import com.ccs.common.ClassLoaderUtil;
import com.ccs.component.FlashChar;

public class Fusioncharts extends FlashChar{
	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getScriptFileName("fusioncharts/js/fusioncharts.js","utf-8"));
		js.add( this.getScriptFileName("fusioncharts/js/fusioncharts.charts.js","utf-8"));
		js.add( this.getScriptFileName("fusioncharts/js/fusioncharts.widgets.js","utf-8"));
		js.add( this.getScriptFileName("fusioncharts/js/fusioncharts.gantt.js","utf-8"));
		js.add( this.getScriptFileName("fusioncharts/js/fusioncharts.powercharts.js","utf-8"));
		return js;
	}
	
	@Override
	public StringBuffer getTemplate() {
		URL templateUrl = ClassLoaderUtil.getResource("assets/vm/highcharts/FusionCharts.vm");
		return CacheManager.readTxt(templateUrl);
	}
}
