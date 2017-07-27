package com.ccs.component;

import java.util.LinkedHashSet;
import java.util.Set;

public class CodeEditor extends AbstractInputComponent implements InputComponent{
	/**
	 * sql,xml,svg,json,javascript,java,html,
	 */
	private String mode="sql";
	
	/**
            <option value="ace/theme/chrome">Chrome</option>
            <option value="ace/theme/clouds">Clouds</option>
            <option value="ace/theme/crimson_editor">Crimson Editor</option>
            <option value="ace/theme/dawn">Dawn</option>
            <option value="ace/theme/dreamweaver">Dreamweaver</option>
            <option value="ace/theme/eclipse">Eclipse</option>
            <option value="ace/theme/github">GitHub</option>
            <option value="ace/theme/solarized_light">Solarized Light</option>
            <option value="ace/theme/textmate" selected="selected">TextMate</option>
            <option value="ace/theme/tomorrow">Tomorrow</option>
            <option value="ace/theme/xcode">XCode</option>
          
	 */
	private String theme="xcode";
	@Override
	public Set<String> getCssLinks() {
		return null;
	}
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/ace/ace.js");
		return js;
	}
	public String getMode() {
		return mode;
	}
	public void setMode(String mode) {
		this.mode = mode;
	}
	public String getTheme() {
		return theme;
	}
	public void setTheme(String theme) {
		this.theme = theme;
	}
}
