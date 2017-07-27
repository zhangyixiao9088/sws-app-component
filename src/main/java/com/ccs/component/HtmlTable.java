package com.ccs.component;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.ccs.common.AppConstants;
import com.ccs.common.CacheManager;
import com.ccs.common.JsonUtil;
import com.ccs.common.StrUtils;
import com.ccs.common.VOParser;
import com.ccs.common.VelocityParser;
import com.ccs.common.exception.PctException;
import com.ccs.core.datamodel.DataSet;
import com.ccs.core.views.tableView.simple.SimpleTableBody;
import com.ccs.core.views.tableView.simple.SimpleTableHead;

public class HtmlTable extends AbstractComponent {
	public final static String GROUPFIELD="groupField";
	public final static String GROUPTEMP="groupView";
	private Map<String, String> property = new HashMap<String, String>();
	private String data;
	private String idIndex="1";
	private SimpleTableHead head;
	private SimpleTableBody body ;//表体
	private List<Map<String,Object>> dataList;
	private String jsonString;
	private Map paramters;
	public String getTempleFileName() {
		if (this.getBuilder() != null) {
			String path = this.getBuilder().getTempletBasePath()
					+ File.separator + "HtmlTable.vm";
			File f = new File(path);
			if (f.exists()) {
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath() + File.separator
				+ "HtmlTable.vm";
	}
	public void setParamete(String jstring) {
		this.jsonString = jstring;
		Map jsonMap=JsonUtil.getMap4Json(jsonString);
		if (jsonMap.containsKey("property")) {
			JSONObject p = (JSONObject) jsonMap.get("property");
			this.property = JsonUtil.getMap4Json(p.toString());
		}
		
//		JSONArray h = (JSONArray) jsonMap.get("head");
		if(jsonMap.containsKey("data")){
			this.data = (String) jsonMap.get("data");
		}
		if(jsonMap.containsKey("idIndex")){
			this.idIndex = (String) jsonMap.get("idIndex");
		}
		if (jsonMap.containsKey("head")) {
			this.head= new SimpleTableHead(this.getBuilder());
			JSONArray jsonArray = (JSONArray) jsonMap.get("head");
			for (int i = 0; i < jsonArray.size(); i++) {
				JSONObject jsonObject = jsonArray.getJSONObject(i);
				ComponentDescription col=createComponentDescription(jsonObject);
				this.head.addComponent(col);
			}
		}
//		JSONArray b = (JSONArray) jsonMap.get("body");
		if (jsonMap.containsKey("body")) {
			body = new SimpleTableBody(this.getBuilder());
			JSONArray jsonArray = (JSONArray) jsonMap.get("body");
			for (int i = 0; i < jsonArray.size(); i++) {
				JSONObject jsonObject = jsonArray.getJSONObject(i);
				ComponentDescription col=createComponentDescription(jsonObject);
				this.body.addCol(col);
			}
		}
		
	}
	//头
	public List<ComponentDescription> getHeadComponent(){
		for(ComponentDescription desc:head.getCols()){
			parseCol(desc,this.paramters);
		}
		List<ComponentDescription> l =  this.head.getCols();
		return l;
	}
	protected ComponentDescription createComponentDescription(JSONObject com){
		
//		if(com.containsKey("filter")){
//			String filterName=com.getString("filter");
//			if(!others.containsKey(filterName)){
//				String str = viewerDescription.getParamValue(filterName);
//				if(StrUtils.isBlank(str)){
//					throw new PctException("不存在过滤器:"+filterName);
//				}
//				others.put(filterName, str);
//			}
//			StringBuffer fl=new StringBuffer(others.get(filterName));
//			ComponentDescription col=new ComponentDescription();
//			col.setFilter(fl);
//			return col;
//		}
		
		String type="label";
		if(com.containsKey("type")){
			type=com.getString("type");
		}else{//兼容单模式
			ComponentDescription col=new ComponentDescription();
			col.setType("label");
			Component component=ComponentFactory.createComponent("label");
			if(component==null){
				throw new PctException("控件类型:"+type+"没有定义.");
			}
			component.setBuilder(this.getBuilder());
			component.setParamete(com.toString());
			col.setComponent(component);
			return col;
		}
		

		
		Object obj=com.get("param");
		ComponentDescription col=new ComponentDescription();
		col.setParam(obj.toString());
		col.setType(type);
		if(com.containsKey("location")){
			int location=com.getInt("location");
			col.setLocation(location);
		}
		if(com.containsKey("colSpan")){
			String colspan=com.getString("colSpan");
			col.setColspan(colspan);
		}
		if(com.containsKey("cssClass")){
			String cssClass=com.getString("cssClass");
			col.setCssClass(cssClass);
		}
		for(Object oKey:com.keySet()){
			if("type".equals(oKey) || "param".equals(oKey)
					|| "location".equals(oKey) || "cssClass".equals(oKey)){
				continue;
			}else{
				Object vobj=com.get(oKey);
				col.putProperty(oKey.toString(), vobj);
			}
		}
		Component component=ComponentFactory.createComponent(type);
		if(component==null){
			throw new PctException("控件类型:"+type+"没有定义.");
		}
		component.setBuilder(this.getBuilder());
		component.setParamete(obj.toString());
		col.setComponent(component);
		return col;
	}
	public StringBuffer print() {
		if(StrUtils.isNotBlank(data)){
			DataSet ds=this.getBuilder().getDataSet(data,this.getExtern());
			this.setDataList(ds.getData());
		}
		if(this.getBuilder()!=null){
			this.setId(this.getBuilder().getName()+"_"+this.getName());
		}else{
			this.setId(this.getName());
		}
		
		Map vars= new HashMap();
		vars.put("st", this);
		vars.putAll(this.getExtern());
		this.paramters = vars;
		StringBuffer templet=CacheManager.readTxt(getTempleFileName());
		return VelocityParser.paintComponent(templet, vars).getBuffer();
	}
	protected void parseCol(ComponentDescription col,Map mapData ){
		if(col.getFilter()!=null){
			String str=VelocityParser.paintComponent(col.getFilter(),mapData).toString();
			JSONObject jsonObject = JSONObject.fromObject(str);
			ComponentDescription tempCol=this.createComponentDescription(jsonObject);
			parseCol(tempCol,mapData);
			VOParser.copyValuesFrom(col, tempCol);
		}
	}
	//列数据
	public List<Row> getColumnData() {
		List<Row> result = new ArrayList<Row>();
		String groupTitle="";
		String groupField=null;
		String groupTemple="";
		if(this.property.containsKey(GROUPFIELD)){
			groupField=property.get(GROUPFIELD);
			groupTemple="$"+groupField;
		}
		if(this.property.containsKey(GROUPTEMP)){
			groupTemple=property.get(GROUPTEMP);
		}
		
		for (Map rowData : dataList){
			if(this.paramters!=null){
				rowData.put("outDocument",this.paramters);
			}
			Row row=new Row();
			row.cols = new ArrayList<Column>();
			for (ComponentDescription col : body.getCols()) {
				parseCol(col,rowData);
				Component com=col.getComponent();
				String cd = VelocityParser.paintComponent(com.print(),
						rowData).toString();
				Column column=new Column();
				column.setBuilder(this.getBuilder());
				column.view=cd;
				row.cols.add(column);
			}
			
			if(groupField!=null && rowData.containsKey(groupField)){
				String t=rowData.get(groupField).toString();
				if(!groupTitle.equals(t)){
					groupTitle=t;
					Row groupRow=new Row();
					groupRow.rowType=1;//分组类型
					groupRow.cols = new ArrayList<Column>();
					
					Column column=new Column();
					column.setBuilder(this.getBuilder());
					column.setColSpan(String.valueOf(body.getCols().size()));
					column.view = VelocityParser.paintComponent(new StringBuffer(groupTemple),
							rowData).toString();
					groupRow.cols.add(column);
					result.add(groupRow);
				}
			}
			result.add(row);
		}
		return result;
	}
	public void setProperty(JSONObject property) {
		this.property = property;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public List<Map<String, Object>> getDataList() {
		return dataList;
	}
	public void setDataList(List<Map<String, Object>> dataList) {
		this.dataList = dataList;
	}
	public Map<String, String> getProperty() {
		return property;
	}
	public void setProperty(Map<String, String> property) {
		this.property = property;
	}
	public SimpleTableHead getHead() {
		return head;
	}
	public void setHead(SimpleTableHead head) {
		this.head = head;
	}
	public SimpleTableBody getBody() {
		return body;
	}
	public void setBody(SimpleTableBody body) {
		this.body = body;
	}
	public Map getParamters() {
		return paramters;
	}
	public void setParamters(Map paramters) {
		this.paramters = paramters;
	}


	public String getIdIndex() {
		return idIndex;
	}
	public void setIdIndex(String idIndex) {
		this.idIndex = idIndex;
	}
	@Override
	public Set<String> getCssLinks() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Set<String> getJsLinks() {
		// TODO Auto-generated method stub
		return null;
	}
	
}
