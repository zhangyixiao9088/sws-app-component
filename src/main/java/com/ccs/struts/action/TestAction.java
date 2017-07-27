package com.ccs.struts.action;

import com.opensymphony.xwork2.ActionSupport;

/**
 * Created by Administrator on 2017/7/26.
 */
public class TestAction extends ActionSupport{

    public String test(){
        System.out.println("==============");
        return SUCCESS;
    }
}
