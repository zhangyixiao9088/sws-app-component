package com.ccs.component.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import com.ccs.common.BeanFactory;
import com.ccs.common.StrUtils;
import com.ccs.common.exception.PctException;
import com.ccs.core.datamodel.DataManager;
import com.ccs.core.datamodel.DataSet;
import com.ccs.core.datamodel.DataWriter;
import com.ccs.core.datamodel.ProcessResult;
import com.ccs.core.datamodel.Dialect.DialectDao;
import com.ccs.core.datamodel.Dialect.JdbcTemplateExtend;
import com.ccs.core.datamodel.core.ResultFactory;
import com.ccs.core.datamodel.sql.support.core.MetaDataHelper;
import com.ccs.core.datamodel.sql.support.param.DBColumn;
import com.ccs.core.datamodel.sql.support.param.DBTable;
import com.ccs.core.description.ActionDescription;

public class Fix2dTableActivityService extends JdbcTemplateExtend implements DataWriter {
	
	public ProcessResult writeDataSet(DataManager manager, ActionDescription desc, final Map<String, Object> context) {
		String tableName = context.get("tableName").toString();
		String pkId = context.get("pkId").toString();
		String fkId = context.get("fkId").toString();
		String fkIdValue = context.get("fkIdValue").toString();
		String linkId = context.get("linkId").toString();
		String data = context.get("data").toString();
		
		if (StrUtils.isBlank(tableName)) {
			throw new PctException("表名tableName为空");
		}
		if (StrUtils.isBlank(pkId)) {
			throw new PctException("主键名pkId为空");
		}
		if (StrUtils.isBlank(fkId)) {
			throw new PctException("外键名fkId为空");
		}
		if (StrUtils.isBlank(fkIdValue)) {
			throw new PctException("外键值fkIdValue为空");
		}
		
		DataSet dataSet = new DataSet(new StringBuffer(data));
		List<Map<String, Object>> datas = dataSet.getData();

		DataSource dataSource = (DataSource) BeanFactory.getBean("dataSource");
		this.setDataSource(dataSource);

		MetaDataHelper helper = new MetaDataHelper();
		helper.setDataSource(dataSource);
		DBTable dBTable = helper.getTable(tableName);
		
		if (datas != null && !datas.isEmpty()) {
			List<Map> saveList = new ArrayList<Map>();
			List<Map> updateList = new ArrayList<Map>();
			DialectDao dao = (DialectDao) BeanFactory.getBean("dialectDao");
			boolean isSave = false;
			for (Map<String, Object> row : datas) {
				if (StrUtils.isBlank(row.get(pkId))) {
					long newId = dao.getDialect().getNextval(tableName);
					row.put(pkId, newId);
					isSave = true;
				}
				if (StrUtils.isNotBlank(fkId)) {
					row.put(fkId, fkIdValue);
				}
				if (StrUtils.isNotBlank(linkId)) {
					if (row.get(linkId) == null || row.get(linkId).toString().trim() == "") {
						throw new PctException("关联ID " + linkId + "为空：" + row);
					}
				}
				Map<String, Object> newData = this.switchData(dBTable, row);
				if (isSave) {
					saveList.add(newData);
				} else {
					updateList.add(newData);
				}
			}
			try {
				if (!saveList.isEmpty()) {
					this.getOperationBase().inserAssignKeyRecordBatch(tableName, saveList);
				}
				if (!updateList.isEmpty()) {
					this.getOperationBase().updateRecordBatch(tableName, new String[] {pkId}, updateList);
				}
			} catch (Exception e) {
				return ResultFactory.createFalse();
			}
		}
		return ResultFactory.createSuccess();
	}
	
	private Map switchData(DBTable dBTable, Map<String, Object> data) {
		Map newData = new HashMap();
		for (Iterator<String> ite = data.keySet().iterator(); ite.hasNext();) {
			String colName = ite.next();
			Object value = data.get(colName);
			DBColumn column = dBTable.findColumn(colName);
			if (column == null) {
				continue;// 在表内的字段才进行操作
			}
			Object newVal = null;
			try {
				newVal = column.switchValueFromString(value);
			} catch (Exception e) {
				throw new PctException("数据转换失败[" + value + "]" + e.getMessage());
			}
			newData.put(colName, newVal);
		}
		return newData;
	}

}
