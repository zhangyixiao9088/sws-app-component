package com.ccs.component.bootstrap.table;

import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import com.ccs.common.StrUtils;

public class Fix2dNode {

	protected static final String json_column_fieldName = "FIELDNAME";
	public static final String json_row_id = "pkId";
	
	protected static final String node_root = "0";
	protected static final String node_name = "NAME";
	protected static final String node_parent = "PARENT";
	
	private Map<String, Object> data;
	private Fix2dBlock block;
	private String parent;
	private int x;
	private int y;
	private int rowSpan = 1;
	private int colSpan = 1;

	public Fix2dNode(String parent, Map<String, Object> data, Fix2dBlock block) {
		this.data = data;
		this.parent = parent;
		this.block = block;
	}

	public String getName() {
		String name = StrUtils.getNotNullString(data.get(node_name));
		return name;
	}

	public JSONObject toJson() {
		JSONObject obj = new JSONObject();
		obj.put("label", getName());
		int size = this.getSize();
		if (size > 1) {
			obj.put("colspan", size);
		}
		return obj;
	}

	public boolean hasChildren() {
		return block.getChildrenMap().containsKey(this.getName());
	}

	public int getLevel() {
		if (node_root.equals(this.parent)) {
			return 1;
		}
		Fix2dNode parentNode = block.getNodeMap().get(parent);
		return parentNode.getLevel() + 1;
	}

	public int getSize() {
		List<Fix2dNode> children = block.getChildrenMap().get(getName());
		if (children == null) {
			return 1;
		} else {
			int size = 0;
			for (Fix2dNode head : children) {
				size += head.getSize();
			}
			return size;
		}
	}
	
	public String getRowId(){
		String rowId = this.getValueByKey(json_row_id);
		return rowId;
	}

	public String getFieldName(){
		String fieldName = this.getValueByKey(json_column_fieldName);
		if(StrUtils.isBlank(fieldName)){
			List<Fix2dNode> children = block.getChildrenMap().get(getName());
			if (children != null) {
				Fix2dNode node = children.get(0);
				return node.getFieldName();
			}
		}
		return fieldName;
	}
	
	public String getValueByKey(String key){
		if(this.data ==null){
			return "";
		}
		if(this.data.containsKey(key)){
			return this.data.get(key).toString();
		}else{
			return "";
		}
	}
	public String toString() {
		String name = this.getName();
		return "{" + name + ":      " + x + ":" + y + ":" + this.colSpan + ":" + this.rowSpan + "}\n";
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public int getRowSpan() {
		return rowSpan;
	}

	public void setRowSpan(int rowSpan) {
		this.rowSpan = rowSpan;
	}

	public int getColSpan() {
		return colSpan;
	}

	public void setColSpan(int colSpan) {
		this.colSpan = colSpan;
	}

	public Map<String, Object> getData() {
		return data;
	}
	
	public int compareTo(Fix2dNode other) {
		if(this.x<other.getX()){
			return -1;
		}
        return 1;
    }
}
