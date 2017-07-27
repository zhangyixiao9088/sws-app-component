package com.ccs.component;

import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.ccs.common.AppConstants;
import com.ccs.common.StrUtils;
import com.ccs.core.datamodel.DataSet;

public class CheckBoxList extends AbstractComponent implements InputComponent {
	private String data;

	private List<Map<String, Object>> dataList;

	private String canNull = "true";

	private String canEdit = "true";

	public String getCanEdit() {
		return canEdit;
	}

	public void setCanEdit(String canEdit) {
		this.canEdit = canEdit;
	}

	public String getCanNull() {
		return canNull;
	}

	public void setCanNull(String canNull) {
		this.canNull = canNull;
	}

	public List<Map<String, Object>> getDataList() {
		return dataList;
	}

	public void setDataList(List<Map<String, Object>> dataList) {
		this.dataList = dataList;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public StringBuffer print() {
		if (StrUtils.isNotBlank(data)) {
			DataSet ds = this.getBuilder().getDataSet(data, this.getExtern());
			this.setDataList(ds.getData());
		}
		return super.print();
	}

	@Override
	public String getTempleFileName() {
		if (this.getBuilder() != null) {
			String path = this.getBuilder().getTempletBasePath() + File.separator + "CheckBoxList.vm";
			File f = new File(path);
			if (f.exists()) {
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath() + File.separator + "CheckBoxList.vm";
	}

	public String parseValue(Object value) {
		return value.toString();
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
