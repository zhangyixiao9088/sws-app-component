/**
 * 验证变量名
 * 只允许包含字母、数字和下划线，且长度在2到40位之间
 * @param string : 待处理字符串
 */
function isVariable(string) {
	var expression = /^[a-zA-Z0-9_]{2,40}$/;
	return expression.test(string);
}

//验证表名唯一性
function checkTableName(tableName,tableId){
	if(tableName!=''){
		//只允许包含字母、数字(不能纯数字)和下划线，且长度在6到20位之间 
		if(!isVariable(tableName) || Common_Util.prototype.isInt(tableName)){
			top.Dialog.alert("表名只能包含字母、数字和下划线，且长度在2到40位之间，不能为纯数字。");
			document.getElementById("tableName").focus();
			document.getElementById("tableName").value="";
			return false;
		}
	    if(tableId==''){
	    	tableId=0;
	    }
		PlatformDwrService.isExistTableName(tableName,tableId,function(bool){
		if(bool){
			top.Dialog.alert("表名已存在，请重新输入。");
			document.getElementById("tableName").focus();
			document.getElementById("tableName").value="";
			}
		});
	}else{
		top.Dialog.alert("表名不能为空。");
		return false;
	}
}

//检验字段名是否重复
function checkName(obj){
    if(obj.value!=''){
    	var namevalue=obj.value;
    	//只允许包含字母、数字(不能纯数字)和下划线，且长度在6到20位之间 
		if(!isVariable(namevalue) || Common_Util.prototype.isInt(namevalue)){
			top.Dialog.alert("字段名只能包含字母、数字和下划线，且长度在2到40位之间，不能为纯数字。");
			obj.focus();
			obj.value="";
			return false;
		}
	    var name_str=document.getElementsByName("tableVo.fieldNameStr");
		var result=0;
		for(var k=0;k<name_str.length;k++){
			if(name_str[k].value==namevalue){
				result++;
			}
		}
		if(result>1){
			top.Dialog.alert("已存在相同的字段名称");
			return false;
		}
    }
}

//选中主键时 必填也选中
function selectEmpty(obj){
	var idd=obj.id;
	var objId=idd.split("_");
	if(obj.checked){
		document.getElementById("empty_"+objId[1]).checked=true;
	}
}

function edit(){
	var form=document.getElementById("form1");
	if(common_util.isNullObjValue(form.tableName)){
		form.tableName.focus();
		top.Dialog.alert("请输入表名称!");
		return false;
	}
	var name_str=document.getElementsByName("tableVo.fieldNameStr");
	var type_str=document.getElementsByName("tableVo.fieldTypeStr");
	var length_str=document.getElementsByName("tableVo.fieldLengthStr");
	var acc_str=document.getElementsByName("tableVo.fieldAccuracyStr");
	
	var string_primaryKey='';
	var string_empty='';
	var pk_str=document.getElementsByName("tableVo.primaryKeyStr");
	var emp_str=document.getElementsByName("tableVo.emptyStr");
	document.getElementById("string_primaryKey").value='';
	document.getElementById("string_empty").value='';
	
	for(var i=0;i<name_str.length;i++){
		var result=0;
		var j=parseInt(i)+1;
		if(common_util.isNullObjValue(name_str[i])){
			name_str[i].focus();
			top.Dialog.alert("第"+j+"行的字段名称不能为空");
			return false;
		}
		if(common_util.isNullObjValue(type_str[i])){
			type_str[i].focus();
			top.Dialog.alert("第"+j+"行的字段类型不能为空");
			return false;
		}
		if(!common_util.isNullObjValue(length_str[i]) && !Common_Util.prototype.isInt(length_str[i].value)){
			length_str[i].focus();
			top.Dialog.alert("第"+j+"行的字段长度必须为整数");
			return false;
		}
		if(!common_util.isNullObjValue(acc_str[i]) && !Common_Util.prototype.isInt(acc_str[i].value)){
			acc_str[i].focus();
			top.Dialog.alert("第"+j+"行的字段精度必须为整数");
			return false;
		}
		if(pk_str[i].checked){
			string_primaryKey+='1,';
		}else{
			string_primaryKey+='0,';
		}
		if(emp_str[i].checked){
			string_empty+='1,';
		}else{
			string_empty+='0,';
		}
		//将数据型之外的类型的精度置为0
		if(type_str[i].value!='number'){
			acc_str[i].value='';
		}
		//date长度置空
		if(type_str[i].value=='date' || type_str[i].value=='blob'){
			length_str[i].value='';
		}
		//字符型长度必填
		if(type_str[i].value=='string' && length_str[i].value==''){
			top.Dialog.alert("第"+j+"行的string类型的字段长度不能为空");
			return false;
		}
		//检验字段名是否重复
		for(var k=0;k<name_str.length;k++){
			if(name_str[i].value==name_str[k].value){
				result++;
			}
		}
		if(result>1){
		    name_str[i].focus();
			top.Dialog.alert("第"+j+"行已存在相同的字段名称");
			return false;
		}
	}
	document.getElementById("string_primaryKey").value=string_primaryKey.substring(0, string_primaryKey.length-1);
	document.getElementById("string_empty").value=string_empty.substring(0, string_empty.length-1);
	
	if(window.confirm("确定保存吗？")){
		form.submit();
	}
}

