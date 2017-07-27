package com.kehaoinfo.sws.component.webmvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by zyx on 2017/7/24.
 */
@Controller("component-test-controller")
@RequestMapping("/")
public class TestController {

    @RequestMapping("/test")
    public String testController(){
        System.out.println("hello world");
        return "login";
    }
}
