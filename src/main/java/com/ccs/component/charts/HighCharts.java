package com.ccs.component.charts;

import java.net.URL;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.ccs.common.CacheManager;
import com.ccs.common.ClassLoaderUtil;
import com.ccs.common.StrUtils;
import com.ccs.common.VelocityParser;
import com.ccs.component.AbstractComponent;
import com.ccs.core.datamodel.DataSet;

public class HighCharts extends AbstractComponent {
	private JSONArray datas;
	private Map<String,DataFormat> write=new HashMap<String,DataFormat>();
	@Override
	public StringBuffer print() {
		if (StrUtils.isNotBlank(datas)) {
			Map<String,DataSet> cache = new HashMap<String,DataSet>();
			for(int i=0;i<datas.size();i++){
				JSONObject dataJs = datas.getJSONObject(i);
				if(dataJs.containsKey("data")){
					String data = dataJs.getString("data");
					DataSet ds = null;
					if(cache.containsKey(data)){
						ds = cache.get(data);
					}else{
						ds = this.getBuilder().getDataSet(data,this.getExtern());
						cache.put(data,ds);
					}
					
					DataFormat df =null;
					if(dataJs.containsKey("format")){
						String format = dataJs.getString("format");
						df = new DataFormat(ds,new StringBuffer(format));
					}else{
						df = new DataFormat(ds);
					}
					
					write.put(data, df);
				}
				
			}
		}
		return super.print();
	}
	@Override
	protected StringBuffer getTemplate(){
		URL templateUrl = ClassLoaderUtil.getResource("assets/vm/highcharts/highchart.vm");
		return CacheManager.readTxt(templateUrl);
	}
	@Override
	public Set<String> getCssLinks() {
		return null;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add( this.getScriptFileName("highcharts/js/highcharts.js","utf-8"));
		js.add( this.getScriptFileName("highcharts/js/highcharts-more.js","utf-8"));
		js.add( this.getScriptFileName("highcharts/js/highcharts-3d.js","utf-8"));
		js.add( this.getScriptFileName("highcharts/js/modules/funnel.js","utf-8"));
		js.add( this.getScriptFileName("highcharts/js/modules/exporting.js","utf-8"));
		return js;
	}
	
	public static final class DataFormat{
		private StringBuffer format;
		private String splite=",";
		private DataSet dataSet ; 
		public DataFormat(DataSet ds){
			this(ds,null);
		}
		public DataFormat(DataSet ds,StringBuffer format){
			this.format = format;
			this.dataSet = ds;
		}
		
		public String toString(){
			 List<Map<String,Object>> data =this.dataSet.getData();
			 StringBuffer rs = new StringBuffer();
			 for(Map<String,Object> row:data){
				 String token = "";
				 if(this.format==null){
					 token = row.toString();
				 }else{
					 token = VelocityParser.paintComponent(format, row).toString();
				 }
				 if(rs.length()==0){
					 rs.append(token);
				 }else{
					 rs.append(splite).append(token);
				 }
			 }
			return rs.toString();
		}
	}

	public JSONArray getDatas() {
		return datas;
	}
	public void setDatas(JSONArray datas) {
		this.datas = datas;
	}
	public Map<String, DataFormat> getWrite() {
		return write;
	}
	public void setWrite(Map<String, DataFormat> write) {
		this.write = write;
	}
}
