/**
 * @version 1.1
 * @author ideawu@163.com
 * @link http://www.ideawu.net/
 * @class
 * ������ʾ����ť/���ӵĿؼ�, ������ js ������. ��Щ����ؼ�������ָ���� HTMLElement ��.
 * @requires jQuery {@link PagerView} {@link SortView}
 * @returns {SortView}: ��������ؼ�ʵ��.
 *
 * @example
 * var rows = []; // datasource
 *
 * var sort = new SortView();
 * sort.fields = {
 * 	'id'	: ['int', null],
 * 	'name'	: [null, null]
 * };
 *
 * var elements = {};
 * var ths = $('table th').each(function(i, th){
 * 	var k = $(th).attr('field');
 * 	if(k != undefined){
 * 		elements[k] = th;
 * 	}
 * });
 * sort.onclick = function(){
 * 	sort.sort(rows);
 * 	// do with rows...
 * }
 *
 * sort.render(elements);
 */
var SortView = function(){
	var self = this;

	this._elements = {};

	/**
	 * �����ֶε�����.
	 * @type String
	 */
	this.field = null;
	/**
	 * ������, ȡֵΪ: asc|desc.
	 * @type String
	 */
	this.order = null;
	/**
	 * �ɹ�������ֶι�ϣ��, �ֶζ�Ӧһ������, �����ʽΪ[����, �ȽϺ���].
	 * ������Ϊ: null|int|date|text|string|float �Ҳ�ָ���ȽϺ���ʱ, ʹ��Ĭ�ϵıȽϺ���.
	 * @type Object
	 */
	this.fields = {
		//'id' : ['int', null] // type, comparer
	};

	/**
	 * Ĭ�ϵ�������.
	 */
	this._default_comparefuncs = {};
	this._default_comparefuncs['int'] = function(a, b){
		// strip_tags
		if(typeof(a) == 'string'){
			a = a.replace(/<[^>]*>/g, '');
		}
		if(typeof(b) == 'string'){
			b = b.replace(/<[^>]*>/g, '');
		}
		a = parseInt(a);
		b = parseInt(b);
		if(isNaN(a)){
			return 1;
		}
		if(isNaN(b)){
			return -1;
		}
		if(a > b){
			return 1;
		}else if(a == b){
			return 0;
		}else{
			return -1;
		}
	};
	this._default_comparefuncs['float'] = function(a, b){
		if(typeof(a) == 'string'){
			a = a.replace(/<[^>]*>/g, '');
		}
		if(typeof(b) == 'string'){
			b = b.replace(/<[^>]*>/g, '');
		}
		a = parseFloat(a);
		b = parseFloat(b);
		if(isNaN(a)){
			return 1;
		}
		if(isNaN(b)){
			return -1;
		}
		if(a > b){
			return 1;
		}else if(a == b){
			return 0;
		}else{
			return -1;
		}
	};
	this._default_comparefuncs['text'] = function(a, b){
		if(typeof(a) == 'string'){
			a = a.replace(/<[^>]*>/g, '');
		}
		if(typeof(b) == 'string'){
			b = b.replace(/<[^>]*>/g, '');
		}
		if(a > b){
			return 1;
		}else if(a == b){
			return 0;
		}else{
			return -1;
		}
	};
	this._default_comparefuncs['float'] = this._default_comparefuncs['int'];
	this._default_comparefuncs['string'] = this._default_comparefuncs['text'];
	this._default_comparefuncs['date'] = this._default_comparefuncs['text'];


	/**
	 * ���ݵ�ǰ���ֶκͷ���, �Զ��������������.
	 */
	this.sort = function(rows){
		if(self.field == undefined){
			for(var i in self.fields){
				self.field = i;
				break;
			}
		}
		if(self.order == undefined){
			self.order = 'asc';
		}

		var type = null;
		var func = null;
		var f = self.fields[self.field];
		if(f instanceof Array){
			type = f[0];
			func = f[1];
		}
		if(type == null || type == undefined){
			func = this._default_comparefuncs['text'];
		}else if(type == 'int' || type == 'string'
				|| type == 'text' || type == 'date' || type == 'float'){
			func = this._default_comparefuncs[type];
		}

		var sign = self.order == 'desc'? -1 : 1;
		var k = self.field;
		rows.sort(function(a, b){
			return sign * func(a[k], b[k]);
		});
	};

	/**
	 * �û���д������, ��ȡ�����¼�.
	 * @param {String} field �����ֶ�.
	 * @param {String} order ������.
	 * @returns {Boolean} ����false��ʾȡ�����������¼�.
	 */
	this.onclick = function(field, order){
	};

	/**
	 * �ڲ�����.
	 */
	this._onclick = function(field){
		var old_field = self.field;
		var old_order = self.order;

		var order = 'asc';
		if(self.field == field && self.order == 'asc'){
			order = 'desc';
		}
		self.field = field;
		self.order = order;
		
		var ret = self.onclick(field, order);
		if(ret === false){
			self.field = old_field;
			self.order = old_order;
		}

		self.render(self._elements);
		//alert(field + ':' + order);
	};

	/**
	 * ������Ⱦ.
	 * @param {Object} elements ��ϣ��, �ֶ�����HTMLElement�Ķ�Ӧ��ϵ.
	 */
	this.render = function(elements){
		self._elements = elements;
		//alert(self.field + ':' + self.order);

		for(var k in self.fields){
			var ele = elements[k];
			if(ele == undefined){
				continue;
			}
			ele = $(ele);

			ele.find('span[class=sign]').remove();
			var html = '<a href="javascript://' + k + '" sort="' + k + '" class="SortView">';
			html += ele.html();
			html += '</a>';

			html = $(html);
			html.click(function(a){
				self._onclick($(this).attr('sort'));
			});
			
			ele.html(html);
			if(k == self.field){
				var sign = self.order == 'asc'? '��' :  '��';
				ele.append('<span class="sign">' + sign + '</span>');
			}
		}
	};
};

