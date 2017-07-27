package com.ccs.component.bootstrap;

import java.net.URL;
import java.util.LinkedHashSet;
import java.util.Set;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.ccs.common.CacheManager;
import com.ccs.common.ClassLoaderUtil;
import com.ccs.common.StrUtils;
import com.ccs.component.AbstractComponent;
import com.ccs.core.datamodel.DataSet;

public class Handsontable extends AbstractComponent {
	private String contextMenu="true";
	//调用哪个数据源
	private String data;
	/**
	 * 配置列
	 * 例：
	 * [ {data-field:"name", data-halign:"right",data-align:"center"},
	 * 	 {data-field:"name", data-halign:"right",data-align:"center"},
	 * 	 {data-field:"name", data-halign:"right",data-align:"center"}
	 * ]
	 */
	private JSONArray columns;
	private JSONObject dataSchema = new JSONObject();
	private JSONArray colHeaders = new JSONArray();
	private JSONArray columnsSchema= new JSONArray();
	private JSONArray dataArr = new JSONArray();
	private JSONArray showColumns = new JSONArray();
	private JSONObject hiddenColumns =new JSONObject() ;
	
	public StringBuffer print() {
		if(StrUtils.isNotBlank(data)){
			DataSet ds=this.getBuilder().getDataSet(data,this.getExtern());
			JSONObject dsObj = ds.toJson();
			dataArr = dsObj.getJSONArray("data");
		}
		if(columns!=null){
			int size = columns.size();
			for(int i=0;i<size;i++){
				JSONObject obj = columns.getJSONObject(i);
				//自动加上样式 
				String dataField =getString(obj,"data-field"); 
				String dataValue = getString(obj,"value"); 
				if(StrUtils.isBlank(dataValue)){
					dataValue = "";
				} 
				dataSchema.put(dataField, dataValue);
				
				String showType = getString(obj,"type");
				if("hidden".equals(showType)){
					hiddenColumns.put(dataField, dataValue);
					continue;
				}else{
					showColumns.add(dataField);
				}
				if(StrUtils.isBlank(showType)){
					showType = "text";
				}
				
				String title =getString(obj,"title");
				colHeaders.add(title);
				JSONObject d = new JSONObject();
				d.put("data", dataField);
				columnsSchema.add(d);
			}
		}
		return super.print();
	}
	
	private String getString(JSONObject obj , String key){
		if(obj.containsKey(key)){
			return obj.getString(key);
		}
		return "";
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getCssFileName("Handsontable/handsontable.full.min.css","utf-8"));
		return js;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getScriptFileName("Handsontable/handsontable.full.min.js","utf-8"));
		return js;
	}
	@Override
	protected StringBuffer getTemplate(){
		URL templateUrl = ClassLoaderUtil.getResource("assets/vm/Handsontable/handsonTable.vm");
		return CacheManager.readTxt(templateUrl);
	}
	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public JSONArray getColumns() {
		return columns;
	}

	public void setColumns(JSONArray columns) {
		this.columns = columns;
	}

	public JSONObject getDataSchema() {
		return dataSchema;
	}

	public void setDataSchema(JSONObject dataSchema) {
		this.dataSchema = dataSchema;
	}

	public JSONArray getColHeaders() {
		return colHeaders;
	}

	public void setColHeaders(JSONArray colHeaders) {
		this.colHeaders = colHeaders;
	}

	public JSONArray getColumnsSchema() {
		return columnsSchema;
	}

	public void setColumnsSchema(JSONArray columnsSchema) {
		this.columnsSchema = columnsSchema;
	}
	public JSONArray getDataArr() {
		return dataArr;
	}

	public void setDataArr(JSONArray dataArr) {
		this.dataArr = dataArr;
	}

	public JSONObject getHiddenColumns() {
		return hiddenColumns;
	}

	public void setHiddenColumns(JSONObject hiddenColumns) {
		this.hiddenColumns = hiddenColumns;
	}

	public String getContextMenu() {
		return contextMenu;
	}

	public void setContextMenu(String contextMenu) {
		this.contextMenu = contextMenu;
	}

	public JSONArray getShowColumns() {
		return showColumns;
	}

	public void setShowColumns(JSONArray showColumns) {
		this.showColumns = showColumns;
	}
}
