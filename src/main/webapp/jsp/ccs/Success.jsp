<%@ page contentType="text/html; charset=gbk" language="java" %>
<%@ page import="com.ccs.struts.common.vo.UrlVO" %>
<%@ page import="com.ccs.struts.common.UrlManager" %>
<%@ page import="java.util.*" %>
<jsp:directive.page import="com.ccs.common.StrUtils"/>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>操作成功</title>
<link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css" href="ext/docs/resources/welcome.css"/>
<!--框架必需start-->
<link href="UIFrame/frame/css/import_basic.css" rel="stylesheet" type="text/css" />
<link prePath="UIFrame/frame/" href="/UIFrame/frame/skins/safe_system/import_skin.css" rel="stylesheet" type="text/css" id="skin" themeColor="blue" />
<script type="text/javascript" src="UIFrame/frame/js/jquery-1.4.js"></script>
<script type="text/javascript" src="UIFrame/frame/js/framework.js"></script>
<!--框架必需end-->
<script type="text/javascript" src="UIFrame/frame/js/attention/zDialog/zDrag.js"></script>
<script type="text/javascript" src="UIFrame/frame/js/attention/zDialog/zDialog.js"></script>

<script type="text/javascript" src="js/ccs/Utils.js"></script>
<script type="text/javascript" src="js/common/common.util.js"></script>
<style type="text/css">
<!--
.red14 {
	font-family: "宋体";
	font-size: 14px;
	font-weight: bold;
	color: red;
}
.font_12 {
	padding-top: 10px;
	font-weight: bold;
	font-size: 12px;
}
-->
</style>
</head>

<%
String tagUrl="";
String jsCon = "";
UrlManager urlManager=new UrlManager(session);

if (urlManager.isHasUrl()){
	UrlVO urlVO=urlManager.getUrlVO();
	Map<String, Object> map=urlVO.getContextMap();
	
	for(Map.Entry<String, Object> entry : map.entrySet()){
		String key = entry.getKey();
		Object v = entry.getValue();
		jsCon = jsCon+"pageContext."+key+"='"+v+"';\n";
	}
	
	tagUrl = urlVO.getTargetURL();
	if (urlVO.getIsDelCache()){
		urlManager.delUrl(urlVO);
	}
}
%>
<body>
<script language="javascript" type="text/javascript">　 
var pageContext = new Object();
<%=jsCon%>
</script>
<p>&nbsp;</p>
<div align="center">
<div class="block" style="width: 500px; padding: 10px">
<fieldset>
<legend>
  <img src="image/ccs/bell.png" align="absmiddle" />
  <span class="block-title headsize">信息提示</span>
</legend>
<div class="block-body">
<form name="loading">
<table class="table">
  <tr>
  	<td height="10"></td>
  </tr>
  <tr>
  	<td>
  	<table width="80%" align="center" border="0" cellpadding="0" cellspacing="1" bgcolor="#B2D0F7">
	  <tr>
        <td height="60" align="center" valign="middle" bgcolor="#E9F2FF">
        <table width="80%" border="0" cellspacing="0" cellpadding="5">
          <tr>
            <td width="44%" align="right"><img src="image/ccs/success.gif" width="32" height="32" /></td>
            <td width="56%" align="left" class="red14">操作成功！</td>
          </tr>
        </table>
        </td>
      </tr>
  	</table>
  	</td>
  </tr>
  <tr>
  	<td height="70">&nbsp;</td>
  </tr>
  <tr>
  	<td align="center">
  	  <input type="text" name="bar" readonly="1" style="border-style:none; background-color:#D3E8D0; font-weight:bold" />
	  <input type="text" name="percentage" readonly="1" size="10" style="border-style:none; background-color:#FFFFFF; max-width:30px"/>
	  <p align="center" class="font_12">
	  <%
		if(tagUrl!=null){
			out.println("如果您的浏览器不支持跳转, 请点击 <a href=\"javascript:"+tagUrl+"\">这里</a> 手动操作.");
		}
	   %>
	  </p>
  	</td>
  </tr>
</table>
</form>
</div>
</fieldset>
</div></div>
</body>

<% if(tagUrl!=null){%>
<script language="javascript" type="text/javascript">　 
	var percent=0;　         //百分比进度，显示在滚动条后面
	var element="||";      //滚动条单元竖线
	var elements="||";　   //滚动条当前竖线
	count();                //开始调用循环

	function count(){　 
    	percent=percent+10;    //每次百分比加10
    	elements =elements + element;  //滚动条当前竖线增加一个滚动条单元竖线
    	document.loading.bar.value=elements;　 //设置窗体loading表单中bar元素的当前值
    	document.loading.percentage.value=percent+"%";　 //设置窗体loading表单中percentage元素的当前值
    	if (percent<99){                    //percent小于99则继续循环
        	setTimeout("count()", 20);        //每500ms进行一次count()
    	}else{
    		top.dialogParentObj.document.getElementById("ListJItem").submit();
    		//<%=tagUrl%>;
    	}　 
	}
</script>
<% } %>
</html>