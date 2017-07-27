package com.ccs.component;

import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

import net.sf.json.JSONObject;

import com.ccs.common.JsonUtil;
import com.ccs.common.StrUtils;
import com.ccs.common.VelocityParser;
import com.ccs.common.exception.PctException;
import com.ccs.core.builder.Builder;
import com.ccs.core.builder.bundle.DataBundle;
import com.ccs.core.builder.bundle.XmlBundle;
import com.ccs.core.datamodel.DataSet;
import com.ccs.core.description.PageDescription;
import com.ccs.core.description.XmlHtmlComponentDescriptor;
import com.ccs.core.views.htmlView.component.HtmlComponent;

public class Table extends AbstractComponent{
	private String data;
	private String width="100%";
	private String height="500px";
	private String multiselect="false";
	private String header;
	private String keys;
	private String initWidths;
	private String aligns;
	private String colSorting;
	private String colTypes;
	private String model = "show"; //edit
	private String editPane  ;
	private HtmlComponent editPaneCom;
	private JSONObject dataBundle;
	private JSONObject comboxs;
	private int cols;
	private String jsonString;
	private Set<String> dataBandleScrpits = new LinkedHashSet<String>();
	private Set<String> combosScrpits = new LinkedHashSet<String>();
	
	public void setParamete(String jsonString) {
		this.jsonString = jsonString;
	}
	
	private String parse(String key,String defaultValue,Map jsonMap,Map<String,String> comType){
		String rs="";
		JSONObject obj =null;
		if(jsonMap.containsKey(key)){
			obj = (JSONObject) jsonMap.get(key);
		}else{
			obj = new JSONObject();
		}
		for(int i=0;i<this.cols;i++){
			String cKey = String.valueOf(i);
			String cValue = "";
			if(obj.containsKey(cKey)){
				cValue = obj.getString(cKey);
			}else{
				if(comType!= null && comType.containsKey(""+i)){
					cValue = comType.get(""+i);
				}else{
					cValue = defaultValue;
				}
			}
			rs = StrUtils.connectBySplit(rs, cValue, ",");
		}
		
		return rs;
	}
	
	public StringBuffer print(){
		Map<String,Object> context =super.getExtern();
		if(StrUtils.isBlank(jsonString)){
			return new StringBuffer();
		}
		String newString = VelocityParser.paintComponent(new StringBuffer(jsonString), context).toString();
		super.setParamete(newString);
		
		Map jsonMap=JsonUtil.getMap4Json(newString);
		if(jsonMap.containsKey("header")){
			this.header = (String) jsonMap.get("header");
			String[] heads = this.header.split(",");
			this.cols = heads.length;
		}
		if(this.cols <=0 ){
			throw new PctException("没有设置Header参数。");
		}
		
	
		
		
		Map<String,String> com = initCombo();
		initWidths = this.parse("widthsCfg", "*", jsonMap,null);
		aligns = this.parse("alignsCfg", "left", jsonMap,null);
		colSorting = this.parse("colSortingCfg", "str", jsonMap,null);
		aligns = this.parse("alignsCfg", "left", jsonMap,null);
		colTypes = this.parse("colTypesCfg", "ro", jsonMap,com);
		
		if(jsonMap.containsKey("model")){
			this.model = (String) jsonMap.get("model");
		}
		if(jsonMap.containsKey("keys")){
			this.keys = (String) jsonMap.get("keys");
		}
		String tableState = "";
		if(context.containsKey(XmlBundle.table_state)){
			tableState = (String) context.get(XmlBundle.table_state);
			if(XmlBundle.table_state_read.equals(tableState)){
				this.model = "view";
			}
		}
		
		this.editPane =   (String) jsonMap.get("editPane");
		if(StrUtils.isNotBlank(this.editPane)){
			Builder builder = super.getBuilder();
			PageDescription pageDescription = builder.getPageDescription();
			XmlHtmlComponentDescriptor childComDesc=(XmlHtmlComponentDescriptor) pageDescription.findDesciption(PageDescription.Components, editPane);
			this.editPaneCom =childComDesc.createComponent(builder,pageDescription,context);
		}
		
		if(this.dataBundle!=null){
			initBandle(context);
		}
		return super.print();
	}
	private Map<String,String> initCombo(){
		Map<String,String> rs = new HashMap<String,String>();
		if(this.comboxs == null){
			return rs;
		}
		Builder builder = super.getBuilder();
		String[] keysArr = keys.split(",");
	
		Map combosMap = JsonUtil.getMap4Json(this.comboxs);
		for(int i=0;i<keysArr.length;i++){
			String key = keysArr[i];
			if(combosMap.containsKey(key)){
				rs.put(""+i, "co");
				String db = (String) combosMap.get(key);
				DataSet ds = builder.getDataSet(db, new HashMap());
				//String dScript = "mygrid.setColumnExcellType("+i+",'co');\n";
				//combosScrpits.add(dScript);
				for(Map<String,Object> row: ds.getData()){
					String script = "mygrid.getCombo("+i+").put('"+row.get("KEY")+"','"+row.get("VALUE")+"');\n";
					combosScrpits.add(script);
				}
			}
		}
		return rs;
	}
	private void initBandle(Map<String,Object> context){
		String tableState = "";
		if(context.containsKey(XmlBundle.table_state)){
			tableState = (String) context.get(XmlBundle.table_state);
		}
		Set<String> poolDataModel = new LinkedHashSet<String>();
		Map bandleMap = JsonUtil.getMap4Json(this.dataBundle);
		for (Iterator iterator = bandleMap.entrySet().iterator(); iterator.hasNext();) {
			Map.Entry entry = (Map.Entry) iterator.next();
			String key = (String) entry.getKey();
			Object value= entry.getValue();
			DataBundle dBundle = new DataBundle(this.getBuilder(), key, value, poolDataModel);
			if (XmlBundle.table_state_read.equals(tableState)) {
				dBundle.setCanEdit("false");
			}
			dataBandleScrpits.add(dBundle.outputRowStr());
		}
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> css = new LinkedHashSet<String>();
		css.add("js/ccs/DhtmlX/dhtmlxGrid/codebase/dhtmlxgrid.css");
		css.add("js/ccs/DhtmlX/dhtmlxCalendar/codebase/dhtmlxcalendar.css");
		
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
		js.add("js/common/uuid.js");
		js.add("js/ccs/DhtmlX/dhtmlxGrid/codebase/dhtmlxcommon.js");
		js.add("js/ccs/DhtmlX/dhtmlxGrid/codebase/dhtmlxgrid.js");
		js.add("js/ccs/DhtmlX/dhtmlxGrid/codebase/dhtmlxgridcell.js");
		js.add("js/ccs/DhtmlX/dhtmlxCalendar/codebase/dhtmlxcalendar.js");
		js.add("js/ccs/DhtmlX/dhtmlxGrid/codebase/excells/dhtmlxgrid_excell_dhxcalendar.js");
		js.add("js/ccs/table/table.js");
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


	public String getInitWidths() {
		return initWidths;
	}

	public void setInitWidths(String initWidths) {
		this.initWidths = initWidths;
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

	public int getCols() {
		return cols;
	}

	public void setCols(int cols) {
		this.cols = cols;
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

	public Set<String> getDataBandleScrpits() {
		return dataBandleScrpits;
	}

	public void setDataBandleScrpits(Set<String> dataBandleScrpits) {
		this.dataBandleScrpits = dataBandleScrpits;
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

	public Set<String> getCombosScrpits() {
		return combosScrpits;
	}

	public void setCombosScrpits(Set<String> combosScrpits) {
		this.combosScrpits = combosScrpits;
	}
}
