/**
 * @version 1.1
 * @author ideawu@163.com
 * @link http://www.ideawu.net/
 * @class
 * ������ʾ���ݱ���JavaScript�ؼ�. ���ɵķ�ҳ�ؼ�, �ɶԱ���е����ݼ����пͻ��˷�ҳ.
 *
 * @param {String} id: HTML�ڵ��id, �ؼ�����ʾ�ڸýڵ���.
 * @returns {TableView}: ���ط�ҳ�ؼ�ʵ��.
 * @requires jQuery {@link PagerView} {@link SortView}
 *
 * @example
 * ### HTML����:
 * &lt;div id="my_div"&gt;&lt;/div&gt;
 *
 * ### JavaScript����:
 * var table = new TableView('my_div');
 * table.dataKey = 'id';
 * table.header = {
 * 	'id' : 'Id',
 * 	'name' : 'Name',
 * };
 *
 * table.add({id:1, name:'Tom'});
 * table.render();
 */
var TableView = function(id){
	// TODO: ʵ�������ϣ��.
	/* ��Ϊ��ϣ���ʵ�ֿ�����Ԫ�������, ����ʹ���������. Ϊ��, ���������ݲ�������. */
	function array_index_of_key(arr, key, val){
		for(var i in arr){
			if(arr[i][key] == val){
				return parseInt(i);
			}
		}
		return -1;
	}

	function array_index_of_item(arr, item){
		for(var i in arr){
			if(arr[i] == item){
				return parseInt(i);
			}
		}
		return -1;
	}

	function array_get(arr, key, val){
		var index = array_index_of_key(arr, key, val);
		if(index != -1){
			return arr[index];
		}
		return false;
	}

	function array_del(arr, key, val){
		var index = array_index_of_key(arr, key, val);
		if(index != -1){
			var a1 = arr.slice(0, index);
			var a2 = arr.slice(index + 1);
			return a1.concat(a2);
		}
		return arr;
	}
	var self = this;
	this.id = id;
	this._rendered = false;
	this._filter_text = '';
	this.rows = [];
	this._display_rows = []; // ���˺�����ݼ�
	
	/**
	 * ��ǰ�ؼ�������HTML�ڵ�����.
	 * @type DOMElement
	 */
	this.container = null;

	/**
	 * ���ݼ���ÿһ����¼��Ψһ��ʶ�ֶ���. �������ݿ��������ֶ���.
	 * @type String
	 */
	this.dataKey = '';
	/**
	 * Ҫ��ʾ�����ݱ��ı���.
	 * @type String
	 */
	this.title = '';
	/**
	 * Ҫ��ʾ�ļ�¼���ֶ�, �Լ�����Ӧ���ֶ���. �� 'id' : '���'.
	 * @type Object
	 */
	this.header = {};
	/**
	 * ���ɵķ�ҳ�ؼ�, �ɶԱ���е����ݼ����пͻ��˷�ҳ.
	 * @type PagerView
	 */
	this.pager = {};
	/**
	 * ���ɵ�����ؼ�, ������ʾ��ҳ��ť/����.
	 * @type SortView
	 */
	this.sort = {};

	/**
	 * @class
	 * ����ȷ��Ҫ��ʾ��Щ�ڲ��ؼ�, �ؼ���Ӧ������ΪBoolean����, ȡֵΪtrueʱ��ʾ.
	 */
	function DisplayOptions(){
		/**
		 * ����
		 * @type Boolean
		 */
		this.title = true;
		/**
		 * ����
		 * @type Boolean
		 */
		this.count = true;
		/**
		 * ��ѡ���
		 * @type Boolean
		 */
		this.marker = true;
		/**
		 * ������
		 * @type Boolean
		 */
		this.filter = false;
		/**
		 * ��ҳ
		 * @type Boolean
		 */
		this.pager = false;
		/**
		 * ����
		 * @type Boolean
		 */
		this.sort = false;
		/**
		 * �Ƿ��ѡ
		 * @type Boolean
		 */
		this.multiple = true;
		/**
		 * ����
		 * @type Boolean
		 */
		this.debug = false;
	};

	/**
	 * ����ȷ��Ҫ��ʾ��Щ�ڲ��ؼ�.
	 * @type TableView-DisplayOptions
	 */
	this.display = new DisplayOptions();

	/**
	 * ��ȡ���ݼ�ָ��idһ����¼.
	 * @returns {Object} ���ݼ��е�һ����¼.
	 */
	this.get = function(id){
		return array_get(this.rows, self.dataKey, id);
	};

	/**
	 * ���һ����¼, ����ؼ��Ѿ�����Ⱦ, �ᵼ��һ��ˢ��.
	 * @param {Object} row: ��¼����.
	 */
	this.add = function(row){
		var index = array_index_of_item(self.rows, row);
		if(index != -1){
			return;
		}
		this.rows.push(row);
		this._display_rows.push(row);
		if(self._rendered){
			self.render();
		}
	};


	/**
	 * ��Ӽ�¼�б�, ����ؼ��Ѿ�����Ⱦ, �ᵼ��һ��ˢ��.
	 * �ñ���������������{@link TableView#add()}, ���������.
	 * @param {Array[Object]} rows: ��¼���������.
	 */
	this.addRange = function(rows){

		var index = {};
		for(var i in self.rows){
			var rid = self.rows[i][self.dataKey];
			index[rid] = true;
		}

		for(var i in rows){
			var row = rows[i];
			var rid = row[self.dataKey];

			if(!index[rid]){
				this.rows.push(row);
				this._display_rows.push(row);
			}
		}
		if(self._rendered){
			self.render();
		}
	};

	/**
	 * ɾ��һ����¼����, ����ؼ��Ѿ�����Ⱦ, �ᵼ��һ��ˢ��.
	 * �����ڵ��ñ�����ǰ, ����{@link TableView#get()}����ͨ��id��ȡҪɾ���ļ�¼����.
	 * @param {Object} row: ��¼����.
	 */
	this.del = function(row){
		var rid = row[self.dataKey];
		self.rows = array_del(self.rows, self.dataKey, rid);
		self._display_rows = array_del(self._display_rows, self.dataKey, rid);
		if(self._rendered){
			self.render();
		}
	};

	/**
	 * ɾ����¼�����б�, ����ؼ��Ѿ�����Ⱦ, �ᵼ��һ��ˢ��.
	 * �ñ���������������{@link TableView#del()}, ���������.
	 * @param {Array[Object]} rows: ��¼���������.
	 */
	this.delRange = function(rows){
		var index = {};
		for(var i in rows){
			var rid = rows[i][self.dataKey];
			index[rid] = true;
		}

		var n_rows = [];
		for(var i in self.rows){
			var row = self.rows[i];
			var rid = row[self.dataKey];
			if(!index[rid]){
				n_rows.push(row);
			}
		}
		self.rows = n_rows;

		var n_rows = [];
		for(var i in self._display_rows){
			var row = self._display_rows[i];
			var rid = row[self.dataKey];
			if(!index[rid]){
				n_rows.push(row);
			}
		}
		self._display_rows = n_rows;


		if(self._rendered){
			self.render();
		}
	};

	/**
	 * �ڲ�����. ����ȫѡ����ȡ��ȫѡ��.
	 */
	this._toggleSelect = function(){
		var c = $(self.container).find('th.marker input[type=checkbox]')[0];
		if(c.checked){
			self.selectAll();
		}else{
			self.unselectAll();
		}
	};

	/**
	 * ʹ������д������, ������˫���ص�.
	 * @param {int} id: ˫���е�����ֵ.
	 * @event
	 */
	this.dblclick = function(id){
	};

	/**
	 * �ڲ�����, ��˫��ʱ����.
	 */
	this._dblclick = function(id){
		self.dblclick(id);
	};
	/**
	 * ʹ������д������, ������˫���ص�.
	 * @param {int} id: �����е�����ֵ.
	 * @event
	 */
	this.click = function(id){
	};
	this._click=function(id){
		self.click(id);
	};
	/**
	 * ��ȡ��ǰ����ʾ��������.
	 * @returns {int}
	 */
	this.rowCount = function(){
		var n = 0;
		for(var i in self._display_rows){
			n ++;
		}
		return n;
	};

	/**
	 * �ڲ�����, ��Ⱦ��ͼ���.
	 */
	this._render_framework = function(){
		var str = '';
		str += '<div class="TableView">\n';
		str += '<div class="datagrid_meta">\n';
			str += '<span class="title">' + this.title + '</span>';
			str += '<span class="count">(<span class="marked_count">0</span>/<span class="row_count">0</span>)</span>';
			str += '<span class="filter"><label>ģ������</label>';
			str += '<input type="text" value="' + this._filter_text + '"'
				+ ' onkeyup="document.getElementById(\'' + this.id + '\').view.filter(this.value)" />';
			str += '</span>\n';
		str += '</div>\n';

		//var datagrid_div_id = self.id + '_datagrid_div__';
		//str += '<div class="datagrid_div" id="' + datagrid_div_id + '">\n';
		str += '<div class="datagrid_div">\n';
		str += '</div><!-- /.datagrid_div -->\n';

		var pager_id = self.id + '_pager__';
		str += '<div id="' + pager_id + '" class="pager"></div>\n';

		// debug
		var debug_div_id = self.id + '_debug';
		str += '<div id="' + debug_div_id + '"></div>\n';

		str += '</div><!-- /.TableView -->\n';

		var div = document.getElementById(self.id);
		div.view = self;
		self.container = div;
		self.container.innerHTML = str;

		// debug
		self._debug = $('#' + debug_div_id);

		// �����쳣, ���Բ���ҪPagerView����
		try{
			self.pager = new PagerView(pager_id);
			self.pager.onclick = function(index){
				self.render();
			};

			self.sort = new SortView();
			self.sort.onclick = function(field, order){
				self.sort.sort(self._display_rows);
				self.render();
			};
		}catch(e){
		}
	};

	self._render_framework();

	/**
	 * ����ͳ������.
	 */
	this._update_meta = function(){
		if(!self.display.count){
			return;
		}
		var marked_count = 0;
		marked_count = $(self.container).find('table.datagrid td.marker input[value!=""]:checked').length;
		$(self.container).find('div.datagrid_meta span.marked_count').html(marked_count);
		$(self.container).find('div.datagrid_meta span.row_count').html(self.rowCount());
	}

	/**
	 * �ڲ�����. ���¼�, �������.
	 */
	this._after_render = function(){
		var trs = $(self.container).find('table.datagrid>tbody>tr.tv_row');
		trs.each(function(i, tr){
			var cb = tr.getElementsByTagName('input')[0];
			var clz = ((i%2==0)? 'odd' : 'even');
			// �����ѡ����
			if(cb.checked){
				clz += ' marked';
			}
			$(tr).removeClass('odd even marked');
			$(tr).addClass(clz);

			cb.onclick = function(){
				cb.checked = !cb.checked;
			};

			tr.onclick = function(){
				if(!cb.checked){
					if(!self.display.multiple){
						self.unselectAll();
					}
				}
				cb.checked = !cb.checked;
				if(cb.checked){
					$(this).addClass('marked');
				}else{
					$(this).removeClass('marked');
				}
				self._click(cb.value);
				self._update_meta();
			};
			tr.onmouseover = function(){
				$(this).addClass('hover');
			};
			tr.onmouseout = function(){
				$(this).removeClass('hover');
			};
			tr.ondblclick = function(){
				self._dblclick(cb.value);
			};
		});

		self._update_meta();

		if(!self.display.title){
			$(self.container).find('div.datagrid_meta span.title').hide();
		}else{
			$(self.container).find('div.datagrid_meta span.title').show();
		}
		if(!self.display.count){
			$(self.container).find('div.datagrid_meta span.count').hide();
		}else{
			$(self.container).find('div.datagrid_meta span.count').show();
		}
		if(!self.display.filter){
			$(self.container).find('div.datagrid_meta span.filter').hide();
		}else{
			$(self.container).find('div.datagrid_meta span.filter').show();
		}
		if(!self.display.pager){
			$('#' + self.pager.id).hide();
		}else{
			$('#' + self.pager.id).show();
		}
		if(!self.display.marker){
			$(self.container).find('td.marker, th.marker').hide();
		}else{
			$(self.container).find('td.marker, th.marker').show();
		}
	};

	// DEBUG
	function debug(str){
		if(self.display.debug){
			self._debug.css('border', '2px solid #f00');
			self._debug.append(str + '<br/>');
		}
	}

	/**
	 * ��Ⱦ�ؼ�.
	 */
	this.render = function(){
		var buf = [];
		buf.push('<table class="datagrid"><tbody>\n');
		buf.push('<tr>\n');
		buf.push('<th class="marker" width="10">');
		if(self.display.multiple){
			buf.push('<input type="checkbox" value="" onclick="document.getElementById(\'' + this.id + '\').view._toggleSelect()" />');
		}
		buf.push('</th>\n');
		for(var k in this.header){
			buf.push('<th field="' + k + '">' + self.header[k] + '</th>\n');
		}
		buf.push("</tr>\n");

		if(self.display.sort){
			self.sort.sort(self._display_rows);
		}
		if(self.display.pager){
			self.pager.itemCount = self._display_rows.length;
			var rows = self.pager.page(self._display_rows);	
		}else{
			var rows = self._display_rows;
		}

		for(var i in rows){
			var row = rows[i];
			var rid = row[self.dataKey];
			buf.push('<tr class="tv_row">\n<td class="marker" width="10"><input type="checkbox" value="');
			buf.push(rid);
			buf.push('" /></td>\n');
			for(var k in self.header){
				buf.push('<td>');
				buf.push(row[k]);
				buf.push('</td>\n');
			}
			buf.push('</tr>\n');
		}
		buf.push("</tbody></table>\n");

		$(self.container).find('div.datagrid_meta span.title').html(this.title);
		
		// $.html() is really slow in IE
		//$(self.container).find('div.datagrid_div').html(buf.join(''));
		$(self.container).find('div.datagrid_div').each(function(i, e){
			e.innerHTML = buf.join('');
		});

		self._after_render();

		if(self.display.pager){
			self.pager.render();
		}

		if(self.display.sort){
			if(true){
				var fields = {};
				for(var k in self.header){
					fields[k] = [null, null];
				}
				self.sort.fields = fields;
			}
			var elements = {};
			$(self.container).find('table.datagrid th[field]').each(function(i, th){
				var k = $(th).attr('field');
				if(k != undefined){
					elements[k] = th;
				}
			});
			self.sort.render(elements);
		}

		self._rendered = true;
	};

	/**
	 * ���������е�ѡ����. ��������˷�ҳ, ��ֻ�Ե�ǰҳ��Ч.
	 */
	this.selectAll = function(){
		$(self.container).find('th.marker input').attr('checked', 'checked');
		$(self.container).find('td.marker input').attr('checked', 'checked');
		self._after_render();
	};

	/**
	 * ȡ�������е�ѡ����. ��������˷�ҳ, ��ֻ�Ե�ǰҳ��Ч.
	 */
	this.unselectAll = function(){
		$(self.container).find('th.marker input').attr('checked', '');
		$(self.container).find('td.marker input').attr('checked', '');
		self._after_render();
	};

	/**
	 * �������еļ�¼���б�.
	 * @returns {Array[Object]}
	 */
	this.getDataSource = function(){
		return self.rows;
	}

	/**
	 * ��ȡ���б��Ϊѡ����ж�Ӧ�ļ�¼���б�.
	 * @returns {Array[Object]}
	 */
	this.getSelected = function(){
		var items = [];
		$(self.container).find('.datagrid td.marker input[value!=""]:checked').each(function(i, cb){
			if(cb.checked){
				// ע��, ��Ҫ��Ϊhashʹ��, ����ᵼ��ʹ�����ж�ѡ�и���ʱ����.
				var row = array_get(self.rows, self.dataKey, cb.value);
				items.push(row);
			}
		});

		return items;
	};

	/**
	 * ��ȡ������ѡ������ݶ����ֵ���б�.
	 * @returns {Array[Key]}
	 */
	this.getSelectedKeys = function(){
		var keys = [];
		var rows = self.getSelected();
		for(var i in rows){
			keys.push(rows[i][self.dataKey]);
		}
		return keys;
	};

	/**
	 * ����ģ������.
	 * @param {String} text: Regex�ַ���.
	 */
	this.filter = function(text){
		self._filter_text = text;
		self._display_rows = [];

		var regex = new RegExp(text.replace('\\', '\\\\'), 'i');
		for(var key in self.rows){
			var row = self.rows[key];
			if(text == ''){
				self._display_rows.push(row);
			}else{
				// ֻ�Կ����Ľ��й���
				for(var k in self.header){
					var find = String(row[k]).replace(/<[^>]*>/g, '');
					if(regex.test(find)){
						self._display_rows.push(row);
						break;
					}
				}
			}
		}

		if(self.display.pager){
			self.pager.index = 1;
		}
		self.render();
	};

	/**
	 * ���������.
	 */
	this.clear = function(){
		self.rows = [];
		self._display_rows = [];

		if(self.display.pager){
			self.pager.index = 1;
		}
		self.render();
	};
}
