//'------------------------------------------------------
//'currentpag：当前页数，每页显示记录数:MaxRows,总记录数：CountNum
//'-------------------------------------------------------------------------------------------------------------------------
function PageList(formName,CurrentPage,MaxRows,CountNum)
{
	var PageStr="";
	CountNum=parseInt(CountNum);
	CurrentPage=parseInt(CurrentPage);
	if (CountNum%MaxRows==0)
	{
		var Pagecount= parseInt(CountNum / MaxRows);
	}
	else
	{
		var Pagecount = parseInt(CountNum / MaxRows)+1;
	}
	if (Pagecount>CurrentPage)
	{
		var Endpage=CurrentPage;
	}else
	{
		var Endpage=Pagecount;
	}
	var ShowPage;
	ShowPage="<div class='pull-right'>";
	PageStr = SeachPage(formName,CurrentPage,MaxRows,Endpage,Pagecount)
	ShowPage+="<span class='alert' nowrap align=right>";
	ShowPage+="第<font color=red>"+CurrentPage+"<\/font>/"+Pagecount+"页";
	ShowPage+="[共<font color=red>"+CountNum+"</font>条]</span>";	ShowPage+="<span class='alert' valign=middle nowrap align=right>";
	ShowPage+=PageStr;
	ShowPage+="<input class='btn btn-info btn-sm' type=button onclick=\"submit(this)\" value=\"跳转到\"> <input type=text id=\"curPage\" name=\"__page\" style=\"width:30px\" value=\""+CurrentPage+"\" onkeypress=\"if (event.keyCode < 47 || event.keyCode > 57) event.returnValue = false\"> 页";
	ShowPage+="<\/span><\/div>";
	document.write (ShowPage);
	
}


function SeachPage(formName,CurrentPage,MaxRows,Endpage,Pagecount) {
	var PageStr=" ";
	if (CurrentPage>=2){PageStr+="<font class=\"sign\"></font><a class='btn btn-default btn-sm navbar-btn' href=\"javascript:subPage('1','"+formName+"')\"  class=\"line\">首页<\/a> <font class=\"sign\"></font><a class='btn btn-default btn-sm navbar-btn' href=\"javascript:subPage('"+(CurrentPage-1)+"','"+formName+"')\" class=\"line\">上一页<\/a>";}
	if (CurrentPage<Pagecount){PageStr+=" <a class='btn btn-default btn-sm navbar-btn' href=\"javascript:subPage('"+(CurrentPage+1)+"','"+formName+"')\" class=\"line\">下一页<\/a><font class=\"sign\"></font> <a class='btn btn-default btn-sm navbar-btn' href=\"javascript:subPage('"+Pagecount+"','"+formName+"')\" class=\"line\">尾页<\/a><font class=\"sign\">:</font>";}
	return PageStr;
}

function subPage(number,formName){
	document.getElementById("curPage").value=number;
	getForm(formName).submit();
}
//'------------------------------------------------------
//'num：|总数-页次*pagesize|；colspan：列数
//'-------------------------------------------------------------------------------------------------------------------------
function rowColor(num,colspan)
{
	var Show="",i,bgcolor="",span="";
	num = Math.abs(num);
	for(i=1;i<colspan;i++){
		span+="<td  class=\"td-left\">&nbsp;</td>"
	}
	for(i=0;i<num;i++){
		bgcolor="#ffffff";
		Show+="<tr bgcolor="+bgcolor+" onMouseOut=\"this.style.backgroundColor=''\" onMouseOver=\"this.style.backgroundColor='#d9e8f8'\">"+span+"<td class=\"td-right\">&nbsp;</td></tr>";
	}
	document.write (Show);
}
