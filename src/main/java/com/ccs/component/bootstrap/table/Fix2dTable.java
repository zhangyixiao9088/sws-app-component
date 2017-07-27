package com.ccs.component.bootstrap.table;

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
import com.ccs.common.exception.PctException;
import com.ccs.component.AbstractComponent;
import com.ccs.core.datamodel.DataSet;

public class Fix2dTable extends AbstractComponent {

	private JSONObject corner = new JSONObject();
	private JSONObject rowHead = new JSONObject();
	private JSONObject columnHead = new JSONObject();
	private JSONObject body = new JSONObject();
	private JSONObject styles = new JSONObject();

	private JSONArray pkIdLst = new JSONArray();
	private JSONArray linkIdLst = new JSONArray();
	private JSONArray fieldNameLst = new JSONArray();
	private JSONArray dataLst = new JSONArray();
	private JSONArray columnsLst = new JSONArray();
	private JSONArray mergeCellsLst = new JSONArray();

	public StringBuffer print() {
		buildTable();
		return super.print();
	}

	private void buildTable() {
		initColumnHead();
		initRowHead();
		
		// 加载数据
		String data = body.getString("data");
		DataSet ds = this.getBuilder().getDataSet(data, this.getExtern());
		List<Map<String, Object>> bodyData = ds.getData();
		Map<String, Map<String, Object>> indexBodyData = new HashMap<String, Map<String, Object>>();
		
		dataStartX = rowHeadBlock.getMaxLevel();
		dataStartY = this.columnHeadBlock.getMaxLevel();
		dataEndX = dataStartX + this.columnHeadBlock.getMaxSize() - 1;
		if (rowHead.isEmpty()) {
			if (bodyData.size() > 0) {
				dataEndY = dataStartY + bodyData.size() - 1;
			} else {
				dataStartX = -1;
				dataStartY = -1;
				dataEndX = -1;
				dataEndY = -1;
			}
		} else {
			dataEndY = dataStartY + this.rowHeadBlock.getMaxSize() - 1;
		}

		String pkId = body.getString("pkId");
		if (rowHead != null && !rowHead.isEmpty()) {
			String linkId = body.getString(Constant.row_data_linkId);
			if (StrUtils.isBlank(linkId)) {
				linkId = "LINKID";
			}

			for (Map<String, Object> row : bodyData) {
				Object key = row.get(linkId);
				if (key == null) {
					throw new PctException("数据中没有关联ID: " + linkId + ":" + row);
				}
				indexBodyData.put(key.toString(), row);
				pkIdLst.add(row.get(pkId));
			}
		} else {
			for (Map<String, Object> row : bodyData) {
				pkIdLst.add(row.get(pkId));
			}
		}

		// 组装table

		// 组装列头
		JSONObject columnConfig = this.parseColumns();
		JSONArray cornerHeads = null;
		if (!corner.isEmpty()) {
			if (corner.containsKey(Constant.json_rows)) {
				cornerHeads = corner.getJSONArray(Constant.json_rows);
			}
		}
		if (columnConfig.containsKey(Constant.json_rows)) {
			JSONArray rows = columnConfig.getJSONArray(Constant.json_rows);
			for (int i = 0; i < rows.size(); i++) {
				JSONObject dataRow = new JSONObject();
				if (!cornerHeads.isEmpty()) {
					dataRow.put(Constant.json_head, cornerHeads.getJSONObject(i));
				}
				dataRow.put(Constant.json_body, rows.getJSONObject(i));
				dataLst.add(dataRow);
			}
		}

		// 组装行
		if (!rowHead.isEmpty()) {
			if (StrUtils.isBlank(body.get(Constant.row_data_linkId))) {
				throw new PctException("body中未定义关联ID: " + Constant.row_data_linkId);
			}
			String linkId = body.get(Constant.row_data_linkId).toString();
			JSONObject rowConfig = this.parseRows(linkId);
			if (rowConfig.containsKey(Constant.json_rows)) {
				JSONArray rows = rowConfig.getJSONArray(Constant.json_rows);
				for (int i = 0; i < rows.size(); i++) {
					JSONObject dataRow = new JSONObject();
					JSONObject rowData = rows.getJSONObject(i);
					dataRow.put(Constant.json_head, rowData);
					if (!rowData.containsKey(linkId)) {
						throw new PctException("行头中未定义关联ID: " + rowData);
					}
					String rowId = rowData.getString(linkId);
					if (indexBodyData.containsKey(rowId)) {
						Map<String, Object> bodyRow = indexBodyData.get(rowId);
						JSONObject bodyJsonRowData = JSONObject.fromObject(bodyRow);
						dataRow.put(Constant.json_body, bodyJsonRowData);
					}
					linkIdLst.add(rowId);
					dataLst.add(dataRow);
				}
			}
			
			if (rowConfig.containsKey(Constant.json_mergeCells)) {
				mergeCellsLst.addAll(rowConfig.getJSONArray(Constant.json_mergeCells));
			}
		} else {
			for (Map<String, Object> map : bodyData) {
				JSONObject dataRow = new JSONObject();
				JSONObject bodyJsonRowData = JSONObject.fromObject(map);
				dataRow.put(Constant.json_body, bodyJsonRowData);
				dataLst.add(dataRow);
			}
		}

		// 组装行头
		if(!rowHead.isEmpty()) {
			int rowLevel = this.rowHeadBlock.getMaxLevel();
			if (rowLevel > 0) {
				for (int i = 0; i < rowLevel; i++) {
					JSONObject object = new JSONObject();
					object.put(Constant.json_columns_data, Constant.json_head + ".COL" + i);
					object.put("readOnly", "true");
					this.columnsLst.add(object);
				}
			}
		}
		
		if (columnConfig.containsKey(Constant.json_columns)) {
			JSONArray columns = columnConfig.getJSONArray(Constant.json_columns);
			for (int i = 0; i < columns.size(); i++) {
				JSONObject column = columns.getJSONObject(i);
//				column.put("type", "numeric");
				this.columnsLst.add(column);
			}
		}

		// 组装合并
		if (columnConfig.containsKey(Constant.json_mergeCells)) {
			mergeCellsLst.addAll(columnConfig.getJSONArray(Constant.json_mergeCells));
		}
		if (corner.containsKey(Constant.json_mergeCells)) {
			mergeCellsLst.addAll(corner.getJSONArray(Constant.json_mergeCells));
		}
	}

