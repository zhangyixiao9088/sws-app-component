package com.ccs.component;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.ccs.common.AppConstants;
import com.ccs.common.JsonUtil;
import com.ccs.common.StrUtils;
import com.ccs.common.VelocityParser;
import com.ccs.core.datamodel.DataSet;

/**
 * 
 */
public class FlashChar extends AbstractComponent {
	private String charType = "Column2D";
	private String title;
	private String xAxisName;
	private String yAxisName;
	private String width;
	private String height;
	private String categoriesData;
	private List<Map<String, Object>> categories;
	private String data;
	private List<Map<String, Object>> dataList;
	private String dataLevel = "1";//  
	
	/**
	 * 
	 */
	private JSONObject property=new JSONObject();
	private ChartToken chartToken;
	/**
	 * {color:"F6BD0F",showValues:"0",label:"CPA"}
	 */
	private JSONObject categoriesField;
	
	/**
	 * [{seriesName:"dddd",color:"F6BD0F",showValues:"0",group:1,value:"CPA"},
	 * 	{seriesName:"dddd",color:"F6BD0F",showValues:"0",group:1,value:"CPA"},
	 * {seriesName:"dddd",color:"F6BD0F",showValues:"0",group:2,value:"CPA"},
	 * {seriesName:"dddd",color:"F6BD0F",showValues:"0",group:2,value:"CPA"},
	 *  ]
	 */
	private JSONArray datasetFields;
	/**
	 * 用于指定 set中的字段
	 * {label:"FIELD1",fieldName:"FIELD2"}
	 */
	private JSONObject setFields;

	private JSONArray trendlines;
	private JSONArray vTrendlines;
	
	private JSONArray hTrendlines;
	
