package com.ccs.component;

import java.io.File;
import java.util.LinkedHashSet;
import java.util.Set;

import com.ccs.common.AppConstants;

public class Upload extends AbstractComponent implements InputComponent {
	private String businessId;//ҵ��ID
	private String service;
	private String editable="true";//�Ƿ�ɱ༭
	private String label;

	private String width = "100%"; // ��ʾ���
	
	private String perMaxSize = "10"; // �����ļ��Ĵ�С����

	private String sizeUnit = "M"; // �ļ���С��λ

	private String fileTypes = "*.*"; // �����ϴ����ļ�����

	private String fileTypesDesc = "�����ļ�"; // �����ϴ����ļ���������

	private int fileNums = 0; // һ���ϴ����ļ���������

	private String imgUrl = ""; // �ϴ���ť�Զ���ͼƬ���·��

	private boolean single = false; // �Ƿ��ļ��ϴ�

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	@Override
	public String getTempleFileName() {
		String baseVm = "Upload.vm";
		
		
		if (this.getBuilder() != null) {
			String path = this.getBuilder().getTempletBasePath()+ File.separator + baseVm;
			File f = new File(path);
			if (f.exists()) {
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath() + File.separator + baseVm;
	}

	public String getCanEdit() {
		return null;
	}

	public String getCanNull() {
		return null;
	}

	public String parseValue(Object value) {
		return value.toString();
	}

	public void setCanEdit(String canEdit) {

	}

	public int getFileNums() {
		return fileNums;
	}

	public void setFileNums(int fileNums) {
		this.fileNums = fileNums;
	}

	public String getFileTypes() {
		return fileTypes;
	}

	public void setFileTypes(String fileTypes) {
		this.fileTypes = fileTypes;
	}

	public String getFileTypesDesc() {
		return fileTypesDesc;
	}

	public void setFileTypesDesc(String fileTypesDesc) {
		this.fileTypesDesc = fileTypesDesc;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getPerMaxSize() {
		return perMaxSize;
	}

	public void setPerMaxSize(String perMaxSize) {
		this.perMaxSize = perMaxSize;
	}

	public boolean isSingle() {
		return single;
	}

	public void setSingle(boolean single) {
		this.single = single;
	}

	public String getSizeUnit() {
		return sizeUnit;
	}

	public void setSizeUnit(String sizeUnit) {
		this.sizeUnit = sizeUnit;
	}

	public String getWidth() {
		return width;
	}

	public void setWidth(String width) {
		this.width = width;
	}

	@Override
	public Set<String> getCssLinks() {
		return null;
	}

	public String getBusinessId() {
		return businessId;
	}

	public void setBusinessId(String businessId) {
		this.businessId = businessId;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getEditable() {
		return editable;
	}

	public void setEditable(String editable) {
		this.editable = editable;
	}

	@Override
	public Set<String> getJsLinks() {
		Set<String> js = new LinkedHashSet<String>();
		return js;
	}
}
