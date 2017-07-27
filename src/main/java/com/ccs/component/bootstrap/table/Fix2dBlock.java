package com.ccs.component.bootstrap.table;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.ccs.common.StrUtils;

public class Fix2dBlock {
	private int maxSize = 0;
	private int maxLevel = 0;
	private Map<String, List<Fix2dNode>> childrenMap = new LinkedHashMap<String, List<Fix2dNode>>();
	private Map<String, Fix2dNode> nodeMap = new HashMap<String, Fix2dNode>();
	private List<Fix2dNode> nodes = new ArrayList<Fix2dNode>();
	private List<Fix2dNode> leafNodes = new ArrayList<Fix2dNode>();

	public void loadData(List<Map<String, Object>> lst) {
		for (Map<String, Object> row : lst) {
			String parent = StrUtils.getNotNullString(row.get(Fix2dNode.node_parent));
			if (StrUtils.isBlank(parent)) {
				parent = Fix2dNode.node_root;
			}
			Fix2dNode node = new Fix2dNode(parent, row, this);
			this.addNode(parent, node);
		}
		
		Map<String,List<Fix2dNode>> levelIndex =  new LinkedHashMap<String, List<Fix2dNode>>();
		//生成叶结点
		for (Fix2dNode node : nodes) {
			int curLevel = node.getLevel();
			node.setY(curLevel - 1);
			String key ="N"+ node.getY();
			List<Fix2dNode> rowNodes=null;
			if(levelIndex.containsKey(key)){
				rowNodes = levelIndex.get(key);
			}else{
				rowNodes = new ArrayList<Fix2dNode>();
				levelIndex.put(key, rowNodes);
			}
			rowNodes.add(node);
			if (!node.hasChildren()) {
				node.setColSpan(1);
				leafNodes.add(node);
			} else {
				int size = node.getSize();
				node.setColSpan(size);
				node.setRowSpan(1);
			}
			if (curLevel > this.maxLevel) {
				this.maxLevel = curLevel;
			}
		}
		
		for (Fix2dNode node : leafNodes) {
			if (node.getY() < this.maxLevel) {
				node.setRowSpan(this.maxLevel - node.getY());
			}
		}

		this.maxSize = leafNodes.size();
		calculateX(Fix2dNode.node_root);
		Collections.sort(leafNodes,new Comparator<Fix2dNode>(){
            public int compare(Fix2dNode src, Fix2dNode tag) {
            	if(src.getX()<tag.getX()){
            		return -1;
            	}else if(src.getX()==tag.getX()){
            		return 0;
            	}
                return 1;
            }
        });
	}
	private void calculateX(String parent) {
		int startX = 0;
		if (Fix2dNode.node_root.equals(parent)) {
			startX = 0;
		} else {
			Fix2dNode parentNode = nodeMap.get(parent);
			startX = parentNode.getX();
		}
		List<Fix2dNode> children = childrenMap.get(parent);
		if (children == null) {
			return;
		}
		int curX = startX;
		for (Fix2dNode child : children) {
			child.setX(curX);
			curX = curX + child.getColSpan();
			String childName = child.getName();
			calculateX(childName);
		}
	}
	
	private void addNode(String parent, Fix2dNode node) {
		if (childrenMap.containsKey(parent)) {
			List<Fix2dNode> children = childrenMap.get(parent);
			children.add(node);
		} else {
			List<Fix2dNode> children = new ArrayList<Fix2dNode>();
			children.add(node);
			childrenMap.put(parent, children);
		}
		nodeMap.put(node.getName(), node);
		nodes.add(node);
	}

	public String toString() {
		return this.nodes.toString();
	}

	public Map<String, List<Fix2dNode>> getChildrenMap() {
		return childrenMap;
	}

	public Map<String, Fix2dNode> getNodeMap() {
		return nodeMap;
	}

	public List<Fix2dNode> getNodes() {
		return nodes;
	}

	public int getMaxSize() {
		return maxSize;
	}

	public int getMaxLevel() {
		return maxLevel;
	}

	public List<Fix2dNode> getLeafNodes() {
		return leafNodes;
	}
}