	public StringBuffer print() {
//		this.setExtern(this.getContext());
		if (StrUtils.isNotBlank(data)) {
			DataSet ds = this.getBuilder().getDataSet(data,
					this.getExtern());
			this.setDataList(ds.getData());
		}
		if(this.datasetFields!=null){
			this.dataLevel="ad";
		}
		if("ad".equals(this.dataLevel)){
			if(StrUtils.isNotBlank(this.title)){
				this.title = VelocityParser.paintComponent(new StringBuffer(this.title), this.getExtern()).toString();
				property.put("caption", this.title);
			}
			chartToken = new ChartToken(this,property);
			//set
			if(setFields != null){
				chartToken.addSet( setFields, dataList);
			}
			//categories
			if(this.categoriesField!=null){
				chartToken.setCategories(categoriesField, dataList);
			}
			//dataSet
			if(this.datasetFields!=null){
					chartToken.addDataSet(datasetFields, dataList);
			}
			if(this.trendlines!=null){
				chartToken.setTrendlines(this.trendlines);
			}
			if(this.vTrendlines != null){
				chartToken.setVrendlines(vTrendlines);
			}
			if(this.hTrendlines != null){
				chartToken.setHrendlines(hTrendlines);
			}
		}else{
			if (charType.startsWith("MS") || this.charType.startsWith("Stacked")) {
				dataLevel = "2";
				if (StrUtils.isNotBlank(categoriesData)) {
					DataSet ds = this.getBuilder().getDataSet(categoriesData,
							this.getExtern());
					this.setCategories(ds.getData());
				}
			}
		}
		return super.print();
	}
//	private Map<String,List<Map<String, Object>>>  getGroupMap(JSONObject ds,List<Map<String, Object>> dataList){
//		Map<String,List<Map<String, Object>>>  groupMap = new LinkedHashMap<String,List<Map<String, Object>>>();
//		String group=null;
//		if(ds.containsKey("group")){
//			group = ds.getString("group");
//		}
//		for(Iterator<Map<String, Object>> ite = dataList.iterator();ite.hasNext();){
//			Map<String, Object> row = ite.next();
//			List<Map<String, Object>> lst=null;
//			if(StrUtils.isNotBlank(group)){
//				if(groupMap.containsKey(group)){
//					lst = groupMap.get(group);
//				}else{
//					lst = new ArrayList<Map<String, Object>>();
//					groupMap.put(group, lst);
//				}
//			} 
//			lst.add(row);
//		}
//		return groupMap;
//	}
	@Override
	public String getTempleFileName() {
		if (this.getBuilder() != null) {
			String path = this.getBuilder().getTempletBasePath()
					+ File.separator + "FlashChar.vm";
			File f = new File(path);
			if (f.exists()) {
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath() + File.separator
				+ "FlashChar.vm";
	}

	@Override
	public Set<String> getCssLinks() {
		return null;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add("UIFrame/frame/charts/FusionCharts/JSClass/FusionCharts.js");
		return js;
	}

	public String getCharType() {
		return charType;
	}

	public void setCharType(String charType) {
		this.charType = charType;
	}

	public String getTitle() {
		String rs = VelocityParser.paintComponent(new StringBuffer(title),
				this.getExtern()).toString();
		return rs;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getXAxisName() {
		return xAxisName;
	}

	public void setXAxisName(String axisName) {
		xAxisName = axisName;
	}

	public String getYAxisName() {
		return yAxisName;
	}

	public void setYAxisName(String axisName) {
		yAxisName = axisName;
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

	public String getDataLevel() {
		return dataLevel;
	}

	public void setDataLevel(String dataLevel) {
		this.dataLevel = dataLevel;
	}

	public String getCategoriesData() {
		return categoriesData;
	}

	public void setCategoriesData(String categoriesData) {
		this.categoriesData = categoriesData;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public List<Map<String, Object>> getCategories() {
		return categories;
	}

	public void setCategories(List<Map<String, Object>> categories) {
		this.categories = categories;
	}

	public List<Map<String, Object>> getDataList() {
		return dataList;
	}

	public void setDataList(List<Map<String, Object>> dataList) {
		this.dataList = dataList;
	}
	public static StringBuffer getString(List lst){
		if(lst.isEmpty()){
			return  new StringBuffer();
		}
		StringBuffer buf = new StringBuffer();
		for(Iterator ite=lst.iterator();ite.hasNext();){
			buf.append(ite.next().toString());
		}
		return buf;
	}
	public static class ChartToken {
		private FlashChar chart;
		private Map<String, String> properties;
		private List<CategoriesToken> categories = new ArrayList<CategoriesToken>();
		private List<DataSetToken> datasets = new ArrayList<DataSetToken>();
		private List<SetToken> sets = new ArrayList<SetToken>();
		private TrendlinesToken trendlines = new TrendlinesToken();
		private VTrendlinesToken  vrendlines = new VTrendlinesToken();
		private HTrendlinesToken  hrendlines =new HTrendlinesToken();
		
		public ChartToken(FlashChar chart ,JSONObject property){
			this.chart = chart;
			String chartType = chart.charType;
			FlashChartProperty flashChartProperty = new FlashChartProperty();
			this.properties = new HashMap<String, String>();
			
			Map<String, String> defaultProperty = flashChartProperty.getOrCreateProperty(chartType);
			properties.putAll(defaultProperty);
			
			Map<String, String> inputProperty= JsonUtil.getMap4Json(property);
			if(inputProperty!=null){
				this.properties .putAll(inputProperty);
			}
		}
		public void addSet(JSONObject setFields,List<Map<String, Object>> dataList) {
			List<Map<String, Object>> newDataList = dataList;
			if(setFields.containsKey("data")){
				String data = setFields.getString("data");
				setFields.remove("data");
				DataSet d = chart.getBuilder().getDataSet(data,chart.getExtern());
				newDataList = d.getData();
			}
			for (Iterator<Map<String, Object>> iterator = newDataList.iterator(); iterator
					.hasNext();) {
				SetToken s = new SetToken();
				Map<String, Object> row = iterator.next();
				for (Iterator ite = setFields.keys(); ite.hasNext();) {
					String key = ite.next().toString();
					String field = setFields.get(key).toString();
					if(row.containsKey(field)){
						Object v = row.get(field);
						s.setProperty(key, StrUtils.getNotNullString(v));
					}else{
						s.setProperty(key, field);
					}
				}
				sets.add(s);
			}
		}
		public void setCategories(JSONObject categoriesField,List<Map<String, Object>> dataList){
			CategoriesToken cats= new CategoriesToken();
			if(categoriesField.containsKey("property")){
				JSONObject json = categoriesField.getJSONObject("property");
				cats.properties.putAll(json);
				categoriesField.remove("property");
			}
			List<Map<String, Object>> newDataList = dataList;
			if(categoriesField.containsKey("data")){
				String data = categoriesField.getString("data");
				categoriesField.remove("data");
				DataSet d = chart.getBuilder().getDataSet(data,chart.getExtern());
				newDataList = d.getData();
			}
			for(Iterator<Map<String, Object>> iterator =newDataList.iterator(); iterator.hasNext();) {
				Map<String, Object> row = iterator.next();
				CategoryToken cat=new CategoryToken();
				for (Iterator ite = categoriesField.keys(); ite.hasNext();) {
					String key = ite.next().toString();
					String field = categoriesField.get(key).toString();
					if(row.containsKey(field)){
						Object v = row.get(field);
						cat.setProperty(key, StrUtils.getNotNullString(v));
					}else{
						cat.setProperty(key, field);
					}
				}
				cats.children.add(cat);
			}
			categories.add(cats);
		}
		
		public void addDataSet(JSONArray datasetFields,List<Map<String, Object>> dataList){
			Map<String,List<DataSetToken>>  groupMap = new LinkedHashMap<String,List<DataSetToken>>();
			List<DataSetToken> rsLst = new ArrayList<DataSetToken>();
			for(int i=0;i<datasetFields.size();i++){
				JSONObject ds = datasetFields.getJSONObject(i);
				
				String group=null;
				if(ds.containsKey("group")){
					group = ds.getString("group");
					ds.remove("group");
				}
				List<DataSetToken> lst=null;
				if(StrUtils.isNotBlank(group)){
					if(groupMap.containsKey(group)){
						lst = groupMap.get(group);
					}else{
						lst = new ArrayList<DataSetToken>();
						groupMap.put(group, lst);
					}
				}else{
					lst = rsLst;
				}
				
				DataSetToken dataset = new DataSetToken();
				if(ds.containsKey("property")){
					JSONObject json = ds.getJSONObject("property");
					dataset.setProperties(json);
					ds.remove("property");
				}
				List<Map<String, Object>> newDataList = dataList;
				if(ds.containsKey("data")){
					String data = ds.getString("data");
					ds.remove("data");
					DataSet d = chart.getBuilder().getDataSet(data,chart.getExtern());
					newDataList = d.getData();
				}
				
				//properties
				for(Iterator<Map<String, Object>> iterator =newDataList.iterator(); iterator.hasNext();) {
					Map<String, Object> row = iterator.next();
					SetToken  set = new SetToken();
					for (Iterator ite = ds.keys(); ite.hasNext();) {
						String key = ite.next().toString();
						String field = ds.get(key).toString();
						if(row.containsKey(field)){
							Object v = row.get(field);
							set.setProperty(key, StrUtils.getNotNullString(v));
						}else{
							set.setProperty(key, field);
						}
					}
					dataset.children.add(set);
				}
				lst.add(dataset);
			}
			
			if(!groupMap.isEmpty()){
				for(Iterator<String> ite=groupMap.keySet().iterator();ite.hasNext();){
					String key = ite.next();
					List<DataSetToken> lst  = groupMap.get(key);
					DataSetToken dataset = new DataSetToken();
					dataset.addDataSet(lst);
					rsLst.add(dataset);
				}
			}
			
			datasets.addAll(rsLst);
		}
		
		public void setTrendlines(JSONArray rendlines){
			for(int i=0;i<rendlines.size();i++){
				JSONObject ds = rendlines.getJSONObject(i);
				trendlines.children.add(new LineToken(ds));
			}
		}
		public void setVrendlines(JSONArray rendlines){
			for(int i=0;i<rendlines.size();i++){
				JSONObject ds = rendlines.getJSONObject(i);
				vrendlines.children.add(new LineToken(ds));
			}
		}
		
		public void setHrendlines(JSONArray rendlines){
			for(int i=0;i<rendlines.size();i++){
				JSONObject ds = rendlines.getJSONObject(i);
				hrendlines.children.add(new LineToken(ds));
			}
		}
		public String toString(){
			StringBuffer buf = new StringBuffer("<chart");
			for(Iterator<Map.Entry<String, String>> iterator = properties.entrySet().iterator(); iterator.hasNext();) {
				Map.Entry<String, String> type =iterator.next();
				String key = type.getKey();
				String lst = type.getValue();
				buf.append(" "+key+"='" + lst + "'");
			}
			buf.append(">");
			buf.append(getString(sets));
			buf.append(getString(categories));
			buf.append(getString(datasets));
			buf.append(this.trendlines.toString());
			buf.append(this.vrendlines.toString());
			buf.append(this.hrendlines.toString());
			buf.append("</chart>");
			
			StringBuffer s = VelocityParser.paintComponent(buf, chart.getExtern()).getBuffer();
			return s.toString();
		}
	}

	private static class CategoriesToken {
		private Map<String, String> properties = new HashMap<String, String>();
		private List<CategoryToken> children = new ArrayList<CategoryToken>();
		public CategoriesToken(){
			
		}
		public void addLabel(Object value){
			CategoryToken cat = new CategoryToken();
			cat.setProperty(StrUtils.getNotNullString(value));
			this.children.add(cat);
		}
		public String toString(){
			StringBuffer buf = new StringBuffer("<categories");
			for(Iterator<Map.Entry<String, String>> iterator = properties.entrySet().iterator(); iterator.hasNext();) {
				Map.Entry<String, String> type =iterator.next();
				String key = type.getKey();
				String lst = type.getValue();
				buf.append(" "+key+"='" + lst + "'");
			}
			buf.append(">");

			buf.append(getString(children));
			buf.append("</categories>");
			return buf.toString();
		}
	}

	public static  class CategoryToken {
		private Map<String, String> properties = new HashMap<String, String>();
		public void setProperty(String value){
			this.setProperty("",value);
		}
		
		public void setProperty(String key,String value){
			if(StrUtils.isBlank(key)){
				key="label";
			}
			properties.put(key, value);
		}
		public String toString(){
			StringBuffer buf = new StringBuffer("<category");
			for(Iterator<Map.Entry<String, String>> iterator = properties.entrySet().iterator(); iterator.hasNext();) {
				Map.Entry<String, String> type =iterator.next();
				String key = type.getKey();
				String lst = type.getValue();
				buf.append(" "+key+"='" + lst + "'");
			}
			buf.append("/>");
			return buf.toString();
		}
	}

	private static  class DataSetToken {
		private Map<String, String> properties = new HashMap<String, String>();
		private List<DataSetToken> childrenDataSet = new ArrayList<DataSetToken>();
		private List<SetToken> children = new ArrayList<SetToken>();
		
		public void addValue(Object value){
			SetToken set = new SetToken();
			set.setProperty(StrUtils.getNotNullString(value));
			this.children.add(set);
		}
		public void addDataSet(List<DataSetToken> ds){
			childrenDataSet.addAll(ds);
		}
		
		public void setProperties(Map<String, String> properties){
			this.properties = properties;
		}
		public String toString(){
			StringBuffer buf = new StringBuffer("<dataSet");
			for(Iterator<Map.Entry<String, String>> iterator = properties.entrySet().iterator(); iterator.hasNext();) {
				Map.Entry<String, String> type =iterator.next();
				String key = type.getKey();
				String lst = type.getValue();
				buf.append(" "+key+"='" + lst + "'");
			}
			buf.append(">");

			buf.append(getString(childrenDataSet));
			buf.append(getString(children));
			buf.append("</dataSet>");
			return buf.toString();
		}
	}

	private static  class SetToken {
		private Map<String, String> properties = new HashMap<String, String>();
		public void setProperty(String value){
			this.setProperty("",value);
		}
		
		public void setProperty(String key,String value){
			if(StrUtils.isBlank(key)){
				key="value";
			}
			properties.put(key, value);
		}
		public String toString(){
			StringBuffer buf = new StringBuffer("<set");
			for(Iterator<Map.Entry<String, String>> iterator = properties.entrySet().iterator(); iterator.hasNext();) {
				Map.Entry<String, String> type =iterator.next();
				String key = type.getKey();
				String lst = type.getValue();
				buf.append(" "+key+"='" + lst + "'");
			}
			buf.append("/>");
			return buf.toString();
		}
	}

	private static  class LineToken {
		private Map<String, String> properties = new HashMap<String, String>();
		public LineToken(JSONObject property){
			properties.putAll(property);
		}
		public String toString(){
			StringBuffer buf = new StringBuffer("<line");
			for(Iterator<Map.Entry<String, String>> iterator = properties.entrySet().iterator(); iterator.hasNext();) {
				Map.Entry<String, String> type =iterator.next();
				String key = type.getKey();
				String lst = type.getValue();
				buf.append(" "+key+"='" + lst + "'");
			}
			buf.append("/>");
			return buf.toString();
		}
	}

	private static class TrendlinesToken {
		private List<LineToken> children = new ArrayList<LineToken>();
		public String toString(){
			if(children.isEmpty()){
				return "";
			}
			StringBuffer buf = new StringBuffer("<trendlines");
			buf.append(">");

			buf.append(getString(children));
			buf.append("</trendlines>");
			return buf.toString();
		}
	}

	private static class VTrendlinesToken extends TrendlinesToken{
		private List<LineToken> children = new ArrayList<LineToken>();
		public String toString(){
			if(children.isEmpty()){
				return "";
			}
			StringBuffer buf = new StringBuffer("<vTrendlines");
			buf.append(">");
			buf.append(getString(children));
			buf.append("</vTrendlines>");
			return buf.toString();
		}
	}

	public static class HTrendlinesToken extends TrendlinesToken{
		private List<LineToken> children = new ArrayList<LineToken>();
		public HTrendlinesToken(){
			
		}
		public String toString(){
			if(children.isEmpty()){
				return "";
			}
			StringBuffer buf = new StringBuffer("<hTrendlines");
			buf.append(">");

			buf.append(getString(children));
			buf.append("</hTrendlines>");
			return buf.toString();
		}
	}

	public JSONObject getProperty() {
		return property;
	}

	public void setProperty(JSONObject property) {
		this.property = property;
	}

	public ChartToken getChartToken() {
		return chartToken;
	}

	public void setChartToken(ChartToken chartToken) {
		this.chartToken = chartToken;
	}

	public JSONObject getCategoriesField() {
		return categoriesField;
	}

	public void setCategoriesField(JSONObject categoriesField) {
		this.categoriesField = categoriesField;
	}

	public JSONArray getDatasetFields() {
		return datasetFields;
	}

	public void setDatasetFields(JSONArray datasetFields) {
		this.datasetFields = datasetFields;
	}

	public JSONObject getSetFields() {
		return setFields;
	}

	public void setSetFields(JSONObject setFields) {
		this.setFields = setFields;
	}
	public JSONArray getVTrendlines() {
		return vTrendlines;
	}
	public void setVTrendlines(JSONArray trendlines) {
		vTrendlines = trendlines;
	}
	public JSONArray getHTrendlines() {
		return hTrendlines;
	}
	public void setHTrendlines(JSONArray trendlines) {
		hTrendlines = trendlines;
	}
	public JSONArray getTrendlines() {
		return trendlines;
	}
	public void setTrendlines(JSONArray trendlines) {
		this.trendlines = trendlines;
	}
}
