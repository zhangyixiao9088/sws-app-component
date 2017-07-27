<%@ page contentType="text/html; charset=gbk" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<% String path = request.getContextPath(); %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk"/>
<title>温馨提示</title>
<link rel="stylesheet" type="text/css" href="<%=path %>/ext/docs/resources/welcome.css"/>
<script>
function displayOrNot(){
	var promptInfo = document.getElementById("promptInfo");
	if(promptInfo.style.display == 'none'){
		promptInfo.style.display = 'block';
	}else{
		promptInfo.style.display = 'none';
	}
}
</script>
</head>

<body style="font-size: 14px">
<br/>
<div align="center">
<table class="MessageBox" align="center" width="350">
  <tr>
    <td class="msg info">
      <h4 class="title" onclick="displayOrNot()" style='cursor:hand;'>温馨提示: </h4>
      <div class="content" align="left">
      	<s:property value="exception.message" escape="false"/>
      	<div id ="promptInfo" style="display:none;">
      		<s:property value="exceptionStack"/>
      	</div>
      </div>
      <div class="content" align="center" style="padding-top: 10px">
        <input type="button" class="SmallButtonA" value="返回" onclick="window.history.go(-1)"/>
      </div>
    </td>
  </tr>
</table>
</div>
</body>
</html>