	private void initColumnHead() {
		if (StrUtils.isBlank(columnHead)) {
			return;
		}
		String data = columnHead.getString(Constant.column_data);
		DataSet ds = this.getBuilder().getDataSet(data, this.getExtern());
		List<Map<String, Object>> lst = ds.getData();

		columnHeadBlock = new Fix2dBlock();
		columnHeadBlock.loadData(lst);

	}

	private void initRowHead() {
		if (StrUtils.isNotBlank(rowHead) && !rowHead.isEmpty()) {
			String data = rowHead.getString(Constant.row_data);
			DataSet ds = this.getBuilder().getDataSet(data, this.getExtern());
			List<Map<String, Object>> lst = ds.getData();

			rowHeadBlock = new Fix2dBlock();
			rowHeadBlock.loadData(lst);
		} else {
			rowHeadBlock = new Fix2dBlock();
		}
	}

	public JSONObject parseColumns() {
		int level = this.columnHeadBlock.getMaxLevel();
		int rowLevel = this.rowHeadBlock.getMaxLevel();
		JSONObject result = new JSONObject();
		if (level > 0) {
			JSONArray rows = new JSONArray();
			JSONArray columns = new JSONArray();
			JSONArray mergeCells = new JSONArray();

			for (int i = 0; i < level; i++) {
				rows.add(i, new JSONObject());
			}
			for (Fix2dNode node : this.columnHeadBlock.getNodes()) {
				int y = node.getY();
				JSONObject row = (JSONObject) rows.get(y);
				String fieldName = node.getFieldName();
				if (StrUtils.isNotBlank(fieldName)) {
					row.put(fieldName, node.getName());
				}

				if (node.getRowSpan() > 1 || node.getColSpan() > 1) {
					JSONObject object = new JSONObject();
					object.put(Constant.json_mergeCells_row, node.getY());
					object.put(Constant.json_mergeCells_col, node.getX() + rowLevel);
					object.put(Constant.json_mergeCells_rowspan, node.getRowSpan());
					object.put(Constant.json_mergeCells_colspan, node.getColSpan());
					mergeCells.add(object);
				}
			}

			for (Fix2dNode node : this.columnHeadBlock.getLeafNodes()) {
				JSONObject object = new JSONObject();
				String fieldName = node.getFieldName();
				object.put(Constant.json_columns_data, Constant.json_body + "." + fieldName);
				columns.add(object);
				this.fieldNameLst.add(fieldName);
			}

			result.put(Constant.json_rows, rows);
			result.put(Constant.json_columns, columns);
			result.put(Constant.json_mergeCells, mergeCells);
		}
		return result;
	}

