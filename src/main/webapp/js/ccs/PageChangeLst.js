// ҳ��༭����
var inputsData;
var textareasData;
var selectsData;
// ��¼�±��е�ԭʼֵ
function initFileds() {
    var inputs = document.getElementsByTagName("input");
    var textareas = document.getElementsByTagName("textarea");
    var selects = document.getElementsByTagName("select");
    inputsData = new Array(inputs.length);
    for (var i=0;i<inputs.length;i++) {
        inputsData[i] = inputs[i].value;
        if (inputs[i].type=="radio") {
            inputsData[i]=inputs[i].checked;
        }
    }
    textareasData = new Array(textareas.length);
    for (var i=0;i<textareas.length;i++) {
        textareasData[i] = textareas[i].value;
    }
    selectsData = new Array(selects.length);
    for (var i=0;i<selects.length;i++) {
        selectsData[i] = selects[i].value;
    }
}
/*
 * �жϱ���ֵ�Ƿ��޸���
 * submitCommand ���иĶ�ʱ,ִ�е�javascript����
 */
function checkModification() {
    var inputs = document.getElementsByTagName("input");
    var textareas = document.getElementsByTagName("textarea");
    var selects = document.getElementsByTagName("select");
    var hasBeenChanged = false;
    for (var i=0;i<inputs.length;i++) {
        if (inputs[i].type=="radio"&&(inputs[i].checked!=inputsData[i])) {
            hasBeenChanged = true;
            inputsData[i]=inputs[i].checked;
        }
        if (inputs[i].type!="radio"&&inputsData[i]!=inputs[i].value) {
			if(inputs[i].name!="actionType"){
             hasBeenChanged = true;
            }
            inputsData[i]=inputs[i].value;
        }
    }
    for (var i=0;i<textareas.length;i++) {
        if (textareasData[i]!=textareas[i].value) {
            hasBeenChanged = true;
            textareasData[i]=textareas[i].value;
        }
    }
    for (var i=0;i<selects.length;i++) {
        if (selectsData[i]!=selects[i].value) {
            hasBeenChanged = true;
            selectsData[i]=selects[i].value;
        }
    }

	return hasBeenChanged;
}