/**
 * @version 1.1
 * @author ideawu@163.com
 * @link http://www.ideawu.net/
 * @class
 * ������ʾ����(��ѡ��, ��ѡ��)ѡ�����ؼ���JavaScript�ؼ�.
 *
 * @param {String} id: HTML�ڵ��id, �ؼ�����ʾ�ڸýڵ���.
 * @returns {TableView}: ���ط�ҳ�ؼ�ʵ��.
 * @requires jQuery
 *
 * @example
 *
 * #HTML����:
 * &lt;div id="sel_div"&gt;&lt;/div&gt;
 * 
 * #JavaScript����:
 * var sel = new SelectorView('sel_div');
 * sel.src.header = {
 * 	id			: 'Id',
 * 	name		: 'Name',
 * 	text		: 'Text'
 * };
 * sel.dst.header = {
 * 	id			: 'Id',
 * 	name		: 'Name',
 * };
 * sel.src.dataKey = 'id';
 * sel.dst.dataKey = 'id';
 * sel.src.title = '��ѡ';
 * sel.dst.title = '��ѡ';
 *
 * sel.src.add({id: 1, name: 'Tom', text: 'Tomcat'});
 * sel.src.add({id: 2, name: 'Jerry', text: 'Jerrimy'});
 *
 * sel.render();
 */
function SelectorView(id){
	// Ϊ���ں���������.
	var self = this;

	this.id = id;
	this._rendered = false;

	/**
	 * ��ǰ�ؼ�������HTML�ڵ�����.
	 * @type DOMElement
	 */
	this.container = null;
	/**
	 * ��ѡ��TableView.
	 * @type TableView
	 */
	this.src = null;
	/**
	 * ��ѡ��TableView.
	 * @type TableView
	 */
	this.dst = null;

	this._init = function(){
		var div = document.getElementById(this.id);
		div.view = this;

		var id_prefix = 'asdfsafokmlv';
		var src_id = this.id + '_' + id_prefix + '_src';
		var dst_id = this.id + '_' + id_prefix + '_dst';
		var str = '';
		str += '<div class="SelectorView">\n';
		str += '<table class="selector_table">\n';
		str += '<tr>';
		str += '<td valign="top" class="src">';
			str += '<div id="' + src_id + '" class="src_div"></div>';
			str += '<input type="button" value="ѡ��" onclick="document.getElementById(\'' + this.id + '\').view.select()" />';
		str += "</td>\n";
		str += '<td valign="top" class="dst">';
			str += '<div id="' + dst_id + '" class="dst_div"></div>';
			str += '<input type="button" value="ȡ��ѡ��" onclick="document.getElementById(\'' + this.id + '\').view.unselect()" />';
		str += "</td>\n";
		str += "</tr>\n";
		str += "</table>\n";
		str += '</div><!-- /.SelectorView -->\n';
		div.innerHTML = str;
		
		this.container = div;
		this.src = new TableView(src_id);
		this.dst = new TableView(dst_id);
	}

	this._init();

	// ��д���ݱ�����˫������.
	this.src.dblclick = function(id){
		var row = self.src.get(id);
		if(row == false){
			return;
		}
		self.dst.add(row);
		self.src.del(row);
	};

	// ��д���ݱ�����˫������.
	this.dst.dblclick = function(id){
		var row = self.dst.get(id);
		if(row == false){
			return;
		}
		self.src.add(row);
		self.dst.del(row);
	};

	/**
	 * ��Ⱦ����ѡ��ؼ�.
	 */
	this.render = function(){
		this.src.render();
		this.dst.render();
		this._rendered = true;
	};

	/**
	 * ����ѡ����ѡ�е������ƶ�����ѡ����.
	 */
	this.select = function(){
		var rows = this.src.getSelected();
		this.dst.addRange(rows);
		this.src.delRange(rows);
		this.src.unselectAll();
	};

	/**
	 * ����ѡ����ѡ�е������ƶ�����ѡ����.
	 */
	this.unselect = function(){
		var rows = this.dst.getSelected();
		this.src.addRange(rows);
		this.dst.delRange(rows);
		this.dst.unselectAll();
	};

	/**
	 * ��ȡ��ѡ��ĵļ�¼������б�, Ҳ����ѡ���е����м�¼.
	 */
	this.getSelected = function(){
		return this.dst.getDataSource();
	};

	/**
	 * ��ȡ������ѡ������ݶ����ֵ�б�.
	 */
	this.getSelectedKeys = function(){
		var keys = [];
		var rows = this.dst.getDataSource();
		for(var i in rows){
			keys.push(rows[i][this.dst.dataKey]);
		}
		return keys;
	};
}
