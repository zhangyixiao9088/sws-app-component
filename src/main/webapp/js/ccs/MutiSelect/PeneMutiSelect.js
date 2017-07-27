(function($){
	var me;
	var id;
	var opts=[];
	var resultbox={}; //�����͵Ķ���
	var checkboxs={}; //���ѡ�еĶ���
	var delboxs={}; //�Ҳ��ɾ���Ķ���
	var _temps={}; //�������
	var leftContent;
	var centerContent;
	var rightContent;
	var defalut_nums=5;
	
	$.fn.PaneMultiSelect = function(options){
		var defualts = {
			jsonData:[],
			dataType:"json"
			idField:"ID",
			nameField:"NAME",
			parentField:"PARENTID"
		};        
		opts = $.extend({}, defualts, options);
		me = this;
		id = $(this).attr("id");
		leftContent = $("#musLeft"+id,this);
		rightContent = $("#musRight"+id,this);
		centerContent = $("#musCenter"+id,this);
		initData();
		creatHtml(_temps);
		bundleEvent();
	};

	$.fn.setValues =function (){
		
	}

	$.fn.getValues= function(){

	}

	$.fn.setEnable = function(flag){
		
	}
	function initData(){
	
		if(opts.dataType="json"){
			var js=0,jl=opts.data.length;
			for(js;js<jl;js++){
				var pid=opts.data[js].id;
				var pname=opts.data[js].name;
				var children=opts.data[js].children;
				var si=0,sl=children.length;
				_temps[pid]=new node(pid,pname,false,"0",defalut_nums);
				for(si;si<sl;si++){
					var sid=children[si].id;
					var sname=children[si].name;
					_temps[sid]=new node(sid,sname,false,pid,defalut_nums);
				}
			}
		}else if(opts.dataType="dataSet"){
			var dataSet = opts.data;
			var data = dataSet.data;
			for(var i=0;i<data.lenght;i++){
				var row = data[i];
				var sid = row[opts.idField];
				var name = row[opts.nameField];
				var pid = row[opts.parentField];
				
				_temps[sid]=new node(sid,name,false,pid,0);
			}
		}
	};

	//���쳡��
	function creatHtml(o){
		if(!o) return;
		for(n in o){
			var id=o[n].id;
			var name=o[n].name;
			var checked=o[n].checked;
			var parentid=o[n].parentid;
			if(parentid=="0"){
				var html='<div class="t_'+id+' msutitle" sdata="'+id+'" id="t_'+id+'"><label for="'+id+'"><input name="'+id+'" type="checkbox" id="'+id+'" value="'+id+'" />'+name+'</label></div>';
				var el=$(html).appendTo(leftContent);
				$('<div class="c_'+id+' muscontent"></div>').appendTo(leftContent);
				/**�����¼�**/
				/**end**/
				/**ȫѡ��קʵ��**/
				/**end**/
			}else{
				var html='<label for="'+id+'" pdata="'+parentid+'" sdata="'+id+'"><input name="'+id+'" type="checkbox" id="'+id+'" value="'+id+'" />'+name+'</label>';
				var el=$(html).appendTo($('.c_'+parentid,me));
				/**�����¼�**/
				/**��קʵ��**/
				/**end**/
			}
		}
	};

	function bundleEvent(){

		
		//�¼��Ż�
		$('DIV[sdata]',me).live('click',function(e){
			//ȫѡ�¼�
			//var t=e.srcElement||e.target;
			var pi=$(this).find('input').attr('checked');
			var id=$(this).attr('sdata');
			if(pi){
				checkboxs[id]=_temps[id];
			}else{
				delete checkboxs[id];
			}
			//���ø�checkbox״̬ $(this).find('input').attr('disabled',pi);
			//ѡ��ȫ����checkbox
			$('.c_'+id,me).find('label').each(function(){
				var id=$(this).attr('sdata');
				if(!_temps[id].checked){
					$(this).find('input').attr('checked',pi);
					if(!pi){
						delete checkboxs[id];
					}else{
						checkboxs[id]=_temps[id];
					}
				}
			});
		}).live('mousedown',function(ev){
			//��קȫѡ�¼�
			var t=ev.srcElement||ev.target;
			var disalbe=$(this).find('input').attr('checked');
			if(t.nodeName=='LABEL'&&!disalbe){
				var id=$(this).attr('sdata');
				var name=_temps[id].name;
				var html='<label for="r_'+id+'" sdata="'+id+'" class="tempbox"><input name="r_'+id+'" type="checkbox" id="r_'+id+'" value="'+id+'" />'+name+'</label>';
				var _el=$(html).appendTo('body');
				
				ev = ev || window.event;
				var mousePos = mousePosition(ev);
				_el.css({left:mousePos.x-30,top:mousePos.y-10});
				
				$(document).bind('mousemove',function(ev){
					ev = ev || window.event;
					var mousePos = mousePosition(ev);
					_el.css({left:mousePos.x-30,top:mousePos.y-10});
					
				}).bind('mouseup',function(ev){
					ev = ev || window.event;
					var mousePos = mousePosition(ev);
					var _x=mousePos.x ,_y=mousePos.y;
					//minL:540 minT:40 maxL:
					var minL=rightContent.position().left ,minT=rightContent.position().top;
					var maxL=minL+rightContent.width(),maxT=minT+rightContent.height();
					
					if(_x>minL&&_x<maxL&&_y>minT&&_y<maxT){
						var id=_el.attr('sdata');
						$('.c_'+id,me).find('label').each(function(){
							var id=$(this).attr('sdata');
							if(!_temps[id].checked){
								$(this).find('input').attr('checked',true);
								_addOne(_temps[id]);
							}
						});
						//
					}
					$(document).unbind('mousemove').unbind('mouseup');
					_el.remove();
					delete _el;
				})
			}
		});
		//��Ԫ��
		$('label[pdata]',leftContent).live('click',function(){
			//��Ԫ��ѡ���¼�
			var pi=$(this).find('input').attr('checked');
			var id=$(this).attr('sdata');
			if(pi){
				checkboxs[id]=_temps[id];
			}else{
				delete checkboxs[id];
			}
		}).live('mousedown',function(ev){
			//��Ԫ����ק�¼�
			var t=ev.srcElement||ev.target;
			var disalbe=$(this).find('input').attr('checked');
			if(t.nodeName=='LABEL'&&!disalbe){
				var id=$(this).attr('sdata');
				var name=_temps[id].name;
				var parentid=_temps[id].parentid;
				var html='<label for="r_'+id+'" pdata="'+parentid+'" sdata="'+id+'" class="tempbox"><input name="r_'+id+'" type="checkbox" id="r_'+id+'" value="'+id+'" />'+name+'</label>';
				var _el=$(html).appendTo('body');
				
				ev = ev || window.event;
				var mousePos = mousePosition(ev);
				_el.css({left:mousePos.x-30,top:mousePos.y-10});
				
				$(document).bind('mousemove',function(ev){
					ev = ev || window.event;
					var mousePos = mousePosition(ev);
					_el.css({left:mousePos.x-30,top:mousePos.y-10});
					
				}).bind('mouseup',function(ev){
					ev = ev || window.event;
					var mousePos = mousePosition(ev);
					var _x=mousePos.x ,_y=mousePos.y;
					//minL:540 minT:40 maxL:
					var minL=rightContent.position().left ,minT=rightContent.position().top;
					var maxL=minL+rightContent.width(),maxT=minT+rightContent.height();

					if(_x>minL&&_x<maxL&&_y>minT&&_y<maxT){
						_addOne(_temps[_el.attr('sdata')]);
					}
					$(document).unbind('mousemove').unbind('mouseup');
					_el.remove();
					delete _el;
				})
			}
		});
		
		//�Ҳ൥Ԫ��
		//�޸ķ�����
		$('label[pdata]',rightContent).find('.nums').live('blur',function(){
			resultbox[$(this).attr('nid')].nums=chk_nums($(this).val());
		})
		//�޸���չ������
		$('label[pdata]',rightContent).find('.serial').live('blur',function(){
			resultbox[$(this).attr('sid')].serial=chk_nums($(this).val());
		})
		//�����ɾ
		$('label[pdata]',rightContent).live('click',function(){
			var pi=$(this).find('input').attr('checked');
			if(pi){
				delboxs[$(this).attr('sdata')]=_temps[$(this).attr('sdata')];
			}else{
				delete delboxs[$(this).attr('sdata')];
			}
		}).live('mousedown',function(ev){
			//��Ԫ�ط�����ק�¼�
			var t=ev.srcElement||ev.target;
			if(t.nodeName=='LABEL'){
				var id=$(this).attr('sdata');
				var name=_temps[id].name;
				var parentid=_temps[id].parentid;
				var html='<label for="r_'+id+'" pdata="'+parentid+'" sdata="'+id+'" class="tempbox"><input name="r_'+id+'" type="checkbox" id="r_'+id+'" value="'+id+'" />'+name+'</label>';					//var bghtml='<div class="tempboxbg"></div>';
				//var _elbg=$(bghtml).appendTo('body');
				var _el=$(html).appendTo('body');
				
				ev = ev || window.event;
				var mousePos = mousePosition(ev);
				_el.css({left:mousePos.x-30,top:mousePos.y-10});
				//_elbg.css({height:$(document).height()});
				
				$(document).bind('mousemove',function(ev){
					ev = ev || window.event;
					var mousePos = mousePosition(ev);
					_el.css({left:mousePos.x-30,top:mousePos.y-10});
					
				}).bind('mouseup',function(ev){
					ev = ev || window.event;
					var mousePos = mousePosition(ev);
					var _x=mousePos.x ,_y=mousePos.y;
					var $this=leftContent;
					var $that=rightContent;
					var id=_el.attr('sdata');
					//minL:540 minT:40 maxL:
					var minL=$this.position().left ,minT=$this.position().top;
					var maxL=minL+$this.width(),maxT=minT+$this.height();
					if(_x>minL&&_x<maxL&&_y>minT&&_y<maxT){
						$('label[for=r_'+id+']',$that).remove();
						_delOne(resultbox[id]);
					}
					$(document).unbind('mousemove').unbind('mouseup');
					_el.remove();
					delete _el;
				})
			}
		});
	
		$("#addBtn"+id,centerContent).live('click',function(e){
			_add();
		});
		$("#delBtn"+id,centerContent).live('click',function(e){
			_del();
		});
		$("#delAllBtn"+id,centerContent).live('click',function(e){
			_allDel();
		});
	}
//��ȡ���λ��
	function mousePosition(ev){
		if(ev.pageX || ev.pageY){
			return {x:ev.pageX, y:ev.pageY};
		}
		return {
			x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
			y:ev.clientY + document.body.scrollTop - document.body.clientTop
		};
	}

	//��ק���
	function _addOne(obj){
		
		if(!obj) return;
		var o=obj;
		var id=o.id;
		var name=o.name;
		var checked=o.checked;
		var parentid=o.parentid;
		var nums=o.nums;
		var serial=o.serial;
		_temps[id].checked=true;
		if(parentid!=null){
			var html='<label for="r_'+id+'" pdata="'+parentid+'" sdata="'+id+'"><input name="r_'+id+'" type="checkbox" id="r_'+id+'" value="'+id+'"/>'+name+' <input class="nums" name="nums" type="hidden" nid="'+id+'" value="'+nums+'" /> <input class="serial" name="serial" type="hidden" sid="'+id+'" value="'+serial+'" /></label>';
			var el=$(html).appendTo(rightContent);
			//��������͵ĵ�λ
			resultbox[id]=_temps[id];
			checkboxs[id]=_temps[id];
			var $this=leftContent;
			$('label[for='+id+']',$this).addClass('fcc').find('input').attr('checked',true).attr('disabled',true);
			//�ж��Ƿ�ȫѡ
			if(!_temps[parentid].checked) isCheckAll(parentid);
			/**�����¼�**/
			/**end**/
			//������קʵ��
			//������קʵ��
			/**end**/
		}
	}
	
	//��ӵ�λ
	function _add(obj){
		var ckAll={};
		var isr=false;
		if(!obj) {
			obj=checkboxs;
			isr=true;
		}
		rightContent.html('');
		for(n in obj){
			var o=obj[n];
			var id=o.id;
			var name=o.name;
			var checked=o.checked;
			var parentid=o.parentid;
			var nums=o.nums;
			var serial=o.serial;
			//���淵�ص�nums��serial
			if(!isr){
				_temps[id].nums=nums;
				_temps[id].serial=serial;
				checkboxs[id]=_temps[id];
			}
			_temps[id].checked=true;
			if(parentid!=null){
				var html='<label for="r_'+id+'" pdata="'+parentid+'" sdata="'+id+'"><input name="r_'+id+'" type="checkbox" id="'+id+'" value="'+id+'"/>'+name+' <input class="nums" name="nums" type="hidden" nid="'+id+'" value="'+nums+'" /> <input class="serial" name="serial" type="hidden" sid="'+id+'" value="'+serial+'" /></label>';
				var el=$(html).appendTo(rightContent);
				//��������͵ĵ�λ
				resultbox[id]=_temps[id];
				
				var $this=leftContent;
				$('label[for='+id+']',$this).addClass('fcc').find('input').attr('checked',true).attr('disabled',true);
				//�ж��Ƿ�ȫѡ
				//if(!_temps[parentid].checked) 
				ckAll[parentid]=parentid;
				/**�����¼�**/
				/**end**/
				//������קʵ��
				//������קʵ��
				/**end**/
			}
		}
		//�Ż����ȫѡ���
		for(c in ckAll){
			isCheckAll(c);
		}
		ckAll={};
		delete ckAll;
	}
	//��������Ƿ�ȫѡ
	function isCheckAll(pid){
		var allc=true;
		var $this=leftContent;
		$('.c_'+pid,$this).find('label').each(function(){
			var id=$(this).attr('sdata');
			if(!_temps[id].checked)
				allc=false;
		});
		if(allc){
			$('label[for='+pid+']',$this).find('input').attr('checked',true).attr('disabled',true);
			_temps[pid].checked=true;
			checkboxs[pid]=_temps[pid];
		}else{
			$('label[for='+pid+']',$this).find('input').attr('checked',false).attr('disabled',false);
			_temps[pid].checked=false;
			delete checkboxs[pid];
		}
	}
	
	//ɾ��ȫ����λ
	function _allDel(){
		var ckAll={};
		var $this=leftContent;
		for(n in resultbox){
			var o=resultbox[n];
			var id=o.id;
			var parentid=o.parentid;
			o.checked=false;
			$('label[for='+id+']',$this).removeClass('fcc').find('input').attr('checked',false).attr('disabled',false);
			ckAll[parentid]=parentid;
			delete checkboxs[id];
		}
		rightContent.html('');
		resultbox={};
		//�Ż����ȫѡ���
		for(c in ckAll){
			isCheckAll(c);
		}
		ckAll={};
		delete ckAll;
	}
	
	//ɾ��ѡ��ĵ�λ
	function _del(){
		for(n in delboxs){
			var o=delboxs[n];
			var id=o.id;
			var pid=o.parentid;
			o.checked=false;
			$('label[for=r_'+id+']' ,rightContent).remove();
			$('input[id='+id+']' ,leftContent).attr('checked',false).attr('disabled',false);
			$('label[for='+id+']' ,leftContent).removeClass('fcc');
			
			if(_temps[pid].checked){
				_temps[pid].checked=false;
				$('input[id='+pid+']' ,leftContent).attr('checked',false).attr('disabled',false);
			}
			delete checkboxs[id];
			delete resultbox[id];
		}
		delboxs={};
	}
	//ɾ��������λ
	function _delOne(obj){
		if(obj){
			var o=obj;
			var id=o.id;
			var pid=o.parentid;
			o.checked=false;
			$('input[id='+id+']' ,leftContent).attr('checked',false).attr('disabled',false);
			$('label[for='+id+']' ,leftContent).removeClass('fcc');
			
			if(_temps[pid].checked){
				_temps[pid].checked=false;
				$('input[id='+pid+']' ,leftContent).attr('checked',false).attr('disabled',false);
			}
			delete checkboxs[id];
			delete resultbox[id];
			delete delboxs[id];
		}
	}
	
	//�����Ϣ
	//demo _getValue(['id','name','parentid'],'|')
	function _getValue(fields,splitstr){
		var result=[],str='';
		for(n in resultbox){
			var o=resultbox[n];
			var parentid=o.parentid;
			if(parentid!=null){
				str="";
				var i=0,l=fields.length;
				for(i;i<l;i++){
					if(str!=''&&l>1){
						str+=splitstr;
					}
					str+=o[fields[i]];
				}
				result.push(str);
			}
		}
		return result;
	}
	var node=function(id,name,checked,parentid,nums){
		this.id=id;					//����
		this.name=name;				//�ڵ���
		this.checked=!!checked;		//�Ƿ�ѡ��
		this.parentid=parentid;		//����id
		this.nums=nums;				//������
		this.serial='';				//��չ�ı��
	};
})(jQuery);