	private JSONObject parseRows(String linkId) {
		int level = this.rowHeadBlock.getMaxLevel();
		int size = this.rowHeadBlock.getMaxSize();
		int columnLevel = this.columnHeadBlock.getMaxLevel();
		JSONObject result = new JSONObject();
		if (level > 0) {
			JSONArray rows = new JSONArray();
			JSONArray mergeCells = new JSONArray();

			for (int i = 0; i < size; i++) {
				rows.add(i, new JSONObject());
			}
			for (Fix2dNode node : this.rowHeadBlock.getNodes()) {
				JSONObject row = (JSONObject) rows.get(node.getX());
				String field = "COL" + node.getY();
				row.put(field, node.getName());
				String rowId = node.getValueByKey(linkId);
				if (StrUtils.isNotBlank(rowId)) {
					row.put(linkId, rowId);
				}

				if (node.getRowSpan() > 1 || node.getColSpan() > 1) {
					JSONObject object = new JSONObject();
					object.put(Constant.json_mergeCells_row, node.getX() + columnLevel);
					object.put(Constant.json_mergeCells_col, node.getY());
					object.put(Constant.json_mergeCells_rowspan, node.getColSpan());
					object.put(Constant.json_mergeCells_colspan, node.getRowSpan());
					mergeCells.add(object);
				}
			}

			result.put(Constant.json_rows, rows);
			result.put(Constant.json_mergeCells, mergeCells);
		}
		return result;
	}

