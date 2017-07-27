package com.ccs.component;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.ccs.common.AppConstants;
public class Row extends AbstractComponent{
	public int rowIndex=0;
	public int rowType=0;
	public List<Column> cols;
	public Map<String,Column> colsMap=new HashMap<String,Column>();
	public int getRowType() {
		return rowType;
	}
	public void setRowType(int rowType) {
		this.rowType = rowType;
	}
	public List<Column> getCols() {
		return cols;
	}
	public Column getCol(int index){
		return cols.get(index);
	}
	public void setCols(List<Column> cols) {
		this.cols = cols;
	}
	public String getTempleFileName() {
		if(this.getBuilder()!=null){
		String path=this.getBuilder().getTempletBasePath()+File.separator+"Row.vm";	
		File f=new File(path);
		if(f.exists()){
			return path;
		}
		}
		return AppConstants.getDefaultComponentPath()+File.separator+"Row.vm";
	}
	public int getRowIndex() {
		return rowIndex;
	}
	public void setRowIndex(int rowIndex) {
		this.rowIndex = rowIndex;
	}
	public boolean isEven(){
		return this.rowIndex%2==0;
	}
	public boolean isOdd(){
	  return !isEven();
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