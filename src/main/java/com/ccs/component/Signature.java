package com.ccs.component;

import java.util.LinkedHashSet;
import java.util.Set;

public class Signature extends AbstractInputComponent implements InputComponent{
	private String label;
	private String fieldsList;

//	public StringBuffer print(){
//		if(StrUtils.isNotBlank(fieldsList)){
//			String[] coms = fieldsList.split(",");
//			PageDescription pageDesc = this.getBuilder().getPageDescription();
//			String fList="";
//			for(int i=0;i<coms.length;i++){
//				AbstractDescription aDesc = pageDesc.findDesciption(PageDescription.Components, coms[i]);
//				if(aDesc==null){
//					throw new PctException("没有找到控件："+coms[i]);
//				}
//				fList = StrUtils.connectBySplit(fList, coms[i]+"="+aDesc.getCnName(), ",");
//			}
//		}
//		return super.print();
//	}
	@Override
	public Set<String> getCssLinks() {
		return null;
	}
	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/UUID/uuidHelper.js");
		js.add("js/ccs/signature/signatureBase.js");
		return js;
	}
	
	public String getTempleFileName() {
		return "";
	}

	public String getFieldsList() {
		return fieldsList;
	}

	public void setFieldsList(String fieldsList) {
		this.fieldsList = fieldsList;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}
	
}