//添加行
function addSignRow(){
	var cuMaxIndex=document.getElementById("cuMaxIndex").value;
	if(cuMaxIndex==''){
		cuMaxIndex=2;
	}
	var rown=parseInt(cuMaxIndex)+1;//当前要插入的id序号
 	var OperInfo = document.getElementById("fieldTable");
 	var indexNewrow=OperInfo.rows.length;
 	var newRow = document.createElement("tr");  
    //  动态创建列   
    var newCell0 = document.createElement("td");     
    var newCell1 = document.createElement("td");    
    var newCell2 = document.createElement("td");     
    var newCell3 = document.createElement("td"); 
    var newCell4 = document.createElement("td");     
    var newCell5 = document.createElement("td"); 
    var newCell6 = document.createElement("td");     
 	var newCell7 = document.createElement("td"); 
 	var newCell8 = document.createElement("td"); 
	/*var myrow,indexnewrow,rown;
	myrow=OperInfo.insertRow(OperInfo.rows.length);
	indexNewrow=OperInfo.rows.length-1;
 	for(var i=0; i<=7; i++) {
 		myrow.insertCell(i);
 	} 
 	*/
 	newCell0.innerHTML=indexNewrow;
 	newCell1.innerHTML="<input type='text' class='input_text' maxlength='70' size='15' name='tableVo.fieldNameStr' id='fieldName_"+rown+"' onchange='checkName(this)'/> ";
    newCell2.innerHTML="<input type='text' class='input_text' maxlength='35' size='15' name='tableVo.fieldMemoStr' id='fieldMemo_"+rown+"'/>";
    newCell3.innerHTML="<select name='tableVo.fieldTypeStr' id='fieldType_"+rown+"'> " +
								     "<option value='string'>string</option><option value='number'>number</option>" +
								     "<option value='date'>date</option><option value='blob'>blob</option></select> ";
    newCell4.innerHTML="<input type='text' class='input_text' maxlength='7' size='5' name='tableVo.fieldLengthStr' id='fieldLength_"+rown+"'/>";
    newCell5.innerHTML="<input type='text' class='input_text' maxlength='7' size='5' name='tableVo.fieldAccuracyStr' id='fieldAccuracy_"+rown+"'/>";
    newCell6.innerHTML="<input type='checkbox' name='tableVo.primaryKeyStr' id='primaryKey_"+rown+"' value='1' onclick='selectEmpty(this)'/>";
    newCell7.innerHTML="<input type='checkbox' name='tableVo.emptyStr' id='empty_"+rown+"' value='1'/>";
    newCell8.innerHTML="<input type='button' value='删除' class='btn' onclick='delSignRow(this)'/>";
    newRow.appendChild(newCell0);
    newRow.appendChild(newCell1); 
    newRow.appendChild(newCell2);
    newRow.appendChild(newCell3);
    newRow.appendChild(newCell4);
    newRow.appendChild(newCell5);
    newRow.appendChild(newCell6);
    newRow.appendChild(newCell7);
    newRow.appendChild(newCell8);
    document.getElementById("tbody1").appendChild(newRow);  
    document.getElementById("cuMaxIndex").value=rown;
}

//删除行
function delSignRow(obj){    
	var rowindex = this.getRowNo(obj);   
	var OperInfo = document.getElementById("fieldTable");
 	OperInfo.deleteRow(rowindex);
 	for(var i=rowindex;i<OperInfo.rows.length;i++){
 		  OperInfo.rows[i].cells[0].innerHTML = i.toString();
 	}
}

//得到行对象
function getRowObj(obj){   
	var i = 0;   
	while(obj.tagName.toLowerCase() != "tr"){    
		obj = obj.parentNode;    
		if(obj.tagName.toLowerCase() == "table")  return null;   
	}   
	return obj;
}
//根据得到的行对象得到所在的行数
function getRowNo(obj){   
	var trObj = getRowObj(obj);    
	var trArr = trObj.parentNode.children; 
	for(var trNo= 0; trNo < trArr.length; trNo++){  
		if(trObj == trObj.parentNode.children[trNo]){    
			return trNo;  
		} 
	}
}
