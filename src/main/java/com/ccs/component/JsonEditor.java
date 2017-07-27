package com.ccs.component;

import java.util.LinkedHashSet;
import java.util.Set;

public class JsonEditor extends AbstractInputComponent implements InputComponent{

	@Override
	public Set<String> getCssLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/jsonEditor/jsoneditor-min.css");
		return js;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/jsonEditor/json.js");
		js.add("js/ccs/jsonEditor/jsoneditor-min.js");
		js.add("js/ccs/jsonEditor/jsonlint.js");
		return js;
	}


}
