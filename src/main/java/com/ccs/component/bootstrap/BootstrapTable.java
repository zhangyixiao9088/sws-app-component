package com.ccs.component.bootstrap;

import java.net.URL;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.ccs.common.CacheManager;
import com.ccs.common.ClassLoaderUtil;
import com.ccs.common.StrUtils;
import com.ccs.component.AbstractComponent;
import com.ccs.core.datamodel.DataSet;

public class BootstrapTable extends AbstractComponent {
	//调用哪个数据源
	private String data;
	private String dataUrl;
	private String params;
	private String headStr;
	private String height;					//表格高度
	private String cardView; 			//Card View
	
	private String hasSelect; 			//Radio Select 或 Checkbox Select
	private String singleSelect; 			//是否单选
	private String selectItemName;	//选择控件的name;
	private String hasSearch;  			//是否打开查询
	private String showRefresh;		//是否显示刷新
	private String showToggle;			//在card view 与grid view 中切换
	private String showColumns;  	//是否打开选择列的功能
	private String toolbar;				//工具栏ID 例：#toolbar
	
	private String hasPagination;		//是否分页
	
	/**
	 * 定义查询的JS名称
	 * function queryParams() {
	 * 		var obj = new Object();
	 * 		obj.type=document.getElementById("com_id").value;
		    return {
		        type: 'owner',
		        sort: 'updated',
		        direction: 'desc',
		        per_page: 100,
		        page: 1
		    };
		}
	 */
	private String queryParams="";		//定义查询的JS名称
	
	
	
	private String columnsData;
	
	/**
	 * 配置列
	 * 例：
	 * [ {data-field:"name", data-halign:"right",data-align:"center"},
	 * 	 {data-field:"name", data-halign:"right",data-align:"center"},
	 * 	 {data-field:"name", data-halign:"right",data-align:"center"}
	 * ]
	 */
	private JSONArray columns;
	
	
	public StringBuffer print() {
		String configName = this.getBuilder().getConfigName();
		dataUrl = "dataAction_loadJson.action?__fileName="+configName+"&__dataSet="+this.data+"&__type=pane";
		if(this.getExtern()!=null && StrUtils.isNotBlank(this.params)){
			List paramArr = Arrays.asList(this.params.split(","));
			Map<String,Object> map = this.getExtern();
			for(Iterator<Map.Entry<String, Object>> ite = map.entrySet().iterator();ite.hasNext();){
				Map.Entry<String, Object> entry = ite.next();
				String key = entry.getKey();
				if(paramArr.contains(key)){
					Object obj = entry.getValue();
					if(StrUtils.isNotBlank(obj)){
						queryParams = queryParams+"p."+key+"=\""+obj+"\";\n";
					}
				}
			}
		}
		if(StrUtils.isNotBlank(columnsData)){
			DataSet ds=this.getBuilder().getDataSet(columnsData,this.getExtern());
			columns = ds.toObjectArray();
		}
		
		if(columns!=null){
			int size = columns.size();
			String head = "";
			for(int i=0;i<size;i++){
				JSONObject obj = columns.getJSONObject(i);
				//自动加上样式 
				String dataField = obj.getString("data-field");
				if(!obj.containsKey("data-class")){
					obj.put("data-class", dataField);
				}else{
					String dataClass = obj.getString("data-class");
					obj.put("data-class", dataClass+" "+dataField);
				}
				
				//编辑器设置
				if(obj.containsKey("edit-type")){
					String type = obj.getString("edit-type");
				}
				
				String title = "";
				String token = "<th ";
				for(Iterator<String> ite = obj.keys();ite.hasNext();){
					String key = ite.next();
					if(key.equalsIgnoreCase("title")){
						title = obj.getString("title");
					}else{
						token +=key+"=\""+obj.getString(key)+"\" ";
					}
				}
				token+=">"+title+"</th>";
				head+=token;
			}
			headStr = head;
		}
		return super.print();
	}
	@Override
	public Set<String> getCssLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getCssFileName("bootstrap/bootstrapTable/bootstrap-table.css","utf-8"));
		return js;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getScriptFileName("bootstrap/bootstrapTable/bootstrap-table.js","utf-8"));
		js.add( this.getScriptFileName("bootstrap/bootstrapTable/locale/bootstrap-table-zh-CN.js","utf-8"));
		return js;
	}
	
	@Override
	protected StringBuffer getTemplate(){
		URL templateUrl = ClassLoaderUtil.getResource("assets/vm/bootstrap/bootstrapTable/table.vm");
		return CacheManager.readTxt(templateUrl);
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getCardView() {
		return cardView;
	}

	public void setCardView(String cardView) {
		this.cardView = cardView;
	}

	public String getHasSelect() {
		return hasSelect;
	}

	public void setHasSelect(String hasSelect) {
		this.hasSelect = hasSelect;
	}

	public String getSelectItemName() {
		return selectItemName;
	}

	public void setSelectItemName(String selectItemName) {
		this.selectItemName = selectItemName;
	}

	public String getHasSearch() {
		return hasSearch;
	}

	public void setHasSearch(String hasSearch) {
		this.hasSearch = hasSearch;
	}

	public String getShowRefresh() {
		return showRefresh;
	}

	public void setShowRefresh(String showRefresh) {
		this.showRefresh = showRefresh;
	}

	public String getShowToggle() {
		return showToggle;
	}

	public void setShowToggle(String showToggle) {
		this.showToggle = showToggle;
	}

	public String getShowColumns() {
		return showColumns;
	}

	public void setShowColumns(String showColumns) {
		this.showColumns = showColumns;
	}

	public String getToolbar() {
		return toolbar;
	}

	public void setToolbar(String toolbar) {
		this.toolbar = toolbar;
	}

	public String getHasPagination() {
		return hasPagination;
	}

	public void setHasPagination(String hasPagination) {
		this.hasPagination = hasPagination;
	}

	public String getQueryParams() {
		return queryParams;
	}

	public void setQueryParams(String queryParams) {
		this.queryParams = queryParams;
	}

	public JSONArray getColumns() {
		return columns;
	}

	public void setColumns(JSONArray columns) {
		this.columns = columns;
	}

	public String getSingleSelect() {
		return singleSelect;
	}

	public void setSingleSelect(String singleSelect) {
		this.singleSelect = singleSelect;
	}
	public String getDataUrl() {
		return dataUrl;
	}
	public void setDataUrl(String dataUrl) {
		this.dataUrl = dataUrl;
	}
	public String getHeadStr() {
		return headStr;
	}
	public void setHeadStr(String headStr) {
		this.headStr = headStr;
	}
	public String getParams() {
		return params;
	}
	public void setParams(String params) {
		this.params = params;
	}
	public String getColumnsData() {
		return columnsData;
	}
	public void setColumnsData(String columnsData) {
		this.columnsData = columnsData;
	}
}
