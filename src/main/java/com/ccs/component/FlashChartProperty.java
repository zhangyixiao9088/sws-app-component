package com.ccs.component;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.ccs.common.AppConstants;
import com.ccs.common.JsonUtil;
import com.ccs.common.StrUtils;
import com.ccs.common.XMLUtil;
import com.ccs.common.exception.PctException;

public class FlashChartProperty {
	private String fileName ;
	private static long createTime=0;
	private static Map<String,Map<String, String>> propertyMap ;
	private static Map<String,String> baseMap;
	public FlashChartProperty(){
		fileName = AppConstants.getSysRoot()+"/config/FlashChartSchema.xml";
	}
	
	public Map<String, String> getOrCreateProperty(String chartType){
		File file = new File(fileName);
		if(!file.exists() ){
			throw new PctException("文件不存在。"+fileName);
		}
		long time = file.lastModified();
		if(createTime != time){
			init(file);
			createTime =time;
		}
		
		if(propertyMap==null){
			init(file);
		}
		if(propertyMap.containsKey(chartType)){
			Map<String, String> rs = new HashMap<String, String>();
			if(baseMap!=null){
				rs.putAll(baseMap);
			}
			rs.putAll(propertyMap.get(chartType));
			return rs;
		}
		return baseMap;
	}
	
	private synchronized void init(File file){
		propertyMap = new HashMap<String,Map<String, String>>();
		baseMap= new HashMap<String,String>();
		try {
			Document doc = XMLUtil.readXml(file.toURI().toURL());
			NodeList proElements =doc.getElementsByTagName("chart");
			if(proElements!=null){
				for(int i=0;i<proElements.getLength();i++){
					Element node = (Element)proElements.item(i);
					String name = node.getAttribute("name");
					String v =XMLUtil.getText(node).trim();
					if(StrUtils.isNotBlank(v)){
						Map<String,String> pro = JsonUtil.getMap4Json(v);
						propertyMap.put(name, pro);
						if("base".equals(name)){
							baseMap.putAll(pro);
						}
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
