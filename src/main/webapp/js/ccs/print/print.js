function _preview(){
		LODOP.PRINT_INIT("��ӡ�����");
		LODOP.SET_PRINT_PAGESIZE(1,0,0,"A4");
  		LODOP.ADD_PRINT_URL(1,1,'21cm','29.7cm',document.location.href);
		LODOP.PREVIEW();	
};	