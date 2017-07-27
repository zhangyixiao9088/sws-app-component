package com.ccs.component;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.sf.json.JSONObject;

import com.ccs.common.StrUtils;
import com.ccs.common.VelocityParser;
import com.ccs.common.exception.PctException;
import com.ccs.core.views.htmlView.component.HtmlComponent;

public class ETable extends AbstractComponent{
	private final static String space="NA";
	private String data;
	private String header;//一级表头
	private String keys;// field
	private String width="100%";
	private String height="500px";
	private String multiselect="false";
	private String aligns;
	private String colSorting;
	private String colTypes;
	private String model = "show"; //edit
	private String editPane  ;
	private HtmlComponent editPaneCom;
	private JSONObject dataBundle;
	private JSONObject comboxs;
	private String jsonString;
	
	
	public void setParamete(String jsonString) {
		this.jsonString = jsonString;
	}
	private void createHead(){
		if(StrUtils.isBlank(this.header)){
			return;
		}
		if(StrUtils.isBlank(this.keys)){
			return;
		}
		String[] keyArr = this.keys.split(",");
		
	}
	
	public StringBuffer print(){
		Map<String,Object> context =super.getExtern();
		if(StrUtils.isBlank(jsonString)){
			return new StringBuffer();
		}
		String newString = VelocityParser.paintComponent(new StringBuffer(jsonString), context).toString();
		super.setParamete(newString);
		
		return super.print();
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> css = new LinkedHashSet<String>();
		css.add("js/ccs/easyui/themes/default/easyui.css");
		css.add("js/ccs/easyui/themes/icon.css");
		
		if(this.editPaneCom!= null){
			Set c = this.editPaneCom.printCssLink();
			if(c!=null){
				css.addAll(c);
			}
		}
		return css;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("js/ccs/easyui/jquery.easyui.min.js");
		if(this.editPaneCom!= null){
			Set c = this.editPaneCom.printJSLink();
			if(c!=null){
				js.addAll(c);
			}
		}
		return js;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getMultiselect() {
		return multiselect;
	}

	public void setMultiselect(String multiselect) {
		this.multiselect = multiselect;
	}


	public String getAligns() {
		return aligns;
	}

	public void setAligns(String aligns) {
		this.aligns = aligns;
	}

	public String getColSorting() {
		return colSorting;
	}

	public void setColSorting(String colSorting) {
		this.colSorting = colSorting;
	}

	public String getColTypes() {
		return colTypes;
	}

	public void setColTypes(String colTypes) {
		this.colTypes = colTypes;
	}

	public String getHeader() {
		return header;
	}
	public void setHeader(String header) {
		this.header = header;
	}
	public String getKeys() {
		return keys;
	}

	public void setKeys(String keys) {
		this.keys = keys;
	}

	public String getWidth() {
		return width;
	}

	public void setWidth(String width) {
		this.width = width;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public JSONObject getDataBundle() {
		return dataBundle;
	}

	public void setDataBundle(JSONObject dataBundle) {
		this.dataBundle = dataBundle;
	}
	public String getJsonString() {
		return jsonString;
	}

	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getEditPane() {
		return editPane;
	}

	public void setEditPane(String editPane) {
		this.editPane = editPane;
	}

	public HtmlComponent getEditPaneCom() {
		return editPaneCom;
	}

	public void setEditPaneCom(HtmlComponent editPaneCom) {
		this.editPaneCom = editPaneCom;
	}

	public JSONObject getComboxs() {
		return comboxs;
	}

	public void setComboxs(JSONObject comboxs) {
		this.comboxs = comboxs;
	}
	private static class Head{
		private List<HeadRow> rows;
		private List<HeadNode> signNodes;
		public Head(String headStr){
			rows = new ArrayList<HeadRow>();
			String[] headGroup =headStr.split(";");
			for(int i=0;i<headGroup.length;i++){
				String headRowStr = headGroup[i];
				HeadRow row = new HeadRow(headRowStr);
				rows.add(row);
			}
			
			this.signNodes = signMainCols();
		}
		
		private  List<HeadNode> signMainCols(){
			List<HeadNode> colSign = new ArrayList<HeadNode>();
			List<HeadNode> rowSign = new ArrayList<HeadNode>();
			int cols = rows.get(0).nodes.size();
			for (int i = 0; i < cols; i++) {
				boolean hasSign = false;
				for (int j = 0 ;j<rows.size();j++) {
					List<HeadNode> nodes = rows.get(j).nodes;
					if(nodes.size()!=cols){
						throw new PctException("表头第"+j+"行列数不匹配。");
					}
					HeadNode node = nodes.get(i);
					if(!space.equalsIgnoreCase(node.label)){
						colSign.set(i, node);
						rowSign.set(j,node);
						hasSign=true;
					}else{
						
					}
				}
				if(!hasSign){
					throw new PctException("表头第"+i+"列为空列。");
				}
			}
			return colSign;
		}
	}
	
	private static class HeadRow{
		private List<HeadNode> nodes;
		public HeadRow(String rowStr){
			nodes=new ArrayList<HeadNode>();
			String[] rowArr = rowStr.split(",");
			for(int i=0;i<rowArr.length;i++){
				HeadNode node = new HeadNode();
				node.label = rowArr[i];
				nodes.add(node);
			}
		}
	}
	private static class HeadNode{
		private String field;
		private String width;
		private int rowspan=1;
		private int colspan=1;
		private String label;
		public HeadNode(){
			
		}
	}
}