	@Override
	public Set<String> getCssLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add(this.getCssFileName("Handsontable/handsontable.full.min.css", "utf-8"));
		return js;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		js.add(this.getScriptFileName("Handsontable/handsontable.full.min.js", "utf-8"));
//		js.add(this.getScriptFileName("Handsontable/numbro/languages.min.js", "utf-8"));
		return js;
	}

	@Override
	protected StringBuffer getTemplate() {
		URL templateUrl = ClassLoaderUtil.getResource("assets/vm/Handsontable/Fix2dTable.vm");
		return CacheManager.readTxt(templateUrl);
	}

	public JSONObject getRowHead() {
		return rowHead;
	}

	public void setRowHead(JSONObject rowHead) {
		this.rowHead = rowHead;
	}

	public JSONObject getColumnHead() {
		return columnHead;
	}

	public void setColumnHead(JSONObject columnHead) {
		this.columnHead = columnHead;
	}

	public JSONObject getBody() {
		return body;
	}

	public void setBody(JSONObject body) {
		this.body = body;
	}

	public JSONObject getStyles() {
		return styles;
	}

	public void setStyles(JSONObject styles) {
		this.styles = styles;
	}

	public JSONObject getCorner() {
		return corner;
	}

	public void setCorner(JSONObject corner) {
		this.corner = corner;
	}

	public JSONArray getDataLst() {
		return dataLst;
	}

	public void setDataLst(JSONArray dataLst) {
		this.dataLst = dataLst;
	}

	public JSONArray getColumnsLst() {
		return columnsLst;
	}

	public void setColumnsLst(JSONArray columnsLst) {
		this.columnsLst = columnsLst;
	}

	public JSONArray getMergeCellsLst() {
		return mergeCellsLst;
	}

	public void setMergeCellsLst(JSONArray mergeCellsLst) {
		this.mergeCellsLst = mergeCellsLst;
	}

	public static class Constant {
		protected static final String json_rows = "rows";
		protected static final String json_mergeCells = "mergeCells";
		protected static final String json_columns = "columns";
		protected static final String row_data_linkId = "linkId";
		protected static final String column_data = "data";
		protected static final String column_data_order = "ORDER";
		protected static final String column_data_style = "style";
		protected static final String column_width = "width";
		protected static final String column_rowTitles = "rowTitles";

		protected static final String row_data = "data";
		protected static final String row_data_order = "ORDER";
		protected static final String row_data_style = "style";
		protected static final String row_height = "height";
		protected static final String row_sum = "sum";

		protected static final String style_formula = "formula";
		protected static final String style_validation = "validation";
		protected static final String style_format = "format";
		protected static final String style_editor = "editor";
		protected static final String style_event = "event";
		protected static final String style_css = "css";

		protected static final String json_head = "head";
		protected static final String json_body = "body";

		protected static final String json_columns_data = "data";
		protected static final String json_mergeCells_row = "row";
		protected static final String json_mergeCells_col = "col";
		protected static final String json_mergeCells_rowspan = "rowspan";
		protected static final String json_mergeCells_colspan = "colspan";
	}

	private Fix2dBlock rowHeadBlock;
	private Fix2dBlock columnHeadBlock;

	private int dataStartX;
	private int dataStartY;
	private int dataEndX;
	private int dataEndY;

	public int getDataStartX() {
		return dataStartX;
	}

	public int getDataStartY() {
		return dataStartY;
	}

	public int getDataEndX() {

		return dataEndX;
	}

	public int getDataEndY() {

		return dataEndY;
	}

	public Fix2dBlock getRowHeadBlock() {
		return rowHeadBlock;
	}

	public void setRowHeadBlock(Fix2dBlock rowHeadBlock) {
		this.rowHeadBlock = rowHeadBlock;
	}

	public Fix2dBlock getColumnHeadBlock() {
		return columnHeadBlock;
	}

	public void setColumnHeadBlock(Fix2dBlock columnHeadBlock) {
		this.columnHeadBlock = columnHeadBlock;
	}

	public void setDataStartX(int dataStartX) {
		this.dataStartX = dataStartX;
	}

	public void setDataStartY(int dataStartY) {
		this.dataStartY = dataStartY;
	}

	public void setDataEndX(int dataEndX) {
		this.dataEndX = dataEndX;
	}

	public void setDataEndY(int dataEndY) {
		this.dataEndY = dataEndY;
	}

	public JSONArray getPkIdLst() {
		return pkIdLst;
	}

	public void setPkIdLst(JSONArray pkIdLst) {
		this.pkIdLst = pkIdLst;
	}

	public JSONArray getLinkIdLst() {
		return linkIdLst;
	}

	public void setLinkIdLst(JSONArray linkIdLst) {
		this.linkIdLst = linkIdLst;
	}

	public JSONArray getFieldNameLst() {
		return fieldNameLst;
	}

	public void setFieldNameLst(JSONArray fieldNameLst) {
		this.fieldNameLst = fieldNameLst;
	}

}
