package com.ccs.component.charts.models;

import java.util.ArrayList;
import java.util.List;

public class Array<T extends Object> extends BaseValue{
	private List<T> values=new ArrayList<T>();
	
	public void setValues(List<T> values){
		this.values = values;
	}
	
	public void setValues(T[] values){
		for(int i=0;i<values.length;i++){
			this.values.add(values[i]);		}
	}
}
