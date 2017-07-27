package com.ccs.component;

import java.io.File;

import com.ccs.common.AppConstants;

public class UploadImg extends Upload{
	@Override
	public String getTempleFileName() {
		String baseVm = "UploadImg.vm";
		if (this.getBuilder() != null) {
			String path = this.getBuilder().getTempletBasePath()+ File.separator + baseVm;
			File f = new File(path);
			if (f.exists()) {
				return path;
			}
		}
		return AppConstants.getDefaultComponentPath() + File.separator + baseVm;
	}
}
