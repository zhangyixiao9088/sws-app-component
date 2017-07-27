
/*
 Highstock JS v4.2.5 (2016-05-06)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (L, ga) {
	typeof module === "object" && module.exports ? module.exports = L.document ? ga(L) : ga : L.Highcharts = ga(L);
})(typeof window !== "undefined" ? window : this, function (L) {
	function ga(a, b) {
		var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
		if (b) {
			throw Error(c);
		}
		L.console && console.log(c);
	}
	function xb(a, b, c) {
		this.options = b;
		this.elem = a;
		this.prop = c;
	}
	function z() {
		var a, b = arguments, c, d = {}, e = function (a, b) {
			var c, d;
			typeof a !== "object" && (a = {});
			for (d in b) {
				b.hasOwnProperty(d) && (c = b[d], a[d] = c && typeof c === "object" && Object.prototype.toString.call(c) !== "[object Array]" && d !== "renderTo" && typeof c.nodeType !== "number" ? e(a[d] || {}, c) : b[d]);
			}
			return a;
		};
		b[0] === !0 && (d = b[1], b = Array.prototype.slice.call(b, 2));
		c = b.length;
		for (a = 0; a < c; a++) {
			d = e(d, b[a]);
		}
		return d;
	}
	function K(a, b) {
		return parseInt(a, b || 10);
	}
	function Ca(a) {
		return typeof a === "string";
	}
	function ea(a) {
		return a && typeof a === "object";
	}
	function Ja(a) {
		return Object.prototype.toString.call(a) === "[object Array]";
	}
	function za(a, b) {
		for (var c = a.length; c--; ) {
			if (a[c] === b) {
				a.splice(c, 1);
				break;
			}
		}
	}
	function v(a) {
		return a !== t && a !== null;
	}
	function X(a, b, c) {
		var d, e;
		if (Ca(b)) {
			v(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
		} else {
			if (v(b) && ea(b)) {
				for (d in b) {
					a.setAttribute(d, b[d]);
				}
			}
		}
		return e;
	}
	function ua(a) {
		return Ja(a) ? a : [a];
	}
	function Za(a, b, c) {
		if (b) {
			return setTimeout(a, b, c);
		}
		a.call(0, c);
	}
	function N(a, b) {
		if (Ka && !ja && b && b.opacity !== t) {
			b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
		}
		A(a.style, b);
	}
	function fa(a, b, c, d, e) {
		a = H.createElement(a);
		b && A(a, b);
		e && N(a, {padding:0, border:"none", margin:0});
		c && N(a, c);
		d && d.appendChild(a);
		return a;
	}
	function ma(a, b) {
		var c = function () {
		};
		c.prototype = new a;
		A(c.prototype, b);
		return c;
	}
	function Oa(a, b, c) {
		return Array((b || 2) + 1 - String(a).length).join(c || 0) + a;
	}
	function eb(a) {
		return (fb && fb(a) || yb || 0) * 60000;
	}
	function La(a, b) {
		for (var c = "{", d = !1, e, f, g, h, i, j = []; (c = a.indexOf(c)) !== -1; ) {
			e = a.slice(0, c);
			if (d) {
				f = e.split(":");
				g = f.shift().split(".");
				i = g.length;
				e = b;
				for (h = 0; h < i; h++) {
					e = e[g[h]];
				}
				if (f.length) {
					f = f.join(":"), g = /\.([0-9])/, h = R.lang, i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, e !== null && (e = B.numberFormat(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : ""))) : e = na(f, e);
				}
			}
			j.push(e);
			a = a.slice(c + 1);
			c = (d = !d) ? "}" : "{";
		}
		j.push(a);
		return j.join("");
	}
	function zb(a) {
		return Y.pow(10, V(Y.log(a) / Y.LN10));
	}
	function Ab(a, b, c, d, e) {
		var f, g = a, c = q(c, 1);
		f = a / c;
		b || (b = [1, 2, 2.5, 5, 10], d === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));
		for (d = 0; d < b.length; d++) {
			if (g = b[d], e && g * c >= a || !e && f <= (b[d] + (b[d + 1] || b[d])) / 2) {
				break;
			}
		}
		g *= c;
		return g;
	}
	function nb(a, b) {
		var c = a.length, d, e;
		for (e = 0; e < c; e++) {
			a[e].safeI = e;
		}
		a.sort(function (a, c) {
			d = b(a, c);
			return d === 0 ? a.safeI - c.safeI : d;
		});
		for (e = 0; e < c; e++) {
			delete a[e].safeI;
		}
	}
	function Ma(a) {
		for (var b = a.length, c = a[0]; b--; ) {
			a[b] < c && (c = a[b]);
		}
		return c;
	}
	function Da(a) {
		for (var b = a.length, c = a[0]; b--; ) {
			a[b] > c && (c = a[b]);
		}
		return c;
	}
	function Pa(a, b) {
		for (var c in a) {
			a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c];
		}
	}
	function Ua(a) {
		ob || (ob = fa(Va));
		a && ob.appendChild(a);
		ob.innerHTML = "";
	}
	function ka(a, b) {
		return parseFloat(a.toPrecision(b || 14));
	}
	function $a(a, b) {
		b.renderer.globalAnimation = q(a, b.animation);
	}
	function gb(a) {
		return ea(a) ? z(a) : {duration:a ? 500 : 0};
	}
	function Ob() {
		var a = R.global, b = a.useUTC, c = b ? "getUTC" : "get", d = b ? "setUTC" : "set";
		ba = a.Date || L.Date;
		yb = b && a.timezoneOffset;
		fb = b && a.getTimezoneOffset;
		pb = function (a, c, d, h, i, j) {
			var k;
			b ? (k = ba.UTC.apply(0, arguments), k += eb(k)) : k = (new ba(a, c, q(d, 1), q(h, 0), q(i, 0), q(j, 0))).getTime();
			return k;
		};
		Bb = c + "Minutes";
		Cb = c + "Hours";
		Db = c + "Day";
		ab = c + "Date";
		hb = c + "Month";
		ib = c + "FullYear";
		Pb = d + "Milliseconds";
		Qb = d + "Seconds";
		Rb = d + "Minutes";
		Sb = d + "Hours";
		qb = d + "Date";
		Eb = d + "Month";
		Fb = d + "FullYear";
	}
	function va(a) {
		if (!(this instanceof va)) {
			return new va(a);
		}
		this.init(a);
	}
	function Z() {
	}
	function bb(a, b, c, d) {
		this.axis = a;
		this.pos = b;
		this.type = c || "";
		this.isNew = !0;
		!c && !d && this.addLabel();
	}
	function Tb(a, b, c, d, e) {
		var f = a.chart.inverted;
		this.axis = a;
		this.isNegative = c;
		this.options = b;
		this.x = d;
		this.total = null;
		this.points = {};
		this.stack = e;
		this.rightCliff = this.leftCliff = 0;
		this.alignOptions = {align:b.align || (f ? c ? "left" : "right" : "center"), verticalAlign:b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"), y:q(b.y, f ? 4 : c ? 14 : -6), x:q(b.x, f ? c ? -6 : 6 : 0)};
		this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center");
	}
	function Gb(a) {
		var b = a.options, c = b.navigator, d = c.enabled, b = b.scrollbar, e = b.enabled, f = d ? c.height : 0, g = e ? b.height : 0;
		this.handles = [];
		this.scrollbarButtons = [];
		this.elementsToDestroy = [];
		this.chart = a;
		this.setBaseSeries();
		this.height = f;
		this.scrollbarHeight = g;
		this.scrollbarEnabled = e;
		this.navigatorEnabled = d;
		this.navigatorOptions = c;
		this.scrollbarOptions = b;
		this.outlineHeight = f + g;
		this.init();
	}
	function Hb(a) {
		this.init(a);
	}
	var t, H = L.document, Y = Math, y = Y.round, V = Y.floor, Ea = Y.ceil, w = Y.max, G = Y.min, S = Y.abs, ca = Y.cos, la = Y.sin, Aa = Y.PI, pa = Aa * 2 / 360, Na = L.navigator && L.navigator.userAgent || "", Ub = L.opera, Ka = /(msie|trident|edge)/i.test(Na) && !Ub, rb = H && H.documentMode === 8, sb = !Ka && /AppleWebKit/.test(Na), Wa = /Firefox/.test(Na), jb = /(Mobile|Android|Windows Phone)/.test(Na), Qa = "http://www.w3.org/2000/svg", ja = H && H.createElementNS && !!H.createElementNS(Qa, "svg").createSVGRect, Zb = Wa && parseInt(Na.split("Firefox/")[1], 10) < 4, qa = H && !ja && !Ka && !!H.createElement("canvas").getContext, Xa, cb, Vb = {}, Ib = 0, ob, R, na, M, ra = function () {
	}, $ = [], kb = 0, Va = "div", $b = /^[0-9]+$/, tb = ["plotTop", "marginRight", "marginBottom", "plotLeft"], ba, pb, yb, fb, Bb, Cb, Db, ab, hb, ib, Pb, Qb, Rb, Sb, qb, Eb, Fb, I = {}, B;
	B = L.Highcharts ? ga(16, !0) : {win:L};
	B.seriesTypes = I;
	var Ra = [], wa, sa, o, Fa, Jb, ta, E, T, O, db, Sa;
	xb.prototype = {dSetter:function () {
		var a = this.paths[0], b = this.paths[1], c = [], d = this.now, e = a.length, f;
		if (d === 1) {
			c = this.toD;
		} else {
			if (e === b.length && d < 1) {
				for (; e--; ) {
					f = parseFloat(a[e]), c[e] = isNaN(f) ? a[e] : d * parseFloat(b[e] - f) + f;
				}
			} else {
				c = b;
			}
		}
		this.elem.attr("d", c);
	}, update:function () {
		var a = this.elem, b = this.prop, c = this.now, d = this.options.step;
		if (this[b + "Setter"]) {
			this[b + "Setter"]();
		} else {
			a.attr ? a.element && a.attr(b, c) : a.style[b] = c + this.unit;
		}
		d && d.call(a, c, this);
	}, run:function (a, b, c) {
		var d = this, e = function (a) {
			return e.stopped ? !1 : d.step(a);
		}, f;
		this.startTime = +new ba;
		this.start = a;
		this.end = b;
		this.unit = c;
		this.now = this.start;
		this.pos = 0;
		e.elem = this.elem;
		if (e() && Ra.push(e) === 1) {
			e.timerId = setInterval(function () {
				for (f = 0; f < Ra.length; f++) {
					Ra[f]() || Ra.splice(f--, 1);
				}
				Ra.length || clearInterval(e.timerId);
			}, 13);
		}
	}, step:function (a) {
		var b = +new ba, c, d = this.options;
		c = this.elem;
		var e = d.complete, f = d.duration, g = d.curAnim, h;
		if (c.attr && !c.element) {
			c = !1;
		} else {
			if (a || b >= f + this.startTime) {
				this.now = this.end;
				this.pos = 1;
				this.update();
				a = g[this.prop] = !0;
				for (h in g) {
					g[h] !== !0 && (a = !1);
				}
				a && e && e.call(c);
				c = !1;
			} else {
				this.pos = d.easing((b - this.startTime) / f), this.now = this.start + (this.end - this.start) * this.pos, this.update(), c = !0;
			}
		}
		return c;
	}, initPath:function (a, b, c) {
		var b = b || "", d = a.shift, e = b.indexOf("C") > -1, f = e ? 7 : 3, g, b = b.split(" "), c = [].concat(c), h = a.isArea, i = h ? 2 : 1, j = function (a) {
			for (g = a.length; g--; ) {
				(a[g] === "M" || a[g] === "L") && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2]);
			}
		};
		e && (j(b), j(c));
		if (d <= c.length / f && b.length === c.length) {
			for (; d--; ) {
				c = c.slice(0, f).concat(c), h && (c = c.concat(c.slice(c.length - f)));
			}
		}
		a.shift = 0;
		if (b.length) {
			for (a = c.length; b.length < a; ) {
				d = b.slice().splice(b.length / i - f, f * i), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), [].splice.apply(b, [b.length / i, 0].concat(d));
			}
		}
		return [b, c];
	}};
	var A = B.extend = function (a, b) {
		var c;
		a || (a = {});
		for (c in b) {
			a[c] = b[c];
		}
		return a;
	}, C = B.isNumber = function (a) {
		return typeof a === "number" && !isNaN(a);
	}, q = B.pick = function () {
		var a = arguments, b, c, d = a.length;
		for (b = 0; b < d; b++) {
			if (c = a[b], c !== t && c !== null) {
				return c;
			}
		}
	}, U = B.wrap = function (a, b, c) {
		var d = a[b];
		a[b] = function () {
			var a = Array.prototype.slice.call(arguments);
			a.unshift(d);
			return c.apply(this, a);
		};
	};
	na = function (a, b, c) {
		if (!C(b)) {
			return R.lang.invalidDate || "";
		}
		var a = q(a, "%Y-%m-%d %H:%M"), d = new ba(b - eb(b)), e, f = d[Cb](), g = d[Db](), h = d[ab](), i = d[hb](), j = d[ib](), k = R.lang, l = k.weekdays, m = k.shortWeekdays, d = A({a:m ? m[g] : l[g].substr(0, 3), A:l[g], d:Oa(h), e:Oa(h, 2, " "), w:g, b:k.shortMonths[i], B:k.months[i], m:Oa(i + 1), y:j.toString().substr(2, 2), Y:j, H:Oa(f), k:f, I:Oa(f % 12 || 12), l:f % 12 || 12, M:Oa(d[Bb]()), p:f < 12 ? "AM" : "PM", P:f < 12 ? "am" : "pm", S:Oa(d.getSeconds()), L:Oa(y(b % 1000), 3)}, B.dateFormats);
		for (e in d) {
			for (; a.indexOf("%" + e) !== -1; ) {
				a = a.replace("%" + e, typeof d[e] === "function" ? d[e](b) : d[e]);
			}
		}
		return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a;
	};
	M = {millisecond:1, second:1000, minute:60000, hour:3600000, day:86400000, week:604800000, month:2419200000, year:31449600000};
	B.numberFormat = function (a, b, c, d) {
		var a = +a || 0, b = +b, e = R.lang, f = (a.toString().split(".")[1] || "").length, g, h, i = Math.abs(a);
		b === -1 ? b = Math.min(f, 20) : C(b) || (b = 2);
		g = String(K(i.toFixed(b)));
		h = g.length > 3 ? g.length % 3 : 0;
		c = q(c, e.decimalPoint);
		d = q(d, e.thousandsSep);
		a = a < 0 ? "-" : "";
		a += h ? g.substr(0, h) + d : "";
		a += g.substr(h).replace(/(\d{3})(?=\d)/g, "$1" + d);
		b && (d = Math.abs(i - g + Math.pow(10, -Math.max(b, f) - 1)), a += c + d.toFixed(b).slice(2));
		return a;
	};
	Math.easeInOutSine = function (a) {
		return -0.5 * (Math.cos(Math.PI * a) - 1);
	};
	wa = function (a, b) {
		var c;
		if (b === "width") {
			return Math.min(a.offsetWidth, a.scrollWidth) - wa(a, "padding-left") - wa(a, "padding-right");
		} else {
			if (b === "height") {
				return Math.min(a.offsetHeight, a.scrollHeight) - wa(a, "padding-top") - wa(a, "padding-bottom");
			}
		}
		return (c = L.getComputedStyle(a, void 0)) && K(c.getPropertyValue(b));
	};
	sa = function (a, b) {
		return b.indexOf ? b.indexOf(a) : [].indexOf.call(b, a);
	};
	Fa = function (a, b) {
		return [].filter.call(a, b);
	};
	ta = function (a, b) {
		for (var c = [], d = 0, e = a.length; d < e; d++) {
			c[d] = b.call(a[d], a[d], d, a);
		}
		return c;
	};
	Jb = function (a) {
		var b = H.documentElement, a = a.getBoundingClientRect();
		return {top:a.top + (L.pageYOffset || b.scrollTop) - (b.clientTop || 0), left:a.left + (L.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)};
	};
	Sa = function (a) {
		for (var b = Ra.length; b--; ) {
			if (Ra[b].elem === a) {
				Ra[b].stopped = !0;
			}
		}
	};
	o = function (a, b) {
		return Array.prototype.forEach.call(a, b);
	};
	E = function (a, b, c) {
		function d(b) {
			b.target = b.srcElement || L;
			c.call(a, b);
		}
		var e = a.hcEvents = a.hcEvents || {};
		if (a.addEventListener) {
			a.addEventListener(b, c, !1);
		} else {
			if (a.attachEvent) {
				if (!a.hcEventsIE) {
					a.hcEventsIE = {};
				}
				a.hcEventsIE[c.toString()] = d;
				a.attachEvent("on" + b, d);
			}
		}
		e[b] || (e[b] = []);
		e[b].push(c);
	};
	T = function (a, b, c) {
		function d(b, c) {
			a.removeEventListener ? a.removeEventListener(b, c, !1) : a.attachEvent && (c = a.hcEventsIE[c.toString()], a.detachEvent("on" + b, c));
		}
		function e() {
			var c, e, f;
			if (a.nodeName) {
				for (f in b ? (c = {}, c[b] = !0) : c = g, c) {
					if (g[f]) {
						for (e = g[f].length; e--; ) {
							d(f, g[f][e]);
						}
					}
				}
			}
		}
		var f, g = a.hcEvents, h;
		if (g) {
			b ? (f = g[b] || [], c ? (h = sa(c, f), h > -1 && (f.splice(h, 1), g[b] = f), d(b, c)) : (e(), g[b] = [])) : (e(), a.hcEvents = {});
		}
	};
	O = function (a, b, c, d) {
		var e;
		e = a.hcEvents;
		var f, g, c = c || {};
		if (H.createEvent && (a.dispatchEvent || a.fireEvent)) {
			e = H.createEvent("Events"), e.initEvent(b, !0, !0), e.target = a, A(e, c), a.dispatchEvent ? a.dispatchEvent(e) : a.fireEvent(b, e);
		} else {
			if (e) {
				e = e[b] || [];
				f = e.length;
				if (!c.preventDefault) {
					c.preventDefault = function () {
						c.defaultPrevented = !0;
					};
				}
				c.target = a;
				if (!c.type) {
					c.type = b;
				}
				for (b = 0; b < f; b++) {
					g = e[b], g.call(a, c) === !1 && c.preventDefault();
				}
			}
		}
		d && !c.defaultPrevented && d(c);
	};
	db = function (a, b, c) {
		var d, e = "", f, g, h;
		ea(c) || (d = arguments, c = {duration:d[2], easing:d[3], complete:d[4]});
		if (!C(c.duration)) {
			c.duration = 400;
		}
		c.easing = typeof c.easing === "function" ? c.easing : Math[c.easing] || Math.easeInOutSine;
		c.curAnim = z(b);
		for (h in b) {
			g = new xb(a, c, h), f = null, h === "d" ? (g.paths = g.initPath(a, a.d, b.d), g.toD = b.d, d = 0, f = 1) : a.attr ? d = a.attr(h) : (d = parseFloat(wa(a, h)) || 0, h !== "opacity" && (e = "px")), f || (f = b[h]), f.match && f.match("px") && (f = f.replace(/px/g, "")), g.run(d, f, e);
		}
	};
	if (L.jQuery) {
		L.jQuery.fn.highcharts = function () {
			var a = [].slice.call(arguments);
			if (this[0]) {
				return a[0] ? (new (B[Ca(a[0]) ? a.shift() : "Chart"])(this[0], a[0], a[1]), this) : $[X(this[0], "data-highcharts-chart")];
			}
		};
	}
	H && !H.defaultView && (wa = function (a, b) {
		var c;
		c = {width:"clientWidth", height:"clientHeight"}[b];
		if (a.style[b]) {
			return K(a.style[b]);
		}
		b === "opacity" && (b = "filter");
		if (c) {
			return a.style.zoom = 1, Math.max(a[c] - 2 * wa(a, "padding"), 0);
		}
		c = a.currentStyle[b.replace(/\-(\w)/g, function (a, b) {
			return b.toUpperCase();
		})];
		b === "filter" && (c = c.replace(/alpha\(opacity=([0-9]+)\)/, function (a, b) {
			return b / 100;
		}));
		return c === "" ? 1 : K(c);
	});
	Array.prototype.forEach || (o = function (a, b) {
		for (var c = 0, d = a.length; c < d; c++) {
			if (b.call(a[c], a[c], c, a) === !1) {
				return c;
			}
		}
	});
	Array.prototype.indexOf || (sa = function (a, b) {
		var c, d = 0;
		if (b) {
			for (c = b.length; d < c; d++) {
				if (b[d] === a) {
					return d;
				}
			}
		}
		return -1;
	});
	Array.prototype.filter || (Fa = function (a, b) {
		for (var c = [], d = 0, e = a.length; d < e; d++) {
			b(a[d], d) && c.push(a[d]);
		}
		return c;
	});
	B.Fx = xb;
	B.inArray = sa;
	B.each = o;
	B.grep = Fa;
	B.offset = Jb;
	B.map = ta;
	B.addEvent = E;
	B.removeEvent = T;
	B.fireEvent = O;
	B.animate = db;
	B.animObject = gb;
	B.stop = Sa;
	R = {colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","), symbols:["circle", "diamond", "square", "triangle", "triangle-down"], lang:{loading:"Loading...", months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), shortMonths:"一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(","), weekdays:"星期天,星期一,星期二,星期三,星期四,星期五,星期六".split(","), decimalPoint:".", numericSymbols:"k,M,G,T,P,E".split(","), resetZoom:"Reset zoom", resetZoomTitle:"Reset zoom level 1:1", thousandsSep:" "}, global:{useUTC:!0, canvasToolsURL:"http://code.highcharts.com/modules/canvas-tools.js", VMLRadialGradientURL:"http://code.highcharts.com/stock/4.2.5/gfx/vml-radial-gradient.png"}, chart:{borderColor:"#4572A7", borderRadius:0, defaultSeriesType:"line", ignoreHiddenSeries:!0, spacing:[10, 10, 15, 10], backgroundColor:"#FFFFFF", plotBorderColor:"#C0C0C0", resetZoomButton:{theme:{zIndex:20}, position:{align:"right", x:-10, y:10}}}, title:{text:"Chart title", align:"center", margin:15, style:{color:"#333333", fontSize:"18px"}, widthAdjust:-44}, subtitle:{text:"", align:"center", style:{color:"#555555"}, widthAdjust:-44}, plotOptions:{line:{allowPointSelect:!1, showCheckbox:!1, animation:{duration:1000}, events:{}, lineWidth:2, marker:{lineWidth:0, radius:4, lineColor:"#FFFFFF", states:{hover:{enabled:!0, lineWidthPlus:1, radiusPlus:2}, select:{fillColor:"#FFFFFF", lineColor:"#000000", lineWidth:2}}}, point:{events:{}}, dataLabels:{align:"center", formatter:function () {
		return this.y === null ? "" : B.numberFormat(this.y, -1);
	}, style:{color:"contrast", fontSize:"11px", fontWeight:"bold", textShadow:"0 0 6px contrast, 0 0 3px contrast"}, verticalAlign:"bottom", x:0, y:0, padding:5}, cropThreshold:300, pointRange:0, softThreshold:!0, states:{hover:{lineWidthPlus:1, marker:{}, halo:{size:10, opacity:0.25}}, select:{marker:{}}}, stickyTracking:!0, turboThreshold:1000}}, labels:{style:{position:"absolute", color:"#3E576F"}}, legend:{enabled:!0, align:"center", layout:"horizontal", labelFormatter:function () {
		return this.name;
	}, borderColor:"#909090", borderRadius:0, navigation:{activeColor:"#274b6d", inactiveColor:"#CCC"}, shadow:!1, itemStyle:{color:"#333333", fontSize:"12px", fontWeight:"bold"}, itemHoverStyle:{color:"#000"}, itemHiddenStyle:{color:"#CCC"}, itemCheckboxStyle:{position:"absolute", width:"13px", height:"13px"}, symbolPadding:5, verticalAlign:"bottom", x:0, y:0, title:{style:{fontWeight:"bold"}}}, loading:{labelStyle:{fontWeight:"bold", position:"relative", top:"45%"}, style:{position:"absolute", backgroundColor:"white", opacity:0.5, textAlign:"center"}}, tooltip:{enabled:!0, animation:ja, backgroundColor:"rgba(249, 249, 249, .85)", borderWidth:1, borderRadius:3, dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M", second:"%A, %b %e, %H:%M", minute:"%A, %b %e, %H:%M", hour:"%A, %b %e, %H:%M", day:"%A, %b %e, %Y", week:"Week from %A, %b %e, %Y", month:"%B %Y", year:"%Y"}, footerFormat:"", headerFormat:"<span style=\"font-size: 10px\">{point.key}</span><br/>", pointFormat:"<span style=\"color:{point.color}\">\u25cf</span> {series.name}: <b>{point.y}</b><br/>", shadow:!0, snap:jb ? 25 : 10, style:{color:"#333333", cursor:"default", fontSize:"12px", padding:"8px", pointerEvents:"none", whiteSpace:"nowrap"}}, credits:{enabled:!0, text:"Highcharts.com", href:"http://www.highcharts.com", position:{align:"right", x:-10, verticalAlign:"bottom", y:-5}, style:{cursor:"pointer", color:"#909090", fontSize:"9px"}}};
	var W = R.plotOptions, da = W.line;
	Ob();
	va.prototype = {parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse:function (a) {
		return [K(a[1]), K(a[2]), K(a[3]), parseFloat(a[4], 10)];
	}}, {regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, parse:function (a) {
		return [K(a[1], 16), K(a[2], 16), K(a[3], 16), 1];
	}}, {regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse:function (a) {
		return [K(a[1]), K(a[2]), K(a[3]), 1];
	}}], init:function (a) {
		var b, c, d, e;
		if ((this.input = a) && a.stops) {
			this.stops = ta(a.stops, function (a) {
				return new va(a[1]);
			});
		} else {
			for (d = this.parsers.length; d-- && !c; ) {
				e = this.parsers[d], (b = e.regex.exec(a)) && (c = e.parse(b));
			}
		}
		this.rgba = c || [];
	}, get:function (a) {
		var b = this.input, c = this.rgba, d;
		this.stops ? (d = z(b), d.stops = [].concat(d.stops), o(this.stops, function (b, c) {
			d.stops[c] = [d.stops[c][0], b.get(a)];
		})) : d = c && C(c[0]) ? a === "rgb" || !a && c[3] === 1 ? "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")" : a === "a" ? c[3] : "rgba(" + c.join(",") + ")" : b;
		return d;
	}, brighten:function (a) {
		var b, c = this.rgba;
		if (this.stops) {
			o(this.stops, function (b) {
				b.brighten(a);
			});
		} else {
			if (C(a) && a !== 0) {
				for (b = 0; b < 3; b++) {
					c[b] += K(a * 255), c[b] < 0 && (c[b] = 0), c[b] > 255 && (c[b] = 255);
				}
			}
		}
		return this;
	}, setOpacity:function (a) {
		this.rgba[3] = a;
		return this;
	}};
	Z.prototype = {opacity:1, textProps:"direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","), init:function (a, b) {
		this.element = b === "span" ? fa(b) : H.createElementNS(Qa, b);
		this.renderer = a;
	}, animate:function (a, b, c) {
		b = q(b, this.renderer.globalAnimation, !0);
		Sa(this);
		if (b) {
			if (c) {
				b.complete = c;
			}
			db(this, a, b);
		} else {
			this.attr(a, null, c);
		}
		return this;
	}, colorGradient:function (a, b, c) {
		var d = this.renderer, e, f, g, h, i, j, k, l, m, n, p, r = [], s;
		a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
		if (f) {
			g = a[f];
			i = d.gradients;
			k = a.stops;
			n = c.radialReference;
			Ja(g) && (a[f] = g = {x1:g[0], y1:g[1], x2:g[2], y2:g[3], gradientUnits:"userSpaceOnUse"});
			f === "radialGradient" && n && !v(g.gradientUnits) && (h = g, g = z(g, d.getRadialAttr(n, h), {gradientUnits:"userSpaceOnUse"}));
			for (p in g) {
				p !== "id" && r.push(p, g[p]);
			}
			for (p in k) {
				r.push(k[p]);
			}
			r = r.join(",");
			i[r] ? n = i[r].attr("id") : (g.id = n = "highcharts-" + Ib++, i[r] = j = d.createElement(f).attr(g).add(d.defs), j.radAttr = h, j.stops = [], o(k, function (a) {
				a[1].indexOf("rgba") === 0 ? (e = va(a[1]), l = e.get("rgb"), m = e.get("a")) : (l = a[1], m = 1);
				a = d.createElement("stop").attr({offset:a[0], "stop-color":l, "stop-opacity":m}).add(j);
				j.stops.push(a);
			}));
			s = "url(" + d.url + "#" + n + ")";
			c.setAttribute(b, s);
			c.gradient = r;
			a.toString = function () {
				return s;
			};
		}
	}, applyTextShadow:function (a) {
		var b = this.element, c, d = a.indexOf("contrast") !== -1, e = {}, f = this.renderer.forExport, g = f || b.style.textShadow !== t && !Ka;
		if (d) {
			e.textShadow = a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill));
		}
		if (sb || f) {
			e.textRendering = "geometricPrecision";
		}
		g ? this.css(e) : (this.fakeTS = !0, this.ySetter = this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")), o(a.split(/\s?,\s?/g), function (a) {
			var d = b.firstChild, e, f, a = a.split(" ");
			e = a[a.length - 1];
			(f = a[a.length - 2]) && o(c, function (a, c) {
				var g;
				c === 0 && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), c === null && b.setAttribute("y", 0));
				g = a.cloneNode(1);
				X(g, {"class":"highcharts-text-shadow", fill:e, stroke:e, "stroke-opacity":1 / w(K(f), 3), "stroke-width":f, "stroke-linejoin":"round"});
				b.insertBefore(g, d);
			});
		}));
	}, attr:function (a, b, c) {
		var d, e = this.element, f, g = this, h;
		typeof a === "string" && b !== t && (d = a, a = {}, a[d] = b);
		if (typeof a === "string") {
			g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);
		} else {
			for (d in a) {
				b = a[d];
				h = !1;
				this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d) && (f || (this.symbolAttr(a), f = !0), h = !0);
				if (this.rotation && (d === "x" || d === "y")) {
					this.doTransform = !0;
				}
				h || (h = this[d + "Setter"] || this._defaultSetter, h.call(this, b, d, e), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b, h));
			}
			if (this.doTransform) {
				this.updateTransform(), this.doTransform = !1;
			}
		}
		c && c();
		return g;
	}, updateShadows:function (a, b, c) {
		for (var d = this.shadows, e = d.length; e--; ) {
			c.call(d[e], a === "height" ? Math.max(b - (d[e].cutHeight || 0), 0) : a === "d" ? this.d : b, a, d[e]);
		}
	}, addClass:function (a) {
		var b = this.element, c = X(b, "class") || "";
		c.indexOf(a) === -1 && X(b, "class", c + " " + a);
		return this;
	}, symbolAttr:function (a) {
		var b = this;
		o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function (c) {
			b[c] = q(a[c], b[c]);
		});
		b.attr({d:b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)});
	}, clip:function (a) {
		return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
	}, crisp:function (a) {
		var b, c = {}, d, e = this.strokeWidth || 0;
		d = y(e) % 2 / 2;
		a.x = V(a.x || this.x || 0) + d;
		a.y = V(a.y || this.y || 0) + d;
		a.width = V((a.width || this.width || 0) - 2 * d);
		a.height = V((a.height || this.height || 0) - 2 * d);
		a.strokeWidth = e;
		for (b in a) {
			this[b] !== a[b] && (this[b] = c[b] = a[b]);
		}
		return c;
	}, css:function (a) {
		var b = this.styles, c = {}, d = this.element, e, f, g = "";
		e = !b;
		if (a && a.color) {
			a.fill = a.color;
		}
		if (b) {
			for (f in a) {
				a[f] !== b[f] && (c[f] = a[f], e = !0);
			}
		}
		if (e) {
			e = this.textWidth = a && a.width && d.nodeName.toLowerCase() === "text" && K(a.width) || this.textWidth;
			b && (a = A(b, c));
			this.styles = a;
			e && (qa || !ja && this.renderer.forExport) && delete a.width;
			if (Ka && !ja) {
				N(this.element, a);
			} else {
				b = function (a, b) {
					return "-" + b.toLowerCase();
				};
				for (f in a) {
					g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
				}
				X(d, "style", g);
			}
			e && this.added && this.renderer.buildText(this);
		}
		return this;
	}, on:function (a, b) {
		var c = this, d = c.element;
		cb && a === "click" ? (d.ontouchstart = function (a) {
			c.touchEventFired = ba.now();
			a.preventDefault();
			b.call(d, a);
		}, d.onclick = function (a) {
			(Na.indexOf("Android") === -1 || ba.now() - (c.touchEventFired || 0) > 1100) && b.call(d, a);
		}) : d["on" + a] = b;
		return this;
	}, setRadialReference:function (a) {
		var b = this.renderer.gradients[this.element.gradient];
		this.element.radialReference = a;
		b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
		return this;
	}, translate:function (a, b) {
		return this.attr({translateX:a, translateY:b});
	}, invert:function () {
		this.inverted = !0;
		this.updateTransform();
		return this;
	}, updateTransform:function () {
		var a = this.translateX || 0, b = this.translateY || 0, c = this.scaleX, d = this.scaleY, e = this.inverted, f = this.rotation, g = this.element;
		e && (a += this.attr("width"), b += this.attr("height"));
		a = ["translate(" + a + "," + b + ")"];
		e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
		(v(c) || v(d)) && a.push("scale(" + q(c, 1) + " " + q(d, 1) + ")");
		a.length && g.setAttribute("transform", a.join(" "));
	}, toFront:function () {
		var a = this.element;
		a.parentNode.appendChild(a);
		return this;
	}, align:function (a, b, c) {
		var d, e, f, g, h = {};
		e = this.renderer;
		f = e.alignedObjects;
		if (a) {
			if (this.alignOptions = a, this.alignByTranslate = b, !c || Ca(c)) {
				this.alignTo = d = c || "renderer", za(f, this), f.push(this), c = null;
			}
		} else {
			a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
		}
		c = q(c, e[d], e);
		d = a.align;
		e = a.verticalAlign;
		f = (c.x || 0) + (a.x || 0);
		g = (c.y || 0) + (a.y || 0);
		if (d === "right" || d === "center") {
			f += (c.width - (a.width || 0)) / {right:1, center:2}[d];
		}
		h[b ? "translateX" : "x"] = y(f);
		if (e === "bottom" || e === "middle") {
			g += (c.height - (a.height || 0)) / ({bottom:1, middle:2}[e] || 1);
		}
		h[b ? "translateY" : "y"] = y(g);
		this[this.placed ? "animate" : "attr"](h);
		this.placed = !0;
		this.alignAttr = h;
		return this;
	}, getBBox:function (a, b) {
		var c, d = this.renderer, e, f, g, h = this.element, i = this.styles;
		e = this.textStr;
		var j, k = h.style, l, m = d.cache, n = d.cacheKeys, p;
		f = q(b, this.rotation);
		g = f * pa;
		e !== t && (p = ["", f || 0, i && i.fontSize, h.style.width].join(","), p = e === "" || $b.test(e) ? "num:" + e.toString().length + p : e + p);
		p && !a && (c = m[p]);
		if (!c) {
			if (h.namespaceURI === Qa || d.forExport) {
				try {
					l = this.fakeTS && function (a) {
						o(h.querySelectorAll(".highcharts-text-shadow"), function (b) {
							b.style.display = a;
						});
					}, Wa && k.textShadow ? (j = k.textShadow, k.textShadow = "") : l && l("none"), c = h.getBBox ? A({}, h.getBBox()) : {width:h.offsetWidth, height:h.offsetHeight}, j ? k.textShadow = j : l && l("");
				}
				catch (r) {
				}
				if (!c || c.width < 0) {
					c = {width:0, height:0};
				}
			} else {
				c = this.htmlGetBBox();
			}
			if (d.isSVG) {
				d = c.width;
				e = c.height;
				if (Ka && i && i.fontSize === "11px" && e.toPrecision(3) === "16.9") {
					c.height = e = 14;
				}
				if (f) {
					c.width = S(e * la(g)) + S(d * ca(g)), c.height = S(e * ca(g)) + S(d * la(g));
				}
			}
			if (p) {
				for (; n.length > 250; ) {
					delete m[n.shift()];
				}
				m[p] || n.push(p);
				m[p] = c;
			}
		}
		return c;
	}, show:function (a) {
		return this.attr({visibility:a ? "inherit" : "visible"});
	}, hide:function () {
		return this.attr({visibility:"hidden"});
	}, fadeOut:function (a) {
		var b = this;
		b.animate({opacity:0}, {duration:a || 150, complete:function () {
			b.attr({y:-9999});
		}});
	}, add:function (a) {
		var b = this.renderer, c = this.element, d;
		if (a) {
			this.parentGroup = a;
		}
		this.parentInverted = a && a.inverted;
		this.textStr !== void 0 && b.buildText(this);
		this.added = !0;
		if (!a || a.handleZ || this.zIndex) {
			d = this.zIndexSetter();
		}
		d || (a ? a.element : b.box).appendChild(c);
		if (this.onAdd) {
			this.onAdd();
		}
		return this;
	}, safeRemoveChild:function (a) {
		var b = a.parentNode;
		b && b.removeChild(a);
	}, destroy:function () {
		var a = this, b = a.element || {}, c = a.shadows, d = a.renderer.isSVG && b.nodeName === "SPAN" && a.parentGroup, e, f;
		b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
		Sa(a);
		if (a.clipPath) {
			a.clipPath = a.clipPath.destroy();
		}
		if (a.stops) {
			for (f = 0; f < a.stops.length; f++) {
				a.stops[f] = a.stops[f].destroy();
			}
			a.stops = null;
		}
		a.safeRemoveChild(b);
		for (c && o(c, function (b) {
			a.safeRemoveChild(b);
		}); d && d.div && d.div.childNodes.length === 0; ) {
			b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
		}
		a.alignTo && za(a.renderer.alignedObjects, a);
		for (e in a) {
			delete a[e];
		}
		return null;
	}, shadow:function (a, b, c) {
		var d = [], e, f, g = this.element, h, i, j, k;
		if (a) {
			i = q(a.width, 3);
			j = (a.opacity || 0.15) / i;
			k = this.parentInverted ? "(-1,-1)" : "(" + q(a.offsetX, 1) + ", " + q(a.offsetY, 1) + ")";
			for (e = 1; e <= i; e++) {
				f = g.cloneNode(0);
				h = i * 2 + 1 - 2 * e;
				X(f, {isShadow:"true", stroke:a.color || "black", "stroke-opacity":j * e, "stroke-width":h, transform:"translate" + k, fill:"none"});
				if (c) {
					X(f, "height", w(X(f, "height") - h, 0)), f.cutHeight = h;
				}
				b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g);
				d.push(f);
			}
			this.shadows = d;
		}
		return this;
	}, xGetter:function (a) {
		this.element.nodeName === "circle" && (a = {x:"cx", y:"cy"}[a] || a);
		return this._defaultGetter(a);
	}, _defaultGetter:function (a) {
		a = q(this[a], this.element ? this.element.getAttribute(a) : null, 0);
		/^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
		return a;
	}, dSetter:function (a, b, c) {
		a && a.join && (a = a.join(" "));
		/(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
		c.setAttribute(b, a);
		this[b] = a;
	}, dashstyleSetter:function (a) {
		var b, c = this["stroke-width"];
		c === "inherit" && (c = 1);
		if (a = a && a.toLowerCase()) {
			a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
			for (b = a.length; b--; ) {
				a[b] = K(a[b]) * c;
			}
			a = a.join(",").replace(/NaN/g, "none");
			this.element.setAttribute("stroke-dasharray", a);
		}
	}, alignSetter:function (a) {
		this.element.setAttribute("text-anchor", {left:"start", center:"middle", right:"end"}[a]);
	}, opacitySetter:function (a, b, c) {
		this[b] = a;
		c.setAttribute(b, a);
	}, titleSetter:function (a) {
		var b = this.element.getElementsByTagName("title")[0];
		b || (b = H.createElementNS(Qa, "title"), this.element.appendChild(b));
		b.firstChild && b.removeChild(b.firstChild);
		b.appendChild(H.createTextNode(String(q(a), "").replace(/<[^>]*>/g, "")));
	}, textSetter:function (a) {
		if (a !== this.textStr) {
			delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this);
		}
	}, fillSetter:function (a, b, c) {
		typeof a === "string" ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c);
	}, visibilitySetter:function (a, b, c) {
		a === "inherit" ? c.removeAttribute(b) : c.setAttribute(b, a);
	}, zIndexSetter:function (a, b) {
		var c = this.renderer, d = this.parentGroup, c = (d || c).element || c.box, e, f, g = this.element, h;
		e = this.added;
		var i;
		if (v(a)) {
			g.zIndex = a, a = +a, this[b] === a && (e = !1), this[b] = a;
		}
		if (e) {
			if ((a = this.zIndex) && d) {
				d.handleZ = !0;
			}
			d = c.childNodes;
			for (i = 0; i < d.length && !h; i++) {
				if (e = d[i], f = e.zIndex, e !== g && (K(f) > a || !v(a) && v(f))) {
					c.insertBefore(g, e), h = !0;
				}
			}
			h || c.appendChild(g);
		}
		return h;
	}, _defaultSetter:function (a, b, c) {
		c.setAttribute(b, a);
	}};
	Z.prototype.yGetter = Z.prototype.xGetter;
	Z.prototype.translateXSetter = Z.prototype.translateYSetter = Z.prototype.rotationSetter = Z.prototype.verticalAlignSetter = Z.prototype.scaleXSetter = Z.prototype.scaleYSetter = function (a, b) {
		this[b] = a;
		this.doTransform = !0;
	};
	Z.prototype["stroke-widthSetter"] = Z.prototype.strokeSetter = function (a, b, c) {
		this[b] = a;
		if (this.stroke && this["stroke-width"]) {
			this.strokeWidth = this["stroke-width"], Z.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0;
		} else {
			if (b === "stroke-width" && a === 0 && this.hasStroke) {
				c.removeAttribute("stroke"), this.hasStroke = !1;
			}
		}
	};
	var xa = function () {
		this.init.apply(this, arguments);
	};
	xa.prototype = {Element:Z, init:function (a, b, c, d, e, f) {
		var g, d = this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));
		g = d.element;
		a.appendChild(g);
		a.innerHTML.indexOf("xmlns") === -1 && X(g, "xmlns", Qa);
		this.isSVG = !0;
		this.box = g;
		this.boxWrapper = d;
		this.alignedObjects = [];
		this.url = (Wa || sb) && H.getElementsByTagName("base").length ? L.location.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
		this.createElement("desc").add().element.appendChild(H.createTextNode("Created with Highstock 4.2.5"));
		this.defs = this.createElement("defs").add();
		this.allowHTML = f;
		this.forExport = e;
		this.gradients = {};
		this.cache = {};
		this.cacheKeys = [];
		this.imgCount = 0;
		this.setSize(b, c, !1);
		var h;
		if (Wa && a.getBoundingClientRect) {
			this.subPixelFix = b = function () {
				N(a, {left:0, top:0});
				h = a.getBoundingClientRect();
				N(a, {left:Ea(h.left) - h.left + "px", top:Ea(h.top) - h.top + "px"});
			}, b(), E(L, "resize", b);
		}
	}, getStyle:function (a) {
		return this.style = A({fontFamily:"\"Lucida Grande\", \"Lucida Sans Unicode\", Arial, Helvetica, sans-serif", fontSize:"12px"}, a);
	}, isHidden:function () {
		return !this.boxWrapper.getBBox().width;
	}, destroy:function () {
		var a = this.defs;
		this.box = null;
		this.boxWrapper = this.boxWrapper.destroy();
		Pa(this.gradients || {});
		this.gradients = null;
		if (a) {
			this.defs = a.destroy();
		}
		this.subPixelFix && T(L, "resize", this.subPixelFix);
		return this.alignedObjects = null;
	}, createElement:function (a) {
		var b = new this.Element;
		b.init(this, a);
		return b;
	}, draw:function () {
	}, getRadialAttr:function (a, b) {
		return {cx:a[0] - a[2] / 2 + b.cx * a[2], cy:a[1] - a[2] / 2 + b.cy * a[2], r:b.r * a[2]};
	}, buildText:function (a) {
		for (var b = a.element, c = this, d = c.forExport, e = q(a.textStr, "").toString(), f = e.indexOf("<") !== -1, g = b.childNodes, h, i, j, k = X(b, "x"), l = a.styles, m = a.textWidth, n = l && l.lineHeight, p = l && l.textShadow, r = l && l.textOverflow === "ellipsis", s = g.length, F = m && !a.added && this.box, u = function (a) {
			return n ? K(n) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : l && l.fontSize || c.style.fontSize || 12, a).h;
		}, x = function (a) {
			return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
		}; s--; ) {
			b.removeChild(g[s]);
		}
		!f && !p && !r && e.indexOf(" ") === -1 ? b.appendChild(H.createTextNode(x(e))) : (h = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, F && F.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, "<span style=\"font-weight:bold\">").replace(/<(i|em)>/g, "<span style=\"font-style:italic\">").replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], e = Fa(e, function (a) {
			return a !== "";
		}), o(e, function (e, f) {
			var g, n = 0, e = e.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
			g = e.split("|||");
			o(g, function (e) {
				if (e !== "" || g.length === 1) {
					var p = {}, s = H.createElementNS(Qa, "tspan"), F;
					h.test(e) && (F = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), X(s, "style", F));
					i.test(e) && !d && (X(s, "onclick", "location.href=\"" + e.match(i)[1] + "\""), N(s, {cursor:"pointer"}));
					e = x(e.replace(/<(.|\n)*?>/g, "") || " ");
					if (e !== " ") {
						s.appendChild(H.createTextNode(e));
						if (n) {
							p.dx = 0;
						} else {
							if (f && k !== null) {
								p.x = k;
							}
						}
						X(s, p);
						b.appendChild(s);
						!n && f && (!ja && d && N(s, {display:"block"}), X(s, "dy", u(s)));
						if (m) {
							for (var p = e.replace(/([^\^])-/g, "$1- ").split(" "), q = g.length > 1 || f || p.length > 1 && l.whiteSpace !== "nowrap", o, D, v = [], w = u(s), t = 1, y = a.rotation, A = e, B = A.length; (q || r) && (p.length || v.length); ) {
								a.rotation = 0, o = a.getBBox(!0), D = o.width, !ja && c.forExport && (D = c.measureSpanWidth(s.firstChild.data, a.styles)), o = D > m, j === void 0 && (j = o), r && j ? (B /= 2, A === "" || !o && B < 0.5 ? p = [] : (A = e.substring(0, A.length + (o ? -1 : 1) * Ea(B)), p = [A + (m > 3 ? "\u2026" : "")], s.removeChild(s.firstChild))) : !o || p.length === 1 ? (p = v, v = [], p.length && (t++, s = H.createElementNS(Qa, "tspan"), X(s, {dy:w, x:k}), F && X(s, "style", F), b.appendChild(s)), D > m && (m = D)) : (s.removeChild(s.firstChild), v.unshift(p.pop())), p.length && s.appendChild(H.createTextNode(p.join(" ").replace(/- /g, "-")));
							}
							a.rotation = y;
						}
						n++;
					}
				}
			});
		}), j && a.attr("title", a.textStr), F && F.removeChild(b), p && a.applyTextShadow && a.applyTextShadow(p));
	}, getContrast:function (a) {
		a = va(a).rgba;
		return a[0] + a[1] + a[2] > 384 ? "#000000" : "#FFFFFF";
	}, button:function (a, b, c, d, e, f, g, h, i) {
		var j = this.label(a, b, c, i, null, null, null, null, "button"), k = 0, l, m, n, p, r, s, a = {x1:0, y1:0, x2:0, y2:1}, e = z({"stroke-width":1, stroke:"#CCCCCC", fill:{linearGradient:a, stops:[[0, "#FEFEFE"], [1, "#F6F6F6"]]}, r:2, padding:5, style:{color:"black"}}, e);
		n = e.style;
		delete e.style;
		f = z(e, {stroke:"#68A", fill:{linearGradient:a, stops:[[0, "#FFF"], [1, "#ACF"]]}}, f);
		p = f.style;
		delete f.style;
		g = z(e, {stroke:"#68A", fill:{linearGradient:a, stops:[[0, "#9BD"], [1, "#CDF"]]}}, g);
		r = g.style;
		delete g.style;
		h = z(e, {style:{color:"#CCC"}}, h);
		s = h.style;
		delete h.style;
		E(j.element, Ka ? "mouseover" : "mouseenter", function () {
			k !== 3 && j.attr(f).css(p);
		});
		E(j.element, Ka ? "mouseout" : "mouseleave", function () {
			k !== 3 && (l = [e, f, g][k], m = [n, p, r][k], j.attr(l).css(m));
		});
		j.setState = function (a) {
			(j.state = k = a) ? a === 2 ? j.attr(g).css(r) : a === 3 && j.attr(h).css(s) : j.attr(e).css(n);
		};
		return j.on("click", function (a) {
			k !== 3 && d.call(j, a);
		}).attr(e).css(A({cursor:"default"}, n));
	}, crispLine:function (a, b) {
		a[1] === a[4] && (a[1] = a[4] = y(a[1]) - b % 2 / 2);
		a[2] === a[5] && (a[2] = a[5] = y(a[2]) + b % 2 / 2);
		return a;
	}, path:function (a) {
		var b = {fill:"none"};
		Ja(a) ? b.d = a : ea(a) && A(b, a);
		return this.createElement("path").attr(b);
	}, circle:function (a, b, c) {
		a = ea(a) ? a : {x:a, y:b, r:c};
		b = this.createElement("circle");
		b.xSetter = b.ySetter = function (a, b, c) {
			c.setAttribute("c" + b, a);
		};
		return b.attr(a);
	}, arc:function (a, b, c, d, e, f) {
		if (ea(a)) {
			b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;
		}
		a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {innerR:d || 0, start:e || 0, end:f || 0});
		a.r = c;
		return a;
	}, rect:function (a, b, c, d, e, f) {
		var e = ea(a) ? a.r : e, g = this.createElement("rect"), a = ea(a) ? a : a === t ? {} : {x:a, y:b, width:w(c, 0), height:w(d, 0)};
		if (f !== t) {
			g.strokeWidth = f, a = g.crisp(a);
		}
		if (e) {
			a.r = e;
		}
		g.rSetter = function (a, b, c) {
			X(c, {rx:a, ry:a});
		};
		return g.attr(a);
	}, setSize:function (a, b, c) {
		var d = this.alignedObjects, e = d.length;
		this.width = a;
		this.height = b;
		for (this.boxWrapper[q(c, !0) ? "animate" : "attr"]({width:a, height:b}); e--; ) {
			d[e].align();
		}
	}, g:function (a) {
		var b = this.createElement("g");
		return v(a) ? b.attr({"class":"highcharts-" + a}) : b;
	}, image:function (a, b, c, d, e) {
		var f = {preserveAspectRatio:"none"};
		arguments.length > 1 && A(f, {x:b, y:c, width:d, height:e});
		f = this.createElement("image").attr(f);
		f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
		return f;
	}, symbol:function (a, b, c, d, e, f) {
		var g = this, h, i = this.symbols[a], i = i && i(y(b), y(c), d, e, f), j = /^url\((.*?)\)$/, k, l;
		if (i) {
			h = this.path(i), A(h, {symbolName:a, x:b, y:c, width:d, height:e}), f && A(h, f);
		} else {
			if (j.test(a)) {
				l = function (a, b) {
					a.element && (a.attr({width:b[0], height:b[1]}), a.alignByTranslate || a.translate(y((d - b[0]) / 2), y((e - b[1]) / 2)));
				}, k = a.match(j)[1], a = Vb[k] || f && f.width && f.height && [f.width, f.height], h = this.image(k).attr({x:b, y:c}), h.isImg = !0, a ? l(h, a) : (h.attr({width:0, height:0}), fa("img", {onload:function () {
					this.width === 0 && (N(this, {position:"absolute", top:"-999em"}), H.body.appendChild(this));
					l(h, Vb[k] = [this.width, this.height]);
					this.parentNode && this.parentNode.removeChild(this);
					g.imgCount--;
					if (!g.imgCount && $[g.chartIndex].onload) {
						$[g.chartIndex].onload();
					}
				}, src:k}), this.imgCount++);
			}
		}
		return h;
	}, symbols:{circle:function (a, b, c, d) {
		var e = 0.166 * c;
		return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"];
	}, square:function (a, b, c, d) {
		return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"];
	}, triangle:function (a, b, c, d) {
		return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"];
	}, "triangle-down":function (a, b, c, d) {
		return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"];
	}, diamond:function (a, b, c, d) {
		return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"];
	}, arc:function (a, b, c, d, e) {
		var f = e.start, c = e.r || c || d, g = e.end - 0.001, d = e.innerR, h = e.open, i = ca(f), j = la(f), k = ca(g), g = la(g), e = e.end - f < Aa ? 0 : 1;
		return ["M", a + c * i, b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * j, h ? "" : "Z"];
	}, callout:function (a, b, c, d, e) {
		var f = G(e && e.r || 0, c, d), g = f + 6, h = e && e.anchorX, e = e && e.anchorY, i;
		i = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b];
		h && h > c && e > b + g && e < b + d - g ? i.splice(13, 3, "L", a + c, e - 6, a + c + 6, e, a + c, e + 6, a + c, b + d - f) : h && h < 0 && e > b + g && e < b + d - g ? i.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + f) : e && e > d && h > a + g && h < a + c - g ? i.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : e && e < 0 && h > a + g && h < a + c - g && i.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
		return i;
	}}, clipRect:function (a, b, c, d) {
		var e = "highcharts-" + Ib++, f = this.createElement("clipPath").attr({id:e}).add(this.defs), a = this.rect(a, b, c, d, 0).add(f);
		a.id = e;
		a.clipPath = f;
		a.count = 0;
		return a;
	}, text:function (a, b, c, d) {
		var e = qa || !ja && this.forExport, f = {};
		if (d && (this.allowHTML || !this.forExport)) {
			return this.html(a, b, c);
		}
		f.x = Math.round(b || 0);
		if (c) {
			f.y = Math.round(c);
		}
		if (a || a === 0) {
			f.text = a;
		}
		a = this.createElement("text").attr(f);
		e && a.css({position:"absolute"});
		if (!d) {
			a.xSetter = function (a, b, c) {
				var d = c.getElementsByTagName("tspan"), e, f = c.getAttribute(b), m;
				for (m = 0; m < d.length; m++) {
					e = d[m], e.getAttribute(b) === f && e.setAttribute(b, a);
				}
				c.setAttribute(b, a);
			};
		}
		return a;
	}, fontMetrics:function (a, b) {
		var c, d, a = a || this.style.fontSize;
		!a && b && L.getComputedStyle && (b = b.element || b, a = (c = L.getComputedStyle(b, "")) && c.fontSize);
		a = /px/.test(a) ? K(a) : /em/.test(a) ? parseFloat(a) * 12 : 12;
		c = a < 24 ? a + 3 : y(a * 1.2);
		d = y(c * 0.8);
		return {h:c, b:d, f:a};
	}, rotCorr:function (a, b, c) {
		var d = a;
		b && c && (d = w(d * ca(b * pa), 4));
		return {x:-a / 3 * la(b * pa), y:d};
	}, label:function (a, b, c, d, e, f, g, h, i) {
		var j = this, k = j.g(i), l = j.text("", 0, 0, g).attr({zIndex:1}), m, n, p = 0, r = 3, s = 0, F, u, q, D, Q = 0, ha = {}, w, B, Kb, G, C;
		Kb = function () {
			var a, b;
			a = l.element.style;
			n = (F === void 0 || u === void 0 || k.styles.textAlign) && v(l.textStr) && l.getBBox();
			k.width = (F || n.width || 0) + 2 * r + s;
			k.height = (u || n.height || 0) + 2 * r;
			w = r + j.fontMetrics(a && a.fontSize, l).b;
			if (B) {
				if (!m) {
					a = Q, b = (h ? -w : 0) + Q, k.box = m = d ? j.symbol(d, a, b, k.width, k.height, ha) : j.rect(a, b, k.width, k.height, 0, ha["stroke-width"]), m.isImg || m.attr("fill", "none"), m.add(k);
				}
				m.isImg || m.attr(A({width:y(k.width), height:y(k.height)}, ha));
				ha = null;
			}
		};
		G = function () {
			var a = k.styles, a = a && a.textAlign, b = s + r, c;
			c = h ? 0 : w;
			if (v(F) && n && (a === "center" || a === "right")) {
				b += {center:0.5, right:1}[a] * (F - n.width);
			}
			if (b !== l.x || c !== l.y) {
				l.attr("x", b), c !== t && l.attr("y", c);
			}
			l.x = b;
			l.y = c;
		};
		C = function (a, b) {
			m ? m.attr(a, b) : ha[a] = b;
		};
		k.onAdd = function () {
			l.add(k);
			k.attr({text:a || a === 0 ? a : "", x:b, y:c});
			m && v(e) && k.attr({anchorX:e, anchorY:f});
		};
		k.widthSetter = function (a) {
			F = a;
		};
		k.heightSetter = function (a) {
			u = a;
		};
		k.paddingSetter = function (a) {
			if (v(a) && a !== r) {
				r = k.padding = a, G();
			}
		};
		k.paddingLeftSetter = function (a) {
			v(a) && a !== s && (s = a, G());
		};
		k.alignSetter = function (a) {
			a = {left:0, center:0.5, right:1}[a];
			a !== p && (p = a, n && k.attr({x:q}));
		};
		k.textSetter = function (a) {
			a !== t && l.textSetter(a);
			Kb();
			G();
		};
		k["stroke-widthSetter"] = function (a, b) {
			a && (B = !0);
			Q = a % 2 / 2;
			C(b, a);
		};
		k.strokeSetter = k.fillSetter = k.rSetter = function (a, b) {
			b === "fill" && a && (B = !0);
			C(b, a);
		};
		k.anchorXSetter = function (a, b) {
			e = a;
			C(b, y(a) - Q - q);
		};
		k.anchorYSetter = function (a, b) {
			f = a;
			C(b, a - D);
		};
		k.xSetter = function (a) {
			k.x = a;
			p && (a -= p * ((F || n.width) + 2 * r));
			q = y(a);
			k.attr("translateX", q);
		};
		k.ySetter = function (a) {
			D = k.y = y(a);
			k.attr("translateY", D);
		};
		var H = k.css;
		return A(k, {css:function (a) {
			if (a) {
				var b = {}, a = z(a);
				o(k.textProps, function (c) {
					a[c] !== t && (b[c] = a[c], delete a[c]);
				});
				l.css(b);
			}
			return H.call(k, a);
		}, getBBox:function () {
			return {width:n.width + 2 * r, height:n.height + 2 * r, x:n.x - r, y:n.y - r};
		}, shadow:function (a) {
			m && m.shadow(a);
			return k;
		}, destroy:function () {
			T(k.element, "mouseenter");
			T(k.element, "mouseleave");
			l && (l = l.destroy());
			m && (m = m.destroy());
			Z.prototype.destroy.call(k);
			k = j = Kb = G = C = null;
		}});
	}};
	Xa = xa;
	A(Z.prototype, {htmlCss:function (a) {
		var b = this.element;
		if (b = a && b.tagName === "SPAN" && a.width) {
			delete a.width, this.textWidth = b, this.updateTransform();
		}
		if (a && a.textOverflow === "ellipsis") {
			a.whiteSpace = "nowrap", a.overflow = "hidden";
		}
		this.styles = A(this.styles, a);
		N(this.element, a);
		return this;
	}, htmlGetBBox:function () {
		var a = this.element;
		if (a.nodeName === "text") {
			a.style.position = "absolute";
		}
		return {x:a.offsetLeft, y:a.offsetTop, width:a.offsetWidth, height:a.offsetHeight};
	}, htmlUpdateTransform:function () {
		if (this.added) {
			var a = this.renderer, b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x || 0, f = this.y || 0, g = this.textAlign || "left", h = {left:0, center:0.5, right:1}[g], i = this.shadows, j = this.styles;
			N(b, {marginLeft:c, marginTop:d});
			i && o(i, function (a) {
				N(a, {marginLeft:c + 1, marginTop:d + 1});
			});
			this.inverted && o(b.childNodes, function (c) {
				a.invertChild(c, b);
			});
			if (b.tagName === "SPAN") {
				var i = this.rotation, k = K(this.textWidth), l = j && j.whiteSpace, m = [i, g, b.innerHTML, this.textWidth, this.textAlign].join(",");
				if (m !== this.cTT) {
					j = a.fontMetrics(b.style.fontSize).b;
					v(i) && this.setSpanRotation(i, h, j);
					if (b.offsetWidth > k && /[ \-]/.test(b.textContent || b.innerText)) {
						N(b, {width:k + "px", display:"block", whiteSpace:l || "normal"}), this.hasTextWidth = !0;
					} else {
						if (this.hasTextWidth) {
							N(b, {width:"", display:"", whiteSpace:l || "nowrap"}), this.hasTextWidth = !1;
						}
					}
					this.getSpanCorrection(this.hasTextWidth ? k : b.offsetWidth, j, h, i, g);
				}
				N(b, {left:e + (this.xCorr || 0) + "px", top:f + (this.yCorr || 0) + "px"});
				if (sb) {
					j = b.offsetHeight;
				}
				this.cTT = m;
			}
		} else {
			this.alignOnAdd = !0;
		}
	}, setSpanRotation:function (a, b, c) {
		var d = {}, e = Ka ? "-ms-transform" : sb ? "-webkit-transform" : Wa ? "MozTransform" : Ub ? "-o-transform" : "";
		d[e] = d.transform = "rotate(" + a + "deg)";
		d[e + (Wa ? "Origin" : "-origin")] = d.transformOrigin = b * 100 + "% " + c + "px";
		N(this.element, d);
	}, getSpanCorrection:function (a, b, c) {
		this.xCorr = -a * c;
		this.yCorr = -b;
	}});
	A(xa.prototype, {html:function (a, b, c) {
		var d = this.createElement("span"), e = d.element, f = d.renderer, g = f.isSVG, h = function (a, b) {
			o(["opacity", "visibility"], function (c) {
				U(a, c + "Setter", function (a, c, d, e) {
					a.call(this, c, d, e);
					b[d] = c;
				});
			});
		};
		d.textSetter = function (a) {
			a !== e.innerHTML && delete this.bBox;
			e.innerHTML = this.textStr = a;
			d.htmlUpdateTransform();
		};
		g && h(d, d.element.style);
		d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function (a, b) {
			b === "align" && (b = "textAlign");
			d[b] = a;
			d.htmlUpdateTransform();
		};
		d.attr({text:a, x:y(b), y:y(c)}).css({position:"absolute", fontFamily:this.style.fontFamily, fontSize:this.style.fontSize});
		e.style.whiteSpace = "nowrap";
		d.css = d.htmlCss;
		if (g) {
			d.add = function (a) {
				var b, c = f.box.parentNode, g = [];
				if (this.parentGroup = a) {
					if (b = a.div, !b) {
						for (; a; ) {
							g.push(a), a = a.parentGroup;
						}
						o(g.reverse(), function (a) {
							var d, e = X(a.element, "class");
							e && (e = {className:e});
							b = a.div = a.div || fa(Va, e, {position:"absolute", left:(a.translateX || 0) + "px", top:(a.translateY || 0) + "px", opacity:a.opacity}, b || c);
							d = b.style;
							A(a, {translateXSetter:function (b, c) {
								d.left = b + "px";
								a[c] = b;
								a.doTransform = !0;
							}, translateYSetter:function (b, c) {
								d.top = b + "px";
								a[c] = b;
								a.doTransform = !0;
							}});
							h(a, d);
						});
					}
				} else {
					b = c;
				}
				b.appendChild(e);
				d.added = !0;
				d.alignOnAdd && d.htmlUpdateTransform();
				return d;
			};
		}
		return d;
	}});
	var lb, aa;
	if (!ja && !qa) {
		aa = {init:function (a, b) {
			var c = ["<", b, " filled=\"f\" stroked=\"f\""], d = ["position: ", "absolute", ";"], e = b === Va;
			(b === "shape" || e) && d.push("left:0;top:0;width:1px;height:1px;");
			d.push("visibility: ", e ? "hidden" : "visible");
			c.push(" style=\"", d.join(""), "\"/>");
			if (b) {
				c = e || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = fa(c);
			}
			this.renderer = a;
		}, add:function (a) {
			var b = this.renderer, c = this.element, d = b.box, e = a && a.inverted, d = a ? a.element || a : d;
			if (a) {
				this.parentGroup = a;
			}
			e && b.invertChild(c, d);
			d.appendChild(c);
			this.added = !0;
			this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
			if (this.onAdd) {
				this.onAdd();
			}
			return this;
		}, updateTransform:Z.prototype.htmlUpdateTransform, setSpanRotation:function () {
			var a = this.rotation, b = ca(a * pa), c = la(a * pa);
			N(this.element, {filter:a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : "none"});
		}, getSpanCorrection:function (a, b, c, d, e) {
			var f = d ? ca(d * pa) : 1, g = d ? la(d * pa) : 0, h = q(this.elemHeight, this.element.offsetHeight), i;
			this.xCorr = f < 0 && -a;
			this.yCorr = g < 0 && -h;
			i = f * g < 0;
			this.xCorr += g * b * (i ? 1 - c : c);
			this.yCorr -= f * b * (d ? i ? c : 1 - c : 1);
			e && e !== "left" && (this.xCorr -= a * c * (f < 0 ? -1 : 1), d && (this.yCorr -= h * c * (g < 0 ? -1 : 1)), N(this.element, {textAlign:e}));
		}, pathToVML:function (a) {
			for (var b = a.length, c = []; b--; ) {
				if (C(a[b])) {
					c[b] = y(a[b] * 10) - 5;
				} else {
					if (a[b] === "Z") {
						c[b] = "x";
					} else {
						if (c[b] = a[b], a.isArc && (a[b] === "wa" || a[b] === "at")) {
							c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1);
						}
					}
				}
			}
			return c.join(" ") || "x";
		}, clip:function (a) {
			var b = this, c;
			a ? (c = a.members, za(c, b), c.push(b), b.destroyClip = function () {
				za(c, b);
			}, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {clip:rb ? "inherit" : "rect(auto)"});
			return b.css(a);
		}, css:Z.prototype.htmlCss, safeRemoveChild:function (a) {
			a.parentNode && Ua(a);
		}, destroy:function () {
			this.destroyClip && this.destroyClip();
			return Z.prototype.destroy.apply(this);
		}, on:function (a, b) {
			this.element["on" + a] = function () {
				var a = L.event;
				a.target = a.srcElement;
				b(a);
			};
			return this;
		}, cutOffPath:function (a, b) {
			var c, a = a.split(/[ ,]/);
			c = a.length;
			if (c === 9 || c === 11) {
				a[c - 4] = a[c - 2] = K(a[c - 2]) - 10 * b;
			}
			return a.join(" ");
		}, shadow:function (a, b, c) {
			var d = [], e, f = this.element, g = this.renderer, h, i = f.style, j, k = f.path, l, m, n, p;
			k && typeof k.value !== "string" && (k = "x");
			m = k;
			if (a) {
				n = q(a.width, 3);
				p = (a.opacity || 0.15) / n;
				for (e = 1; e <= 3; e++) {
					l = n * 2 + 1 - 2 * e;
					c && (m = this.cutOffPath(k.value, l + 0.5));
					j = ["<shape isShadow=\"true\" strokeweight=\"", l, "\" filled=\"false\" path=\"", m, "\" coordsize=\"10 10\" style=\"", f.style.cssText, "\" />"];
					h = fa(g.prepVML(j), null, {left:K(i.left) + q(a.offsetX, 1), top:K(i.top) + q(a.offsetY, 1)});
					if (c) {
						h.cutOff = l + 1;
					}
					j = ["<stroke color=\"", a.color || "black", "\" opacity=\"", p * e, "\"/>"];
					fa(g.prepVML(j), null, null, h);
					b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);
					d.push(h);
				}
				this.shadows = d;
			}
			return this;
		}, updateShadows:ra, setAttr:function (a, b) {
			rb ? this.element[a] = b : this.element.setAttribute(a, b);
		}, classSetter:function (a) {
			this.element.className = a;
		}, dashstyleSetter:function (a, b, c) {
			(c.getElementsByTagName("stroke")[0] || fa(this.renderer.prepVML(["<stroke/>"]), null, null, c))[b] = a || "solid";
			this[b] = a;
		}, dSetter:function (a, b, c) {
			var d = this.shadows, a = a || [];
			this.d = a.join && a.join(" ");
			c.path = a = this.pathToVML(a);
			if (d) {
				for (c = d.length; c--; ) {
					d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
				}
			}
			this.setAttr(b, a);
		}, fillSetter:function (a, b, c) {
			var d = c.nodeName;
			if (d === "SPAN") {
				c.style.color = a;
			} else {
				if (d !== "IMG") {
					c.filled = a !== "none", this.setAttr("fillcolor", this.renderer.color(a, c, b, this));
				}
			}
		}, "fill-opacitySetter":function (a, b, c) {
			fa(this.renderer.prepVML(["<", b.split("-")[0], " opacity=\"", a, "\"/>"]), null, null, c);
		}, opacitySetter:ra, rotationSetter:function (a, b, c) {
			c = c.style;
			this[b] = c[b] = a;
			c.left = -y(la(a * pa) + 1) + "px";
			c.top = y(ca(a * pa)) + "px";
		}, strokeSetter:function (a, b, c) {
			this.setAttr("strokecolor", this.renderer.color(a, c, b, this));
		}, "stroke-widthSetter":function (a, b, c) {
			c.stroked = !!a;
			this[b] = a;
			C(a) && (a += "px");
			this.setAttr("strokeweight", a);
		}, titleSetter:function (a, b) {
			this.setAttr(b, a);
		}, visibilitySetter:function (a, b, c) {
			a === "inherit" && (a = "visible");
			this.shadows && o(this.shadows, function (c) {
				c.style[b] = a;
			});
			c.nodeName === "DIV" && (a = a === "hidden" ? "-999em" : 0, rb || (c.style[b] = a ? "visible" : "hidden"), b = "top");
			c.style[b] = a;
		}, xSetter:function (a, b, c) {
			this[b] = a;
			b === "x" ? b = "left" : b === "y" && (b = "top");
			this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a;
		}, zIndexSetter:function (a, b, c) {
			c.style[b] = a;
		}}, aa["stroke-opacitySetter"] = aa["fill-opacitySetter"], B.VMLElement = aa = ma(Z, aa), aa.prototype.ySetter = aa.prototype.widthSetter = aa.prototype.heightSetter = aa.prototype.xSetter, aa = {Element:aa, isIE8:Na.indexOf("MSIE 8.0") > -1, init:function (a, b, c, d) {
			var e;
			this.alignedObjects = [];
			d = this.createElement(Va).css(A(this.getStyle(d), {position:"relative"}));
			e = d.element;
			a.appendChild(d.element);
			this.isVML = !0;
			this.box = e;
			this.boxWrapper = d;
			this.gradients = {};
			this.cache = {};
			this.cacheKeys = [];
			this.imgCount = 0;
			this.setSize(b, c, !1);
			if (!H.namespaces.hcv) {
				H.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
				try {
					H.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
				}
				catch (f) {
					H.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
				}
			}
		}, isHidden:function () {
			return !this.box.offsetWidth;
		}, clipRect:function (a, b, c, d) {
			var e = this.createElement(), f = ea(a);
			return A(e, {members:[], count:0, left:(f ? a.x : a) + 1, top:(f ? a.y : b) + 1, width:(f ? a.width : c) - 1, height:(f ? a.height : d) - 1, getCSS:function (a) {
				var b = a.element, c = b.nodeName, a = a.inverted, d = this.top - (c === "shape" ? b.offsetTop : 0), e = this.left, b = e + this.width, f = d + this.height, d = {clip:"rect(" + y(a ? e : d) + "px," + y(a ? f : b) + "px," + y(a ? b : f) + "px," + y(a ? d : e) + "px)"};
				!a && rb && c === "DIV" && A(d, {width:b + "px", height:f + "px"});
				return d;
			}, updateClipping:function () {
				o(e.members, function (a) {
					a.element && a.css(e.getCSS(a));
				});
			}});
		}, color:function (a, b, c, d) {
			var e = this, f, g = /^rgba/, h, i, j = "none";
			a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");
			if (i) {
				var k, l, m = a.linearGradient || a.radialGradient, n, p, r, s, q, u = "", a = a.stops, x, D = [], Q = function () {
					h = ["<fill colors=\"" + D.join(",") + "\" opacity=\"", r, "\" o:opacity2=\"", p, "\" type=\"", i, "\" ", u, "focus=\"100%\" method=\"any\" />"];
					fa(e.prepVML(h), null, null, b);
				};
				n = a[0];
				x = a[a.length - 1];
				n[0] > 0 && a.unshift([0, n[1]]);
				x[0] < 1 && a.push([1, x[1]]);
				o(a, function (a, b) {
					g.test(a[1]) ? (f = va(a[1]), k = f.get("rgb"), l = f.get("a")) : (k = a[1], l = 1);
					D.push(a[0] * 100 + "% " + k);
					b ? (r = l, s = k) : (p = l, q = k);
				});
				if (c === "fill") {
					if (i === "gradient") {
						c = m.x1 || m[0] || 0, a = m.y1 || m[1] || 0, n = m.x2 || m[2] || 0, m = m.y2 || m[3] || 0, u = "angle=\"" + (90 - Y.atan((m - a) / (n - c)) * 180 / Aa) + "\"", Q();
					} else {
						var j = m.r, ha = j * 2, v = j * 2, w = m.cx, t = m.cy, y = b.radialReference, A, j = function () {
							y && (A = d.getBBox(), w += (y[0] - A.x) / A.width - 0.5, t += (y[1] - A.y) / A.height - 0.5, ha *= y[2] / A.width, v *= y[2] / A.height);
							u = "src=\"" + R.global.VMLRadialGradientURL + "\" size=\"" + ha + "," + v + "\" origin=\"0.5,0.5\" position=\"" + w + "," + t + "\" color2=\"" + q + "\" ";
							Q();
						};
						d.added ? j() : d.onAdd = j;
						j = s;
					}
				} else {
					j = k;
				}
			} else {
				if (g.test(a) && b.tagName !== "IMG") {
					f = va(a), d[c + "-opacitySetter"](f.get("a"), c, b), j = f.get("rgb");
				} else {
					j = b.getElementsByTagName(c);
					if (j.length) {
						j[0].opacity = 1, j[0].type = "solid";
					}
					j = a;
				}
			}
			return j;
		}, prepVML:function (a) {
			var b = this.isIE8, a = a.join("");
			b ? (a = a.replace("/>", " xmlns=\"urn:schemas-microsoft-com:vml\" />"), a = a.indexOf("style=\"") === -1 ? a.replace("/>", " style=\"display:inline-block;behavior:url(#default#VML);\" />") : a.replace("style=\"", "style=\"display:inline-block;behavior:url(#default#VML);")) : a = a.replace("<", "<hcv:");
			return a;
		}, text:xa.prototype.html, path:function (a) {
			var b = {coordsize:"10 10"};
			Ja(a) ? b.d = a : ea(a) && A(b, a);
			return this.createElement("shape").attr(b);
		}, circle:function (a, b, c) {
			var d = this.symbol("circle");
			if (ea(a)) {
				c = a.r, b = a.y, a = a.x;
			}
			d.isCircle = !0;
			d.r = c;
			return d.attr({x:a, y:b});
		}, g:function (a) {
			var b;
			a && (b = {className:"highcharts-" + a, "class":"highcharts-" + a});
			return this.createElement(Va).attr(b);
		}, image:function (a, b, c, d, e) {
			var f = this.createElement("img").attr({src:a});
			arguments.length > 1 && f.attr({x:b, y:c, width:d, height:e});
			return f;
		}, createElement:function (a) {
			return a === "rect" ? this.symbol(a) : xa.prototype.createElement.call(this, a);
		}, invertChild:function (a, b) {
			var c = this, d = b.style, e = a.tagName === "IMG" && a.style;
			N(a, {flip:"x", left:K(d.width) - (e ? K(e.top) : 1), top:K(d.height) - (e ? K(e.left) : 1), rotation:-90});
			o(a.childNodes, function (b) {
				c.invertChild(b, a);
			});
		}, symbols:{arc:function (a, b, c, d, e) {
			var f = e.start, g = e.end, h = e.r || c || d, c = e.innerR, d = ca(f), i = la(f), j = ca(g), k = la(g);
			if (g - f === 0) {
				return ["x"];
			}
			f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * j, b + h * k];
			e.open && !c && f.push("e", "M", a, b);
			f.push("at", a - c, b - c, a + c, b + c, a + c * j, b + c * k, a + c * d, b + c * i, "x", "e");
			f.isArc = !0;
			return f;
		}, circle:function (a, b, c, d, e) {
			e && (c = d = 2 * e.r);
			e && e.isCircle && (a -= c / 2, b -= d / 2);
			return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"];
		}, rect:function (a, b, c, d, e) {
			return xa.prototype.symbols[!v(e) || !e.r ? "square" : "callout"].call(0, a, b, c, d, e);
		}}}, B.VMLRenderer = lb = function () {
			this.init.apply(this, arguments);
		}, lb.prototype = z(xa.prototype, aa), Xa = lb;
	}
	xa.prototype.measureSpanWidth = function (a, b) {
		var c = H.createElement("span"), d;
		d = H.createTextNode(a);
		c.appendChild(d);
		N(c, b);
		this.box.appendChild(c);
		d = c.offsetWidth;
		Ua(c);
		return d;
	};
	var Wb;
	if (qa) {
		B.CanVGRenderer = aa = function () {
			Qa = "http://www.w3.org/1999/xhtml";
		}, aa.prototype.symbols = {}, Wb = function () {
			function a() {
				var a = b.length, d;
				for (d = 0; d < a; d++) {
					b[d]();
				}
				b = [];
			}
			var b = [];
			return {push:function (c, d) {
				if (b.length === 0) {
					var e = H.getElementsByTagName("head")[0], f = H.createElement("script");
					f.type = "text/javascript";
					f.src = d;
					f.onload = a;
					e.appendChild(f);
				}
				b.push(c);
			}};
		}(), Xa = aa;
	}
	bb.prototype = {addLabel:function () {
		var a = this.axis, b = a.options, c = a.chart, d = a.categories, e = a.names, f = this.pos, g = b.labels, h = a.tickPositions, i = f === h[0], j = f === h[h.length - 1], e = d ? q(d[f], e[f], f) : f, d = this.label, h = h.info, k;
		a.isDatetimeAxis && h && (k = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);
		this.isFirst = i;
		this.isLast = j;
		b = a.labelFormatter.call({axis:a, chart:c, isFirst:i, isLast:j, dateTimeLabelFormat:k, value:a.isLog ? ka(a.lin2log(e)) : e});
		v(d) ? d && d.attr({text:b}) : (this.labelLength = (this.label = d = v(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(z(g.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation = 0);
	}, getLabelSize:function () {
		return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
	}, handleOverflow:function (a) {
		var b = this.axis, c = a.x, d = b.chart.chartWidth, e = b.chart.spacing, f = q(b.labelLeft, G(b.pos, e[3])), e = q(b.labelRight, w(b.pos + b.len, d - e[1])), g = this.label, h = this.rotation, i = {left:0, center:0.5, right:1}[b.labelAlign], j = g.getBBox().width, k = b.getSlotWidth(), l = k, m = 1, n, p = {};
		if (h) {
			h < 0 && c - i * j < f ? n = y(c / ca(h * pa) - f) : h > 0 && c + i * j > e && (n = y((d - c) / ca(h * pa)));
		} else {
			if (d = c + (1 - i) * j, c - i * j < f ? l = a.x + l * (1 - i) - f : d > e && (l = e - a.x + l * i, m = -1), l = G(k, l), l < k && b.labelAlign === "center" && (a.x += m * (k - l - i * (k - G(j, l)))), j > l || b.autoRotation && g.styles.width) {
				n = l;
			}
		}
		if (n) {
			p.width = n;
			if (!b.options.labels.style.textOverflow) {
				p.textOverflow = "ellipsis";
			}
			g.css(p);
		}
	}, getPosition:function (a, b, c, d) {
		var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight;
		return {x:a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0), y:a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB};
	}, getLabelPosition:function (a, b, c, d, e, f, g, h) {
		var i = this.axis, j = i.transA, k = i.reversed, l = i.staggerLines, m = i.tickRotCorr || {x:0, y:0}, n = e.y;
		v(n) || (n = i.side === 0 ? c.rotation ? -8 : -c.getBBox().height : i.side === 2 ? m.y + 8 : ca(c.rotation * pa) * (m.y - c.getBBox(!1, 0).height / 2));
		a = a + e.x + m.x - (f && d ? f * j * (k ? -1 : 1) : 0);
		b = b + n - (f && !d ? f * j * (k ? 1 : -1) : 0);
		l && (c = g / (h || 1) % l, i.opposite && (c = l - c - 1), b += c * (i.labelOffset / l));
		return {x:a, y:y(b)};
	}, getMarkPath:function (a, b, c, d, e, f) {
		return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d);
	}, render:function (a, b, c) {
		var d = this.axis, e = d.options, f = d.chart.renderer, g = d.horiz, h = this.type, i = this.label, j = this.pos, k = e.labels, l = this.gridLine, m = h ? h + "Grid" : "grid", n = h ? h + "Tick" : "tick", p = e[m + "LineWidth"], r = e[m + "LineColor"], s = e[m + "LineDashStyle"], m = d.tickSize(n), n = e[n + "Color"], F = this.mark, u = k.step, o = !0, D = d.tickmarkOffset, Q = this.getPosition(g, j, D, b), ha = Q.x, Q = Q.y, v = g && ha === d.pos + d.len || !g && Q === d.pos ? -1 : 1, c = q(c, 1);
		this.isActive = !0;
		if (p) {
			j = d.getPlotLinePath(j + D, p * v, b, !0);
			if (l === t) {
				l = {stroke:r, "stroke-width":p};
				if (s) {
					l.dashstyle = s;
				}
				if (!h) {
					l.zIndex = 1;
				}
				if (b) {
					l.opacity = 0;
				}
				this.gridLine = l = p ? f.path(j).attr(l).add(d.gridGroup) : null;
			}
			if (!b && l && j) {
				l[this.isNew ? "attr" : "animate"]({d:j, opacity:c});
			}
		}
		if (m) {
			d.opposite && (m[0] = -m[0]), h = this.getMarkPath(ha, Q, m[0], m[1] * v, g, f), F ? F.animate({d:h, opacity:c}) : this.mark = f.path(h).attr({stroke:n, "stroke-width":m[1], opacity:c}).add(d.axisGroup);
		}
		if (i && C(ha)) {
			i.xy = Q = this.getLabelPosition(ha, Q, i, g, k, D, a, u), this.isFirst && !this.isLast && !q(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !q(e.showLastLabel, 1) ? o = !1 : g && !d.isRadial && !k.step && !k.rotation && !b && c !== 0 && this.handleOverflow(Q), u && a % u && (o = !1), o && C(Q.y) ? (Q.opacity = c, i[this.isNew ? "attr" : "animate"](Q), this.isNew = !1) : i.attr("y", -9999);
		}
	}, destroy:function () {
		Pa(this, this.axis);
	}};
	B.PlotLineOrBand = function (a, b) {
		this.axis = a;
		if (b) {
			this.options = b, this.id = b.id;
		}
	};
	B.PlotLineOrBand.prototype = {render:function () {
		var a = this, b = a.axis, c = b.horiz, d = a.options, e = d.label, f = a.label, g = d.width, h = d.to, i = d.from, j = v(i) && v(h), k = d.value, l = d.dashStyle, m = a.svgElem, n = [], p, r = d.color, s = q(d.zIndex, 0), F = d.events, u = {}, o = b.chart.renderer, n = b.log2lin;
		b.isLog && (i = n(i), h = n(h), k = n(k));
		if (g) {
			if (n = b.getPlotLinePath(k, g), u = {stroke:r, "stroke-width":g}, l) {
				u.dashstyle = l;
			}
		} else {
			if (j) {
				n = b.getPlotBandPath(i, h, d);
				if (r) {
					u.fill = r;
				}
				if (d.borderWidth) {
					u.stroke = d.borderColor, u["stroke-width"] = d.borderWidth;
				}
			} else {
				return;
			}
		}
		u.zIndex = s;
		if (m) {
			if (n) {
				m.show(), m.animate({d:n});
			} else {
				if (m.hide(), f) {
					a.label = f = f.destroy();
				}
			}
		} else {
			if (n && n.length && (a.svgElem = m = o.path(n).attr(u).add(), F)) {
				for (p in d = function (b) {
					m.on(b, function (c) {
						F[b].apply(a, [c]);
					});
				}, F) {
					d(p);
				}
			}
		}
		e && v(e.text) && n && n.length && b.width > 0 && b.height > 0 && !n.flat ? (e = z({align:c && j && "center", x:c ? !j && 4 : 10, verticalAlign:!c && j && "middle", y:c ? j ? 16 : 10 : j ? 6 : -4, rotation:c && !j && 90}, e), this.renderLabel(e, n, j, s)) : f && f.hide();
		return a;
	}, renderLabel:function (a, b, c, d) {
		var e = this.label, f = this.axis.chart.renderer;
		if (!e) {
			e = {align:a.textAlign || a.align, rotation:a.rotation}, e.zIndex = d, this.label = e = f.text(a.text, 0, 0, a.useHTML).attr(e).css(a.style).add();
		}
		d = [b[1], b[4], c ? b[6] : b[1]];
		b = [b[2], b[5], c ? b[7] : b[2]];
		c = Ma(d);
		f = Ma(b);
		e.align(a, !1, {x:c, y:f, width:Da(d) - c, height:Da(b) - f});
		e.show();
	}, destroy:function () {
		za(this.axis.plotLinesAndBands, this);
		delete this.axis;
		Pa(this);
	}};
	var J = B.Axis = function () {
		this.init.apply(this, arguments);
	};
	J.prototype = {defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M", second:"%H:%M", minute:"%H:%M", hour:"%H:%M", day:"%e. %b", week:"%e. %b", month:"%b '%y", year:"%Y"}, endOnTick:!1, gridLineColor:"#D8D8D8", labels:{enabled:!0, style:{color:"#606060", cursor:"default", fontSize:"11px"}, x:0}, lineColor:"#C0D0E0", lineWidth:1, minPadding:0.01, maxPadding:0.01, minorGridLineColor:"#E0E0E0", minorGridLineWidth:1, minorTickColor:"#A0A0A0", minorTickLength:2, minorTickPosition:"outside", startOfWeek:1, startOnTick:!1, tickColor:"#C0D0E0", tickLength:10, tickmarkPlacement:"between", tickPixelInterval:100, tickPosition:"outside", title:{align:"middle", style:{color:"#707070"}}, type:"linear"}, defaultYAxisOptions:{endOnTick:!0, gridLineWidth:1, tickPixelInterval:72, showLastLabel:!0, labels:{x:-8}, lineWidth:0, maxPadding:0.05, minPadding:0.05, startOnTick:!0, title:{rotation:270, text:"Values"}, stackLabels:{enabled:!1, formatter:function () {
		return B.numberFormat(this.total, -1);
	}, style:z(W.line.dataLabels.style, {color:"#000000"})}}, defaultLeftAxisOptions:{labels:{x:-15}, title:{rotation:270}}, defaultRightAxisOptions:{labels:{x:15}, title:{rotation:90}}, defaultBottomAxisOptions:{labels:{autoRotation:[-45], x:0}, title:{rotation:0}}, defaultTopAxisOptions:{labels:{autoRotation:[-45], x:0}, title:{rotation:0}}, init:function (a, b) {
		var c = b.isX;
		this.chart = a;
		this.horiz = a.inverted ? !c : c;
		this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
		this.opposite = b.opposite;
		this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
		this.setOptions(b);
		var d = this.options, e = d.type;
		this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
		this.userOptions = b;
		this.minPixelPadding = 0;
		this.reversed = d.reversed;
		this.visible = d.visible !== !1;
		this.zoomEnabled = d.zoomEnabled !== !1;
		this.categories = d.categories || e === "category";
		this.names = this.names || [];
		this.isLog = e === "logarithmic";
		this.isDatetimeAxis = e === "datetime";
		this.isLinked = v(d.linkedTo);
		this.ticks = {};
		this.labelEdge = [];
		this.minorTicks = {};
		this.plotLinesAndBands = [];
		this.alternateBands = {};
		this.len = 0;
		this.minRange = this.userMinRange = d.minRange || d.maxZoom;
		this.range = d.range;
		this.offset = d.offset || 0;
		this.stacks = {};
		this.oldStacks = {};
		this.stacksTouched = 0;
		this.min = this.max = null;
		this.crosshair = q(d.crosshair, ua(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
		var f, d = this.options.events;
		sa(this, a.axes) === -1 && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
		this.series = this.series || [];
		if (a.inverted && c && this.reversed === t) {
			this.reversed = !0;
		}
		this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
		for (f in d) {
			E(this, f, d[f]);
		}
		if (this.isLog) {
			this.val2lin = this.log2lin, this.lin2val = this.lin2log;
		}
	}, setOptions:function (a) {
		this.options = z(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], z(R[this.coll], a));
	}, defaultLabelFormatter:function () {
		var a = this.axis, b = this.value, c = a.categories, d = this.dateTimeLabelFormat, e = R.lang.numericSymbols, f = e && e.length, g, h = a.options.labels.format, a = a.isLog ? b : a.tickInterval;
		if (h) {
			g = La(h, this);
		} else {
			if (c) {
				g = b;
			} else {
				if (d) {
					g = na(d, b);
				} else {
					if (f && a >= 1000) {
						for (; f-- && g === t; ) {
							c = Math.pow(1000, f + 1), a >= c && b * 10 % c === 0 && e[f] !== null && (g = B.numberFormat(b / c, -1) + e[f]);
						}
					}
				}
			}
		}
		g === t && (g = S(b) >= 10000 ? B.numberFormat(b, -1) : B.numberFormat(b, -1, t, ""));
		return g;
	}, getSeriesExtremes:function () {
		var a = this, b = a.chart;
		a.hasVisibleSeries = !1;
		a.dataMin = a.dataMax = a.threshold = null;
		a.softThreshold = !a.isXAxis;
		a.buildStacks && a.buildStacks();
		o(a.series, function (c) {
			if (c.visible || !b.options.chart.ignoreHiddenSeries) {
				var d = c.options, e = d.threshold, f;
				a.hasVisibleSeries = !0;
				a.isLog && e <= 0 && (e = null);
				if (a.isXAxis) {
					if (d = c.xData, d.length) {
						c = Ma(d), !C(c) && !(c instanceof ba) && (d = Fa(d, function (a) {
							return C(a);
						}), c = Ma(d)), a.dataMin = G(q(a.dataMin, d[0]), c), a.dataMax = w(q(a.dataMax, d[0]), Da(d));
					}
				} else {
					c.getExtremes();
					f = c.dataMax;
					c = c.dataMin;
					if (v(c) && v(f)) {
						a.dataMin = G(q(a.dataMin, c), c), a.dataMax = w(q(a.dataMax, f), f);
					}
					if (v(e)) {
						a.threshold = e;
					}
					if (!d.softThreshold || a.isLog) {
						a.softThreshold = !1;
					}
				}
			}
		});
	}, translate:function (a, b, c, d, e, f) {
		var g = this.linkedParent || this, h = 1, i = 0, j = d ? g.oldTransA : g.transA, d = d ? g.oldMin : g.min, k = g.minPixelPadding, e = (g.isOrdinal || g.isBroken || g.isLog && e) && g.lin2val;
		if (!j) {
			j = g.transA;
		}
		if (c) {
			h *= -1, i = g.len;
		}
		g.reversed && (h *= -1, i -= h * (g.sector || g.len));
		b ? (a = a * h + i, a -= k, a = a / j + d, e && (a = g.lin2val(a))) : (e && (a = g.val2lin(a)), f === "between" && (f = 0.5), a = h * (a - d) * j + i + h * k + (C(f) ? j * f * g.pointRange : 0));
		return a;
	}, toPixels:function (a, b) {
		return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos);
	}, toValue:function (a, b) {
		return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0);
	}, getPlotLinePath:function (a, b, c, d, e) {
		var f = this.chart, g = this.left, h = this.top, i, j, k = c && f.oldChartHeight || f.chartHeight, l = c && f.oldChartWidth || f.chartWidth, m;
		i = this.transB;
		var n = function (a, b, c) {
			if (a < b || a > c) {
				d ? a = G(w(b, a), c) : m = !0;
			}
			return a;
		}, e = q(e, this.translate(a, null, null, c)), a = c = y(e + i);
		i = j = y(k - e - i);
		C(e) ? this.horiz ? (i = h, j = k - this.bottom, a = c = n(a, g, g + this.width)) : (a = g, c = l - this.right, i = j = n(i, h, h + this.height)) : m = !0;
		return m && !d ? null : f.renderer.crispLine(["M", a, i, "L", c, j], b || 1);
	}, getLinearTickPositions:function (a, b, c) {
		var d, e = ka(V(b / a) * a), f = ka(Ea(c / a) * a), g = [];
		if (b === c && C(b)) {
			return [b];
		}
		for (b = e; b <= f; ) {
			g.push(b);
			b = ka(b + a);
			if (b === d) {
				break;
			}
			d = b;
		}
		return g;
	}, getMinorTickPositions:function () {
		var a = this.options, b = this.tickPositions, c = this.minorTickInterval, d = [], e, f = this.pointRangePadding || 0;
		e = this.min - f;
		var f = this.max + f, g = f - e;
		if (g && g / c < this.len / 3) {
			if (this.isLog) {
				f = b.length;
				for (e = 1; e < f; e++) {
					d = d.concat(this.getLogTickPositions(c, b[e - 1], b[e], !0));
				}
			} else {
				if (this.isDatetimeAxis && a.minorTickInterval === "auto") {
					d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), e, f, a.startOfWeek));
				} else {
					for (b = e + (b[0] - e) % c; b <= f; b += c) {
						d.push(b);
					}
				}
			}
		}
		d.length !== 0 && this.trimTicks(d, a.startOnTick, a.endOnTick);
		return d;
	}, adjustForMinRange:function () {
		var a = this.options, b = this.min, c = this.max, d, e = this.dataMax - this.dataMin >= this.minRange, f, g, h, i, j, k;
		if (this.isXAxis && this.minRange === t && !this.isLog) {
			v(a.min) || v(a.max) ? this.minRange = null : (o(this.series, function (a) {
				i = a.xData;
				for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--) {
					if (h = i[g] - i[g - 1], f === t || h < f) {
						f = h;
					}
				}
			}), this.minRange = G(f * 5, this.dataMax - this.dataMin));
		}
		if (c - b < this.minRange) {
			k = this.minRange;
			d = (k - c + b) / 2;
			d = [b - d, q(a.min, b - d)];
			if (e) {
				d[2] = this.dataMin;
			}
			b = Da(d);
			c = [b + k, q(a.max, b + k)];
			if (e) {
				c[2] = this.dataMax;
			}
			c = Ma(c);
			c - b < k && (d[0] = c - k, d[1] = q(a.min, c - k), b = Da(d));
		}
		this.min = b;
		this.max = c;
	}, getClosest:function () {
		var a;
		o(this.series, function (b) {
			var c = b.closestPointRange;
			!b.noSharedTooltip && v(c) && (a = v(a) ? G(a, c) : c);
		});
		return a;
	}, setAxisTranslation:function (a) {
		var b = this, c = b.max - b.min, d = b.axisPointRange || 0, e, f = 0, g = 0, h = b.linkedParent, i = !!b.categories, j = b.transA, k = b.isXAxis;
		if (k || i || d) {
			if (h ? (f = h.minPointOffset, g = h.pointRangePadding) : (e = b.getClosest(), o(b.series, function (a) {
				var c = i ? 1 : k ? q(a.options.pointRange, e, 0) : b.axisPointRange || 0, a = a.options.pointPlacement;
				d = w(d, c);
				b.single || (f = w(f, Ca(a) ? 0 : c / 2), g = w(g, a === "on" ? 0 : c));
			})), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = G(d, c), k) {
				b.closestPointRange = e;
			}
		}
		if (a) {
			b.oldTransA = j;
		}
		b.translationSlope = b.transA = j = b.len / (c + g || 1);
		b.transB = b.horiz ? b.left : b.bottom;
		b.minPixelPadding = j * f;
	}, minFromRange:function () {
		return this.max - this.range;
	}, setTickInterval:function (a) {
		var b = this, c = b.chart, d = b.options, e = b.isLog, f = b.log2lin, g = b.isDatetimeAxis, h = b.isXAxis, i = b.isLinked, j = d.maxPadding, k = d.minPadding, l = d.tickInterval, m = d.tickPixelInterval, n = b.categories, p = b.threshold, r = b.softThreshold, s, F, u, x;
		!g && !n && !i && this.getTickAmount();
		u = q(b.userMin, d.min);
		x = q(b.userMax, d.max);
		i ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = q(c.min, c.dataMin), b.max = q(c.max, c.dataMax), d.type !== b.linkedParent.options.type && ga(11, 1)) : (!r && v(p) && (b.dataMin >= p ? (s = p, k = 0) : b.dataMax <= p && (F = p, j = 0)), b.min = q(u, s, b.dataMin), b.max = q(x, F, b.dataMax));
		if (e) {
			!a && G(b.min, q(b.dataMin, b.min)) <= 0 && ga(10, 1), b.min = ka(f(b.min), 15), b.max = ka(f(b.max), 15);
		}
		if (b.range && v(b.max)) {
			b.userMin = b.min = u = w(b.min, b.minFromRange()), b.userMax = x = b.max, b.range = null;
		}
		O(b, "foundExtremes");
		b.beforePadding && b.beforePadding();
		b.adjustForMinRange();
		if (!n && !b.axisPointRange && !b.usePercentage && !i && v(b.min) && v(b.max) && (f = b.max - b.min)) {
			!v(u) && k && (b.min -= f * k), !v(x) && j && (b.max += f * j);
		}
		if (C(d.floor)) {
			b.min = w(b.min, d.floor);
		}
		if (C(d.ceiling)) {
			b.max = G(b.max, d.ceiling);
		}
		if (r && v(b.dataMin)) {
			if (p = p || 0, !v(u) && b.min < p && b.dataMin >= p) {
				b.min = p;
			} else {
				if (!v(x) && b.max > p && b.dataMax <= p) {
					b.max = p;
				}
			}
		}
		b.tickInterval = b.min === b.max || b.min === void 0 || b.max === void 0 ? 1 : i && !l && m === b.linkedParent.options.tickPixelInterval ? l = b.linkedParent.tickInterval : q(l, this.tickAmount ? (b.max - b.min) / w(this.tickAmount - 1, 1) : void 0, n ? 1 : (b.max - b.min) * m / w(b.len, m));
		h && !a && o(b.series, function (a) {
			a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
		});
		b.setAxisTranslation(!0);
		b.beforeSetTickPositions && b.beforeSetTickPositions();
		if (b.postProcessTickInterval) {
			b.tickInterval = b.postProcessTickInterval(b.tickInterval);
		}
		if (b.pointRange && !l) {
			b.tickInterval = w(b.pointRange, b.tickInterval);
		}
		a = q(d.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
		if (!l && b.tickInterval < a) {
			b.tickInterval = a;
		}
		if (!g && !e && !l) {
			b.tickInterval = Ab(b.tickInterval, null, zb(b.tickInterval), q(d.allowDecimals, !(b.tickInterval > 0.5 && b.tickInterval < 5 && b.max > 1000 && b.max < 9999)), !!this.tickAmount);
		}
		if (!this.tickAmount && this.len) {
			b.tickInterval = b.unsquish();
		}
		this.setTickPositions();
	}, setTickPositions:function () {
		var a = this.options, b, c = a.tickPositions, d = a.tickPositioner, e = a.startOnTick, f = a.endOnTick, g;
		this.tickmarkOffset = this.categories && a.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0;
		this.minorTickInterval = a.minorTickInterval === "auto" && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
		this.tickPositions = b = c && c.slice();
		if (!b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, d && (d = d.apply(this, [this.min, this.max])))) {
			this.tickPositions = b = d;
		}
		if (!this.isLinked) {
			this.trimTicks(b, e, f), this.min === this.max && v(this.min) && !this.tickAmount && (g = !0, this.min -= 0.5, this.max += 0.5), this.single = g, !c && !d && this.adjustTickAmount();
		}
	}, trimTicks:function (a, b, c) {
		var d = a[0], e = a[a.length - 1], f = this.minPointOffset || 0;
		if (b) {
			this.min = d;
		} else {
			for (; this.min - f > a[0]; ) {
				a.shift();
			}
		}
		if (c) {
			this.max = e;
		} else {
			for (; this.max + f < a[a.length - 1]; ) {
				a.pop();
			}
		}
		a.length === 0 && v(d) && a.push((e + d) / 2);
	}, alignToOthers:function () {
		var a = {}, b, c = this.options;
		this.chart.options.chart.alignTicks !== !1 && c.alignTicks !== !1 && o(this.chart[this.coll], function (c) {
			var e = c.options, e = [c.horiz ? e.left : e.top, e.width, e.height, e.pane].join(",");
			c.series.length && (a[e] ? b = !0 : a[e] = 1);
		});
		return b;
	}, getTickAmount:function () {
		var a = this.options, b = a.tickAmount, c = a.tickPixelInterval;
		!v(a.tickInterval) && this.len < c && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
		!b && this.alignToOthers() && (b = Ea(this.len / c) + 1);
		if (b < 4) {
			this.finalTickAmt = b, b = 5;
		}
		this.tickAmount = b;
	}, adjustTickAmount:function () {
		var a = this.tickInterval, b = this.tickPositions, c = this.tickAmount, d = this.finalTickAmt, e = b && b.length;
		if (e < c) {
			for (; b.length < c; ) {
				b.push(ka(b[b.length - 1] + a));
			}
			this.transA *= (e - 1) / (c - 1);
			this.max = b[b.length - 1];
		} else {
			e > c && (this.tickInterval *= 2, this.setTickPositions());
		}
		if (v(d)) {
			for (a = c = b.length; a--; ) {
				(d === 3 && a % 2 === 1 || d <= 2 && a > 0 && a < c - 1) && b.splice(a, 1);
			}
			this.finalTickAmt = t;
		}
	}, setScale:function () {
		var a, b;
		this.oldMin = this.min;
		this.oldMax = this.max;
		this.oldAxisLength = this.len;
		this.setAxisSize();
		b = this.len !== this.oldAxisLength;
		o(this.series, function (b) {
			if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) {
				a = !0;
			}
		});
		if (b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers()) {
			if (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, !this.isDirty) {
				this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax;
			}
		} else {
			this.cleanStacks && this.cleanStacks();
		}
	}, setExtremes:function (a, b, c, d, e) {
		var f = this, g = f.chart, c = q(c, !0);
		o(f.series, function (a) {
			delete a.kdTree;
		});
		e = A(e, {min:a, max:b});
		O(f, "setExtremes", e, function () {
			f.userMin = a;
			f.userMax = b;
			f.eventArgs = e;
			c && g.redraw(d);
		});
	}, zoom:function (a, b) {
		var c = this.dataMin, d = this.dataMax, e = this.options, f = G(c, q(e.min, c)), e = w(d, q(e.max, d));
		this.allowZoomOutside || (v(c) && a <= f && (a = f), v(d) && b >= e && (b = e));
		this.displayBtn = a !== t || b !== t;
		this.setExtremes(a, b, !1, t, {trigger:"zoom"});
		return !0;
	}, setAxisSize:function () {
		var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = this.horiz, e = q(b.width, a.plotWidth - c + (b.offsetRight || 0)), f = q(b.height, a.plotHeight), g = q(b.top, a.plotTop), b = q(b.left, a.plotLeft + c), c = /%$/;
		c.test(f) && (f = Math.round(parseFloat(f) / 100 * a.plotHeight));
		c.test(g) && (g = Math.round(parseFloat(g) / 100 * a.plotHeight + a.plotTop));
		this.left = b;
		this.top = g;
		this.width = e;
		this.height = f;
		this.bottom = a.chartHeight - f - g;
		this.right = a.chartWidth - e - b;
		this.len = w(d ? e : f, 0);
		this.pos = d ? b : g;
	}, getExtremes:function () {
		var a = this.isLog, b = this.lin2log;
		return {min:a ? ka(b(this.min)) : this.min, max:a ? ka(b(this.max)) : this.max, dataMin:this.dataMin, dataMax:this.dataMax, userMin:this.userMin, userMax:this.userMax};
	}, getThreshold:function (a) {
		var b = this.isLog, c = this.lin2log, d = b ? c(this.min) : this.min, b = b ? c(this.max) : this.max;
		a === null ? a = b < 0 ? b : d : d > a ? a = d : b < a && (a = b);
		return this.translate(a, 0, 1, 0, 1);
	}, autoLabelAlign:function (a) {
		a = (q(a, 0) - this.side * 90 + 720) % 360;
		return a > 15 && a < 165 ? "right" : a > 195 && a < 345 ? "left" : "center";
	}, tickSize:function (a) {
		var b = this.options, c = b[a + "Length"], d = q(b[a + "Width"], a === "tick" && this.isXAxis ? 1 : 0);
		if (d && c) {
			return b[a + "Position"] === "inside" && (c = -c), [c, d];
		}
	}, labelMetrics:function () {
		return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label);
	}, unsquish:function () {
		var a = this.options.labels, b = this.horiz, c = this.tickInterval, d = c, e = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / c), f, g = a.rotation, h = this.labelMetrics(), i, j = Number.MAX_VALUE, k, l = function (a) {
			a /= e || 1;
			a = a > 1 ? Ea(a) : 1;
			return a * c;
		};
		b ? (k = !a.staggerLines && !a.step && (v(g) ? [g] : e < q(a.autoRotationLimit, 80) && a.autoRotation)) && o(k, function (a) {
			var b;
			if (a === g || a && a >= -90 && a <= 90) {
				i = l(S(h.h / la(pa * a))), b = i + S(a / 360), b < j && (j = b, f = a, d = i);
			}
		}) : a.step || (d = l(h.h));
		this.autoRotation = k;
		this.labelRotation = q(f, g);
		return d;
	}, getSlotWidth:function () {
		var a = this.chart, b = this.horiz, c = this.options.labels, d = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), e = a.margin[3];
		return b && (c.step || 0) < 2 && !c.rotation && (this.staggerLines || 1) * a.plotWidth / d || !b && (e && e - a.spacing[3] || a.chartWidth * 0.33);
	}, renderUnsquish:function () {
		var a = this.chart, b = a.renderer, c = this.tickPositions, d = this.ticks, e = this.options.labels, f = this.horiz, g = this.getSlotWidth(), h = w(1, y(g - 2 * (e.padding || 5))), i = {}, j = this.labelMetrics(), k = e.style.textOverflow, l, m = 0, n, p;
		if (!Ca(e.rotation)) {
			i.rotation = e.rotation || 0;
		}
		if (this.autoRotation) {
			o(c, function (a) {
				if ((a = d[a]) && a.labelLength > m) {
					m = a.labelLength;
				}
			}), m > h && m > j.h ? i.rotation = this.labelRotation : this.labelRotation = 0;
		} else {
			if (g && (l = {width:h + "px"}, !k)) {
				l.textOverflow = "clip";
				for (n = c.length; !f && n--; ) {
					if (p = c[n], h = d[p].label) {
						if (h.styles.textOverflow === "ellipsis" ? h.css({textOverflow:"clip"}) : d[p].labelLength > g && h.css({width:g + "px"}), h.getBBox().height > this.len / c.length - (j.h - j.f)) {
							h.specCss = {textOverflow:"ellipsis"};
						}
					}
				}
			}
		}
		if (i.rotation && (l = {width:(m > a.chartHeight * 0.5 ? a.chartHeight * 0.33 : a.chartHeight) + "px"}, !k)) {
			l.textOverflow = "ellipsis";
		}
		if (this.labelAlign = e.align || this.autoLabelAlign(this.labelRotation)) {
			i.align = this.labelAlign;
		}
		o(c, function (a) {
			var b = (a = d[a]) && a.label;
			if (b) {
				b.attr(i), l && b.css(z(l, b.specCss)), delete b.specCss, a.rotation = i.rotation;
			}
		});
		this.tickRotCorr = b.rotCorr(j.b, this.labelRotation || 0, this.side !== 0);
	}, hasData:function () {
		return this.hasVisibleSeries || v(this.min) && v(this.max) && !!this.tickPositions;
	}, getOffset:function () {
		var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.tickPositions, f = a.ticks, g = a.horiz, h = a.side, i = b.inverted ? [1, 0, 3, 2][h] : h, j, k, l = 0, m, n = 0, p = d.title, r = d.labels, s = 0, F = a.opposite, u = b.axisOffset, b = b.clipOffset, x = [-1, 1, 1, -1][h], D, Q = a.axisParent, ha = this.tickSize("tick");
		j = a.hasData();
		a.showAxis = k = j || q(d.showEmpty, !0);
		a.staggerLines = a.horiz && r.staggerLines;
		if (!a.axisGroup) {
			a.gridGroup = c.g("grid").attr({zIndex:d.gridZIndex || 1}).add(Q), a.axisGroup = c.g("axis").attr({zIndex:d.zIndex || 2}).add(Q), a.labelGroup = c.g("axis-labels").attr({zIndex:r.zIndex || 7}).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add(Q);
		}
		if (j || a.isLinked) {
			if (o(e, function (b) {
				f[b] ? f[b].addLabel() : f[b] = new bb(a, b);
			}), a.renderUnsquish(), r.reserveSpace !== !1 && (h === 0 || h === 2 || {1:"left", 3:"right"}[h] === a.labelAlign || a.labelAlign === "center") && o(e, function (a) {
				s = w(f[a].getLabelSize(), s);
			}), a.staggerLines) {
				s *= a.staggerLines, a.labelOffset = s * (a.opposite ? -1 : 1);
			}
		} else {
			for (D in f) {
				f[D].destroy(), delete f[D];
			}
		}
		if (p && p.text && p.enabled !== !1) {
			if (!a.axisTitle) {
				(D = p.textAlign) || (D = (g ? {low:"left", middle:"center", high:"right"} : {low:F ? "right" : "left", middle:"center", high:F ? "left" : "right"})[p.align]), a.axisTitle = c.text(p.text, 0, 0, p.useHTML).attr({zIndex:7, rotation:p.rotation || 0, align:D}).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(p.style).add(a.axisGroup), a.axisTitle.isNew = !0;
			}
			if (k) {
				l = a.axisTitle.getBBox()[g ? "height" : "width"], m = p.offset, n = v(m) ? 0 : q(p.margin, g ? 5 : 10);
			}
			a.axisTitle[k ? "show" : "hide"](!0);
		}
		a.offset = x * q(d.offset, u[h]);
		a.tickRotCorr = a.tickRotCorr || {x:0, y:0};
		c = h === 0 ? -a.labelMetrics().h : h === 2 ? a.tickRotCorr.y : 0;
		n = Math.abs(s) + n;
		s && (n -= c, n += x * (g ? q(r.y, a.tickRotCorr.y + x * 8) : r.x));
		a.axisTitleMargin = q(m, n);
		u[h] = w(u[h], a.axisTitleMargin + l + x * a.offset, n, j && e.length && ha ? ha[0] : 0);
		d = d.offset ? 0 : V(d.lineWidth / 2) * 2;
		b[i] = w(b[i], d);
	}, getLinePath:function (a) {
		var b = this.chart, c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d, d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
		c && (a *= -1);
		return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a);
	}, getTitlePosition:function () {
		var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite, h = this.offset, i = e.x || 0, j = e.y || 0, k = K(e.style.fontSize || 12), d = {low:f + (a ? 0 : d), middle:f + d / 2, high:f + (a ? d : 0)}[e.align], b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? k : 0);
		return {x:a ? d + i : b + (g ? this.width : 0) + h + i, y:a ? b + j - (g ? this.height : 0) + h : d + j};
	}, render:function () {
		var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.isLog, f = a.lin2log, g = a.isLinked, h = a.tickPositions, i = a.axisTitle, j = a.ticks, k = a.minorTicks, l = a.alternateBands, m = d.stackLabels, n = d.alternateGridColor, p = a.tickmarkOffset, r = d.lineWidth, s, q = b.hasRendered && C(a.oldMin), u = a.showAxis, x = gb(c.globalAnimation), D, Q;
		a.labelEdge.length = 0;
		a.overlap = !1;
		o([j, k, l], function (a) {
			for (var b in a) {
				a[b].isActive = !1;
			}
		});
		if (a.hasData() || g) {
			a.minorTickInterval && !a.categories && o(a.getMinorTickPositions(), function (b) {
				k[b] || (k[b] = new bb(a, b, "minor"));
				q && k[b].isNew && k[b].render(null, !0);
				k[b].render(null, !1, 1);
			});
			if (h.length && (o(h, function (b, c) {
				if (!g || b >= a.min && b <= a.max) {
					j[b] || (j[b] = new bb(a, b)), q && j[b].isNew && j[b].render(c, !0, 0.1), j[b].render(c);
				}
			}), p && (a.min === 0 || a.single))) {
				j[-1] || (j[-1] = new bb(a, -1, null, !0)), j[-1].render(-1);
			}
			n && o(h, function (c, d) {
				Q = h[d + 1] !== t ? h[d + 1] + p : a.max - p;
				if (d % 2 === 0 && c < a.max && Q <= a.max + (b.polar ? -p : p)) {
					l[c] || (l[c] = new B.PlotLineOrBand(a)), D = c + p, l[c].options = {from:e ? f(D) : D, to:e ? f(Q) : Q, color:n}, l[c].render(), l[c].isActive = !0;
				}
			});
			if (!a._addedPlotLB) {
				o((d.plotLines || []).concat(d.plotBands || []), function (b) {
					a.addPlotBandOrLine(b);
				}), a._addedPlotLB = !0;
			}
		}
		o([j, k, l], function (a) {
			var c, d, e = [], f = x.duration;
			for (c in a) {
				if (!a[c].isActive) {
					a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c);
				}
			}
			Za(function () {
				for (d = e.length; d--; ) {
					a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]]);
				}
			}, a === l || !b.hasRendered || !f ? 0 : f);
		});
		if (r) {
			s = a.getLinePath(r), a.axisLine ? a.axisLine.animate({d:s}) : a.axisLine = c.path(s).attr({stroke:d.lineColor, "stroke-width":r, zIndex:7}).add(a.axisGroup), a.axisLine[u ? "show" : "hide"](!0);
		}
		if (i && u) {
			i[i.isNew ? "attr" : "animate"](a.getTitlePosition()), i.isNew = !1;
		}
		m && m.enabled && a.renderStackTotals();
		a.isDirty = !1;
	}, redraw:function () {
		this.visible && (this.render(), o(this.plotLinesAndBands, function (a) {
			a.render();
		}));
		o(this.series, function (a) {
			a.isDirty = !0;
		});
	}, destroy:function (a) {
		var b = this, c = b.stacks, d, e = b.plotLinesAndBands;
		a || T(b);
		for (d in c) {
			Pa(c[d]), c[d] = null;
		}
		o([b.ticks, b.minorTicks, b.alternateBands], function (a) {
			Pa(a);
		});
		for (a = e.length; a--; ) {
			e[a].destroy();
		}
		o("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","), function (a) {
			b[a] && (b[a] = b[a].destroy());
		});
		this.cross && this.cross.destroy();
	}, drawCrosshair:function (a, b) {
		var c, d = this.crosshair, e, f;
		if (!this.crosshair || (v(b) || !q(d.snap, !0)) === !1) {
			this.hideCrosshair();
		} else {
			if (q(d.snap, !0) ? v(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : q(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null, null, c) || null, c === null) {
				this.hideCrosshair();
			} else {
				if (e = this.categories && !this.isRadial, f = q(d.width, e ? this.transA : 1), this.cross) {
					this.cross.attr({d:c, visibility:"visible", "stroke-width":f});
				} else {
					e = {"pointer-events":"none", "stroke-width":f, stroke:d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"), zIndex:q(d.zIndex, 2)};
					if (d.dashStyle) {
						e.dashstyle = d.dashStyle;
					}
					this.cross = this.chart.renderer.path(c).attr(e).add();
				}
			}
		}
	}, hideCrosshair:function () {
		this.cross && this.cross.hide();
	}};
	A(J.prototype, {getPlotBandPath:function (a, b) {
		var c = this.getPlotLinePath(b, null, null, !0), d = this.getPlotLinePath(a, null, null, !0);
		d && c ? (d.flat = d.toString() === c.toString(), d.push(c[4], c[5], c[1], c[2])) : d = null;
		return d;
	}, addPlotBand:function (a) {
		return this.addPlotBandOrLine(a, "plotBands");
	}, addPlotLine:function (a) {
		return this.addPlotBandOrLine(a, "plotLines");
	}, addPlotBandOrLine:function (a, b) {
		var c = (new B.PlotLineOrBand(this, a)).render(), d = this.userOptions;
		c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));
		return c;
	}, removePlotBandOrLine:function (a) {
		for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--; ) {
			b[e].id === a && b[e].destroy();
		}
		o([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function (b) {
			for (e = b.length; e--; ) {
				b[e].id === a && za(b, b[e]);
			}
		});
	}});
	J.prototype.getTimeTicks = function (a, b, c, d) {
		var e = [], f = {}, g = R.global.useUTC, h, i = new ba(b - eb(b)), j = a.unitRange, k = a.count;
		if (v(b)) {
			i[Pb](j >= M.second ? 0 : k * V(i.getMilliseconds() / k));
			if (j >= M.second) {
				i[Qb](j >= M.minute ? 0 : k * V(i.getSeconds() / k));
			}
			if (j >= M.minute) {
				i[Rb](j >= M.hour ? 0 : k * V(i[Bb]() / k));
			}
			if (j >= M.hour) {
				i[Sb](j >= M.day ? 0 : k * V(i[Cb]() / k));
			}
			if (j >= M.day) {
				i[qb](j >= M.month ? 1 : k * V(i[ab]() / k));
			}
			j >= M.month && (i[Eb](j >= M.year ? 0 : k * V(i[hb]() / k)), h = i[ib]());
			j >= M.year && (h -= h % k, i[Fb](h));
			if (j === M.week) {
				i[qb](i[ab]() - i[Db]() + q(d, 1));
			}
			b = 1;
			if (yb || fb) {
				i = i.getTime(), i = new ba(i + eb(i));
			}
			h = i[ib]();
			for (var d = i.getTime(), l = i[hb](), m = i[ab](), n = !g || !!fb, p = (M.day + (g ? eb(i) : i.getTimezoneOffset() * 60000)) % M.day; d < c; ) {
				e.push(d), j === M.year ? d = pb(h + b * k, 0) : j === M.month ? d = pb(h, l + b * k) : n && (j === M.day || j === M.week) ? d = pb(h, l, m + b * k * (j === M.day ? 1 : 7)) : d += j * k, b++;
			}
			e.push(d);
			o(Fa(e, function (a) {
				return j <= M.hour && a % M.day === p;
			}), function (a) {
				f[a] = "day";
			});
		}
		e.info = A(a, {higherRanks:f, totalRange:j * k});
		return e;
	};
	J.prototype.normalizeTimeTickInterval = function (a, b) {
		var c = b || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], d = c[c.length - 1], e = M[d[0]], f = d[1], g;
		for (g = 0; g < c.length; g++) {
			if (d = c[g], e = M[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + M[c[g + 1][0]]) / 2) {
				break;
			}
		}
		e === M.year && a < 5 * e && (f = [1, 2, 5]);
		c = Ab(a / e, f, d[0] === "year" ? w(zb(a / e), 1) : 1);
		return {unitRange:e, count:c, unitName:d[0]};
	};
	J.prototype.getLogTickPositions = function (a, b, c, d) {
		var e = this.options, f = this.len, g = this.lin2log, h = this.log2lin, i = [];
		if (!d) {
			this._minorAutoInterval = null;
		}
		if (a >= 0.5) {
			a = y(a), i = this.getLinearTickPositions(a, b, c);
		} else {
			if (a >= 0.08) {
				for (var f = V(b), j, k, l, m, n, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !n; f++) {
					k = e.length;
					for (j = 0; j < k && !n; j++) {
						l = h(g(f) * e[j]), l > b && (!d || m <= c) && m !== t && i.push(m), m > c && (n = !0), m = l;
					}
				}
			} else {
				if (b = g(b), c = g(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = q(a === "auto" ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length : f) || 1)), a = Ab(a, null, zb(a)), i = ta(this.getLinearTickPositions(a, b, c), h), !d) {
					this._minorAutoInterval = a / 5;
				}
			}
		}
		if (!d) {
			this.tickInterval = a;
		}
		return i;
	};
	J.prototype.log2lin = function (a) {
		return Y.log(a) / Y.LN10;
	};
	J.prototype.lin2log = function (a) {
		return Y.pow(10, a);
	};
	var Lb = B.Tooltip = function () {
		this.init.apply(this, arguments);
	};
	Lb.prototype = {init:function (a, b) {
		var c = b.borderWidth, d = b.style, e = K(d.padding);
		this.chart = a;
		this.options = b;
		this.crosshairs = [];
		this.now = {x:0, y:0};
		this.isHidden = !0;
		this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({padding:e, fill:b.backgroundColor, "stroke-width":c, r:b.borderRadius, zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});
		qa || this.label.shadow(b.shadow);
		this.shared = b.shared;
	}, destroy:function () {
		if (this.label) {
			this.label = this.label.destroy();
		}
		clearTimeout(this.hideTimer);
		clearTimeout(this.tooltipTimeout);
	}, move:function (a, b, c, d) {
		var e = this, f = e.now, g = e.options.animation !== !1 && !e.isHidden && (S(a - f.x) > 1 || S(b - f.y) > 1), h = e.followPointer || e.len > 1;
		A(f, {x:g ? (2 * f.x + a) / 3 : a, y:g ? (f.y + b) / 2 : b, anchorX:h ? t : g ? (2 * f.anchorX + c) / 3 : c, anchorY:h ? t : g ? (f.anchorY + d) / 2 : d});
		e.label.attr(f);
		if (g) {
			clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
				e && e.move(a, b, c, d);
			}, 32);
		}
	}, hide:function (a) {
		var b = this;
		clearTimeout(this.hideTimer);
		a = q(a, this.options.hideDelay, 500);
		if (!this.isHidden) {
			this.hideTimer = Za(function () {
				b.label[a ? "fadeOut" : "hide"]();
				b.isHidden = !0;
			}, a);
		}
	}, getAnchor:function (a, b) {
		var c, d = this.chart, e = d.inverted, f = d.plotTop, g = d.plotLeft, h = 0, i = 0, j, k, a = ua(a);
		c = a[0].tooltipPos;
		this.followPointer && b && (b.chartX === t && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);
		c || (o(a, function (a) {
			j = a.series.yAxis;
			k = a.series.xAxis;
			h += a.plotX + (!e && k ? k.left - g : 0);
			i += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && j ? j.top - f : 0);
		}), h /= a.length, i /= a.length, c = [e ? d.plotWidth - i : h, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - h : i]);
		return ta(c, y);
	}, getPosition:function (a, b, c) {
		var d = this.chart, e = this.distance, f = {}, g = c.h || 0, h, i = ["y", d.chartHeight, b, c.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight], j = ["x", d.chartWidth, a, c.plotX + d.plotLeft, d.plotLeft, d.plotLeft + d.plotWidth], k = !this.followPointer && q(c.ttBelow, !d.inverted === !!c.negative), l = function (a, b, c, d, h, i) {
			var j = c < d - e, m = d + e + c < b, l = d - e - c;
			d += e;
			if (k && m) {
				f[a] = d;
			} else {
				if (!k && j) {
					f[a] = l;
				} else {
					if (j) {
						f[a] = G(i - c, l - g < 0 ? l : l - g);
					} else {
						if (m) {
							f[a] = w(h, d + g + c > b ? d : d + g);
						} else {
							return !1;
						}
					}
				}
			}
		}, m = function (a, b, c, d) {
			var g;
			d < e || d > b - e ? g = !1 : f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2;
			return g;
		}, n = function (a) {
			var b = i;
			i = j;
			j = b;
			h = a;
		}, p = function () {
			l.apply(0, i) !== !1 ? m.apply(0, j) === !1 && !h && (n(!0), p()) : h ? f.x = f.y = 0 : (n(!0), p());
		};
		(d.inverted || this.len > 1) && n();
		p();
		return f;
	}, defaultFormatter:function (a) {
		var b = this.points || ua(this), c;
		c = [a.tooltipFooterHeaderFormatter(b[0])];
		c = c.concat(a.bodyFormatter(b));
		c.push(a.tooltipFooterHeaderFormatter(b[0], !0));
		return c.join("");
	}, refresh:function (a, b) {
		var c = this.chart, d = this.label, e = this.options, f, g, h, i = {}, j, k = [];
		j = e.formatter || this.defaultFormatter;
		var i = c.hoverPoints, l, m = this.shared;
		clearTimeout(this.hideTimer);
		this.followPointer = ua(a)[0].series.tooltipOptions.followPointer;
		h = this.getAnchor(a, b);
		f = h[0];
		g = h[1];
		m && (!a.series || !a.series.noSharedTooltip) ? (c.hoverPoints = a, i && o(i, function (a) {
			a.setState();
		}), o(a, function (a) {
			a.setState("hover");
			k.push(a.getLabelConfig());
		}), i = {x:a[0].category, y:a[0].y}, i.points = k, this.len = k.length, a = a[0]) : i = a.getLabelConfig();
		j = j.call(i, this);
		i = a.series;
		this.distance = q(i.tooltipOptions.distance, 16);
		j === !1 ? this.hide() : (this.isHidden && (Sa(d), d.attr("opacity", 1).show()), d.attr({text:j}), l = e.borderColor || a.color || i.color || "#606060", d.attr({stroke:l}), this.updatePosition({plotX:f, plotY:g, negative:a.negative, ttBelow:a.ttBelow, h:h[2] || 0}), this.isHidden = !1);
		O(c, "tooltipRefresh", {text:j, x:f + c.plotLeft, y:g + c.plotTop, borderColor:l});
	}, updatePosition:function (a) {
		var b = this.chart, c = this.label, c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
		this.move(y(c.x), y(c.y || 0), a.plotX + b.plotLeft, a.plotY + b.plotTop);
	}, getXDateFormat:function (a, b, c) {
		var d, b = b.dateTimeLabelFormats, e = c && c.closestPointRange, f, g = {millisecond:15, second:12, minute:9, hour:6, day:3}, h, i = "millisecond";
		if (e) {
			h = na("%m-%d %H:%M", a.x);
			for (f in M) {
				if (e === M.week && +na("%w", a.x) === c.options.startOfWeek && h.substr(6) === "00:00:00.000") {
					f = "week";
					break;
				}
				if (M[f] > e) {
					f = i;
					break;
				}
				if (g[f] && h.substr(g[f]) !== "01-01 00:00:00.000".substr(g[f])) {
					break;
				}
				f !== "week" && (i = f);
			}
			f && (d = b[f]);
		} else {
			d = b.day;
		}
		return d || b.year;
	}, tooltipFooterHeaderFormatter:function (a, b) {
		var c = b ? "footer" : "header", d = a.series, e = d.tooltipOptions, f = e.xDateFormat, g = d.xAxis, h = g && g.options.type === "datetime" && C(a.key), c = e[c + "Format"];
		h && !f && (f = this.getXDateFormat(a, e, g));
		h && f && (c = c.replace("{point.key}", "{point.key:" + f + "}"));
		return La(c, {point:a, series:d});
	}, bodyFormatter:function (a) {
		return ta(a, function (a) {
			var c = a.series.tooltipOptions;
			return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat);
		});
	}};
	var oa;
	cb = H && H.documentElement.ontouchstart !== t;
	var Ya = B.Pointer = function (a, b) {
		this.init(a, b);
	};
	Ya.prototype = {init:function (a, b) {
		var c = b.chart, d = c.events, e = qa ? "" : c.zoomType, c = a.inverted, f;
		this.options = b;
		this.chart = a;
		this.zoomX = f = /x/.test(e);
		this.zoomY = e = /y/.test(e);
		this.zoomHor = f && !c || e && c;
		this.zoomVert = e && !c || f && c;
		this.hasZoom = f || e;
		this.runChartClick = d && !!d.click;
		this.pinchDown = [];
		this.lastValidTouch = {};
		if (B.Tooltip && b.tooltip.enabled) {
			a.tooltip = new Lb(a, b.tooltip), this.followTouchMove = q(b.tooltip.followTouchMove, !0);
		}
		this.setDOMEvents();
	}, normalize:function (a, b) {
		var c, d, a = a || L.event;
		if (!a.target) {
			a.target = a.srcElement;
		}
		d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
		if (!b) {
			this.chartPosition = b = Jb(this.chart.container);
		}
		d.pageX === t ? (c = w(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);
		return A(a, {chartX:y(c), chartY:y(d)});
	}, getCoordinates:function (a) {
		var b = {xAxis:[], yAxis:[]};
		o(this.chart.axes, function (c) {
			b[c.isXAxis ? "xAxis" : "yAxis"].push({axis:c, value:c.toValue(a[c.horiz ? "chartX" : "chartY"])});
		});
		return b;
	}, runPointActions:function (a) {
		var b = this.chart, c = b.series, d = b.tooltip, e = d ? d.shared : !1, f = b.hoverPoint, g = b.hoverSeries, h, i = [Number.MAX_VALUE, Number.MAX_VALUE], j, k, l = [], m = [], n;
		if (!e && !g) {
			for (h = 0; h < c.length; h++) {
				if (c[h].directTouch || !c[h].options.stickyTracking) {
					c = [];
				}
			}
		}
		g && (e ? g.noSharedTooltip : g.directTouch) && f ? m = [f] : (o(c, function (b) {
			j = b.noSharedTooltip && e;
			k = !e && b.directTouch;
			b.visible && !j && !k && q(b.options.enableMouseTracking, !0) && (n = b.searchPoint(a, !j && b.kdDimensions === 1)) && l.push(n);
		}), o(l, function (a) {
			a && o(["dist", "distX"], function (b, c) {
				if (C(a[b])) {
					var d = a[b] === i[c] && a.series.group.zIndex >= m[c].series.group.zIndex;
					if (a[b] < i[c] || d) {
						i[c] = a[b], m[c] = a;
					}
				}
			});
		}));
		if (e) {
			for (h = l.length; h--; ) {
				(l[h].clientX !== m[1].clientX || l[h].series.noSharedTooltip) && l.splice(h, 1);
			}
		}
		if (m[0] && (m[0] !== this.prevKDPoint || d && d.isHidden)) {
			if (e && !m[0].series.noSharedTooltip) {
				l.length && d && d.refresh(l, a), o(l, function (b) {
					b.onMouseOver(a, b !== (g && g.directTouch && f || m[0]));
				}), this.prevKDPoint = m[1];
			} else {
				d && d.refresh(m[0], a);
				if (!g || !g.directTouch) {
					m[0].onMouseOver(a);
				}
				this.prevKDPoint = m[0];
			}
		} else {
			c = g && g.tooltipOptions.followPointer, d && c && !d.isHidden && (c = d.getAnchor([{}], a), d.updatePosition({plotX:c[0], plotY:c[1]}));
		}
		if (!this._onDocumentMouseMove) {
			this._onDocumentMouseMove = function (a) {
				if ($[oa]) {
					$[oa].pointer.onDocumentMouseMove(a);
				}
			}, E(H, "mousemove", this._onDocumentMouseMove);
		}
		o(e ? l : [q(f, m[1])], function (c) {
			o(b.axes, function (b) {
				(!c || c.series[b.coll] === b) && b.drawCrosshair(a, c);
			});
		});
	}, reset:function (a, b) {
		var c = this.chart, d = c.hoverSeries, e = c.hoverPoint, f = c.hoverPoints, g = c.tooltip, h = g && g.shared ? f : e;
		a && h && o(ua(h), function (b) {
			b.series.isCartesian && b.plotX === void 0 && (a = !1);
		});
		if (a) {
			g && h && (g.refresh(h), e && (e.setState(e.state, !0), o(c.axes, function (a) {
				q(a.crosshair && a.crosshair.snap, !0) ? a.drawCrosshair(null, e) : a.hideCrosshair();
			})));
		} else {
			if (e) {
				e.onMouseOut();
			}
			f && o(f, function (a) {
				a.setState();
			});
			if (d) {
				d.onMouseOut();
			}
			g && g.hide(b);
			if (this._onDocumentMouseMove) {
				T(H, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null;
			}
			o(c.axes, function (a) {
				a.hideCrosshair();
			});
			this.hoverX = c.hoverPoints = c.hoverPoint = null;
		}
	}, scaleGroups:function (a, b) {
		var c = this.chart, d;
		o(c.series, function (e) {
			d = a || e.getPlotBox();
			e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d));
		});
		c.clipRect.attr(b || c.clipBox);
	}, dragStart:function (a) {
		var b = this.chart;
		b.mouseIsDown = a.type;
		b.cancelClick = !1;
		b.mouseDownX = this.mouseDownX = a.chartX;
		b.mouseDownY = this.mouseDownY = a.chartY;
	}, drag:function (a) {
		var b = this.chart, c = b.options.chart, d = a.chartX, e = a.chartY, f = this.zoomHor, g = this.zoomVert, h = b.plotLeft, i = b.plotTop, j = b.plotWidth, k = b.plotHeight, l, m = this.selectionMarker, n = this.mouseDownX, p = this.mouseDownY, r = c.panKey && a[c.panKey + "Key"];
		if (!m || !m.touch) {
			if (d < h ? d = h : d > h + j && (d = h + j), e < i ? e = i : e > i + k && (e = i + k), this.hasDragged = Math.sqrt(Math.pow(n - d, 2) + Math.pow(p - e, 2)), this.hasDragged > 10) {
				l = b.isInsidePlot(n - h, p - i);
				if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !r && !m) {
					this.selectionMarker = m = b.renderer.rect(h, i, f ? 1 : j, g ? 1 : k, 0).attr({fill:c.selectionMarkerFill || "rgba(69,114,167,0.25)", zIndex:7}).add();
				}
				m && f && (d -= n, m.attr({width:S(d), x:(d > 0 ? 0 : d) + n}));
				m && g && (d = e - p, m.attr({height:S(d), y:(d > 0 ? 0 : d) + p}));
				l && !m && c.panning && b.pan(a, c.panning);
			}
		}
	}, drop:function (a) {
		var b = this, c = this.chart, d = this.hasPinched;
		if (this.selectionMarker) {
			var e = {originalEvent:a, xAxis:[], yAxis:[]}, f = this.selectionMarker, g = f.attr ? f.attr("x") : f.x, h = f.attr ? f.attr("y") : f.y, i = f.attr ? f.attr("width") : f.width, j = f.attr ? f.attr("height") : f.height, k;
			if (this.hasDragged || d) {
				o(c.axes, function (c) {
					if (c.zoomEnabled && v(c.min) && (d || b[{xAxis:"zoomX", yAxis:"zoomY"}[c.coll]])) {
						var f = c.horiz, n = a.type === "touchend" ? c.minPixelPadding : 0, p = c.toValue((f ? g : h) + n), f = c.toValue((f ? g + i : h + j) - n);
						e[c.coll].push({axis:c, min:G(p, f), max:w(p, f)});
						k = !0;
					}
				}), k && O(c, "selection", e, function (a) {
					c.zoom(A(a, d ? {animation:!1} : null));
				});
			}
			this.selectionMarker = this.selectionMarker.destroy();
			d && this.scaleGroups();
		}
		if (c) {
			N(c.container, {cursor:c._cursor}), c.cancelClick = this.hasDragged > 10, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [];
		}
	}, onContainerMouseDown:function (a) {
		a = this.normalize(a);
		a.preventDefault && a.preventDefault();
		this.dragStart(a);
	}, onDocumentMouseUp:function (a) {
		$[oa] && $[oa].pointer.drop(a);
	}, onDocumentMouseMove:function (a) {
		var b = this.chart, c = this.chartPosition, a = this.normalize(a, c);
		c && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset();
	}, onContainerMouseLeave:function (a) {
		var b = $[oa];
		if (b && (a.relatedTarget || a.toElement)) {
			b.pointer.reset(), b.pointer.chartPosition = null;
		}
	}, onContainerMouseMove:function (a) {
		var b = this.chart;
		if (!v(oa) || !$[oa] || !$[oa].mouseIsDown) {
			oa = b.index;
		}
		a = this.normalize(a);
		a.returnValue = !1;
		b.mouseIsDown === "mousedown" && this.drag(a);
		(this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)) && !b.openMenu && this.runPointActions(a);
	}, inClass:function (a, b) {
		for (var c; a; ) {
			if (c = X(a, "class")) {
				if (c.indexOf(b) !== -1) {
					return !0;
				}
				if (c.indexOf("highcharts-container") !== -1) {
					return !1;
				}
			}
			a = a.parentNode;
		}
	}, onTrackerMouseOut:function (a) {
		var b = this.chart.hoverSeries, a = a.relatedTarget || a.toElement;
		if (b && a && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && !this.inClass(a, "highcharts-series-" + b.index)) {
			b.onMouseOut();
		}
	}, onContainerClick:function (a) {
		var b = this.chart, c = b.hoverPoint, d = b.plotLeft, e = b.plotTop, a = this.normalize(a);
		b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (O(c.series, "click", A(a, {point:c})), b.hoverPoint && c.firePointEvent("click", a)) : (A(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && O(b, "click", a)));
	}, setDOMEvents:function () {
		var a = this, b = a.chart.container;
		b.onmousedown = function (b) {
			a.onContainerMouseDown(b);
		};
		b.onmousemove = function (b) {
			a.onContainerMouseMove(b);
		};
		b.onclick = function (b) {
			a.onContainerClick(b);
		};
		E(b, "mouseleave", a.onContainerMouseLeave);
		kb === 1 && E(H, "mouseup", a.onDocumentMouseUp);
		if (cb) {
			b.ontouchstart = function (b) {
				a.onContainerTouchStart(b);
			}, b.ontouchmove = function (b) {
				a.onContainerTouchMove(b);
			}, kb === 1 && E(H, "touchend", a.onDocumentTouchEnd);
		}
	}, destroy:function () {
		var a;
		T(this.chart.container, "mouseleave", this.onContainerMouseLeave);
		kb || (T(H, "mouseup", this.onDocumentMouseUp), T(H, "touchend", this.onDocumentTouchEnd));
		clearInterval(this.tooltipTimeout);
		for (a in this) {
			this[a] = null;
		}
	}};
	A(B.Pointer.prototype, {pinchTranslate:function (a, b, c, d, e, f) {
		(this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
		(this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f);
	}, pinchTranslateDirection:function (a, b, c, d, e, f, g, h) {
		var i = this.chart, j = a ? "x" : "y", k = a ? "X" : "Y", l = "chart" + k, m = a ? "width" : "height", n = i["plot" + (a ? "Left" : "Top")], p, r, s = h || 1, q = i.inverted, o = i.bounds[a ? "h" : "v"], x = b.length === 1, D = b[0][l], v = c[0][l], w = !x && b[1][l], y = !x && c[1][l], t, c = function () {
			!x && S(D - w) > 20 && (s = h || S(v - y) / S(D - w));
			r = (n - v) / s + D;
			p = i["plot" + (a ? "Width" : "Height")] / s;
		};
		c();
		b = r;
		b < o.min ? (b = o.min, t = !0) : b + p > o.max && (b = o.max - p, t = !0);
		t ? (v -= 0.8 * (v - g[j][0]), x || (y -= 0.8 * (y - g[j][1])), c()) : g[j] = [v, y];
		q || (f[j] = r - n, f[m] = p);
		f = q ? 1 / s : s;
		e[m] = p;
		e[j] = b;
		d[q ? a ? "scaleY" : "scaleX" : "scale" + k] = s;
		d["translate" + k] = f * n + (v - f * D);
	}, pinch:function (a) {
		var b = this, c = b.chart, d = b.pinchDown, e = a.touches, f = e.length, g = b.lastValidTouch, h = b.hasZoom, i = b.selectionMarker, j = {}, k = f === 1 && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick), l = {};
		if (f > 1) {
			b.initiated = !0;
		}
		h && b.initiated && !k && a.preventDefault();
		ta(e, function (a) {
			return b.normalize(a);
		});
		if (a.type === "touchstart") {
			o(e, function (a, b) {
				d[b] = {chartX:a.chartX, chartY:a.chartY};
			}), g.x = [d[0].chartX, d[1] && d[1].chartX], g.y = [d[0].chartY, d[1] && d[1].chartY], o(c.axes, function (a) {
				if (a.zoomEnabled) {
					var b = c.bounds[a.horiz ? "h" : "v"], d = a.minPixelPadding, e = a.toPixels(q(a.options.min, a.dataMin)), f = a.toPixels(q(a.options.max, a.dataMax)), g = G(e, f), e = w(e, f);
					b.min = G(a.pos, g - d);
					b.max = w(a.pos + a.len, e + d);
				}
			}), b.res = !0;
		} else {
			if (d.length) {
				if (!i) {
					b.selectionMarker = i = A({destroy:ra, touch:!0}, c.plotBox);
				}
				b.pinchTranslate(d, e, j, i, l, g);
				b.hasPinched = h;
				b.scaleGroups(j, l);
				if (!h && b.followTouchMove && f === 1) {
					this.runPointActions(b.normalize(a));
				} else {
					if (b.res) {
						b.res = !1, this.reset(!1, 0);
					}
				}
			}
		}
	}, touch:function (a, b) {
		var c = this.chart, d;
		oa = c.index;
		if (a.touches.length === 1) {
			if (a = this.normalize(a), c.isInsidePlot(a.chartX - c.plotLeft, a.chartY - c.plotTop) && !c.openMenu) {
				b && this.runPointActions(a);
				if (a.type === "touchmove") {
					c = this.pinchDown, d = c[0] ? Math.sqrt(Math.pow(c[0].chartX - a.chartX, 2) + Math.pow(c[0].chartY - a.chartY, 2)) >= 4 : !1;
				}
				q(d, !0) && this.pinch(a);
			} else {
				b && this.reset();
			}
		} else {
			a.touches.length === 2 && this.pinch(a);
		}
	}, onContainerTouchStart:function (a) {
		this.touch(a, !0);
	}, onContainerTouchMove:function (a) {
		this.touch(a);
	}, onDocumentTouchEnd:function (a) {
		$[oa] && $[oa].pointer.drop(a);
	}});
	if (L.PointerEvent || L.MSPointerEvent) {
		var Ga = {}, Mb = !!L.PointerEvent, ac = function () {
			var a, b = [];
			b.item = function (a) {
				return this[a];
			};
			for (a in Ga) {
				Ga.hasOwnProperty(a) && b.push({pageX:Ga[a].pageX, pageY:Ga[a].pageY, target:Ga[a].target});
			}
			return b;
		}, Nb = function (a, b, c, d) {
			if ((a.pointerType === "touch" || a.pointerType === a.MSPOINTER_TYPE_TOUCH) && $[oa]) {
				d(a), d = $[oa].pointer, d[b]({type:c, target:a.currentTarget, preventDefault:ra, touches:ac()});
			}
		};
		A(Ya.prototype, {onContainerPointerDown:function (a) {
			Nb(a, "onContainerTouchStart", "touchstart", function (a) {
				Ga[a.pointerId] = {pageX:a.pageX, pageY:a.pageY, target:a.currentTarget};
			});
		}, onContainerPointerMove:function (a) {
			Nb(a, "onContainerTouchMove", "touchmove", function (a) {
				Ga[a.pointerId] = {pageX:a.pageX, pageY:a.pageY};
				if (!Ga[a.pointerId].target) {
					Ga[a.pointerId].target = a.currentTarget;
				}
			});
		}, onDocumentPointerUp:function (a) {
			Nb(a, "onDocumentTouchEnd", "touchend", function (a) {
				delete Ga[a.pointerId];
			});
		}, batchMSEvents:function (a) {
			a(this.chart.container, Mb ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
			a(this.chart.container, Mb ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
			a(H, Mb ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
		}});
		U(Ya.prototype, "init", function (a, b, c) {
			a.call(this, b, c);
			this.hasZoom && N(b.container, {"-ms-touch-action":"none", "touch-action":"none"});
		});
		U(Ya.prototype, "setDOMEvents", function (a) {
			a.apply(this);
			(this.hasZoom || this.followTouchMove) && this.batchMSEvents(E);
		});
		U(Ya.prototype, "destroy", function (a) {
			this.batchMSEvents(T);
			a.call(this);
		});
	}
	var ub = B.Legend = function (a, b) {
		this.init(a, b);
	};
	ub.prototype = {init:function (a, b) {
		var c = this, d = b.itemStyle, e = b.itemMarginTop || 0;
		this.options = b;
		if (b.enabled) {
			c.itemStyle = d, c.itemHiddenStyle = z(d, b.itemHiddenStyle), c.itemMarginTop = e, c.padding = d = q(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.symbolWidth = q(b.symbolWidth, 16), c.pages = [], c.render(), E(c.chart, "endResize", function () {
				c.positionCheckboxes();
			});
		}
	}, colorizeItem:function (a, b) {
		var c = this.options, d = a.legendItem, e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, h = b ? a.legendColor || a.color || "#CCC" : g, g = a.options && a.options.marker, i = {fill:h}, j;
		d && d.css({fill:c, color:c});
		e && e.attr({stroke:h});
		if (f) {
			if (g && f.isMarker) {
				for (j in i.stroke = h, g = a.convertAttribs(g), g) {
					d = g[j], d !== t && (i[j] = d);
				}
			}
			f.attr(i);
		}
	}, positionItem:function (a) {
		var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, e = d[0], d = d[1], f = a.checkbox;
		(a = a.legendGroup) && a.element && a.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
		if (f) {
			f.x = e, f.y = d;
		}
	}, destroyItem:function (a) {
		var b = a.checkbox;
		o(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) {
			a[b] && (a[b] = a[b].destroy());
		});
		b && Ua(a.checkbox);
	}, destroy:function () {
		var a = this.group, b = this.box;
		if (b) {
			this.box = b.destroy();
		}
		if (a) {
			this.group = a.destroy();
		}
	}, positionCheckboxes:function (a) {
		var b = this.group.alignAttr, c, d = this.clipHeight || this.legendHeight, e = this.titleHeight;
		if (b) {
			c = b.translateY, o(this.allItems, function (f) {
				var g = f.checkbox, h;
				g && (h = c + e + g.y + (a || 0) + 3, N(g, {left:b.translateX + f.checkboxOffset + g.x - 20 + "px", top:h + "px", display:h > c - 6 && h < c + d - 6 ? "" : "none"}));
			});
		}
	}, renderTitle:function () {
		var a = this.padding, b = this.options.title, c = 0;
		if (b.text) {
			if (!this.title) {
				this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({zIndex:1}).css(b.style).add(this.group);
			}
			a = this.title.getBBox();
			c = a.height;
			this.offsetWidth = a.width;
			this.contentGroup.attr({translateY:c});
		}
		this.titleHeight = c;
	}, setText:function (a) {
		var b = this.options;
		a.legendItem.attr({text:b.labelFormat ? La(b.labelFormat, a) : b.labelFormatter.call(a)});
	}, renderItem:function (a) {
		var b = this.chart, c = b.renderer, d = this.options, e = d.layout === "horizontal", f = this.symbolWidth, g = d.symbolPadding, h = this.itemStyle, i = this.itemHiddenStyle, j = this.padding, k = e ? q(d.itemDistance, 20) : 0, l = !d.rtl, m = d.width, n = d.itemMarginBottom || 0, p = this.itemMarginTop, r = this.initialItemX, s = a.legendItem, o = a.series && a.series.drawLegendSymbol ? a.series : a, u = o.options, u = this.createCheckboxForItem && u && u.showCheckbox, x = d.useHTML;
		if (!s) {
			a.legendGroup = c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);
			a.legendItem = s = c.text("", l ? f + g : -g, this.baseline || 0, x).css(z(a.visible ? h : i)).attr({align:l ? "left" : "right", zIndex:2}).add(a.legendGroup);
			if (!this.baseline) {
				this.fontMetrics = c.fontMetrics(h.fontSize, s), this.baseline = this.fontMetrics.f + 3 + p, s.attr("y", this.baseline);
			}
			o.drawLegendSymbol(this, a);
			this.setItemEvents && this.setItemEvents(a, s, x, h, i);
			u && this.createCheckboxForItem(a);
		}
		this.colorizeItem(a, a.visible);
		this.setText(a);
		c = s.getBBox();
		f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + k + (u ? 20 : 0);
		this.itemHeight = g = y(a.legendItemHeight || c.height);
		if (e && this.itemX - r + f > (m || b.chartWidth - 2 * j - r - d.x)) {
			this.itemX = r, this.itemY += p + this.lastLineHeight + n, this.lastLineHeight = 0;
		}
		this.maxItemWidth = w(this.maxItemWidth, f);
		this.lastItemY = p + this.itemY + n;
		this.lastLineHeight = w(g, this.lastLineHeight);
		a._legendItemPos = [this.itemX, this.itemY];
		e ? this.itemX += f : (this.itemY += p + g + n, this.lastLineHeight = g);
		this.offsetWidth = m || w((e ? this.itemX - r - k : f) + j, this.offsetWidth);
	}, getAllItems:function () {
		var a = [];
		o(this.chart.series, function (b) {
			var c = b.options;
			if (q(c.showInLegend, !v(c.linkedTo) ? t : !1, !0)) {
				a = a.concat(b.legendItems || (c.legendType === "point" ? b.data : b));
			}
		});
		return a;
	}, adjustMargins:function (a, b) {
		var c = this.chart, d = this.options, e = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0);
		this.display && !d.floating && o([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (f, g) {
			f.test(e) && !v(a[g]) && (c[tb[g]] = w(c[tb[g]], c.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * d[g % 2 ? "x" : "y"] + q(d.margin, 12) + b[g]));
		});
	}, render:function () {
		var a = this, b = a.chart, c = b.renderer, d = a.group, e, f, g, h, i = a.box, j = a.options, k = a.padding, l = j.borderWidth, m = j.backgroundColor;
		a.itemX = a.initialItemX;
		a.itemY = a.initialItemY;
		a.offsetWidth = 0;
		a.lastItemY = 0;
		if (!d) {
			a.group = d = c.g("legend").attr({zIndex:7}).add(), a.contentGroup = c.g().attr({zIndex:1}).add(d), a.scrollGroup = c.g().add(a.contentGroup);
		}
		a.renderTitle();
		e = a.getAllItems();
		nb(e, function (a, b) {
			return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
		});
		j.reversed && e.reverse();
		a.allItems = e;
		a.display = f = !!e.length;
		a.lastLineHeight = 0;
		o(e, function (b) {
			a.renderItem(b);
		});
		g = (j.width || a.offsetWidth) + k;
		h = a.lastItemY + a.lastLineHeight + a.titleHeight;
		h = a.handleOverflow(h);
		h += k;
		if (l || m) {
			if (i) {
				if (g > 0 && h > 0) {
					i[i.isNew ? "attr" : "animate"](i.crisp({width:g, height:h})), i.isNew = !1;
				}
			} else {
				a.box = i = c.rect(0, 0, g, h, j.borderRadius, l || 0).attr({stroke:j.borderColor, "stroke-width":l || 0, fill:m || "none"}).add(d).shadow(j.shadow), i.isNew = !0;
			}
			i[f ? "show" : "hide"]();
		}
		a.legendWidth = g;
		a.legendHeight = h;
		o(e, function (b) {
			a.positionItem(b);
		});
		f && d.align(A({width:g, height:h}, j), !0, "spacingBox");
		b.isResizing || this.positionCheckboxes();
	}, handleOverflow:function (a) {
		var b = this, c = this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding, g = e.maxHeight, h, i = this.clipRect, j = e.navigation, k = q(j.animation, !0), l = j.arrowSize || 12, m = this.nav, n = this.pages, p = this.padding, r, s = this.allItems, F = function (a) {
			i.attr({height:a});
			if (b.contentGroup.div) {
				b.contentGroup.div.style.clip = "rect(" + p + "px,9999px," + (p + a) + "px,0)";
			}
		};
		e.layout === "horizontal" && (f /= 2);
		g && (f = G(f, g));
		n.length = 0;
		if (a > f && j.enabled !== !1) {
			this.clipHeight = h = w(f - 20 - this.titleHeight - p, 0);
			this.currentPage = q(this.currentPage, 1);
			this.fullHeight = a;
			o(s, function (a, b) {
				var c = a._legendItemPos[1], d = y(a.legendItem.getBBox().height), e = n.length;
				if (!e || c - n[e - 1] > h && (r || c) !== n[e - 1]) {
					n.push(r || c), e++;
				}
				b === s.length - 1 && c + d - n[e - 1] > h && n.push(c);
				c !== r && (r = c);
			});
			if (!i) {
				i = b.clipRect = d.clipRect(0, p, 9999, 0), b.contentGroup.clip(i);
			}
			F(h);
			if (!m) {
				this.nav = m = d.g().attr({zIndex:1}).add(this.group), this.up = d.symbol("triangle", 0, 0, l, l).on("click", function () {
					b.scroll(-1, k);
				}).add(m), this.pager = d.text("", 15, 10).css(j.style).add(m), this.down = d.symbol("triangle-down", 0, 0, l, l).on("click", function () {
					b.scroll(1, k);
				}).add(m);
			}
			b.scroll(0);
			a = f;
		} else {
			if (m) {
				F(c.chartHeight), m.hide(), this.scrollGroup.attr({translateY:1}), this.clipHeight = 0;
			}
		}
		return a;
	}, scroll:function (a, b) {
		var c = this.pages, d = c.length, e = this.currentPage + a, f = this.clipHeight, g = this.options.navigation, h = g.activeColor, g = g.inactiveColor, i = this.pager, j = this.padding;
		e > d && (e = d);
		if (e > 0) {
			b !== t && $a(b, this.chart), this.nav.attr({translateX:j, translateY:f + this.padding + 7 + this.titleHeight, visibility:"visible"}), this.up.attr({fill:e === 1 ? g : h}).css({cursor:e === 1 ? "default" : "pointer"}), i.attr({text:e + "/" + d}), this.down.attr({x:18 + this.pager.getBBox().width, fill:e === d ? g : h}).css({cursor:e === d ? "default" : "pointer"}), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({translateY:c}), this.currentPage = e, this.positionCheckboxes(c);
		}
	}};
	aa = B.LegendSymbolMixin = {drawRectangle:function (a, b) {
		var c = a.options.symbolHeight || a.fontMetrics.f;
		b.legendSymbol = this.chart.renderer.rect(0, a.baseline - c + 1, a.symbolWidth, c, a.options.symbolRadius || 0).attr({zIndex:3}).add(b.legendGroup);
	}, drawLineMarker:function (a) {
		var b = this.options, c = b.marker, d = a.symbolWidth, e = this.chart.renderer, f = this.legendGroup, a = a.baseline - y(a.fontMetrics.b * 0.3), g;
		if (b.lineWidth) {
			g = {"stroke-width":b.lineWidth};
			if (b.dashStyle) {
				g.dashstyle = b.dashStyle;
			}
			this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f);
		}
		if (c && c.enabled !== !1) {
			b = c.radius, this.legendSymbol = c = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b, c).add(f), c.isMarker = !0;
		}
	}};
	(/Trident\/7\.0/.test(Na) || Wa) && U(ub.prototype, "positionItem", function (a, b) {
		var c = this, d = function () {
			b._legendItemPos && a.call(c, b);
		};
		d();
		setTimeout(d);
	});
	var Ba = B.Chart = function () {
		this.getArgs.apply(this, arguments);
	};
	B.chart = function (a, b, c) {
		return new Ba(a, b, c);
	};
	Ba.prototype = {callbacks:[], getArgs:function () {
		var a = [].slice.call(arguments);
		if (Ca(a[0]) || a[0].nodeName) {
			this.renderTo = a.shift();
		}
		this.init(a[0], a[1]);
	}, init:function (a, b) {
		var c, d = a.series;
		a.series = null;
		c = z(R, a);
		c.series = a.series = d;
		this.userOptions = a;
		d = c.chart;
		this.margin = this.splashArray("margin", d);
		this.spacing = this.splashArray("spacing", d);
		var e = d.events;
		this.bounds = {h:{}, v:{}};
		this.callback = b;
		this.isResizing = 0;
		this.options = c;
		this.axes = [];
		this.series = [];
		this.hasCartesianSeries = d.showAxes;
		var f = this, g;
		f.index = $.length;
		$.push(f);
		kb++;
		d.reflow !== !1 && E(f, "load", function () {
			f.initReflow();
		});
		if (e) {
			for (g in e) {
				E(f, g, e[g]);
			}
		}
		f.xAxis = [];
		f.yAxis = [];
		f.animation = qa ? !1 : q(d.animation, !0);
		f.pointCount = f.colorCounter = f.symbolCounter = 0;
		f.firstRender();
	}, initSeries:function (a) {
		var b = this.options.chart;
		(b = I[a.type || b.type || b.defaultSeriesType]) || ga(17, !0);
		b = new b;
		b.init(this, a);
		return b;
	}, isInsidePlot:function (a, b, c) {
		var d = c ? b : a, a = c ? a : b;
		return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight;
	}, redraw:function (a) {
		var b = this.axes, c = this.series, d = this.pointer, e = this.legend, f = this.isDirtyLegend, g, h, i = this.hasCartesianSeries, j = this.isDirtyBox, k = c.length, l = k, m = this.renderer, n = m.isHidden(), p = [];
		$a(a, this);
		n && this.cloneRenderTo();
		for (this.layOutTitles(); l--; ) {
			if (a = c[l], a.options.stacking && (g = !0, a.isDirty)) {
				h = !0;
				break;
			}
		}
		if (h) {
			for (l = k; l--; ) {
				if (a = c[l], a.options.stacking) {
					a.isDirty = !0;
				}
			}
		}
		o(c, function (a) {
			a.isDirty && a.options.legendType === "point" && (a.updateTotals && a.updateTotals(), f = !0);
			a.isDirtyData && O(a, "updatedData");
		});
		if (f && e.options.enabled) {
			e.render(), this.isDirtyLegend = !1;
		}
		g && this.getStacks();
		if (i && !this.isResizing) {
			this.maxTicks = null, o(b, function (a) {
				a.setScale();
			});
		}
		this.getMargins();
		i && (o(b, function (a) {
			a.isDirty && (j = !0);
		}), o(b, function (a) {
			var b = a.min + "," + a.max;
			if (a.extKey !== b) {
				a.extKey = b, p.push(function () {
					O(a, "afterSetExtremes", A(a.eventArgs, a.getExtremes()));
					delete a.eventArgs;
				});
			}
			(j || g) && a.redraw();
		}));
		j && this.drawChartBox();
		o(c, function (a) {
			a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw();
		});
		d && d.reset(!0);
		m.draw();
		O(this, "redraw");
		n && this.cloneRenderTo(!0);
		o(p, function (a) {
			a.call();
		});
	}, get:function (a) {
		var b = this.axes, c = this.series, d, e;
		for (d = 0; d < b.length; d++) {
			if (b[d].options.id === a) {
				return b[d];
			}
		}
		for (d = 0; d < c.length; d++) {
			if (c[d].options.id === a) {
				return c[d];
			}
		}
		for (d = 0; d < c.length; d++) {
			e = c[d].points || [];
			for (b = 0; b < e.length; b++) {
				if (e[b].id === a) {
					return e[b];
				}
			}
		}
		return null;
	}, getAxes:function () {
		var a = this, b = this.options, c = b.xAxis = ua(b.xAxis || {}), b = b.yAxis = ua(b.yAxis || {});
		o(c, function (a, b) {
			a.index = b;
			a.isX = !0;
		});
		o(b, function (a, b) {
			a.index = b;
		});
		c = c.concat(b);
		o(c, function (b) {
			new J(a, b);
		});
	}, getSelectedPoints:function () {
		var a = [];
		o(this.series, function (b) {
			a = a.concat(Fa(b.points || [], function (a) {
				return a.selected;
			}));
		});
		return a;
	}, getSelectedSeries:function () {
		return Fa(this.series, function (a) {
			return a.selected;
		});
	}, setTitle:function (a, b, c) {
		var g;
		var d = this, e = d.options, f;
		f = e.title = z(e.title, a);
		g = e.subtitle = z(e.subtitle, b), e = g;
		o([["title", a, f], ["subtitle", b, e]], function (a) {
			var b = a[0], c = d[b], e = a[1], a = a[2];
			c && e && (d[b] = c = c.destroy());
			a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({align:a.align, "class":"highcharts-" + b, zIndex:a.zIndex || 4}).css(a.style).add());
		});
		d.layOutTitles(c);
	}, layOutTitles:function (a) {
		var b = 0, c = this.title, d = this.subtitle, e = this.options, f = e.title, e = e.subtitle, g = this.renderer, h = this.spacingBox;
		if (c && (c.css({width:(f.width || h.width + f.widthAdjust) + "px"}).align(A({y:g.fontMetrics(f.style.fontSize, c).b - 3}, f), !1, h), !f.floating && !f.verticalAlign)) {
			b = c.getBBox().height;
		}
		d && (d.css({width:(e.width || h.width + e.widthAdjust) + "px"}).align(A({y:b + (f.margin - 13) + g.fontMetrics(e.style.fontSize, c).b}, e), !1, h), !e.floating && !e.verticalAlign && (b = Ea(b + d.getBBox().height)));
		c = this.titleOffset !== b;
		this.titleOffset = b;
		if (!this.isDirtyBox && c) {
			this.isDirtyBox = c, this.hasRendered && q(a, !0) && this.isDirtyBox && this.redraw();
		}
	}, getChartSize:function () {
		var a = this.options.chart, b = a.width, a = a.height, c = this.renderToClone || this.renderTo;
		if (!v(b)) {
			this.containerWidth = wa(c, "width");
		}
		if (!v(a)) {
			this.containerHeight = wa(c, "height");
		}
		this.chartWidth = w(0, b || this.containerWidth || 600);
		this.chartHeight = w(0, q(a, this.containerHeight > 19 ? this.containerHeight : 400));
	}, cloneRenderTo:function (a) {
		var b = this.renderToClone, c = this.container;
		a ? b && (this.renderTo.appendChild(c), Ua(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), N(b, {position:"absolute", top:"-9999px", display:"block"}), b.style.setProperty && b.style.setProperty("display", "block", "important"), H.body.appendChild(b), c && b.appendChild(c));
	}, getContainer:function () {
		var a, b = this.options, c = b.chart, d, e;
		a = this.renderTo;
		var f = "highcharts-" + Ib++;
		if (!a) {
			this.renderTo = a = c.renderTo;
		}
		if (Ca(a)) {
			this.renderTo = a = H.getElementById(a);
		}
		a || ga(13, !0);
		d = K(X(a, "data-highcharts-chart"));
		C(d) && $[d] && $[d].hasRendered && $[d].destroy();
		X(a, "data-highcharts-chart", this.index);
		a.innerHTML = "";
		!c.skipClone && !a.offsetWidth && this.cloneRenderTo();
		this.getChartSize();
		d = this.chartWidth;
		e = this.chartHeight;
		this.container = a = fa(Va, {className:"highcharts-container" + (c.className ? " " + c.className : ""), id:f}, A({position:"relative", overflow:"hidden", width:d + "px", height:e + "px", textAlign:"left", lineHeight:"normal", zIndex:0, "-webkit-tap-highlight-color":"rgba(0,0,0,0)"}, c.style), this.renderToClone || a);
		this._cursor = a.style.cursor;
		this.renderer = new (B[c.renderer] || Xa)(a, d, e, c.style, c.forExport, b.exporting && b.exporting.allowHTML);
		qa && this.renderer.create(this, a, d, e);
		this.renderer.chartIndex = this.index;
	}, getMargins:function (a) {
		var b = this.spacing, c = this.margin, d = this.titleOffset;
		this.resetMargins();
		if (d && !v(c[0])) {
			this.plotTop = w(this.plotTop, d + this.options.title.margin + b[0]);
		}
		this.legend.adjustMargins(c, b);
		this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
		this.extraTopMargin && (this.plotTop += this.extraTopMargin);
		a || this.getAxisMargins();
	}, getAxisMargins:function () {
		var a = this, b = a.axisOffset = [0, 0, 0, 0], c = a.margin;
		a.hasCartesianSeries && o(a.axes, function (a) {
			a.visible && a.getOffset();
		});
		o(tb, function (d, e) {
			v(c[e]) || (a[d] += b[e]);
		});
		a.setChartSize();
	}, reflow:function (a) {
		var b = this, c = b.options.chart, d = b.renderTo, e = c.width || wa(d, "width"), f = c.height || wa(d, "height"), c = a ? a.target : L;
		if (!b.hasUserSize && !b.isPrinting && e && f && (c === L || c === H)) {
			if (e !== b.containerWidth || f !== b.containerHeight) {
				clearTimeout(b.reflowTimeout), b.reflowTimeout = Za(function () {
					if (b.container) {
						b.setSize(e, f, !1), b.hasUserSize = null;
					}
				}, a ? 100 : 0);
			}
			b.containerWidth = e;
			b.containerHeight = f;
		}
	}, initReflow:function () {
		var a = this, b = function (b) {
			a.reflow(b);
		};
		E(L, "resize", b);
		E(a, "destroy", function () {
			T(L, "resize", b);
		});
	}, setSize:function (a, b, c) {
		var d = this, e, f, g = d.renderer;
		d.isResizing += 1;
		$a(c, d);
		d.oldChartHeight = d.chartHeight;
		d.oldChartWidth = d.chartWidth;
		if (v(a)) {
			d.chartWidth = e = w(0, y(a)), d.hasUserSize = !!e;
		}
		if (v(b)) {
			d.chartHeight = f = w(0, y(b));
		}
		a = g.globalAnimation;
		(a ? db : N)(d.container, {width:e + "px", height:f + "px"}, a);
		d.setChartSize(!0);
		g.setSize(e, f, c);
		d.maxTicks = null;
		o(d.axes, function (a) {
			a.isDirty = !0;
			a.setScale();
		});
		o(d.series, function (a) {
			a.isDirty = !0;
		});
		d.isDirtyLegend = !0;
		d.isDirtyBox = !0;
		d.layOutTitles();
		d.getMargins();
		d.redraw(c);
		d.oldChartHeight = null;
		O(d, "resize");
		Za(function () {
			d && O(d, "endResize", null, function () {
				d.isResizing -= 1;
			});
		}, gb(a).duration);
	}, setChartSize:function (a) {
		var b = this.inverted, c = this.renderer, d = this.chartWidth, e = this.chartHeight, f = this.options.chart, g = this.spacing, h = this.clipOffset, i, j, k, l;
		this.plotLeft = i = y(this.plotLeft);
		this.plotTop = j = y(this.plotTop);
		this.plotWidth = k = w(0, y(d - i - this.marginRight));
		this.plotHeight = l = w(0, y(e - j - this.marginBottom));
		this.plotSizeX = b ? l : k;
		this.plotSizeY = b ? k : l;
		this.plotBorderWidth = f.plotBorderWidth || 0;
		this.spacingBox = c.spacingBox = {x:g[3], y:g[0], width:d - g[3] - g[1], height:e - g[0] - g[2]};
		this.plotBox = c.plotBox = {x:i, y:j, width:k, height:l};
		d = 2 * V(this.plotBorderWidth / 2);
		b = Ea(w(d, h[3]) / 2);
		c = Ea(w(d, h[0]) / 2);
		this.clipBox = {x:b, y:c, width:V(this.plotSizeX - w(d, h[1]) / 2 - b), height:w(0, V(this.plotSizeY - w(d, h[2]) / 2 - c))};
		a || o(this.axes, function (a) {
			a.setAxisSize();
			a.setAxisTranslation();
		});
	}, resetMargins:function () {
		var a = this;
		o(tb, function (b, c) {
			a[b] = q(a.margin[c], a.spacing[c]);
		});
		a.axisOffset = [0, 0, 0, 0];
		a.clipOffset = [0, 0, 0, 0];
	}, drawChartBox:function () {
		var a = this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, e = this.chartBackground, f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, i = a.borderWidth || 0, j = a.backgroundColor, k = a.plotBackgroundColor, l = a.plotBackgroundImage, m = a.plotBorderWidth || 0, n, p = this.plotLeft, r = this.plotTop, s = this.plotWidth, q = this.plotHeight, o = this.plotBox, x = this.clipRect, D = this.clipBox;
		n = i + (a.shadow ? 8 : 0);
		if (i || j) {
			if (e) {
				e.animate(e.crisp({width:c - n, height:d - n}));
			} else {
				e = {fill:j || "none"};
				if (i) {
					e.stroke = a.borderColor, e["stroke-width"] = i;
				}
				this.chartBackground = b.rect(n / 2, n / 2, c - n, d - n, a.borderRadius, i).attr(e).addClass("highcharts-background").add().shadow(a.shadow);
			}
		}
		if (k) {
			f ? f.animate(o) : this.plotBackground = b.rect(p, r, s, q, 0).attr({fill:k}).add().shadow(a.plotShadow);
		}
		if (l) {
			h ? h.animate(o) : this.plotBGImage = b.image(l, p, r, s, q).add();
		}
		x ? x.animate({width:D.width, height:D.height}) : this.clipRect = b.clipRect(D);
		if (m) {
			g ? (g.strokeWidth = -m, g.animate(g.crisp({x:p, y:r, width:s, height:q}))) : this.plotBorder = b.rect(p, r, s, q, 0, -m).attr({stroke:a.plotBorderColor, "stroke-width":m, fill:"none", zIndex:1}).add();
		}
		this.isDirtyBox = !1;
	}, propFromSeries:function () {
		var a = this, b = a.options.chart, c, d = a.options.series, e, f;
		o(["inverted", "angular", "polar"], function (g) {
			c = I[b.type || b.defaultSeriesType];
			f = a[g] || b[g] || c && c.prototype[g];
			for (e = d && d.length; !f && e--; ) {
				(c = I[d[e].type]) && c.prototype[g] && (f = !0);
			}
			a[g] = f;
		});
	}, linkSeries:function () {
		var a = this, b = a.series;
		o(b, function (a) {
			a.linkedSeries.length = 0;
		});
		o(b, function (b) {
			var d = b.options.linkedTo;
			if (Ca(d) && (d = d === ":previous" ? a.series[b.index - 1] : a.get(d))) {
				d.linkedSeries.push(b), b.linkedParent = d, b.visible = q(b.options.visible, d.options.visible, b.visible);
			}
		});
	}, renderSeries:function () {
		o(this.series, function (a) {
			a.translate();
			a.render();
		});
	}, renderLabels:function () {
		var a = this, b = a.options.labels;
		b.items && o(b.items, function (c) {
			var d = A(b.style, c.style), e = K(d.left) + a.plotLeft, f = K(d.top) + a.plotTop + 12;
			delete d.left;
			delete d.top;
			a.renderer.text(c.html, e, f).attr({zIndex:2}).css(d).add();
		});
	}, render:function () {
		var a = this.axes, b = this.renderer, c = this.options, d, e, f, g;
		this.setTitle();
		this.legend = new ub(this, c.legend);
		this.getStacks && this.getStacks();
		this.getMargins(!0);
		this.setChartSize();
		d = this.plotWidth;
		e = this.plotHeight -= 21;
		o(a, function (a) {
			a.setScale();
		});
		this.getAxisMargins();
		f = d / this.plotWidth > 1.1;
		g = e / this.plotHeight > 1.05;
		if (f || g) {
			this.maxTicks = null, o(a, function (a) {
				(a.horiz && f || !a.horiz && g) && a.setTickInterval(!0);
			}), this.getMargins();
		}
		this.drawChartBox();
		this.hasCartesianSeries && o(a, function (a) {
			a.visible && a.render();
		});
		if (!this.seriesGroup) {
			this.seriesGroup = b.g("series-group").attr({zIndex:3}).add();
		}
		this.renderSeries();
		this.renderLabels();
		this.showCredits(c.credits);
		this.hasRendered = !0;
	}, showCredits:function (a) {
		if (a.enabled && !this.credits) {
			this.credits = this.renderer.text(a.text, 0, 0).on("click", function () {
				if (a.href) {
					L.location.href = a.href;
				}
			}).attr({align:a.position.align, zIndex:8}).css(a.style).add().align(a.position);
		}
	}, destroy:function () {
		var a = this, b = a.axes, c = a.series, d = a.container, e, f = d && d.parentNode;
		O(a, "destroy");
		$[a.index] = t;
		kb--;
		a.renderTo.removeAttribute("data-highcharts-chart");
		T(a);
		for (e = b.length; e--; ) {
			b[e] = b[e].destroy();
		}
		for (e = c.length; e--; ) {
			c[e] = c[e].destroy();
		}
		o("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function (b) {
			var c = a[b];
			c && c.destroy && (a[b] = c.destroy());
		});
		if (d) {
			d.innerHTML = "", T(d), f && Ua(d);
		}
		for (e in a) {
			delete a[e];
		}
	}, isReadyToRender:function () {
		var a = this;
		return !ja && L == L.top && H.readyState !== "complete" || qa && !L.canvg ? (qa ? Wb.push(function () {
			a.firstRender();
		}, a.options.global.canvasToolsURL) : H.attachEvent("onreadystatechange", function () {
			H.detachEvent("onreadystatechange", a.firstRender);
			H.readyState === "complete" && a.firstRender();
		}), !1) : !0;
	}, firstRender:function () {
		var a = this, b = a.options;
		if (a.isReadyToRender()) {
			a.getContainer();
			O(a, "init");
			a.resetMargins();
			a.setChartSize();
			a.propFromSeries();
			a.getAxes();
			o(b.series || [], function (b) {
				a.initSeries(b);
			});
			a.linkSeries();
			O(a, "beforeRender");
			if (B.Pointer) {
				a.pointer = new Ya(a, b);
			}
			a.render();
			a.renderer.draw();
			if (!a.renderer.imgCount && a.onload) {
				a.onload();
			}
			a.cloneRenderTo(!0);
		}
	}, onload:function () {
		var a = this;
		o([this.callback].concat(this.callbacks), function (b) {
			b && a.index !== void 0 && b.apply(a, [a]);
		});
		O(a, "load");
		this.onload = null;
	}, splashArray:function (a, b) {
		var c = b[a], c = ea(c) ? c : [c, c, c, c];
		return [q(b[a + "Top"], c[0]), q(b[a + "Right"], c[1]), q(b[a + "Bottom"], c[2]), q(b[a + "Left"], c[3])];
	}};
	var bc = B.CenteredSeriesMixin = {getCenter:function () {
		var a = this.options, b = this.chart, c = 2 * (a.slicedOffset || 0), d = b.plotWidth - 2 * c, b = b.plotHeight - 2 * c, e = a.center, e = [q(e[0], "50%"), q(e[1], "50%"), a.size || "100%", a.innerSize || 0], f = G(d, b), g, h;
		for (g = 0; g < 4; ++g) {
			h = e[g], a = g < 2 || g === 2 && /%$/.test(h), e[g] = (/%$/.test(h) ? [d, b, f, e[2]][g] * parseFloat(h) / 100 : parseFloat(h)) + (a ? c : 0);
		}
		e[3] > e[2] && (e[3] = e[2]);
		return e;
	}}, Ha = function () {
	};
	Ha.prototype = {init:function (a, b, c) {
		this.series = a;
		this.color = a.color;
		this.applyOptions(b, c);
		this.pointAttr = {};
		if (a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length)) {
			a.colorCounter = 0;
		}
		a.chart.pointCount++;
		return this;
	}, applyOptions:function (a, b) {
		var c = this.series, d = c.options.pointValKey || c.pointValKey, a = Ha.prototype.optionsToObject.call(this, a);
		A(this, a);
		this.options = this.options ? A(this.options, a) : a;
		if (d) {
			this.y = this[d];
		}
		this.isNull = this.x === null || this.y === null;
		if (this.x === void 0 && c) {
			this.x = b === void 0 ? c.autoIncrement() : b;
		}
		return this;
	}, optionsToObject:function (a) {
		var b = {}, c = this.series, d = c.options.keys, e = d || c.pointArrayMap || ["y"], f = e.length, g = 0, h = 0;
		if (C(a) || a === null) {
			b[e[0]] = a;
		} else {
			if (Ja(a)) {
				if (!d && a.length > f) {
					c = typeof a[0];
					if (c === "string") {
						b.name = a[0];
					} else {
						if (c === "number") {
							b.x = a[0];
						}
					}
					g++;
				}
				for (; h < f; ) {
					if (!d || a[g] !== void 0) {
						b[e[h]] = a[g];
					}
					g++;
					h++;
				}
			} else {
				if (typeof a === "object") {
					b = a;
					if (a.dataLabels) {
						c._hasPointLabels = !0;
					}
					if (a.marker) {
						c._hasPointMarkers = !0;
					}
				}
			}
		}
		return b;
	}, destroy:function () {
		var a = this.series.chart, b = a.hoverPoints, c;
		a.pointCount--;
		if (b && (this.setState(), za(b, this), !b.length)) {
			a.hoverPoints = null;
		}
		if (this === a.hoverPoint) {
			this.onMouseOut();
		}
		if (this.graphic || this.dataLabel) {
			T(this), this.destroyElements();
		}
		this.legendItem && a.legend.destroyItem(this);
		for (c in this) {
			this[c] = null;
		}
	}, destroyElements:function () {
		for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], b, c = 6; c--; ) {
			b = a[c], this[b] && (this[b] = this[b].destroy());
		}
	}, getLabelConfig:function () {
		return {x:this.category, y:this.y, color:this.color, key:this.name || this.category, series:this.series, point:this, percentage:this.percentage, total:this.total || this.stackTotal};
	}, tooltipFormatter:function (a) {
		var b = this.series, c = b.tooltipOptions, d = q(c.valueDecimals, ""), e = c.valuePrefix || "", f = c.valueSuffix || "";
		o(b.pointArrayMap || ["y"], function (b) {
			b = "{point." + b;
			if (e || f) {
				a = a.replace(b + "}", e + b + "}" + f);
			}
			a = a.replace(b + "}", b + ":,." + d + "f}");
		});
		return La(a, {point:this, series:this.series});
	}, firePointEvent:function (a, b, c) {
		var d = this, e = this.series.options;
		(e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
		a === "click" && e.allowPointSelect && (c = function (a) {
			d.select && d.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
		});
		O(this, a, b, c);
	}, visible:!0};
	var P = B.Series = function () {
	};
	P.prototype = {isCartesian:!0, type:"line", pointClass:Ha, sorted:!0, requireSorting:!0, pointAttrToOptions:{stroke:"lineColor", "stroke-width":"lineWidth", fill:"fillColor", r:"radius"}, directTouch:!1, axisTypes:["xAxis", "yAxis"], colorCounter:0, parallelArrays:["x", "y"], init:function (a, b) {
		var c = this, d, e, f = a.series, g = function (a, b) {
			return q(a.options.index, a._i) - q(b.options.index, b._i);
		};
		c.chart = a;
		c.options = b = c.setOptions(b);
		c.linkedSeries = [];
		c.bindAxes();
		A(c, {name:b.name, state:"", pointAttr:{}, visible:b.visible !== !1, selected:b.selected === !0});
		if (qa) {
			b.animation = !1;
		}
		e = b.events;
		for (d in e) {
			E(c, d, e[d]);
		}
		if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) {
			a.runTrackerClick = !0;
		}
		c.getColor();
		c.getSymbol();
		o(c.parallelArrays, function (a) {
			c[a + "Data"] = [];
		});
		c.setData(b.data, !1);
		if (c.isCartesian) {
			a.hasCartesianSeries = !0;
		}
		f.push(c);
		c._i = f.length - 1;
		nb(f, g);
		this.yAxis && nb(this.yAxis.series, g);
		o(f, function (a, b) {
			a.index = b;
			a.name = a.name || "Series " + (b + 1);
		});
	}, bindAxes:function () {
		var a = this, b = a.options, c = a.chart, d;
		o(a.axisTypes || [], function (e) {
			o(c[e], function (c) {
				d = c.options;
				if (b[e] === d.index || b[e] !== t && b[e] === d.id || b[e] === t && d.index === 0) {
					c.series.push(a), a[e] = c, c.isDirty = !0;
				}
			});
			!a[e] && a.optionalAxis !== e && ga(18, !0);
		});
	}, updateParallelArrays:function (a, b) {
		var c = a.series, d = arguments, e = C(b) ? function (d) {
			var e = d === "y" && c.toYData ? c.toYData(a) : a[d];
			c[d + "Data"][b] = e;
		} : function (a) {
			Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2));
		};
		o(c.parallelArrays, e);
	}, autoIncrement:function () {
		var a = this.options, b = this.xIncrement, c, d = a.pointIntervalUnit, b = q(b, a.pointStart, 0);
		this.pointInterval = c = q(this.pointInterval, a.pointInterval, 1);
		d && (a = new ba(b), d === "day" ? a = +a[qb](a[ab]() + c) : d === "month" ? a = +a[Eb](a[hb]() + c) : d === "year" && (a = +a[Fb](a[ib]() + c)), c = a - b);
		this.xIncrement = b + c;
		return b;
	}, setOptions:function (a) {
		var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type];
		this.userOptions = a;
		c = z(e, c.series, a);
		this.tooltipOptions = z(R.tooltip, R.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
		e.marker === null && delete c.marker;
		this.zoneAxis = c.zoneAxis;
		a = this.zones = (c.zones || []).slice();
		if ((c.negativeColor || c.negativeFillColor) && !c.zones) {
			a.push({value:c[this.zoneAxis + "Threshold"] || c.threshold || 0, color:c.negativeColor, fillColor:c.negativeFillColor});
		}
		a.length && v(a[a.length - 1].value) && a.push({color:this.color, fillColor:this.fillColor});
		return c;
	}, getCyclic:function (a, b, c) {
		var d = this.userOptions, e = "_" + a + "Index", f = a + "Counter";
		b || (v(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
		this[a] = b;
	}, getColor:function () {
		this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || W[this.type].color, this.chart.options.colors);
	}, getSymbol:function () {
		var a = this.options.marker;
		this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
		if (/^url/.test(this.symbol)) {
			a.radius = 0;
		}
	}, drawLegendSymbol:aa.drawLineMarker, setData:function (a, b, c, d) {
		var e = this, f = e.points, g = f && f.length || 0, h, i = e.options, j = e.chart, k = null, l = e.xAxis, m = l && !!l.categories, n = i.turboThreshold, p = this.xData, r = this.yData, s = (h = e.pointArrayMap) && h.length, a = a || [];
		h = a.length;
		b = q(b, !0);
		if (d !== !1 && h && g === h && !e.cropped && !e.hasGroupedData && e.visible) {
			o(a, function (a, b) {
				f[b].update && a !== i.data[b] && f[b].update(a, !1, null, !1);
			});
		} else {
			e.xIncrement = null;
			e.colorCounter = 0;
			o(this.parallelArrays, function (a) {
				e[a + "Data"].length = 0;
			});
			if (n && h > n) {
				for (c = 0; k === null && c < h; ) {
					k = a[c], c++;
				}
				if (C(k)) {
					m = q(i.pointStart, 0);
					k = q(i.pointInterval, 1);
					for (c = 0; c < h; c++) {
						p[c] = m, r[c] = a[c], m += k;
					}
					e.xIncrement = m;
				} else {
					if (Ja(k)) {
						if (s) {
							for (c = 0; c < h; c++) {
								k = a[c], p[c] = k[0], r[c] = k.slice(1, s + 1);
							}
						} else {
							for (c = 0; c < h; c++) {
								k = a[c], p[c] = k[0], r[c] = k[1];
							}
						}
					} else {
						ga(12);
					}
				}
			} else {
				for (c = 0; c < h; c++) {
					if (a[c] !== t && (k = {series:e}, e.pointClass.prototype.applyOptions.apply(k, [a[c]]), e.updateParallelArrays(k, c), m && v(k.name))) {
						l.names[k.x] = k.name;
					}
				}
			}
			Ca(r[0]) && ga(14, !0);
			e.data = [];
			e.options.data = e.userOptions.data = a;
			for (c = g; c--; ) {
				f[c] && f[c].destroy && f[c].destroy();
			}
			if (l) {
				l.minRange = l.userMinRange;
			}
			e.isDirty = e.isDirtyData = j.isDirtyBox = !0;
			c = !1;
		}
		i.legendType === "point" && (this.processData(), this.generatePoints());
		b && j.redraw(c);
	}, processData:function (a) {
		var b = this.xData, c = this.yData, d = b.length, e;
		e = 0;
		var f, g, h = this.xAxis, i, j = this.options;
		i = j.cropThreshold;
		var k = this.getExtremesFromAll || j.getExtremesFromAll, l = this.isCartesian, j = h && h.val2lin, m = h && h.isLog, n, p;
		if (l && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) {
			return !1;
		}
		if (h) {
			a = h.getExtremes(), n = a.min, p = a.max;
		}
		if (l && this.sorted && !k && (!i || d > i || this.forceCrop)) {
			if (b[d - 1] < n || b[0] > p) {
				b = [], c = [];
			} else {
				if (b[0] < n || b[d - 1] > p) {
					e = this.cropData(this.xData, this.yData, n, p), b = e.xData, c = e.yData, e = e.start, f = !0;
				}
			}
		}
		for (i = b.length || 1; --i; ) {
			d = m ? j(b[i]) - j(b[i - 1]) : b[i] - b[i - 1], d > 0 && (g === t || d < g) ? g = d : d < 0 && this.requireSorting && ga(15);
		}
		this.cropped = f;
		this.cropStart = e;
		this.processedXData = b;
		this.processedYData = c;
		this.closestPointRange = g;
	}, cropData:function (a, b, c, d) {
		var e = a.length, f = 0, g = e, h = q(this.cropShoulder, 1), i;
		for (i = 0; i < e; i++) {
			if (a[i] >= c) {
				f = w(0, i - h);
				break;
			}
		}
		for (c = i; c < e; c++) {
			if (a[c] > d) {
				g = c + h;
				break;
			}
		}
		return {xData:a.slice(f, g), yData:b.slice(f, g), start:f, end:g};
	}, generatePoints:function () {
		var a = this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, i, j = this.hasGroupedData, k, l = [], m;
		if (!b && !j) {
			b = [], b.length = a.length, b = this.data = b;
		}
		for (m = 0; m < g; m++) {
			i = h + m, j ? (l[m] = (new f).init(this, [d[m]].concat(ua(e[m]))), l[m].dataGroup = this.groupMap[m]) : (b[i] ? k = b[i] : a[i] !== t && (b[i] = k = (new f).init(this, a[i], d[m])), l[m] = k), l[m].index = i;
		}
		if (b && (g !== (c = b.length) || j)) {
			for (m = 0; m < c; m++) {
				if (m === h && !j && (m += g), b[m]) {
					b[m].destroyElements(), b[m].plotX = t;
				}
			}
		}
		this.data = b;
		this.points = l;
	}, getExtremes:function (a) {
		var b = this.yAxis, c = this.processedXData, d, e = [], f = 0;
		d = this.xAxis.getExtremes();
		var g = d.min, h = d.max, i, j, k, l, a = a || this.stackedYData || this.processedYData || [];
		d = a.length;
		for (l = 0; l < d; l++) {
			if (j = c[l], k = a[l], i = k !== null && k !== t && (!b.isLog || k.length || k > 0), j = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (c[l + 1] || j) >= g && (c[l - 1] || j) <= h, i && j) {
				if (i = k.length) {
					for (; i--; ) {
						k[i] !== null && (e[f++] = k[i]);
					}
				} else {
					e[f++] = k;
				}
			}
		}
		this.dataMin = Ma(e);
		this.dataMax = Da(e);
	}, translate:function () {
		this.processedXData || this.processData();
		this.generatePoints();
		for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, i = a.pointPlacement, j = i === "between" || C(i), k = a.threshold, l = a.startFromThreshold ? k : 0, m, n, p, r, s = Number.MAX_VALUE, a = 0; a < g; a++) {
			var o = f[a], u = o.x, x = o.y;
			n = o.low;
			var D = b && e.stacks[(this.negStacks && x < (l ? 0 : k) ? "-" : "") + this.stackKey];
			if (e.isLog && x !== null && x <= 0) {
				o.y = x = null, ga(10);
			}
			o.plotX = m = ka(G(w(-100000, c.translate(u, 0, 0, 0, 1, i, this.type === "flags")), 100000));
			if (b && this.visible && !o.isNull && D && D[u]) {
				r = this.getStackIndicator(r, u, this.index), D = D[u], x = D.points[r.key], n = x[0], x = x[1], n === l && (n = q(k, e.min)), e.isLog && n <= 0 && (n = null), o.total = o.stackTotal = D.total, o.percentage = D.total && o.y / D.total * 100, o.stackY = x, D.setOffset(this.pointXOffset || 0, this.barW || 0);
			}
			o.yBottom = v(n) ? e.translate(n, 0, 1, 0, 1) : null;
			h && (x = this.modifyValue(x, o));
			o.plotY = n = typeof x === "number" && x !== Infinity ? G(w(-100000, e.translate(x, 0, 1, 0, 1)), 100000) : t;
			o.isInside = n !== t && n >= 0 && n <= e.len && m >= 0 && m <= c.len;
			o.clientX = j ? c.translate(u, 0, 0, 0, 1) : m;
			o.negative = o.y < (k || 0);
			o.category = d && d[o.x] !== t ? d[o.x] : o.x;
			o.isNull || (p !== void 0 && (s = G(s, S(m - p))), p = m);
		}
		this.closestPointRangePx = s;
	}, getValidPoints:function (a, b) {
		var c = this.chart;
		return Fa(a || this.points || [], function (a) {
			return b && !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : !a.isNull;
		});
	}, setClip:function (a) {
		var b = this.chart, c = this.options, d = b.renderer, e = b.inverted, f = this.clipBox, g = f || b.clipBox, h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, g.height, c.xAxis, c.yAxis].join(","), i = b[h], j = b[h + "m"];
		if (!i) {
			if (a) {
				g.width = 0, b[h + "m"] = j = d.clipRect(-99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight);
			}
			b[h] = i = d.clipRect(g);
		}
		a && (i.count += 1);
		if (c.clip !== !1) {
			this.group.clip(a || f ? i : b.clipRect), this.markerGroup.clip(j), this.sharedClipKey = h;
		}
		a || (i.count -= 1, i.count <= 0 && h && b[h] && (f || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())));
	}, animate:function (a) {
		var b = this.chart, c = this.options.animation, d;
		if (c && !ea(c)) {
			c = W[this.type].animation;
		}
		a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({width:b.plotSizeX}, c), b[d + "m"] && b[d + "m"].animate({width:b.plotSizeX + 99}, c), this.animate = null);
	}, afterAnimate:function () {
		this.setClip();
		O(this, "afterAnimate");
	}, drawPoints:function () {
		var a, b = this.points, c = this.chart, d, e, f, g, h, i, j, k, l = this.options.marker, m = this.pointAttr[""], n, p, r, s = this.markerGroup, o = q(l.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * l.radius);
		if (l.enabled !== !1 || this._hasPointMarkers) {
			for (f = b.length; f--; ) {
				if (g = b[f], d = V(g.plotX), e = g.plotY, k = g.graphic, n = g.marker || {}, p = !!g.marker, a = o && n.enabled === t || n.enabled, r = g.isInside, a && C(e) && g.y !== null) {
					if (a = g.pointAttr[g.selected ? "select" : ""] || m, h = a.r, i = q(n.symbol, this.symbol), j = i.indexOf("url") === 0, k) {
						k[r ? "show" : "hide"](!0).attr(a).animate(A({x:d - h, y:e - h}, k.symbolName ? {width:2 * h, height:2 * h} : {}));
					} else {
						if (r && (h > 0 || j)) {
							g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h, p ? n : l).attr(a).add(s);
						}
					}
				} else {
					if (k) {
						g.graphic = k.destroy();
					}
				}
			}
		}
	}, convertAttribs:function (a, b, c, d) {
		var e = this.pointAttrToOptions, f, g, h = {}, a = a || {}, b = b || {}, c = c || {}, d = d || {};
		for (f in e) {
			g = e[f], h[f] = q(a[g], b[f], c[f], d[f]);
		}
		return h;
	}, getAttribs:function () {
		var a = this, b = a.options, c = W[a.type].marker ? b.marker : b, d = c.states, e = d.hover, f, g = a.color, h = a.options.negativeColor, i = {stroke:g, fill:g}, j = a.points || [], k, l = [], m, n = a.pointAttrToOptions;
		f = a.hasPointSpecificOptions;
		var p = c.lineColor, r = c.fillColor;
		k = b.turboThreshold;
		var s = a.zones, F = a.zoneAxis || "y", u, x;
		b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : (e.color = e.color || va(e.color || g).brighten(e.brightness).get(), e.negativeColor = e.negativeColor || va(e.negativeColor || h).brighten(e.brightness).get());
		l[""] = a.convertAttribs(c, i);
		o(["hover", "select"], function (b) {
			l[b] = a.convertAttribs(d[b], l[""]);
		});
		a.pointAttr = l;
		g = j.length;
		if (!k || g < k || f) {
			for (; g--; ) {
				k = j[g];
				if ((c = k.options && k.options.marker || k.options) && c.enabled === !1) {
					c.radius = 0;
				}
				i = null;
				if (s.length) {
					f = 0;
					for (i = s[f]; k[F] >= i.value; ) {
						i = s[++f];
					}
					k.color = k.fillColor = i = q(i.color, a.color);
				}
				f = b.colorByPoint || k.color;
				if (k.options) {
					for (x in n) {
						v(c[n[x]]) && (f = !0);
					}
				}
				if (f) {
					c = c || {};
					m = [];
					d = c.states || {};
					f = d.hover = d.hover || {};
					if (!b.marker || k.negative && !f.fillColor && !e.fillColor) {
						f[a.pointAttrToOptions.fill] = f.color || !k.options.color && e[k.negative && h ? "negativeColor" : "color"] || va(k.color).brighten(f.brightness || e.brightness).get();
					}
					u = {color:k.color};
					if (!r) {
						u.fillColor = k.color;
					}
					if (!p) {
						u.lineColor = k.color;
					}
					c.hasOwnProperty("color") && !c.color && delete c.color;
					if (i && !e.fillColor) {
						f.fillColor = i;
					}
					m[""] = a.convertAttribs(A(u, c), l[""]);
					m.hover = a.convertAttribs(d.hover, l.hover, m[""]);
					m.select = a.convertAttribs(d.select, l.select, m[""]);
				} else {
					m = l;
				}
				k.pointAttr = m;
			}
		}
	}, destroy:function () {
		var a = this, b = a.chart, c = /AppleWebKit\/533/.test(Na), d, e = a.data || [], f, g, h;
		O(a, "destroy");
		T(a);
		o(a.axisTypes || [], function (b) {
			if (h = a[b]) {
				za(h.series, a), h.isDirty = h.forceRedraw = !0;
			}
		});
		a.legendItem && a.chart.legend.destroyItem(a);
		for (d = e.length; d--; ) {
			(f = e[d]) && f.destroy && f.destroy();
		}
		a.points = null;
		clearTimeout(a.animationTimeout);
		for (g in a) {
			a[g] instanceof Z && !a[g].survive && (d = c && g === "group" ? "hide" : "destroy", a[g][d]());
		}
		if (b.hoverSeries === a) {
			b.hoverSeries = null;
		}
		za(b.series, a);
		for (g in a) {
			delete a[g];
		}
	}, getGraphPath:function (a, b, c) {
		var d = this, e = d.options, f = e.step, g, h = [], i, a = a || d.points;
		(g = a.reversed) && a.reverse();
		(f = {right:1, center:2}[f] || f && 3) && g && (f = 4 - f);
		e.connectNulls && !b && !c && (a = this.getValidPoints(a));
		o(a, function (g, k) {
			var l = g.plotX, m = g.plotY, n = a[k - 1];
			if ((g.leftCliff || n && n.rightCliff) && !c) {
				i = !0;
			}
			g.isNull && !v(b) && k > 0 ? i = !e.connectNulls : g.isNull && !b ? i = !0 : (k === 0 || i ? n = ["M", g.plotX, g.plotY] : d.getPointSpline ? n = d.getPointSpline(a, g, k) : f ? (n = f === 1 ? ["L", n.plotX, m] : f === 2 ? ["L", (n.plotX + l) / 2, n.plotY, "L", (n.plotX + l) / 2, m] : ["L", l, n.plotY], n.push("L", l, m)) : n = ["L", l, m], h.push.apply(h, n), i = !1);
		});
		return d.graphPath = h;
	}, drawGraph:function () {
		var a = this, b = this.options, c = [["graph", b.lineColor || this.color, b.dashStyle]], d = b.lineWidth, e = b.linecap !== "square", f = (this.gappedPath || this.getGraphPath).call(this), g = this.fillGraph && this.color || "none";
		o(this.zones, function (d, e) {
			c.push(["zoneGraph" + e, d.color || a.color, d.dashStyle || b.dashStyle]);
		});
		o(c, function (c, i) {
			var j = c[0], k = a[j];
			if (k) {
				k.animate({d:f});
			} else {
				if ((d || g) && f.length) {
					k = {stroke:c[1], "stroke-width":d, fill:g, zIndex:1}, c[2] ? k.dashstyle = c[2] : e && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), a[j] = a.chart.renderer.path(f).attr(k).add(a.group).shadow(i < 2 && b.shadow);
				}
			}
		});
	}, applyZones:function () {
		var a = this, b = this.chart, c = b.renderer, d = this.zones, e, f, g = this.clips || [], h, i = this.graph, j = this.area, k = w(b.chartWidth, b.chartHeight), l = this[(this.zoneAxis || "y") + "Axis"], m, n = l.reversed, p = b.inverted, r = l.horiz, s, F, u, x = !1;
		if (d.length && (i || j) && l.min !== t) {
			i && i.hide(), j && j.hide(), m = l.getExtremes(), o(d, function (d, o) {
				e = n ? r ? b.plotWidth : 0 : r ? 0 : l.toPixels(m.min);
				e = G(w(q(f, e), 0), k);
				f = G(w(y(l.toPixels(q(d.value, m.max), !0)), 0), k);
				x && (e = f = l.toPixels(m.max));
				s = Math.abs(e - f);
				F = G(e, f);
				u = w(e, f);
				if (l.isXAxis) {
					if (h = {x:p ? u : F, y:0, width:s, height:k}, !r) {
						h.x = b.plotHeight - h.x;
					}
				} else {
					if (h = {x:0, y:p ? u : F, width:k, height:s}, r) {
						h.y = b.plotWidth - h.y;
					}
				}
				b.inverted && c.isVML && (h = l.isXAxis ? {x:0, y:n ? F : u, height:h.width, width:b.chartWidth} : {x:h.y - b.plotLeft - b.spacingBox.x, y:0, width:h.height, height:b.chartHeight});
				g[o] ? g[o].animate(h) : (g[o] = c.clipRect(h), i && a["zoneGraph" + o].clip(g[o]), j && a["zoneArea" + o].clip(g[o]));
				x = d.value > m.max;
			}), this.clips = g;
		}
	}, invertGroups:function () {
		function a() {
			var a = {width:b.yAxis.len, height:b.xAxis.len};
			o(["group", "markerGroup"], function (c) {
				b[c] && b[c].attr(a).invert();
			});
		}
		var b = this, c = b.chart;
		if (b.xAxis) {
			E(c, "resize", a), E(b, "destroy", function () {
				T(c, "resize", a);
			}), a(), b.invertGroups = a;
		}
	}, plotGroup:function (a, b, c, d, e) {
		var f = this[a], g = !f;
		g && (this[a] = f = this.chart.renderer.g(b).attr({zIndex:d || 0.1}).add(e), f.addClass("highcharts-series-" + this.index));
		f.attr({visibility:c})[g ? "attr" : "animate"](this.getPlotBox());
		return f;
	}, getPlotBox:function () {
		var a = this.chart, b = this.xAxis, c = this.yAxis;
		if (a.inverted) {
			b = c, c = this.xAxis;
		}
		return {translateX:b ? b.left : a.plotLeft, translateY:c ? c.top : a.plotTop, scaleX:1, scaleY:1};
	}, render:function () {
		var a = this, b = a.chart, c, d = a.options, e = !!a.animate && b.renderer.isSVG && gb(d.animation).duration, f = a.visible ? "inherit" : "hidden", g = d.zIndex, h = a.hasRendered, i = b.seriesGroup;
		c = a.plotGroup("group", "series", f, g, i);
		a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, i);
		e && a.animate(!0);
		a.getAttribs();
		c.inverted = a.isCartesian ? b.inverted : !1;
		a.drawGraph && (a.drawGraph(), a.applyZones());
		o(a.points, function (a) {
			a.redraw && a.redraw();
		});
		a.drawDataLabels && a.drawDataLabels();
		a.visible && a.drawPoints();
		a.drawTracker && a.options.enableMouseTracking !== !1 && a.drawTracker();
		b.inverted && a.invertGroups();
		d.clip !== !1 && !a.sharedClipKey && !h && c.clip(b.clipRect);
		e && a.animate();
		if (!h) {
			a.animationTimeout = Za(function () {
				a.afterAnimate();
			}, e);
		}
		a.isDirty = a.isDirtyData = !1;
		a.hasRendered = !0;
	}, redraw:function () {
		var a = this.chart, b = this.isDirty || this.isDirtyData, c = this.group, d = this.xAxis, e = this.yAxis;
		c && (a.inverted && c.attr({width:a.plotWidth, height:a.plotHeight}), c.animate({translateX:q(d && d.left, a.plotLeft), translateY:q(e && e.top, a.plotTop)}));
		this.translate();
		this.render();
		b && delete this.kdTree;
	}, kdDimensions:1, kdAxisArray:["clientX", "plotY"], searchPoint:function (a, b) {
		var c = this.xAxis, d = this.yAxis, e = this.chart.inverted;
		return this.searchKDTree({clientX:e ? c.len - a.chartY + c.pos : a.chartX - c.pos, plotY:e ? d.len - a.chartX + d.pos : a.chartY - d.pos}, b);
	}, buildKDTree:function () {
		function a(c, e, f) {
			var g, h;
			if (h = c && c.length) {
				return g = b.kdAxisArray[e % f], c.sort(function (a, b) {
					return a[g] - b[g];
				}), h = Math.floor(h / 2), {point:c[h], left:a(c.slice(0, h), e + 1, f), right:a(c.slice(h + 1), e + 1, f)};
			}
		}
		var b = this, c = b.kdDimensions;
		delete b.kdTree;
		Za(function () {
			b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c);
		}, b.options.kdNow ? 0 : 1);
	}, searchKDTree:function (a, b) {
		function c(a, b, j, k) {
			var l = b.point, m = d.kdAxisArray[j % k], n, p, r = l;
			p = v(a[e]) && v(l[e]) ? Math.pow(a[e] - l[e], 2) : null;
			n = v(a[f]) && v(l[f]) ? Math.pow(a[f] - l[f], 2) : null;
			n = (p || 0) + (n || 0);
			l.dist = v(n) ? Math.sqrt(n) : Number.MAX_VALUE;
			l.distX = v(p) ? Math.sqrt(p) : Number.MAX_VALUE;
			m = a[m] - l[m];
			n = m < 0 ? "left" : "right";
			p = m < 0 ? "right" : "left";
			b[n] && (n = c(a, b[n], j + 1, k), r = n[g] < r[g] ? n : l);
			b[p] && Math.sqrt(m * m) < r[g] && (a = c(a, b[p], j + 1, k), r = a[g] < r[g] ? a : r);
			return r;
		}
		var d = this, e = this.kdAxisArray[0], f = this.kdAxisArray[1], g = b ? "distX" : "dist";
		this.kdTree || this.buildKDTree();
		if (this.kdTree) {
			return c(a, this.kdTree, this.kdDimensions, this.kdDimensions);
		}
	}};
	Tb.prototype = {destroy:function () {
		Pa(this, this.axis);
	}, render:function (a) {
		var b = this.options, c = b.format, c = c ? La(c, this) : b.formatter.call(this);
		this.label ? this.label.attr({text:c, visibility:"hidden"}) : this.label = this.axis.chart.renderer.text(c, null, null, b.useHTML).css(b.style).attr({align:this.textAlign, rotation:b.rotation, visibility:"hidden"}).add(a);
	}, setOffset:function (a, b) {
		var c = this.axis, d = c.chart, e = d.inverted, f = c.reversed, f = this.isNegative && !f || !this.isNegative && f, g = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1), c = c.translate(0), c = S(g - c), h = d.xAxis[0].translate(this.x) + a, i = d.plotHeight, f = {x:e ? f ? g : g - c : h, y:e ? i - h - b : f ? i - g - c : i - g, width:e ? c : b, height:e ? b : c};
		if (e = this.label) {
			e.align(this.alignOptions, null, f), f = e.alignAttr, e[this.options.crop === !1 || d.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0);
		}
	}};
	Ba.prototype.getStacks = function () {
		var a = this;
		o(a.yAxis, function (a) {
			if (a.stacks && a.hasVisibleSeries) {
				a.oldStacks = a.stacks;
			}
		});
		o(a.series, function (b) {
			if (b.options.stacking && (b.visible === !0 || a.options.chart.ignoreHiddenSeries === !1)) {
				b.stackKey = b.type + q(b.options.stack, "");
			}
		});
	};
	J.prototype.buildStacks = function () {
		var a = this.series, b, c = q(this.options.reversedStacks, !0), d = a.length, e;
		if (!this.isXAxis) {
			this.usePercentage = !1;
			for (e = d; e--; ) {
				a[c ? e : d - e - 1].setStackedPoints();
			}
			for (e = d; e--; ) {
				b = a[c ? e : d - e - 1], b.setStackCliffs && b.setStackCliffs();
			}
			if (this.usePercentage) {
				for (e = 0; e < d; e++) {
					a[e].setPercentStacks();
				}
			}
		}
	};
	J.prototype.renderStackTotals = function () {
		var a = this.chart, b = a.renderer, c = this.stacks, d, e, f = this.stackTotalGroup;
		if (!f) {
			this.stackTotalGroup = f = b.g("stack-labels").attr({visibility:"visible", zIndex:6}).add();
		}
		f.translate(a.plotLeft, a.plotTop);
		for (d in c) {
			for (e in a = c[d], a) {
				a[e].render(f);
			}
		}
	};
	J.prototype.resetStacks = function () {
		var a = this.stacks, b, c;
		if (!this.isXAxis) {
			for (b in a) {
				for (c in a[b]) {
					a[b][c].touched < this.stacksTouched ? (a[b][c].destroy(), delete a[b][c]) : (a[b][c].total = null, a[b][c].cum = 0);
				}
			}
		}
	};
	J.prototype.cleanStacks = function () {
		var a, b, c;
		if (!this.isXAxis) {
			if (this.oldStacks) {
				a = this.stacks = this.oldStacks;
			}
			for (b in a) {
				for (c in a[b]) {
					a[b][c].cum = a[b][c].total;
				}
			}
		}
	};
	P.prototype.setStackedPoints = function () {
		if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
			var a = this.processedXData, b = this.processedYData, c = [], d = b.length, e = this.options, f = e.threshold, g = e.startFromThreshold ? f : 0, h = e.stack, e = e.stacking, i = this.stackKey, j = "-" + i, k = this.negStacks, l = this.yAxis, m = l.stacks, n = l.oldStacks, p, r, s, o, u, x, D;
			l.stacksTouched += 1;
			for (u = 0; u < d; u++) {
				x = a[u];
				D = b[u];
				p = this.getStackIndicator(p, x, this.index);
				o = p.key;
				s = (r = k && D < (g ? 0 : f)) ? j : i;
				m[s] || (m[s] = {});
				if (!m[s][x]) {
					n[s] && n[s][x] ? (m[s][x] = n[s][x], m[s][x].total = null) : m[s][x] = new Tb(l, l.options.stackLabels, r, x, h);
				}
				s = m[s][x];
				if (D !== null) {
					s.points[o] = s.points[this.index] = [q(s.cum, g)], s.touched = l.stacksTouched, p.index > 0 && this.singleStacks === !1 && (s.points[o][0] = s.points[this.index + "," + x + ",0"][0]);
				}
				e === "percent" ? (r = r ? i : j, k && m[r] && m[r][x] ? (r = m[r][x], s.total = r.total = w(r.total, s.total) + S(D) || 0) : s.total = ka(s.total + (S(D) || 0))) : s.total = ka(s.total + (D || 0));
				s.cum = q(s.cum, g) + (D || 0);
				if (D !== null) {
					s.points[o].push(s.cum), c[u] = s.cum;
				}
			}
			if (e === "percent") {
				l.usePercentage = !0;
			}
			this.stackedYData = c;
			l.oldStacks = {};
		}
	};
	P.prototype.setPercentStacks = function () {
		var a = this, b = a.stackKey, c = a.yAxis.stacks, d = a.processedXData, e;
		o([b, "-" + b], function (b) {
			var f;
			for (var g = d.length, h, i; g--; ) {
				if (h = d[g], e = a.getStackIndicator(e, h, a.index), f = (i = c[b] && c[b][h]) && i.points[e.key], h = f) {
					i = i.total ? 100 / i.total : 0, h[0] = ka(h[0] * i), h[1] = ka(h[1] * i), a.stackedYData[g] = h[1];
				}
			}
		});
	};
	P.prototype.getStackIndicator = function (a, b, c) {
		!v(a) || a.x !== b ? a = {x:b, index:0} : a.index++;
		a.key = [c, b, a.index].join(",");
		return a;
	};
	A(Ba.prototype, {addSeries:function (a, b, c) {
		var d, e = this;
		a && (b = q(b, !0), O(e, "addSeries", {options:a}, function () {
			d = e.initSeries(a);
			e.isDirtyLegend = !0;
			e.linkSeries();
			b && e.redraw(c);
		}));
		return d;
	}, addAxis:function (a, b, c, d) {
		var e = b ? "xAxis" : "yAxis", f = this.options, a = z(a, {index:this[e].length, isX:b});
		new J(this, a);
		f[e] = ua(f[e] || {});
		f[e].push(a);
		q(c, !0) && this.redraw(d);
	}, showLoading:function (a) {
		var b = this, c = b.options, d = b.loadingDiv, e = c.loading, f = function () {
			d && N(d, {left:b.plotLeft + "px", top:b.plotTop + "px", width:b.plotWidth + "px", height:b.plotHeight + "px"});
		};
		if (!d) {
			b.loadingDiv = d = fa(Va, {className:"highcharts-loading"}, A(e.style, {zIndex:10, display:"none"}), b.container), b.loadingSpan = fa("span", null, e.labelStyle, d), E(b, "redraw", f);
		}
		b.loadingSpan.innerHTML = a || c.lang.loading;
		if (!b.loadingShown) {
			N(d, {opacity:0, display:""}), db(d, {opacity:e.style.opacity}, {duration:e.showDuration || 0}), b.loadingShown = !0;
		}
		f();
	}, hideLoading:function () {
		var a = this.options, b = this.loadingDiv;
		b && db(b, {opacity:0}, {duration:a.loading.hideDuration || 100, complete:function () {
			N(b, {display:"none"});
		}});
		this.loadingShown = !1;
	}});
	A(Ha.prototype, {update:function (a, b, c, d) {
		function e() {
			f.applyOptions(a);
			if (f.y === null && h) {
				f.graphic = h.destroy();
			}
			if (ea(a) && !Ja(a)) {
				f.redraw = function () {
					if (h && h.element && a && a.marker && a.marker.symbol) {
						f.graphic = h.destroy();
					}
					if (a && a.dataLabels && f.dataLabel) {
						f.dataLabel = f.dataLabel.destroy();
					}
					f.redraw = null;
				};
			}
			i = f.index;
			g.updateParallelArrays(f, i);
			if (l && f.name) {
				l[f.x] = f.name;
			}
			k.data[i] = ea(k.data[i]) && !Ja(k.data[i]) ? f.options : a;
			g.isDirty = g.isDirtyData = !0;
			if (!g.fixedBox && g.hasCartesianSeries) {
				j.isDirtyBox = !0;
			}
			if (k.legendType === "point") {
				j.isDirtyLegend = !0;
			}
			b && j.redraw(c);
		}
		var f = this, g = f.series, h = f.graphic, i, j = g.chart, k = g.options, l = g.xAxis && g.xAxis.names, b = q(b, !0);
		d === !1 ? e() : f.firePointEvent("update", {options:a}, e);
	}, remove:function (a, b) {
		this.series.removePoint(sa(this, this.series.data), a, b);
	}});
	A(P.prototype, {addPoint:function (a, b, c, d) {
		var e = this, f = e.options, g = e.data, h = e.graph, i = e.area, j = e.chart, k = e.xAxis && e.xAxis.names, l = h && h.shift || 0, m = ["graph", "area"], h = f.data, n, p = e.xData;
		$a(d, j);
		if (c) {
			for (d = e.zones.length; d--; ) {
				m.push("zoneGraph" + d, "zoneArea" + d);
			}
			o(m, function (a) {
				if (e[a]) {
					e[a].shift = l + (f.step ? 2 : 1);
				}
			});
		}
		if (i) {
			i.isArea = !0;
		}
		b = q(b, !0);
		i = {series:e};
		e.pointClass.prototype.applyOptions.apply(i, [a]);
		m = i.x;
		d = p.length;
		if (e.requireSorting && m < p[d - 1]) {
			for (n = !0; d && p[d - 1] > m; ) {
				d--;
			}
		}
		e.updateParallelArrays(i, "splice", d, 0, 0);
		e.updateParallelArrays(i, d);
		if (k && i.name) {
			k[m] = i.name;
		}
		h.splice(d, 0, a);
		n && (e.data.splice(d, 0, null), e.processData());
		f.legendType === "point" && e.generatePoints();
		c && (g[0] && g[0].remove ? g[0].remove(!1) : (g.shift(), e.updateParallelArrays(i, "shift"), h.shift()));
		e.isDirty = !0;
		e.isDirtyData = !0;
		b && (e.getAttribs(), j.redraw());
	}, removePoint:function (a, b, c) {
		var d = this, e = d.data, f = e[a], g = d.points, h = d.chart, i = function () {
			g && g.length === e.length && g.splice(a, 1);
			e.splice(a, 1);
			d.options.data.splice(a, 1);
			d.updateParallelArrays(f || {series:d}, "splice", a, 1);
			f && f.destroy();
			d.isDirty = !0;
			d.isDirtyData = !0;
			b && h.redraw();
		};
		$a(c, h);
		b = q(b, !0);
		f ? f.firePointEvent("remove", null, i) : i();
	}, remove:function (a, b) {
		var c = this, d = c.chart;
		O(c, "remove", null, function () {
			c.destroy();
			d.isDirtyLegend = d.isDirtyBox = !0;
			d.linkSeries();
			q(a, !0) && d.redraw(b);
		});
	}, update:function (a, b) {
		var c = this, d = this.chart, e = this.userOptions, f = this.type, g = I[f].prototype, h = ["group", "markerGroup", "dataLabelsGroup"], i;
		if (a.type && a.type !== f || a.zIndex !== void 0) {
			h.length = 0;
		}
		o(h, function (a) {
			h[a] = c[a];
			delete c[a];
		});
		a = z(e, {animation:!1, index:this.index, pointStart:this.xData[0]}, {data:this.options.data}, a);
		this.remove(!1);
		for (i in g) {
			this[i] = t;
		}
		A(this, I[a.type || f].prototype);
		o(h, function (a) {
			c[a] = h[a];
		});
		this.init(d, a);
		d.linkSeries();
		q(b, !0) && d.redraw(!1);
	}});
	A(J.prototype, {update:function (a, b) {
		var c = this.chart, a = c.options[this.coll][this.options.index] = z(this.userOptions, a);
		this.destroy(!0);
		this._addedPlotLB = this.chart._labelPanes = t;
		this.init(c, A(a, {events:t}));
		c.isDirtyBox = !0;
		q(b, !0) && c.redraw();
	}, remove:function (a) {
		for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--; ) {
			d[e] && d[e].remove(!1);
		}
		za(b.axes, this);
		za(b[c], this);
		b.options[c].splice(this.options.index, 1);
		o(b[c], function (a, b) {
			a.options.index = b;
		});
		this.destroy();
		b.isDirtyBox = !0;
		q(a, !0) && b.redraw();
	}, setTitle:function (a, b) {
		this.update({title:a}, b);
	}, setCategories:function (a, b) {
		this.update({categories:a}, b);
	}});
	var Ia = ma(P);
	I.line = Ia;
	W.area = z(da, {softThreshold:!1, threshold:0});
	var ya = ma(P, {type:"area", singleStacks:!1, getStackPoints:function () {
		var a = [], b = [], c = this.xAxis, d = this.yAxis, e = d.stacks[this.stackKey], f = {}, g = this.points, h = this.index, i = d.series, j = i.length, k, l = q(d.options.reversedStacks, !0) ? 1 : -1, m, n;
		if (this.options.stacking) {
			for (m = 0; m < g.length; m++) {
				f[g[m].x] = g[m];
			}
			for (n in e) {
				e[n].total !== null && b.push(n);
			}
			b.sort(function (a, b) {
				return a - b;
			});
			k = ta(i, function () {
				return this.visible;
			});
			o(b, function (g, i) {
				var n = 0, q, u;
				if (f[g] && !f[g].isNull) {
					a.push(f[g]), o([-1, 1], function (a) {
						var c = a === 1 ? "rightNull" : "leftNull", d = 0, n = e[b[i + a]];
						if (n) {
							for (m = h; m >= 0 && m < j; ) {
								q = n.points[m], q || (m === h ? f[g][c] = !0 : k[m] && (u = e[g].points[m]) && (d -= u[1] - u[0])), m += l;
							}
						}
						f[g][a === 1 ? "rightCliff" : "leftCliff"] = d;
					});
				} else {
					for (m = h; m >= 0 && m < j; ) {
						if (q = e[g].points[m]) {
							n = q[1];
							break;
						}
						m += l;
					}
					n = d.toPixels(n, !0);
					a.push({isNull:!0, plotX:c.toPixels(g, !0), plotY:n, yBottom:n});
				}
			});
		}
		return a;
	}, getGraphPath:function (a) {
		var b = P.prototype.getGraphPath, c = this.options, d = c.stacking, e = this.yAxis, f, g, h = [], i = [], j = this.index, k, l = e.stacks[this.stackKey], m = c.threshold, n = e.getThreshold(c.threshold), p, c = c.connectNulls || d === "percent", r = function (b, c, f) {
			var g = a[b], b = d && l[g.x].points[j], p = g[f + "Null"] || 0, f = g[f + "Cliff"] || 0, r, o, g = !0;
			f || p ? (r = (p ? b[0] : b[1]) + f, o = b[0] + f, g = !!p) : !d && a[c] && a[c].isNull && (r = o = m);
			r !== void 0 && (i.push({plotX:k, plotY:r === null ? n : e.getThreshold(r), isNull:g}), h.push({plotX:k, plotY:o === null ? n : e.getThreshold(o)}));
		}, a = a || this.points;
		d && (a = this.getStackPoints());
		for (f = 0; f < a.length; f++) {
			if (g = a[f].isNull, k = q(a[f].rectPlotX, a[f].plotX), p = q(a[f].yBottom, n), !g || c) {
				c || r(f, f - 1, "left");
				if (!g || d || !c) {
					i.push(a[f]), h.push({x:f, plotX:k, plotY:p});
				}
				c || r(f, f + 1, "right");
			}
		}
		f = b.call(this, i, !0, !0);
		h.reversed = !0;
		g = b.call(this, h, !0, !0);
		g.length && (g[0] = "L");
		f = f.concat(g);
		b = b.call(this, i, !1, c);
		this.areaPath = f;
		return b;
	}, drawGraph:function () {
		this.areaPath = [];
		P.prototype.drawGraph.apply(this);
		var a = this, b = this.areaPath, c = this.options, d = [["area", this.color, c.fillColor]];
		o(this.zones, function (b, f) {
			d.push(["zoneArea" + f, b.color || a.color, b.fillColor || c.fillColor]);
		});
		o(d, function (d) {
			var f = d[0], g = a[f];
			g ? g.animate({d:b}) : (g = {fill:d[2] || d[1], zIndex:0}, d[2] || (g["fill-opacity"] = q(c.fillOpacity, 0.75)), a[f] = a.chart.renderer.path(b).attr(g).add(a.group));
		});
	}, drawLegendSymbol:aa.drawRectangle});
	I.area = ya;
	W.spline = z(da);
	Ia = ma(P, {type:"spline", getPointSpline:function (a, b, c) {
		var d = b.plotX, e = b.plotY, f = a[c - 1], c = a[c + 1], g, h, i, j;
		if (f && !f.isNull && c && !c.isNull) {
			a = f.plotY;
			i = c.plotX;
			var c = c.plotY, k = 0;
			g = (1.5 * d + f.plotX) / 2.5;
			h = (1.5 * e + a) / 2.5;
			i = (1.5 * d + i) / 2.5;
			j = (1.5 * e + c) / 2.5;
			i !== g && (k = (j - h) * (i - d) / (i - g) + e - j);
			h += k;
			j += k;
			h > a && h > e ? (h = w(a, e), j = 2 * e - h) : h < a && h < e && (h = G(a, e), j = 2 * e - h);
			j > c && j > e ? (j = w(c, e), h = 2 * e - j) : j < c && j < e && (j = G(c, e), h = 2 * e - j);
			b.rightContX = i;
			b.rightContY = j;
		}
		b = ["C", q(f.rightContX, f.plotX), q(f.rightContY, f.plotY), q(g, d), q(h, e), d, e];
		f.rightContX = f.rightContY = null;
		return b;
	}});
	I.spline = Ia;
	W.areaspline = z(W.area);
	ya = ya.prototype;
	Ia = ma(Ia, {type:"areaspline", getStackPoints:ya.getStackPoints, getGraphPath:ya.getGraphPath, setStackCliffs:ya.setStackCliffs, drawGraph:ya.drawGraph, drawLegendSymbol:aa.drawRectangle});
	I.areaspline = Ia;
	W.column = z(da, {borderColor:"#FFFFFF", borderRadius:0, groupPadding:0.2, marker:null, pointPadding:0.1, minPointLength:0, cropThreshold:50, pointRange:null, states:{hover:{brightness:0.1, shadow:!1, halo:!1}, select:{color:"#C0C0C0", borderColor:"#000000", shadow:!1}}, dataLabels:{align:null, verticalAlign:null, y:null}, softThreshold:!1, startFromThreshold:!0, stickyTracking:!1, tooltip:{distance:6}, threshold:0});
	Ia = ma(P, {type:"column", pointAttrToOptions:{stroke:"borderColor", fill:"color", r:"borderRadius"}, cropShoulder:0, directTouch:!0, trackerGroups:["group", "dataLabelsGroup"], negStacks:!0, init:function () {
		P.prototype.init.apply(this, arguments);
		var a = this, b = a.chart;
		b.hasRendered && o(b.series, function (b) {
			if (b.type === a.type) {
				b.isDirty = !0;
			}
		});
	}, getColumnMetrics:function () {
		var a = this, b = a.options, c = a.xAxis, d = a.yAxis, e = c.reversed, f, g = {}, h = 0;
		b.grouping === !1 ? h = 1 : o(a.chart.series, function (b) {
			var c = b.options, e = b.yAxis, i;
			if (b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos) {
				c.stacking ? (f = b.stackKey, g[f] === t && (g[f] = h++), i = g[f]) : c.grouping !== !1 && (i = h++), b.columnIndex = i;
			}
		});
		var i = G(S(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len), j = i * b.groupPadding, k = (i - 2 * j) / h, b = G(b.maxPointWidth || c.len, q(b.pointWidth, k * (1 - 2 * b.pointPadding)));
		a.columnMetrics = {width:b, offset:(k - b) / 2 + (j + ((a.columnIndex || 0) + (e ? 1 : 0)) * k - i / 2) * (e ? -1 : 1)};
		return a.columnMetrics;
	}, crispCol:function (a, b, c, d) {
		var e = this.chart, f = this.borderWidth, g = -(f % 2 ? 0.5 : 0), f = f % 2 ? 0.5 : 1;
		e.inverted && e.renderer.isVML && (f += 1);
		c = Math.round(a + c) + g;
		a = Math.round(a) + g;
		c -= a;
		d = Math.round(b + d) + f;
		g = S(b) <= 0.5 && d > 0.5;
		b = Math.round(b) + f;
		d -= b;
		g && d && (b -= 1, d += 1);
		return {x:a, y:b, width:c, height:d};
	}, translate:function () {
		var a = this, b = a.chart, c = a.options, d = a.borderWidth = q(c.borderWidth, a.closestPointRange * a.xAxis.transA < 2 ? 0 : 1), e = a.yAxis, f = a.translatedThreshold = e.getThreshold(c.threshold), g = q(c.minPointLength, 5), h = a.getColumnMetrics(), i = h.width, j = a.barW = w(i, 1 + 2 * d), k = a.pointXOffset = h.offset;
		b.inverted && (f -= 0.5);
		c.pointPadding && (j = Ea(j));
		P.prototype.translate.apply(a);
		o(a.points, function (c) {
			var d = G(q(c.yBottom, f), 90000), h = 999 + S(d), h = G(w(-h, c.plotY), e.len + h), p = c.plotX + k, r = j, o = G(h, d), F, u = w(h, d) - o;
			S(u) < g && g && (u = g, F = !e.reversed && !c.negative || e.reversed && c.negative, o = S(o - f) > g ? d - g : f - (F ? g : 0));
			c.barX = p;
			c.pointWidth = i;
			c.tooltipPos = b.inverted ? [e.len + e.pos - b.plotLeft - h, a.xAxis.len - p - r / 2, u] : [p + r / 2, h + e.pos - b.plotTop, u];
			c.shapeType = "rect";
			c.shapeArgs = a.crispCol(p, o, r, u);
		});
	}, getSymbol:ra, drawLegendSymbol:aa.drawRectangle, drawGraph:ra, drawPoints:function () {
		var a = this, b = this.chart, c = a.options, d = b.renderer, e = c.animationLimit || 250, f, g;
		o(a.points, function (h) {
			var i = h.graphic, j;
			if (C(h.plotY) && h.y !== null) {
				f = h.shapeArgs, j = v(a.borderWidth) ? {"stroke-width":a.borderWidth} : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], i ? (Sa(i), i.attr(j).attr(g)[b.pointCount < e ? "animate" : "attr"](z(f))) : h.graphic = d[h.shapeType](f).attr(j).attr(g).add(h.group || a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius);
			} else {
				if (i) {
					h.graphic = i.destroy();
				}
			}
		});
	}, animate:function (a) {
		var b = this, c = this.yAxis, d = b.options, e = this.chart.inverted, f = {};
		if (ja) {
			a ? (f.scaleY = 0.001, a = G(c.pos + c.len, w(c.pos, c.toPixels(d.threshold))), e ? f.translateX = a - c.len : f.translateY = a, b.group.attr(f)) : (f[e ? "translateX" : "translateY"] = c.pos, b.group.animate(f, A(gb(b.options.animation), {step:function (a, c) {
				b.group.attr({scaleY:w(0.001, c.pos)});
			}})), b.animate = null);
		}
	}, remove:function () {
		var a = this, b = a.chart;
		b.hasRendered && o(b.series, function (b) {
			if (b.type === a.type) {
				b.isDirty = !0;
			}
		});
		P.prototype.remove.apply(a, arguments);
	}});
	I.column = Ia;
	W.bar = z(W.column);
	ya = ma(Ia, {type:"bar", inverted:!0});
	I.bar = ya;
	W.scatter = z(da, {lineWidth:0, marker:{enabled:!0}, tooltip:{headerFormat:"<span style=\"color:{point.color}\">\u25cf</span> <span style=\"font-size: 10px;\"> {series.name}</span><br/>", pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});
	ya = ma(P, {type:"scatter", sorted:!1, requireSorting:!1, noSharedTooltip:!0, trackerGroups:["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition:!1, kdDimensions:2, drawGraph:function () {
		this.options.lineWidth && P.prototype.drawGraph.call(this);
	}});
	I.scatter = ya;
	W.pie = z(da, {borderColor:"#FFFFFF", borderWidth:1, center:[null, null], clip:!1, colorByPoint:!0, dataLabels:{distance:30, enabled:!0, formatter:function () {
		return this.y === null ? void 0 : this.point.name;
	}, x:0}, ignoreHiddenPoint:!0, legendType:"point", marker:null, size:null, showInLegend:!1, slicedOffset:10, states:{hover:{brightness:0.1, shadow:!1}}, stickyTracking:!1, tooltip:{followPointer:!0}});
	da = {type:"pie", isCartesian:!1, pointClass:ma(Ha, {init:function () {
		Ha.prototype.init.apply(this, arguments);
		var a = this, b;
		a.name = q(a.name, "Slice");
		b = function (b) {
			a.slice(b.type === "select");
		};
		E(a, "select", b);
		E(a, "unselect", b);
		return a;
	}, setVisible:function (a, b) {
		var c = this, d = c.series, e = d.chart, f = d.options.ignoreHiddenPoint, b = q(b, f);
		if (a !== c.visible) {
			c.visible = c.options.visible = a = a === t ? !c.visible : a;
			d.options.data[sa(c, d.data)] = c.options;
			o(["graphic", "dataLabel", "connector", "shadowGroup"], function (b) {
				if (c[b]) {
					c[b][a ? "show" : "hide"](!0);
				}
			});
			c.legendItem && e.legend.colorizeItem(c, a);
			!a && c.state === "hover" && c.setState("");
			if (f) {
				d.isDirty = !0;
			}
			b && e.redraw();
		}
	}, slice:function (a, b, c) {
		var d = this.series;
		$a(c, d.chart);
		q(b, !0);
		this.sliced = this.options.sliced = a = v(a) ? a : !this.sliced;
		d.options.data[sa(this, d.data)] = this.options;
		a = a ? this.slicedTranslation : {translateX:0, translateY:0};
		this.graphic.animate(a);
		this.shadowGroup && this.shadowGroup.animate(a);
	}, haloPath:function (a) {
		var b = this.shapeArgs, c = this.series.chart;
		return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.plotLeft + b.x, c.plotTop + b.y, b.r + a, b.r + a, {innerR:this.shapeArgs.r, start:b.start, end:b.end});
	}}), requireSorting:!1, directTouch:!0, noSharedTooltip:!0, trackerGroups:["group", "dataLabelsGroup"], axisTypes:[], pointAttrToOptions:{stroke:"borderColor", "stroke-width":"borderWidth", fill:"color"}, animate:function (a) {
		var b = this, c = b.points, d = b.startAngleRad;
		if (!a) {
			o(c, function (a) {
				var c = a.graphic, g = a.shapeArgs;
				c && (c.attr({r:a.startR || b.center[3] / 2, start:d, end:d}), c.animate({r:g.r, start:g.start, end:g.end}, b.options.animation));
			}), b.animate = null;
		}
	}, updateTotals:function () {
		var a, b = 0, c = this.points, d = c.length, e, f = this.options.ignoreHiddenPoint;
		for (a = 0; a < d; a++) {
			e = c[a], b += f && !e.visible ? 0 : e.y;
		}
		this.total = b;
		for (a = 0; a < d; a++) {
			e = c[a], e.percentage = b > 0 && (e.visible || !f) ? e.y / b * 100 : 0, e.total = b;
		}
	}, generatePoints:function () {
		P.prototype.generatePoints.call(this);
		this.updateTotals();
	}, translate:function (a) {
		this.generatePoints();
		var b = 0, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, f, g, h, i = c.startAngle || 0, j = this.startAngleRad = Aa / 180 * (i - 90), i = (this.endAngleRad = Aa / 180 * (q(c.endAngle, i + 360) - 90)) - j, k = this.points, l = c.dataLabels.distance, c = c.ignoreHiddenPoint, m, n = k.length, p;
		if (!a) {
			this.center = a = this.getCenter();
		}
		this.getX = function (b, c) {
			h = Y.asin(G((b - a[1]) / (a[2] / 2 + l), 1));
			return a[0] + (c ? -1 : 1) * ca(h) * (a[2] / 2 + l);
		};
		for (m = 0; m < n; m++) {
			p = k[m];
			f = j + b * i;
			if (!c || p.visible) {
				b += p.percentage / 100;
			}
			g = j + b * i;
			p.shapeType = "arc";
			p.shapeArgs = {x:a[0], y:a[1], r:a[2] / 2, innerR:a[3] / 2, start:y(f * 1000) / 1000, end:y(g * 1000) / 1000};
			h = (g + f) / 2;
			h > 1.5 * Aa ? h -= 2 * Aa : h < -Aa / 2 && (h += 2 * Aa);
			p.slicedTranslation = {translateX:y(ca(h) * d), translateY:y(la(h) * d)};
			f = ca(h) * a[2] / 2;
			g = la(h) * a[2] / 2;
			p.tooltipPos = [a[0] + f * 0.7, a[1] + g * 0.7];
			p.half = h < -Aa / 2 || h > Aa / 2 ? 1 : 0;
			p.angle = h;
			e = G(e, l / 2);
			p.labelPos = [a[0] + f + ca(h) * l, a[1] + g + la(h) * l, a[0] + f + ca(h) * e, a[1] + g + la(h) * e, a[0] + f, a[1] + g, l < 0 ? "center" : p.half ? "right" : "left", h];
		}
	}, drawGraph:null, drawPoints:function () {
		var a = this, b = a.chart.renderer, c, d, e = a.options.shadow, f, g, h, i;
		if (e && !a.shadowGroup) {
			a.shadowGroup = b.g("shadow").add(a.group);
		}
		o(a.points, function (j) {
			if (j.y !== null) {
				d = j.graphic;
				h = j.shapeArgs;
				f = j.shadowGroup;
				g = j.pointAttr[j.selected ? "select" : ""];
				if (!g.stroke) {
					g.stroke = g.fill;
				}
				if (e && !f) {
					f = j.shadowGroup = b.g("shadow").add(a.shadowGroup);
				}
				c = j.sliced ? j.slicedTranslation : {translateX:0, translateY:0};
				f && f.attr(c);
				if (d) {
					d.setRadialReference(a.center).attr(g).animate(A(h, c));
				} else {
					i = {"stroke-linejoin":"round"};
					if (!j.visible) {
						i.visibility = "hidden";
					}
					j.graphic = d = b[j.shapeType](h).setRadialReference(a.center).attr(g).attr(i).attr(c).add(a.group).shadow(e, f);
				}
			}
		});
	}, searchPoint:ra, sortByAngle:function (a, b) {
		a.sort(function (a, d) {
			return a.angle !== void 0 && (d.angle - a.angle) * b;
		});
	}, drawLegendSymbol:aa.drawRectangle, getCenter:bc.getCenter, getSymbol:ra};
	da = ma(P, da);
	I.pie = da;
	P.prototype.drawDataLabels = function () {
		var a = this, b = a.options, c = b.cursor, d = b.dataLabels, e = a.points, f, g, h = a.hasRendered || 0, i, j, k = q(d.defer, !0), l = a.chart.renderer;
		if (d.enabled || a._hasPointLabels) {
			a.dlProcessOptions && a.dlProcessOptions(d), j = a.plotGroup("dataLabelsGroup", "data-labels", k && !h ? "hidden" : "visible", d.zIndex || 6), k && (j.attr({opacity:+h}), h || E(a, "afterAnimate", function () {
				a.visible && j.show();
				j[b.animation ? "animate" : "attr"]({opacity:1}, {duration:200});
			})), g = d, o(e, function (e) {
				var h, k = e.dataLabel, r, o, F = e.connector, u = !0, x, D = {};
				f = e.dlOptions || e.options && e.options.dataLabels;
				h = q(f && f.enabled, g.enabled) && e.y !== null;
				if (k && !h) {
					e.dataLabel = k.destroy();
				} else {
					if (h) {
						d = z(g, f);
						x = d.style;
						h = d.rotation;
						r = e.getLabelConfig();
						i = d.format ? La(d.format, r) : d.formatter.call(r, d);
						x.color = q(d.color, x.color, a.color, "black");
						if (k) {
							if (v(i)) {
								k.attr({text:i}), u = !1;
							} else {
								if (e.dataLabel = k = k.destroy(), F) {
									e.connector = F.destroy();
								}
							}
						} else {
							if (v(i)) {
								k = {fill:d.backgroundColor, stroke:d.borderColor, "stroke-width":d.borderWidth, r:d.borderRadius || 0, rotation:h, padding:d.padding, zIndex:1};
								if (x.color === "contrast") {
									D.color = d.inside || d.distance < 0 || b.stacking ? l.getContrast(e.color || a.color) : "#000000";
								}
								if (c) {
									D.cursor = c;
								}
								for (o in k) {
									k[o] === t && delete k[o];
								}
								k = e.dataLabel = l[h ? "text" : "label"](i, 0, -9999, d.shape, null, null, d.useHTML).attr(k).css(A(x, D)).add(j).shadow(d.shadow);
							}
						}
						k && a.alignDataLabel(e, k, d, null, u);
					}
				}
			});
		}
	};
	P.prototype.alignDataLabel = function (a, b, c, d, e) {
		var f = this.chart, g = f.inverted, h = q(a.plotX, -9999), i = q(a.plotY, -9999), j = b.getBBox(), k = f.renderer.fontMetrics(c.style.fontSize).b, l = c.rotation, m = c.align, n = this.visible && (a.series.forceDL || f.isInsidePlot(h, y(i), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g)), p = q(c.overflow, "justify") === "justify";
		if (n) {
			d = A({x:g ? f.plotWidth - i : h, y:y(g ? f.plotHeight - h : i), width:0, height:0}, d), A(c, {width:j.width, height:j.height}), l ? (p = !1, g = f.renderer.rotCorr(k, l), g = {x:d.x + c.x + d.width / 2 + g.x, y:d.y + c.y + {top:0, middle:0.5, bottom:1}[c.verticalAlign] * d.height}, b[e ? "attr" : "animate"](g).attr({align:m}), h = (l + 720) % 360, h = h > 180 && h < 360, m === "left" ? g.y -= h ? j.height : 0 : m === "center" ? (g.x -= j.width / 2, g.y -= j.height / 2) : m === "right" && (g.x -= j.width, g.y -= h ? 0 : j.height)) : (b.align(c, null, d), g = b.alignAttr), p ? this.justifyDataLabel(b, c, g, j, d, e) : q(c.crop, !0) && (n = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + j.width, g.y + j.height)), c.shape && !l && b.attr({anchorX:a.plotX, anchorY:a.plotY});
		}
		if (!n) {
			Sa(b), b.attr({y:-9999}), b.placed = !1;
		}
	};
	P.prototype.justifyDataLabel = function (a, b, c, d, e, f) {
		var g = this.chart, h = b.align, i = b.verticalAlign, j, k, l = a.box ? 0 : a.padding || 0;
		j = c.x + l;
		if (j < 0) {
			h === "right" ? b.align = "left" : b.x = -j, k = !0;
		}
		j = c.x + d.width - l;
		if (j > g.plotWidth) {
			h === "left" ? b.align = "right" : b.x = g.plotWidth - j, k = !0;
		}
		j = c.y + l;
		if (j < 0) {
			i === "bottom" ? b.verticalAlign = "top" : b.y = -j, k = !0;
		}
		j = c.y + d.height - l;
		if (j > g.plotHeight) {
			i === "top" ? b.verticalAlign = "bottom" : b.y = g.plotHeight - j, k = !0;
		}
		if (k) {
			a.placed = !f, a.align(b, null, e);
		}
	};
	if (I.pie) {
		I.pie.prototype.drawDataLabels = function () {
			var a = this, b = a.data, c, d = a.chart, e = a.options.dataLabels, f = q(e.connectorPadding, 10), g = q(e.connectorWidth, 1), h = d.plotWidth, i = d.plotHeight, j, k, l = q(e.softConnector, !0), m = e.distance, n = a.center, p = n[2] / 2, r = n[1], s = m > 0, F, u, x, D = [[], []], v, t, A, B, z, C = [0, 0, 0, 0], H = function (a, b) {
				return b.y - a.y;
			};
			if (a.visible && (e.enabled || a._hasPointLabels)) {
				P.prototype.drawDataLabels.apply(a);
				o(b, function (a) {
					if (a.dataLabel && a.visible) {
						D[a.half].push(a), a.dataLabel._pos = null;
					}
				});
				for (B = 2; B--; ) {
					var E = [], L = [], K = D[B], I = K.length, J;
					if (I) {
						a.sortByAngle(K, B - 0.5);
						for (z = b = 0; !b && K[z]; ) {
							b = K[z] && K[z].dataLabel && (K[z].dataLabel.getBBox().height || 21), z++;
						}
						if (m > 0) {
							u = G(r + p + m, d.plotHeight);
							for (z = w(0, r - p - m); z <= u; z += b) {
								E.push(z);
							}
							u = E.length;
							if (I > u) {
								c = [].concat(K);
								c.sort(H);
								for (z = I; z--; ) {
									c[z].rank = z;
								}
								for (z = I; z--; ) {
									K[z].rank >= u && K.splice(z, 1);
								}
								I = K.length;
							}
							for (z = 0; z < I; z++) {
								c = K[z];
								x = c.labelPos;
								c = 9999;
								var N, M;
								for (M = 0; M < u; M++) {
									N = S(E[M] - x[1]), N < c && (c = N, J = M);
								}
								if (J < z && E[z] !== null) {
									J = z;
								} else {
									for (u < I - z + J && E[z] !== null && (J = u - I + z); E[J] === null; ) {
										J++;
									}
								}
								L.push({i:J, y:E[J]});
								E[J] = null;
							}
							L.sort(H);
						}
						for (z = 0; z < I; z++) {
							c = K[z];
							x = c.labelPos;
							F = c.dataLabel;
							A = c.visible === !1 ? "hidden" : "inherit";
							c = x[1];
							if (m > 0) {
								if (u = L.pop(), J = u.i, t = u.y, c > t && E[J + 1] !== null || c < t && E[J - 1] !== null) {
									t = G(w(0, c), d.plotHeight);
								}
							} else {
								t = c;
							}
							v = e.justify ? n[0] + (B ? -1 : 1) * (p + m) : a.getX(t === r - p - m || t === r + p + m ? c : t, B);
							F._attr = {visibility:A, align:x[6]};
							F._pos = {x:v + e.x + ({left:f, right:-f}[x[6]] || 0), y:t + e.y - 10};
							F.connX = v;
							F.connY = t;
							if (this.options.size === null) {
								u = F.width, v - u < f ? C[3] = w(y(u - v + f), C[3]) : v + u > h - f && (C[1] = w(y(v + u - h + f), C[1])), t - b / 2 < 0 ? C[0] = w(y(-t + b / 2), C[0]) : t + b / 2 > i && (C[2] = w(y(t + b / 2 - i), C[2]));
							}
						}
					}
				}
				if (Da(C) === 0 || this.verifyDataLabelOverflow(C)) {
					this.placeDataLabels(), s && g && o(this.points, function (b) {
						j = b.connector;
						x = b.labelPos;
						if ((F = b.dataLabel) && F._pos && b.visible) {
							A = F._attr.visibility, v = F.connX, t = F.connY, k = l ? ["M", v + (x[6] === "left" ? 5 : -5), t, "C", v, t, 2 * x[2] - x[4], 2 * x[3] - x[5], x[2], x[3], "L", x[4], x[5]] : ["M", v + (x[6] === "left" ? 5 : -5), t, "L", x[2], x[3], "L", x[4], x[5]], j ? (j.animate({d:k}), j.attr("visibility", A)) : b.connector = j = a.chart.renderer.path(k).attr({"stroke-width":g, stroke:e.connectorColor || b.color || "#606060", visibility:A}).add(a.dataLabelsGroup);
						} else {
							if (j) {
								b.connector = j.destroy();
							}
						}
					});
				}
			}
		}, I.pie.prototype.placeDataLabels = function () {
			o(this.points, function (a) {
				var b = a.dataLabel;
				if (b && a.visible) {
					(a = b._pos) ? (b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({y:-9999});
				}
			});
		}, I.pie.prototype.alignDataLabel = ra, I.pie.prototype.verifyDataLabelOverflow = function (a) {
			var b = this.center, c = this.options, d = c.center, e = c.minSize || 80, f = e, g;
			d[0] !== null ? f = w(b[2] - w(a[1], a[3]), e) : (f = w(b[2] - a[1] - a[3], e), b[0] += (a[3] - a[1]) / 2);
			d[1] !== null ? f = w(G(f, b[2] - w(a[0], a[2])), e) : (f = w(G(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2);
			f < b[2] ? (b[2] = f, b[3] = Math.min(/%$/.test(c.innerSize || 0) ? f * parseFloat(c.innerSize || 0) / 100 : parseFloat(c.innerSize || 0), f), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : g = !0;
			return g;
		};
	}
	if (I.column) {
		I.column.prototype.alignDataLabel = function (a, b, c, d, e) {
			var f = this.chart.inverted, g = a.series, h = a.dlBox || a.shapeArgs, i = q(a.below, a.plotY > q(this.translatedThreshold, g.yAxis.len)), j = q(c.inside, !!this.options.stacking);
			if (h) {
				d = z(h);
				if (d.y < 0) {
					d.height += d.y, d.y = 0;
				}
				h = d.y + d.height - g.yAxis.len;
				h > 0 && (d.height -= h);
				f && (d = {x:g.yAxis.len - d.y - d.height, y:g.xAxis.len - d.x - d.width, width:d.height, height:d.width});
				if (!j) {
					f ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, d.height = 0);
				}
			}
			c.align = q(c.align, !f || j ? "center" : i ? "right" : "left");
			c.verticalAlign = q(c.verticalAlign, f || j ? "middle" : i ? "top" : "bottom");
			P.prototype.alignDataLabel.call(this, a, b, c, d, e);
		};
	}
	(function (a) {
		var b = a.Chart, c = a.each, d = a.pick, e = a.addEvent;
		b.prototype.callbacks.push(function (a) {
			function b() {
				var e = [];
				c(a.series, function (a) {
					var b = a.options.dataLabels, f = a.dataLabelCollections || ["dataLabel"];
					(b.enabled || a._hasPointLabels) && !b.allowOverlap && a.visible && c(f, function (b) {
						c(a.points, function (a) {
							if (a[b]) {
								a[b].labelrank = d(a.labelrank, a.shapeArgs && a.shapeArgs.height), e.push(a[b]);
							}
						});
					});
				});
				a.hideOverlappingLabels(e);
			}
			b();
			e(a, "redraw", b);
		});
		b.prototype.hideOverlappingLabels = function (a) {
			var b = a.length, d, e, j, k, l, m, n, p, r;
			for (e = 0; e < b; e++) {
				if (d = a[e]) {
					d.oldOpacity = d.opacity, d.newOpacity = 1;
				}
			}
			a.sort(function (a, b) {
				return (b.labelrank || 0) - (a.labelrank || 0);
			});
			for (e = 0; e < b; e++) {
				j = a[e];
				for (d = e + 1; d < b; ++d) {
					if (k = a[d], j && k && j.placed && k.placed && j.newOpacity !== 0 && k.newOpacity !== 0 && (l = j.alignAttr, m = k.alignAttr, n = j.parentGroup, p = k.parentGroup, r = 2 * (j.box ? 0 : j.padding), l = !(m.x + p.translateX > l.x + n.translateX + (j.width - r) || m.x + p.translateX + (k.width - r) < l.x + n.translateX || m.y + p.translateY > l.y + n.translateY + (j.height - r) || m.y + p.translateY + (k.height - r) < l.y + n.translateY))) {
						(j.labelrank < k.labelrank ? j : k).newOpacity = 0;
					}
				}
			}
			c(a, function (a) {
				var b, c;
				if (a) {
					c = a.newOpacity;
					if (a.oldOpacity !== c && a.placed) {
						c ? a.show(!0) : b = function () {
							a.hide();
						}, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b);
					}
					a.isOld = !0;
				}
			});
		};
	})(B);
	var mb = B.TrackerMixin = {drawTrackerPoint:function () {
		var a = this, b = a.chart, c = b.pointer, d = a.options.cursor, e = d && {cursor:d}, f = function (a) {
			for (var c = a.target, d; c && !d; ) {
				d = c.point, c = c.parentNode;
			}
			if (d !== t && d !== b.hoverPoint) {
				d.onMouseOver(a);
			}
		};
		o(a.points, function (a) {
			if (a.graphic) {
				a.graphic.element.point = a;
			}
			if (a.dataLabel) {
				a.dataLabel.element.point = a;
			}
		});
		if (!a._hasTracking) {
			o(a.trackerGroups, function (b) {
				if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (a) {
					c.onTrackerMouseOut(a);
				}).css(e), cb)) {
					a[b].on("touchstart", f);
				}
			}), a._hasTracking = !0;
		}
	}, drawTrackerGraph:function () {
		var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), e = d.length, f = a.chart, g = f.pointer, h = f.renderer, i = f.options.tooltip.snap, j = a.tracker, k = b.cursor, l = k && {cursor:k}, m = function () {
			if (f.hoverSeries !== a) {
				a.onMouseOver();
			}
		}, n = "rgba(192,192,192," + (ja ? 0.0001 : 0.002) + ")";
		if (e && !c) {
			for (k = e + 1; k--; ) {
				d[k] === "M" && d.splice(k + 1, 0, d[k + 1] - i, d[k + 2], "L"), (k && d[k] === "M" || k === e) && d.splice(k, 0, "L", d[k - 2] + i, d[k - 1]);
			}
		}
		j ? j.attr({d:d}) : (a.tracker = h.path(d).attr({"stroke-linejoin":"round", visibility:a.visible ? "visible" : "hidden", stroke:n, fill:c ? n : "none", "stroke-width":b.lineWidth + (c ? 0 : 2 * i), zIndex:2}).add(a.group), o([a.tracker, a.markerGroup], function (a) {
			a.addClass("highcharts-tracker").on("mouseover", m).on("mouseout", function (a) {
				g.onTrackerMouseOut(a);
			}).css(l);
			if (cb) {
				a.on("touchstart", m);
			}
		}));
	}};
	if (I.column) {
		Ia.prototype.drawTracker = mb.drawTrackerPoint;
	}
	if (I.pie) {
		I.pie.prototype.drawTracker = mb.drawTrackerPoint;
	}
	if (I.scatter) {
		ya.prototype.drawTracker = mb.drawTrackerPoint;
	}
	A(ub.prototype, {setItemEvents:function (a, b, c, d, e) {
		var f = this;
		(c ? b : a.legendGroup).on("mouseover", function () {
			a.setState("hover");
			b.css(f.options.itemHoverStyle);
		}).on("mouseout", function () {
			b.css(a.visible ? d : e);
			a.setState();
		}).on("click", function (b) {
			var c = function () {
				a.setVisible && a.setVisible();
			}, b = {browserEvent:b};
			a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : O(a, "legendItemClick", b, c);
		});
	}, createCheckboxForItem:function (a) {
		a.checkbox = fa("input", {type:"checkbox", checked:a.selected, defaultChecked:a.selected}, this.options.itemCheckboxStyle, this.chart.container);
		E(a.checkbox, "click", function (b) {
			O(a.series || a, "checkboxClick", {checked:b.target.checked, item:a}, function () {
				a.select();
			});
		});
	}});
	R.legend.itemStyle.cursor = "pointer";
	A(Ba.prototype, {showResetZoom:function () {
		var a = this, b = R.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states, f = c.relativeTo === "chart" ? null : "plotBox";
		this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () {
			a.zoomOut();
		}, d, e && e.hover).attr({align:c.position.align, title:b.resetZoomTitle}).add().align(c.position, !1, f);
	}, zoomOut:function () {
		var a = this;
		O(a, "selection", {resetSelection:!0}, function () {
			a.zoom();
		});
	}, zoom:function (a) {
		var b, c = this.pointer, d = !1, e;
		!a || a.resetSelection ? o(this.axes, function (a) {
			b = a.zoom();
		}) : o(a.xAxis.concat(a.yAxis), function (a) {
			var e = a.axis, h = e.isXAxis;
			if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) {
				b = e.zoom(a.min, a.max), e.displayBtn && (d = !0);
			}
		});
		e = this.resetZoomButton;
		if (d && !e) {
			this.showResetZoom();
		} else {
			if (!d && ea(e)) {
				this.resetZoomButton = e.destroy();
			}
		}
		b && this.redraw(q(this.options.chart.animation, a && a.animation, this.pointCount < 100));
	}, pan:function (a, b) {
		var c = this, d = c.hoverPoints, e;
		d && o(d, function (a) {
			a.setState();
		});
		o(b === "xy" ? [1, 0] : [1], function (b) {
			var b = c[b ? "xAxis" : "yAxis"][0], d = b.horiz, h = a[d ? "chartX" : "chartY"], d = d ? "mouseDownX" : "mouseDownY", i = c[d], j = (b.pointRange || 0) / 2, k = b.getExtremes(), l = b.toValue(i - h, !0) + j, j = b.toValue(i + b.len - h, !0) - j, i = i > h;
			if (b.series.length && (i || l > G(k.dataMin, k.min)) && (!i || j < w(k.dataMax, k.max))) {
				b.setExtremes(l, j, !1, !1, {trigger:"pan"}), e = !0;
			}
			c[d] = h;
		});
		e && c.redraw(!1);
		N(c.container, {cursor:"move"});
	}});
	A(Ha.prototype, {select:function (a, b) {
		var c = this, d = c.series, e = d.chart, a = q(a, !c.selected);
		c.firePointEvent(a ? "select" : "unselect", {accumulate:b}, function () {
			c.selected = c.options.selected = a;
			d.options.data[sa(c, d.data)] = c.options;
			c.setState(a && "select");
			b || o(e.getSelectedPoints(), function (a) {
				if (a.selected && a !== c) {
					a.selected = a.options.selected = !1, d.options.data[sa(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect");
				}
			});
		});
	}, onMouseOver:function (a, b) {
		var c = this.series, d = c.chart, e = d.tooltip, f = d.hoverPoint;
		if (d.hoverSeries !== c) {
			c.onMouseOver();
		}
		if (f && f !== this) {
			f.onMouseOut();
		}
		if (this.series && (this.firePointEvent("mouseOver"), e && (!e.shared || c.noSharedTooltip) && e.refresh(this, a), this.setState("hover"), !b)) {
			d.hoverPoint = this;
		}
	}, onMouseOut:function () {
		var a = this.series.chart, b = a.hoverPoints;
		this.firePointEvent("mouseOut");
		if (!b || sa(this, b) === -1) {
			this.setState(), a.hoverPoint = null;
		}
	}, importEvents:function () {
		if (!this.hasImportedEvents) {
			var a = z(this.series.options.point, this.options).events, b;
			this.events = a;
			for (b in a) {
				E(this, b, a[b]);
			}
			this.hasImportedEvents = !0;
		}
	}, setState:function (a, b) {
		var c = V(this.plotX), d = this.plotY, e = this.series, f = e.options.states, g = W[e.type].marker && e.options.marker, h = g && !g.enabled, i = g && g.states[a], j = i && i.enabled === !1, k = e.stateMarkerGraphic, l = this.marker || {}, m = e.chart, n = e.halo, p, a = a || "";
		p = this.pointAttr[a] || e.pointAttr[a];
		if (!(a === this.state && !b || this.selected && a !== "select" || f[a] && f[a].enabled === !1 || a && (j || h && i.enabled === !1) || a && l.states && l.states[a] && l.states[a].enabled === !1)) {
			if (this.graphic) {
				g = g && this.graphic.symbolName && p.r, this.graphic.attr(z(p, g ? {x:c - g, y:d - g, width:2 * g, height:2 * g} : {})), k && k.hide();
			} else {
				if (a && i) {
					if (g = i.radius, l = l.symbol || e.symbol, k && k.currentSymbol !== l && (k = k.destroy()), k) {
						k[b ? "animate" : "attr"]({x:c - g, y:d - g});
					} else {
						if (l) {
							e.stateMarkerGraphic = k = m.renderer.symbol(l, c - g, d - g, 2 * g, 2 * g).attr(p).add(e.markerGroup), k.currentSymbol = l;
						}
					}
				}
				if (k) {
					k[a && m.isInsidePlot(c, d, m.inverted) ? "show" : "hide"](), k.element.point = this;
				}
			}
			if ((c = f[a] && f[a].halo) && c.size) {
				if (!n) {
					e.halo = n = m.renderer.path().add(m.seriesGroup);
				}
				n.attr(A({fill:this.color || e.color, "fill-opacity":c.opacity, zIndex:-1}, c.attributes))[b ? "animate" : "attr"]({d:this.haloPath(c.size)});
			} else {
				n && n.attr({d:[]});
			}
			this.state = a;
		}
	}, haloPath:function (a) {
		var b = this.series, c = b.chart, d = b.getPlotBox(), e = c.inverted, f = Math.floor(this.plotX);
		return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : f) - a, d.translateY + (e ? b.xAxis.len - f : this.plotY) - a, a * 2, a * 2);
	}});
	A(P.prototype, {onMouseOver:function () {
		var a = this.chart, b = a.hoverSeries;
		if (b && b !== this) {
			b.onMouseOut();
		}
		this.options.events.mouseOver && O(this, "mouseOver");
		this.setState("hover");
		a.hoverSeries = this;
	}, onMouseOut:function () {
		var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
		b.hoverSeries = null;
		if (d) {
			d.onMouseOut();
		}
		this && a.events.mouseOut && O(this, "mouseOut");
		c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) && c.hide();
		this.setState();
	}, setState:function (a) {
		var b = this.options, c = this.graph, d = b.states, e = b.lineWidth, b = 0, a = a || "";
		if (this.state !== a && (this.state = a, !(d[a] && d[a].enabled === !1) && (a && (e = d[a].lineWidth || e + (d[a].lineWidthPlus || 0)), c && !c.dashstyle))) {
			a = {"stroke-width":e};
			for (c.attr(a); this["zoneGraph" + b]; ) {
				this["zoneGraph" + b].attr(a), b += 1;
			}
		}
	}, setVisible:function (a, b) {
		var c = this, d = c.chart, e = c.legendItem, f, g = d.options.chart.ignoreHiddenSeries, h = c.visible;
		f = (c.visible = a = c.userOptions.visible = a === t ? !h : a) ? "show" : "hide";
		o(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (a) {
			if (c[a]) {
				c[a][f]();
			}
		});
		if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) {
			c.onMouseOut();
		}
		e && d.legend.colorizeItem(c, a);
		c.isDirty = !0;
		c.options.stacking && o(d.series, function (a) {
			if (a.options.stacking && a.visible) {
				a.isDirty = !0;
			}
		});
		o(c.linkedSeries, function (b) {
			b.setVisible(a, !1);
		});
		if (g) {
			d.isDirtyBox = !0;
		}
		b !== !1 && d.redraw();
		O(c, f);
	}, show:function () {
		this.setVisible(!0);
	}, hide:function () {
		this.setVisible(!1);
	}, select:function (a) {
		this.selected = a = a === t ? !this.selected : a;
		if (this.checkbox) {
			this.checkbox.checked = a;
		}
		O(this, a ? "select" : "unselect");
	}, drawTracker:mb.drawTrackerGraph});
	U(P.prototype, "init", function (a) {
		var b;
		a.apply(this, Array.prototype.slice.call(arguments, 1));
		(b = this.xAxis) && b.options.ordinal && E(this, "updatedData", function () {
			delete b.ordinalIndex;
		});
	});
	U(J.prototype, "getTimeTicks", function (a, b, c, d, e, f, g, h) {
		var i = 0, j, k, l = {}, m, n, p, o = [], q = -Number.MAX_VALUE, F = this.options.tickPixelInterval;
		if (!this.options.ordinal && !this.options.breaks || !f || f.length < 3 || c === t) {
			return a.call(this, b, c, d, e);
		}
		n = f.length;
		for (j = 0; j < n; j++) {
			p = j && f[j - 1] > d;
			f[j] < c && (i = j);
			if (j === n - 1 || f[j + 1] - f[j] > g * 5 || p) {
				if (f[j] > q) {
					for (k = a.call(this, b, f[i], f[j], e); k.length && k[0] <= q; ) {
						k.shift();
					}
					k.length && (q = k[k.length - 1]);
					o = o.concat(k);
				}
				i = j + 1;
			}
			if (p) {
				break;
			}
		}
		a = k.info;
		if (h && a.unitRange <= M.hour) {
			j = o.length - 1;
			for (i = 1; i < j; i++) {
				na("%d", o[i]) !== na("%d", o[i - 1]) && (l[o[i]] = "day", m = !0);
			}
			m && (l[o[0]] = "day");
			a.higherRanks = l;
		}
		o.info = a;
		if (h && v(F)) {
			h = a = o.length;
			j = [];
			var u;
			for (m = []; h--; ) {
				i = this.translate(o[h]), u && (m[h] = u - i), j[h] = u = i;
			}
			m.sort();
			m = m[V(m.length / 2)];
			m < F * 0.6 && (m = null);
			h = o[a - 1] > d ? a - 1 : a;
			for (u = void 0; h--; ) {
				i = j[h], d = u - i, u && d < F * 0.8 && (m === null || d < m * 0.8) ? (l[o[h]] && !l[o[h + 1]] ? (d = h + 1, u = i) : d = h, o.splice(d, 1)) : u = i;
			}
		}
		return o;
	});
	A(J.prototype, {beforeSetTickPositions:function () {
		var a, b = [], c = !1, d, e = this.getExtremes(), f = e.min, g = e.max, h, i = this.isXAxis && !!this.options.breaks;
		if ((e = this.options.ordinal) || i) {
			o(this.series, function (c, d) {
				if (c.visible !== !1 && (c.takeOrdinalPosition !== !1 || i)) {
					if (b = b.concat(c.processedXData), a = b.length, b.sort(function (a, b) {
						return a - b;
					}), a) {
						for (d = a - 1; d--; ) {
							b[d] === b[d + 1] && b.splice(d, 1);
						}
					}
				}
			});
			a = b.length;
			if (a > 2) {
				d = b[1] - b[0];
				for (h = a - 1; h-- && !c; ) {
					b[h + 1] - b[h] !== d && (c = !0);
				}
				if (!this.options.keepOrdinalPadding && (b[0] - f > d || g - b[b.length - 1] > d)) {
					c = !0;
				}
			}
			c ? (this.ordinalPositions = b, d = this.val2lin(w(f, b[0]), !0), h = w(this.val2lin(G(g, b[b.length - 1]), !0), 1), this.ordinalSlope = g = (g - f) / (h - d), this.ordinalOffset = f - d * g) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = t;
		}
		this.isOrdinal = e && c;
		this.groupIntervalFactor = null;
	}, val2lin:function (a, b) {
		var c = this.ordinalPositions, d;
		if (c) {
			var e = c.length, f;
			for (d = e; d--; ) {
				if (c[d] === a) {
					f = d;
					break;
				}
			}
			for (d = e - 1; d--; ) {
				if (a > c[d] || d === 0) {
					c = (a - c[d]) / (c[d + 1] - c[d]);
					f = d + c;
					break;
				}
			}
			d = b ? f : this.ordinalSlope * (f || 0) + this.ordinalOffset;
		} else {
			d = a;
		}
		return d;
	}, lin2val:function (a, b) {
		var c = this.ordinalPositions;
		if (c) {
			var d = this.ordinalSlope, e = this.ordinalOffset, f = c.length - 1, g, h;
			if (b) {
				a < 0 ? a = c[0] : a > f ? a = c[f] : (f = V(a), h = a - f);
			} else {
				for (; f--; ) {
					if (g = d * f + e, a >= g) {
						d = d * (f + 1) + e;
						h = (a - g) / (d - g);
						break;
					}
				}
			}
			c = h !== t && c[f] !== t ? c[f] + (h ? h * (c[f + 1] - c[f]) : 0) : a;
		} else {
			c = a;
		}
		return c;
	}, getExtendedPositions:function () {
		var a = this.chart, b = this.series[0].currentDataGrouping, c = this.ordinalIndex, d = b ? b.count + b.unitName : "raw", e = this.getExtremes(), f, g;
		if (!c) {
			c = this.ordinalIndex = {};
		}
		if (!c[d]) {
			f = {series:[], getExtremes:function () {
				return {min:e.dataMin, max:e.dataMax};
			}, options:{ordinal:!0}, val2lin:J.prototype.val2lin}, o(this.series, function (c) {
				g = {xAxis:f, xData:c.xData, chart:a, destroyGroupedData:ra};
				g.options = {dataGrouping:b ? {enabled:!0, forced:!0, approximation:"open", units:[[b.unitName, [b.count]]]} : {enabled:!1}};
				c.processData.apply(g);
				f.series.push(g);
			}), this.beforeSetTickPositions.apply(f), c[d] = f.ordinalPositions;
		}
		return c[d];
	}, getGroupIntervalFactor:function (a, b, c) {
		var d, c = c.processedXData, e = c.length, f = [];
		d = this.groupIntervalFactor;
		if (!d) {
			for (d = 0; d < e - 1; d++) {
				f[d] = c[d + 1] - c[d];
			}
			f.sort(function (a, b) {
				return a - b;
			});
			f = f[V(e / 2)];
			a = w(a, c[0]);
			b = G(b, c[e - 1]);
			this.groupIntervalFactor = d = e * f / (b - a);
		}
		return d;
	}, postProcessTickInterval:function (a) {
		var b = this.ordinalSlope;
		return b ? this.options.breaks ? this.closestPointRange : a / (b / this.closestPointRange) : a;
	}});
	U(Ba.prototype, "pan", function (a, b) {
		var c = this.xAxis[0], d = b.chartX, e = !1;
		if (c.options.ordinal && c.series.length) {
			var f = this.mouseDownX, g = c.getExtremes(), h = g.dataMax, i = g.min, j = g.max, k = this.hoverPoints, l = c.closestPointRange, f = (f - d) / (c.translationSlope * (c.ordinalSlope || l)), m = {ordinalPositions:c.getExtendedPositions()}, l = c.lin2val, n = c.val2lin, p;
			if (m.ordinalPositions) {
				if (S(f) > 1) {
					k && o(k, function (a) {
						a.setState();
					}), f < 0 ? (k = m, p = c.ordinalPositions ? c : m) : (k = c.ordinalPositions ? c : m, p = m), m = p.ordinalPositions, h > m[m.length - 1] && m.push(h), this.fixedRange = j - i, f = c.toFixedRange(null, null, l.apply(k, [n.apply(k, [i, !0]) + f, !0]), l.apply(p, [n.apply(p, [j, !0]) + f, !0])), f.min >= G(g.dataMin, i) && f.max <= w(h, j) && c.setExtremes(f.min, f.max, !0, !1, {trigger:"pan"}), this.mouseDownX = d, N(this.container, {cursor:"move"});
				}
			} else {
				e = !0;
			}
		} else {
			e = !0;
		}
		e && a.apply(this, Array.prototype.slice.call(arguments, 1));
	});
	P.prototype.gappedPath = function () {
		var a = this.options.gapSize, b = this.points.slice(), c = b.length - 1;
		if (a && c > 0) {
			for (; c--; ) {
				b[c + 1].x - b[c].x > this.closestPointRange * a && b.splice(c + 1, 0, {isNull:!0});
			}
		}
		return this.getGraphPath(b);
	};
	(function (a) {
		a(B);
	})(function (a) {
		function b() {
			return Array.prototype.slice.call(arguments, 1);
		}
		function c(a) {
			a.apply(this);
			this.drawBreaks(this.xAxis, ["x"]);
			this.drawBreaks(this.yAxis, d(this.pointArrayMap, ["y"]));
		}
		var d = a.pick, e = a.wrap, f = a.each, g = a.extend, h = a.fireEvent, i = a.Axis, j = a.Series;
		g(i.prototype, {isInBreak:function (a, b) {
			var c = a.repeat || Infinity, d = a.from, e = a.to - a.from, c = b >= d ? (b - d) % c : c - (d - b) % c;
			return a.inclusive ? c <= e : c < e && c !== 0;
		}, isInAnyBreak:function (a, b) {
			var c = this.options.breaks, e = c && c.length, f, g, h;
			if (e) {
				for (; e--; ) {
					this.isInBreak(c[e], a) && (f = !0, g || (g = d(c[e].showPoints, this.isXAxis ? !1 : !0)));
				}
				h = f && b ? f && !g : f;
			}
			return h;
		}});
		e(i.prototype, "setTickPositions", function (a) {
			a.apply(this, Array.prototype.slice.call(arguments, 1));
			if (this.options.breaks) {
				var b = this.tickPositions, c = this.tickPositions.info, d = [], e;
				for (e = 0; e < b.length; e++) {
					this.isInAnyBreak(b[e]) || d.push(b[e]);
				}
				this.tickPositions = d;
				this.tickPositions.info = c;
			}
		});
		e(i.prototype, "init", function (a, b, c) {
			if (c.breaks && c.breaks.length) {
				c.ordinal = !1;
			}
			a.call(this, b, c);
			if (this.options.breaks) {
				var d = this;
				d.isBroken = !0;
				this.val2lin = function (a) {
					var b = a, c, e;
					for (e = 0; e < d.breakArray.length; e++) {
						if (c = d.breakArray[e], c.to <= a) {
							b -= c.len;
						} else {
							if (c.from >= a) {
								break;
							} else {
								if (d.isInBreak(c, a)) {
									b -= a - c.from;
									break;
								}
							}
						}
					}
					return b;
				};
				this.lin2val = function (a) {
					var b, c;
					for (c = 0; c < d.breakArray.length; c++) {
						if (b = d.breakArray[c], b.from >= a) {
							break;
						} else {
							b.to < a ? a += b.len : d.isInBreak(b, a) && (a += b.len);
						}
					}
					return a;
				};
				this.setExtremes = function (a, b, c, d, e) {
					for (; this.isInAnyBreak(a); ) {
						a -= this.closestPointRange;
					}
					for (; this.isInAnyBreak(b); ) {
						b -= this.closestPointRange;
					}
					i.prototype.setExtremes.call(this, a, b, c, d, e);
				};
				this.setAxisTranslation = function (a) {
					i.prototype.setAxisTranslation.call(this, a);
					var b = d.options.breaks, a = [], c = [], e = 0, f, g, k = d.userMin || d.min, j = d.userMax || d.max, l, m;
					for (m in b) {
						g = b[m], f = g.repeat || Infinity, d.isInBreak(g, k) && (k += g.to % f - k % f), d.isInBreak(g, j) && (j -= j % f - g.from % f);
					}
					for (m in b) {
						g = b[m];
						l = g.from;
						for (f = g.repeat || Infinity; l - f > k; ) {
							l -= f;
						}
						for (; l < k; ) {
							l += f;
						}
						for (; l < j; l += f) {
							a.push({value:l, move:"in"}), a.push({value:l + (g.to - g.from), move:"out", size:g.breakSize});
						}
					}
					a.sort(function (a, b) {
						return a.value === b.value ? (a.move === "in" ? 0 : 1) - (b.move === "in" ? 0 : 1) : a.value - b.value;
					});
					b = 0;
					l = k;
					for (m in a) {
						g = a[m];
						b += g.move === "in" ? 1 : -1;
						if (b === 1 && g.move === "in") {
							l = g.value;
						}
						b === 0 && (c.push({from:l, to:g.value, len:g.value - l - (g.size || 0)}), e += g.value - l - (g.size || 0));
					}
					d.breakArray = c;
					h(d, "afterBreaks");
					d.transA *= (j - d.min) / (j - k - e);
					d.min = k;
					d.max = j;
				};
			}
		});
		e(j.prototype, "generatePoints", function (a) {
			a.apply(this, b(arguments));
			var c = this.xAxis, d = this.yAxis, e = this.points, f, g = e.length, h = this.options.connectNulls, i;
			if (c && d && (c.options.breaks || d.options.breaks)) {
				for (; g--; ) {
					if (f = e[g], i = f.y === null && h === !1, !i && (c.isInAnyBreak(f.x, !0) || d.isInAnyBreak(f.y, !0))) {
						e.splice(g, 1), this.data[g] && this.data[g].destroyElements();
					}
				}
			}
		});
		a.Series.prototype.drawBreaks = function (a, b) {
			var c = this, e = c.points, g, i, j, o;
			f(b, function (b) {
				g = a.breakArray || [];
				i = a.isXAxis ? a.min : d(c.options.threshold, a.min);
				f(e, function (c) {
					o = d(c["stack" + b.toUpperCase()], c[b]);
					f(g, function (b) {
						j = !1;
						if (i < b.from && o > b.to || i > b.from && o < b.from) {
							j = "pointBreak";
						} else {
							if (i < b.from && o > b.from && o < b.to || i > b.from && o > b.to && o < b.from) {
								j = "pointInBreak";
							}
						}
						j && h(a, j, {point:c, brk:b});
					});
				});
			});
		};
		e(a.seriesTypes.column.prototype, "drawPoints", c);
		e(a.Series.prototype, "drawPoints", c);
	});
	var ia = P.prototype, cc = ia.processData, dc = ia.generatePoints, ec = ia.destroy, fc = {approximation:"average", groupPixelWidth:2, dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], second:["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], minute:["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], hour:["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], day:["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], week:["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], month:["%B %Y", "%B", "-%B %Y"], year:["%Y", "%Y", "-%Y"]}}, Xb = {line:{}, spline:{}, area:{}, areaspline:{}, column:{approximation:"sum", groupPixelWidth:10}, arearange:{approximation:"range"}, areasplinerange:{approximation:"range"}, columnrange:{approximation:"range", groupPixelWidth:10}, candlestick:{approximation:"ohlc", groupPixelWidth:10}, ohlc:{approximation:"ohlc", groupPixelWidth:5}}, Yb = [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1]], ["week", [1]], ["month", [1, 3, 6]], ["year", null]], Ta = {sum:function (a) {
		var b = a.length, c;
		if (!b && a.hasNulls) {
			c = null;
		} else {
			if (b) {
				for (c = 0; b--; ) {
					c += a[b];
				}
			}
		}
		return c;
	}, average:function (a) {
		var b = a.length, a = Ta.sum(a);
		C(a) && b && (a /= b);
		return a;
	}, open:function (a) {
		return a.length ? a[0] : a.hasNulls ? null : t;
	}, high:function (a) {
		return a.length ? Da(a) : a.hasNulls ? null : t;
	}, low:function (a) {
		return a.length ? Ma(a) : a.hasNulls ? null : t;
	}, close:function (a) {
		return a.length ? a[a.length - 1] : a.hasNulls ? null : t;
	}, ohlc:function (a, b, c, d) {
		a = Ta.open(a);
		b = Ta.high(b);
		c = Ta.low(c);
		d = Ta.close(d);
		if (C(a) || C(b) || C(c) || C(d)) {
			return [a, b, c, d];
		}
	}, range:function (a, b) {
		a = Ta.low(a);
		b = Ta.high(b);
		if (C(a) || C(b)) {
			return [a, b];
		}
	}};
	ia.groupData = function (a, b, c, d) {
		var e = this.data, f = this.options.data, g = [], h = [], i = [], j = a.length, k, l, m = !!b, n = [[], [], [], []], d = typeof d === "function" ? d : Ta[d], p = this.pointArrayMap, o = p && p.length, q, v = 0;
		for (q = 0; q <= j; q++) {
			if (a[q] >= c[0]) {
				break;
			}
		}
		for (; q <= j; q++) {
			for (; c[1] !== t && a[q] >= c[1] || q === j; ) {
				if (k = c.shift(), l = d.apply(0, n), l !== t && (g.push(k), h.push(l), i.push({start:v, length:n[0].length})), v = q, n[0] = [], n[1] = [], n[2] = [], n[3] = [], q === j) {
					break;
				}
			}
			if (q === j) {
				break;
			}
			if (p) {
				k = this.cropStart + q;
				k = e && e[k] || this.pointClass.prototype.applyOptions.apply({series:this}, [f[k]]);
				var u;
				for (l = 0; l < o; l++) {
					if (u = k[p[l]], C(u)) {
						n[l].push(u);
					} else {
						if (u === null) {
							n[l].hasNulls = !0;
						}
					}
				}
			} else {
				if (k = m ? b[q] : null, C(k)) {
					n[0].push(k);
				} else {
					if (k === null) {
						n[0].hasNulls = !0;
					}
				}
			}
		}
		return [g, h, i];
	};
	ia.processData = function () {
		var a = this.chart, b = this.options.dataGrouping, c = this.allowDG !== !1 && b && q(b.enabled, a.options._stock), d;
		this.forceCrop = c;
		this.groupPixelWidth = null;
		this.hasProcessed = !0;
		if (cc.apply(this, arguments) !== !1 && c) {
			this.destroyGroupedData();
			var e = this.processedXData, f = this.processedYData, g = a.plotSizeX, a = this.xAxis, h = a.options.ordinal, i = this.groupPixelWidth = a.getGroupPixelWidth && a.getGroupPixelWidth();
			if (i) {
				d = !0;
				this.points = null;
				var j = a.getExtremes(), c = j.min, j = j.max, h = h && a.getGroupIntervalFactor(c, j, this) || 1, g = i * (j - c) / g * h, i = a.getTimeTicks(a.normalizeTimeTickInterval(g, b.units || Yb), Math.min(c, e[0]), Math.max(j, e[e.length - 1]), a.options.startOfWeek, e, this.closestPointRange), e = ia.groupData.apply(this, [e, f, i, b.approximation]), f = e[0], h = e[1];
				if (b.smoothed) {
					b = f.length - 1;
					for (f[b] = Math.min(f[b], j); b-- && b > 0; ) {
						f[b] += g / 2;
					}
					f[0] = Math.max(f[0], c);
				}
				this.currentDataGrouping = i.info;
				this.closestPointRange = i.info.totalRange;
				this.groupMap = e[2];
				if (v(f[0]) && f[0] < a.dataMin) {
					if (a.min === a.dataMin) {
						a.min = f[0];
					}
					a.dataMin = f[0];
				}
				this.processedXData = f;
				this.processedYData = h;
			} else {
				this.currentDataGrouping = this.groupMap = null;
			}
			this.hasGroupedData = d;
		}
	};
	ia.destroyGroupedData = function () {
		var a = this.groupedData;
		o(a || [], function (b, c) {
			b && (a[c] = b.destroy ? b.destroy() : null);
		});
		this.groupedData = null;
	};
	ia.generatePoints = function () {
		dc.apply(this);
		this.destroyGroupedData();
		this.groupedData = this.hasGroupedData ? this.points : null;
	};
	U(Lb.prototype, "tooltipFooterHeaderFormatter", function (a, b, c) {
		var d = b.series, e = d.tooltipOptions, f = d.options.dataGrouping, g = e.xDateFormat, h, i = d.xAxis;
		return i && i.options.type === "datetime" && f && C(b.key) ? (a = d.currentDataGrouping, f = f.dateTimeLabelFormats, a ? (i = f[a.unitName], a.count === 1 ? g = i[0] : (g = i[1], h = i[2])) : !g && f && (g = this.getXDateFormat(b, e, i)), g = na(g, b.key), h && (g += na(h, b.key + a.totalRange - 1)), La(e[(c ? "footer" : "header") + "Format"], {point:A(b, {key:g}), series:d})) : a.call(this, b, c);
	});
	ia.destroy = function () {
		for (var a = this.groupedData || [], b = a.length; b--; ) {
			a[b] && a[b].destroy();
		}
		ec.apply(this);
	};
	U(ia, "setOptions", function (a, b) {
		var c = a.call(this, b), d = this.type, e = this.chart.options.plotOptions, f = W[d].dataGrouping;
		if (Xb[d]) {
			f || (f = z(fc, Xb[d])), c.dataGrouping = z(f, e.series && e.series.dataGrouping, e[d].dataGrouping, b.dataGrouping);
		}
		if (this.chart.options._stock) {
			this.requireSorting = !0;
		}
		return c;
	});
	U(J.prototype, "setScale", function (a) {
		a.call(this);
		o(this.series, function (a) {
			a.hasProcessed = !1;
		});
	});
	J.prototype.getGroupPixelWidth = function () {
		var a = this.series, b = a.length, c, d = 0, e = !1, f;
		for (c = b; c--; ) {
			(f = a[c].options.dataGrouping) && (d = w(d, f.groupPixelWidth));
		}
		for (c = b; c--; ) {
			if ((f = a[c].options.dataGrouping) && a[c].hasProcessed) {
				if (b = (a[c].processedXData || a[c].data).length, a[c].groupPixelWidth || b > this.chart.plotSizeX / d || b && f.forced) {
					e = !0;
				}
			}
		}
		return e ? d : 0;
	};
	J.prototype.setDataGrouping = function (a, b) {
		var c, b = q(b, !0);
		a || (a = {forced:!1, units:null});
		if (this instanceof J) {
			for (c = this.series.length; c--; ) {
				this.series[c].update({dataGrouping:a}, !1);
			}
		} else {
			o(this.chart.options.series, function (b) {
				b.dataGrouping = a;
			}, !1);
		}
		b && this.chart.redraw();
	};
	W.ohlc = z(W.column, {lineWidth:1, tooltip:{pointFormat:"<span style=\"color:{point.color}\">\u25cf</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>"}, states:{hover:{lineWidth:3}}, threshold:null});
	da = ma(I.column, {type:"ohlc", pointArrayMap:["open", "high", "low", "close"], toYData:function (a) {
		return [a.open, a.high, a.low, a.close];
	}, pointValKey:"high", pointAttrToOptions:{stroke:"color", "stroke-width":"lineWidth"}, upColorProp:"stroke", getAttribs:function () {
		I.column.prototype.getAttribs.apply(this, arguments);
		var a = this.options, b = a.states, a = a.upColor || this.color, c = z(this.pointAttr), d = this.upColorProp;
		c[""][d] = a;
		c.hover[d] = b.hover.upColor || a;
		c.select[d] = b.select.upColor || a;
		o(this.points, function (a) {
			if (a.open < a.close && !a.options.color) {
				a.pointAttr = c;
			}
		});
	}, translate:function () {
		var a = this.yAxis;
		I.column.prototype.translate.apply(this);
		o(this.points, function (b) {
			if (b.open !== null) {
				b.plotOpen = a.translate(b.open, 0, 1, 0, 1);
			}
			if (b.close !== null) {
				b.plotClose = a.translate(b.close, 0, 1, 0, 1);
			}
		});
	}, drawPoints:function () {
		var a = this, b = a.chart, c, d, e, f, g, h, i, j;
		o(a.points, function (k) {
			if (k.plotY !== t) {
				i = k.graphic, c = k.pointAttr[k.selected ? "selected" : ""] || a.pointAttr[""], f = c["stroke-width"] % 2 / 2, j = y(k.plotX) - f, g = y(k.shapeArgs.width / 2), h = ["M", j, y(k.yBottom), "L", j, y(k.plotY)], k.open !== null && (d = y(k.plotOpen) + f, h.push("M", j, d, "L", j - g, d)), k.close !== null && (e = y(k.plotClose) + f, h.push("M", j, e, "L", j + g, e)), i ? i.attr(c).animate({d:h}) : k.graphic = b.renderer.path(h).attr(c).add(a.group);
			}
		});
	}, animate:null});
	I.ohlc = da;
	W.candlestick = z(W.column, {lineColor:"black", lineWidth:1, states:{hover:{lineWidth:2}}, tooltip:W.ohlc.tooltip, threshold:null, upColor:"white"});
	da = ma(da, {type:"candlestick", pointAttrToOptions:{fill:"color", stroke:"lineColor", "stroke-width":"lineWidth"}, upColorProp:"fill", getAttribs:function () {
		I.ohlc.prototype.getAttribs.apply(this, arguments);
		var a = this.options, b = a.states, c = a.upLineColor || a.lineColor, d = b.hover.upLineColor || c, e = b.select.upLineColor || c;
		o(this.points, function (a) {
			if (a.open < a.close) {
				if (a.lineColor) {
					a.pointAttr = z(a.pointAttr), c = a.lineColor;
				}
				a.pointAttr[""].stroke = c;
				a.pointAttr.hover.stroke = d;
				a.pointAttr.select.stroke = e;
			}
		});
	}, drawPoints:function () {
		var a = this, b = a.chart, c, d = a.pointAttr[""], e, f, g, h, i, j, k, l, m, n, p;
		o(a.points, function (o) {
			m = o.graphic;
			if (o.plotY !== t) {
				c = o.pointAttr[o.selected ? "selected" : ""] || d, k = c["stroke-width"] % 2 / 2, l = y(o.plotX) - k, e = o.plotOpen, f = o.plotClose, g = Y.min(e, f), h = Y.max(e, f), p = y(o.shapeArgs.width / 2), i = y(g) !== y(o.plotY), j = h !== o.yBottom, g = y(g) + k, h = y(h) + k, n = [], n.push("M", l - p, h, "L", l - p, g, "L", l + p, g, "L", l + p, h, "Z", "M", l, g, "L", l, i ? y(o.plotY) : g, "M", l, h, "L", l, j ? y(o.yBottom) : h), m ? m.attr(c).animate({d:n}) : o.graphic = b.renderer.path(n).attr(c).add(a.group).shadow(a.options.shadow);
			}
		});
	}});
	I.candlestick = da;
	var vb = xa.prototype.symbols;
	W.flags = z(W.column, {fillColor:"white", lineWidth:1, pointRange:0, shape:"flag", stackDistance:12, states:{hover:{lineColor:"black", fillColor:"#FCFFC5"}}, style:{fontSize:"11px", fontWeight:"bold", textAlign:"center"}, tooltip:{pointFormat:"{point.text}<br/>"}, threshold:null, y:-30});
	I.flags = ma(I.column, {type:"flags", sorted:!1, noSharedTooltip:!0, allowDG:!1, takeOrdinalPosition:!1, trackerGroups:["markerGroup"], forceCrop:!0, init:P.prototype.init, pointAttrToOptions:{fill:"fillColor", stroke:"color", "stroke-width":"lineWidth", r:"radius"}, translate:function () {
		I.column.prototype.translate.apply(this);
		var a = this.options, b = this.chart, c = this.points, d = c.length - 1, e, f, g = a.onSeries;
		e = g && b.get(g);
		var a = a.onKey || "y", g = e && e.options.step, h = e && e.points, i = h && h.length, j = this.xAxis, k = j.getExtremes(), l, m, n;
		if (e && e.visible && i) {
			e = e.currentDataGrouping;
			m = h[i - 1].x + (e ? e.totalRange : 0);
			c.sort(function (a, b) {
				return a.x - b.x;
			});
			for (a = "plot" + a[0].toUpperCase() + a.substr(1); i-- && c[d]; ) {
				if (e = c[d], l = h[i], l.x <= e.x && l[a] !== void 0) {
					if (e.x <= m) {
						e.plotY = l[a], l.x < e.x && !g && (n = h[i + 1]) && n[a] !== t && (e.plotY += (e.x - l.x) / (n.x - l.x) * (n[a] - l[a]));
					}
					d--;
					i++;
					if (d < 0) {
						break;
					}
				}
			}
		}
		o(c, function (a, d) {
			var e;
			if (a.plotY === t) {
				a.x >= k.min && a.x <= k.max ? a.plotY = b.chartHeight - j.bottom - (j.opposite ? j.height : 0) + j.offset - b.plotTop : a.shapeArgs = {};
			}
			if ((f = c[d - 1]) && f.plotX === a.plotX) {
				if (f.stackIndex === t) {
					f.stackIndex = 0;
				}
				e = f.stackIndex + 1;
			}
			a.stackIndex = e;
		});
	}, drawPoints:function () {
		var a, b = this.pointAttr[""], c = this.points, d = this.chart, e = d.renderer, f, g, h = this.options, i = h.y, j, k, l, m, n, p, o = this.yAxis;
		for (k = c.length; k--; ) {
			if (l = c[k], a = l.plotX > this.xAxis.len, f = l.plotX, f > 0 && (f -= q(l.lineWidth, h.lineWidth) % 2), m = l.stackIndex, j = l.options.shape || h.shape, g = l.plotY, g !== t && (g = l.plotY + i - (m !== t && m * h.stackDistance)), n = m ? t : l.plotX, p = m ? t : l.plotY, m = l.graphic, g !== t && f >= 0 && !a) {
				a = l.pointAttr[l.selected ? "select" : ""] || b, m ? m.attr({x:f, y:g, r:a.r, anchorX:n, anchorY:p}) : l.graphic = e.label(l.options.title || h.title || "A", f, g, j, n, p, h.useHTML).css(z(h.style, l.style)).attr(a).attr({align:j === "flag" ? "left" : "center", width:h.width, height:h.height}).add(this.markerGroup).shadow(h.shadow), l.tooltipPos = d.inverted ? [o.len + o.pos - d.plotLeft - g, this.xAxis.len - f] : [f, g];
			} else {
				if (m) {
					l.graphic = m.destroy();
				}
			}
		}
	}, drawTracker:function () {
		var a = this.points;
		mb.drawTrackerPoint.apply(this);
		o(a, function (b) {
			var c = b.graphic;
			c && E(c.element, "mouseover", function () {
				if (b.stackIndex > 0 && !b.raised) {
					b._y = c.y, c.attr({y:b._y - 8}), b.raised = !0;
				}
				o(a, function (a) {
					if (a !== b && a.raised && a.graphic) {
						a.graphic.attr({y:a._y}), a.raised = !1;
					}
				});
			});
		});
	}, animate:ra, buildKDTree:ra, setClip:ra});
	vb.flag = function (a, b, c, d, e) {
		return ["M", e && e.anchorX || a, e && e.anchorY || b, "L", a, b + d, a, b, a + c, b, a + c, b + d, a, b + d, "Z"];
	};
	o(["circle", "square"], function (a) {
		vb[a + "pin"] = function (b, c, d, e, f) {
			var g = f && f.anchorX, f = f && f.anchorY;
			a === "circle" && e > d && (b -= y((e - d) / 2), d = e);
			b = vb[a](b, c, d, e);
			g && f && b.push("M", g, c > f ? c : c + e, "L", g, f);
			return b;
		};
	});
	Xa === B.VMLRenderer && o(["flag", "circlepin", "squarepin"], function (a) {
		lb.prototype.symbols[a] = vb[a];
	});
	var da = [].concat(Yb), wb = function (a) {
		var b = Fa(arguments, function (a) {
			return C(a);
		});
		if (b.length) {
			return Math[a].apply(0, b);
		}
	};
	da[4] = ["day", [1, 2, 3, 4]];
	da[5] = ["week", [1, 2, 3]];
	A(R, {navigator:{handles:{backgroundColor:"#ebe7e8", borderColor:"#b2b1b6"}, height:40, margin:25, maskFill:"rgba(128,179,236,0.3)", maskInside:!0, outlineColor:"#b2b1b6", outlineWidth:1, series:{type:I.areaspline === t ? "line" : "areaspline", color:"#4572A7", compare:null, fillOpacity:0.05, dataGrouping:{approximation:"average", enabled:!0, groupPixelWidth:2, smoothed:!0, units:da}, dataLabels:{enabled:!1, zIndex:2}, id:"highcharts-navigator-series", lineColor:null, lineWidth:1, marker:{enabled:!1}, pointRange:0, shadow:!1, threshold:null}, xAxis:{tickWidth:0, lineWidth:0, gridLineColor:"#EEE", gridLineWidth:1, tickPixelInterval:200, labels:{align:"left", style:{color:"#888"}, x:3, y:-4}, crosshair:!1}, yAxis:{gridLineWidth:0, startOnTick:!1, endOnTick:!1, minPadding:0.1, maxPadding:0.1, labels:{enabled:!1}, crosshair:!1, title:{text:null}, tickWidth:0}}, scrollbar:{height:jb ? 20 : 14, barBackgroundColor:"#bfc8d1", barBorderRadius:0, barBorderWidth:1, barBorderColor:"#bfc8d1", buttonArrowColor:"#666", buttonBackgroundColor:"#ebe7e8", buttonBorderColor:"#bbb", buttonBorderRadius:0, buttonBorderWidth:1, minWidth:6, rifleColor:"#666", trackBackgroundColor:"#eeeeee", trackBorderColor:"#eeeeee", trackBorderWidth:1, liveRedraw:ja && !jb}});
	Gb.prototype = {drawHandle:function (a, b) {
		var c = this.chart.renderer, d = this.elementsToDestroy, e = this.handles, f = this.navigatorOptions.handles, f = {fill:f.backgroundColor, stroke:f.borderColor, "stroke-width":1}, g;
		this.rendered || (e[b] = c.g("navigator-handle-" + ["left", "right"][b]).css({cursor:"ew-resize"}).attr({zIndex:10 - b}).add(), g = c.rect(-4.5, 0, 9, 16, 0, 1).attr(f).add(e[b]), d.push(g), g = c.path(["M", -1.5, 4, "L", -1.5, 12, "M", 0.5, 4, "L", 0.5, 12]).attr(f).add(e[b]), d.push(g));
		e[b][this.rendered ? "animate" : "attr"]({translateX:this.scrollerLeft + this.scrollbarHeight + parseInt(a, 10), translateY:this.top + this.height / 2 - 8});
	}, drawScrollbarButton:function (a) {
		var b = this.chart.renderer, c = this.elementsToDestroy, d = this.scrollbarButtons, e = this.scrollbarHeight, f = this.scrollbarOptions, g;
		this.rendered || (d[a] = b.g().add(this.scrollbarGroup), g = b.rect(-0.5, -0.5, e + 1, e + 1, f.buttonBorderRadius, f.buttonBorderWidth).attr({stroke:f.buttonBorderColor, "stroke-width":f.buttonBorderWidth, fill:f.buttonBackgroundColor}).add(d[a]), c.push(g), g = b.path(["M", e / 2 + (a ? -1 : 1), e / 2 - 3, "L", e / 2 + (a ? -1 : 1), e / 2 + 3, e / 2 + (a ? 2 : -2), e / 2]).attr({fill:f.buttonArrowColor}).add(d[a]), c.push(g));
		a && d[a].attr({translateX:this.scrollerWidth - e});
	}, render:function (a, b, c, d) {
		var e = this.chart, f = e.renderer, g, h, i, j, k = this.scrollbarGroup, l = this.navigatorGroup, m = this.scrollbar, l = this.xAxis, n = this.scrollbarTrack, p = this.scrollbarHeight, o = this.scrollbarEnabled, s = this.navigatorOptions, t = this.scrollbarOptions, u = t.minWidth, x = this.height, D = this.top, z = this.navigatorEnabled, A = s.outlineWidth, B = A / 2, E = 0, H = this.outlineHeight, K = t.barBorderRadius, J = t.barBorderWidth, I = D + B, L = this.rendered;
		if (C(a) && C(b) && (!this.hasDragged || v(c))) {
			this.navigatorLeft = g = q(l.left, e.plotLeft + p);
			this.navigatorWidth = h = q(l.len, e.plotWidth - 2 * p);
			this.scrollerLeft = i = g - p;
			this.scrollerWidth = j = j = h + 2 * p;
			c = q(c, l.translate(a));
			d = q(d, l.translate(b));
			if (!C(c) || S(c) === Infinity) {
				c = 0, d = j;
			}
			if (!(l.translate(d, !0) - l.translate(c, !0) < e.xAxis[0].minRange)) {
				this.zoomedMax = G(w(c, d, 0), h);
				this.zoomedMin = G(w(this.fixedWidth ? this.zoomedMax - this.fixedWidth : G(c, d), 0), h);
				this.range = this.zoomedMax - this.zoomedMin;
				c = y(this.zoomedMax);
				b = y(this.zoomedMin);
				a = c - b;
				if (!L) {
					if (z) {
						this.navigatorGroup = l = f.g("navigator").attr({zIndex:3}).add(), this.leftShade = f.rect().attr({fill:s.maskFill}).add(l), s.maskInside ? this.leftShade.css({cursor:"ew-resize"}) : this.rightShade = f.rect().attr({fill:s.maskFill}).add(l), this.outline = f.path().attr({"stroke-width":A, stroke:s.outlineColor}).add(l);
					}
					if (o) {
						this.scrollbarGroup = k = f.g("scrollbar").add(), m = t.trackBorderWidth, this.scrollbarTrack = n = f.rect().attr({x:0, y:-m % 2 / 2, fill:t.trackBackgroundColor, stroke:t.trackBorderColor, "stroke-width":m, r:t.trackBorderRadius || 0, height:p}).add(k), this.scrollbar = m = f.rect().attr({y:-J % 2 / 2, height:p, fill:t.barBackgroundColor, stroke:t.barBorderColor, "stroke-width":J, r:K}).add(k), this.scrollbarRifles = f.path().attr({stroke:t.rifleColor, "stroke-width":1}).add(k);
					}
				}
				f = L ? "animate" : "attr";
				if (z) {
					this.leftShade[f](s.maskInside ? {x:g + b, y:D, width:c - b, height:x} : {x:g, y:D, width:b, height:x});
					if (this.rightShade) {
						this.rightShade[f]({x:g + c, y:D, width:h - c, height:x});
					}
					this.outline[f]({d:["M", i, I, "L", g + b - B, I, g + b - B, I + H, "L", g + c - B, I + H, "L", g + c - B, I, i + j, I].concat(s.maskInside ? ["M", g + b + B, I, "L", g + c - B, I] : [])});
					this.drawHandle(b + B, 0);
					this.drawHandle(c + B, 1);
				}
				if (o && k) {
					this.drawScrollbarButton(0), this.drawScrollbarButton(1), k[f]({translateX:i, translateY:y(I + x)}), n[f]({width:j}), g = p + b, h = a - J, h < u && (E = (u - h) / 2, h = u, g -= E), this.scrollbarPad = E, m[f]({x:V(g) + J % 2 / 2, width:h}), u = p + b + a / 2 - 0.5, this.scrollbarRifles.attr({visibility:a > 12 ? "visible" : "hidden"})[f]({d:["M", u - 3, p / 4, "L", u - 3, 2 * p / 3, "M", u, p / 4, "L", u, 2 * p / 3, "M", u + 3, p / 4, "L", u + 3, 2 * p / 3]});
				}
				this.scrollbarPad = E;
				this.rendered = !0;
			}
		}
	}, addEvents:function () {
		var a = this.chart, b = a.container, c = this.mouseDownHandler, d = this.mouseMoveHandler, e = this.mouseUpHandler, f;
		f = [[b, "mousedown", c], [b, "mousemove", d], [H, "mouseup", e]];
		cb && f.push([b, "touchstart", c], [b, "touchmove", d], [H, "touchend", e]);
		o(f, function (a) {
			E.apply(null, a);
		});
		this._events = f;
		this.series && E(this.series.xAxis, "foundExtremes", function () {
			a.scroller.modifyNavigatorAxisExtremes();
		});
		E(a, "redraw", function () {
			var a = this.scroller, b;
			if (a) {
				(b = a.baseSeries.xAxis) && a.render(b.min, b.max);
			}
		});
	}, removeEvents:function () {
		o(this._events, function (a) {
			T.apply(null, a);
		});
		this._events = t;
		this.navigatorEnabled && this.baseSeries && T(this.baseSeries, "updatedData", this.updatedDataHandler);
	}, init:function () {
		var a = this, b = a.chart, c, d, e = a.scrollbarHeight, f = a.navigatorOptions, g = a.height, h = a.top, i, j = a.baseSeries;
		a.mouseDownHandler = function (d) {
			var d = b.pointer.normalize(d), e = a.zoomedMin, f = a.zoomedMax, h = a.top, j = a.scrollbarHeight, k = a.scrollerLeft, l = a.scrollerWidth, o = a.navigatorLeft, q = a.navigatorWidth, v = a.scrollbarPad, t = a.range, w = d.chartX, y = d.chartY, d = b.xAxis[0], z, A = jb ? 10 : 7;
			if (y > h && y < h + g + j) {
				if ((h = !a.scrollbarEnabled || y < h + g) && Y.abs(w - e - o) < A) {
					a.grabbedLeft = !0, a.otherHandlePos = f, a.fixedExtreme = d.max, b.fixedRange = null;
				} else {
					if (h && Y.abs(w - f - o) < A) {
						a.grabbedRight = !0, a.otherHandlePos = e, a.fixedExtreme = d.min, b.fixedRange = null;
					} else {
						if (w > o + e - v && w < o + f + v) {
							a.grabbedCenter = w, a.fixedWidth = t, i = w - e;
						} else {
							if (w > k && w < k + l) {
								f = h ? w - o - t / 2 : w < o ? e - t * 0.2 : w > k + l - j ? e + t * 0.2 : w < o + e ? e - t : f;
								if (f < 0) {
									f = 0;
								} else {
									if (f + t >= q) {
										f = q - t, z = a.getUnionExtremes().dataMax;
									}
								}
								if (f !== e) {
									a.fixedWidth = t, e = c.toFixedRange(f, f + t, null, z), d.setExtremes(e.min, e.max, !0, !1, {trigger:"navigator"});
								}
							}
						}
					}
				}
			}
		};
		a.mouseMoveHandler = function (c) {
			var d = a.scrollbarHeight, e = a.navigatorLeft, f = a.navigatorWidth, g = a.scrollerLeft, h = a.scrollerWidth, j = a.range, k, l;
			if (!c.touches || c.touches[0].pageX !== 0) {
				c = b.pointer.normalize(c), k = c.chartX, k < e ? k = e : k > g + h - d && (k = g + h - d), a.grabbedLeft ? (l = !0, a.render(0, 0, k - e, a.otherHandlePos)) : a.grabbedRight ? (l = !0, a.render(0, 0, a.otherHandlePos, k - e)) : a.grabbedCenter && (l = !0, k < i ? k = i : k > f + i - j && (k = f + i - j), a.render(0, 0, k - i, k - i + j)), l && a.scrollbarOptions.liveRedraw && setTimeout(function () {
					a.mouseUpHandler(c);
				}, 0), a.hasDragged = l;
			}
		};
		a.mouseUpHandler = function (d) {
			var e, f;
			if (a.hasDragged) {
				if (a.zoomedMin === a.otherHandlePos) {
					e = a.fixedExtreme;
				} else {
					if (a.zoomedMax === a.otherHandlePos) {
						f = a.fixedExtreme;
					}
				}
				if (a.zoomedMax === a.navigatorWidth) {
					f = a.getUnionExtremes().dataMax;
				}
				e = c.toFixedRange(a.zoomedMin, a.zoomedMax, e, f);
				v(e.min) && b.xAxis[0].setExtremes(e.min, e.max, !0, !1, {trigger:"navigator", triggerOp:"navigator-drag", DOMEvent:d});
			}
			if (d.type !== "mousemove") {
				a.grabbedLeft = a.grabbedRight = a.grabbedCenter = a.fixedWidth = a.fixedExtreme = a.otherHandlePos = a.hasDragged = i = null;
			}
		};
		var k = b.xAxis.length, l = b.yAxis.length;
		b.extraBottomMargin = a.outlineHeight + f.margin;
		a.navigatorEnabled ? (a.xAxis = c = new J(b, z({breaks:j && j.xAxis.options.breaks, ordinal:j && j.xAxis.options.ordinal}, f.xAxis, {id:"navigator-x-axis", isX:!0, type:"datetime", index:k, height:g, offset:0, offsetLeft:e, offsetRight:-e, keepOrdinalPadding:!0, startOnTick:!1, endOnTick:!1, minPadding:0, maxPadding:0, zoomEnabled:!1})), a.yAxis = d = new J(b, z(f.yAxis, {id:"navigator-y-axis", alignTicks:!1, height:g, offset:0, index:l, zoomEnabled:!1})), j || f.series.data ? a.addBaseSeries() : b.series.length === 0 && U(b, "redraw", function (c, d) {
			if (b.series.length > 0 && !a.series) {
				a.setBaseSeries(), b.redraw = c;
			}
			c.call(b, d);
		})) : a.xAxis = c = {translate:function (a, c) {
			var d = b.xAxis[0], f = d.getExtremes(), g = b.plotWidth - 2 * e, h = wb("min", d.options.min, f.dataMin), d = wb("max", d.options.max, f.dataMax) - h;
			return c ? a * d / g + h : g * (a - h) / d;
		}, toFixedRange:J.prototype.toFixedRange};
		if (j && j.xAxis && this.navigatorOptions.adaptToUpdatedData !== !1) {
			E(j, "updatedData", this.updatedDataHandler), E(j.xAxis, "foundExtremes", function () {
				j.xAxis && this.chart.scroller.modifyBaseAxisExtremes();
			}), j.userOptions.events = A(j.userOptions.event, {updatedData:this.updatedDataHandler});
		}
		U(b, "getMargins", function (b) {
			var e = this.legend, f = e.options;
			b.apply(this, [].slice.call(arguments, 1));
			a.top = h = a.navigatorOptions.top || this.chartHeight - a.height - a.scrollbarHeight - this.spacing[2] - (f.verticalAlign === "bottom" && f.enabled && !f.floating ? e.legendHeight + q(f.margin, 10) : 0);
			if (c && d) {
				c.options.top = d.options.top = h, c.setAxisSize(), d.setAxisSize();
			}
		});
		a.addEvents();
	}, getUnionExtremes:function (a) {
		var b = this.chart.xAxis[0], c = this.xAxis, d = c.options, e = b.options, f;
		if (!a || b.dataMin !== null) {
			f = {dataMin:q(d && d.min, wb("min", e.min, b.dataMin, c.dataMin, c.min)), dataMax:q(d && d.max, wb("max", e.max, b.dataMax, c.dataMax, c.max))};
		}
		return f;
	}, setBaseSeries:function (a) {
		var b = this.chart, a = a || b.options.navigator.baseSeries;
		this.series && this.series.remove();
		this.baseSeries = b.series[a] || typeof a === "string" && b.get(a) || b.series[0];
		this.xAxis && this.addBaseSeries();
	}, addBaseSeries:function () {
		var a = this.baseSeries, b = a ? a.options : {}, a = b.data, c = this.navigatorOptions.series, d;
		d = c.data;
		this.hasNavigatorData = !!d;
		b = z(b, c, {enableMouseTracking:!1, group:"nav", padXAxis:!1, xAxis:"navigator-x-axis", yAxis:"navigator-y-axis", name:"Navigator", showInLegend:!1, stacking:!1, isInternal:!0, visible:!0});
		b.data = d || a.slice(0);
		this.series = this.chart.initSeries(b);
	}, modifyNavigatorAxisExtremes:function () {
		var a = this.xAxis, b;
		if (a.getExtremes && (b = this.getUnionExtremes(!0)) && (b.dataMin !== a.min || b.dataMax !== a.max)) {
			a.min = b.dataMin, a.max = b.dataMax;
		}
	}, modifyBaseAxisExtremes:function () {
		var a = this.baseSeries.xAxis, b = a.getExtremes(), c = b.dataMin, d = b.dataMax, b = b.max - b.min, e = this.stickToMin, f = this.stickToMax, g, h, i = this.series, j = !!a.setExtremes;
		e && (h = c, g = h + b);
		f && (g = d, e || (h = w(g - b, i ? i.xData[0] : -Number.MAX_VALUE)));
		if (j && (e || f) && C(h)) {
			a.min = a.userMin = h, a.max = a.userMax = g;
		}
		this.stickToMin = this.stickToMax = null;
	}, updatedDataHandler:function () {
		var a = this.chart.scroller, b = a.baseSeries, c = a.series;
		a.stickToMin = b.xAxis.min <= b.xData[0];
		a.stickToMax = a.zoomedMax >= a.navigatorWidth;
		if (c && !a.hasNavigatorData && (c.options.pointStart = b.xData[0], c.setData(b.options.data, !1), c.graph && b.graph)) {
			c.graph.shift = b.graph.shift;
		}
	}, destroy:function () {
		this.removeEvents();
		o([this.xAxis, this.yAxis, this.leftShade, this.rightShade, this.outline, this.scrollbarTrack, this.scrollbarRifles, this.scrollbarGroup, this.scrollbar], function (a) {
			a && a.destroy && a.destroy();
		});
		this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = this.scrollbarTrack = this.scrollbarRifles = this.scrollbarGroup = this.scrollbar = null;
		o([this.scrollbarButtons, this.handles, this.elementsToDestroy], function (a) {
			Pa(a);
		});
	}};
	B.Scroller = Gb;
	U(J.prototype, "zoom", function (a, b, c) {
		var d = this.chart, e = d.options, f = e.chart.zoomType, g = e.navigator, e = e.rangeSelector, h;
		if (this.isXAxis && (g && g.enabled || e && e.enabled)) {
			if (f === "x") {
				d.resetZoomButton = "blocked";
			} else {
				if (f === "y") {
					h = !1;
				} else {
					if (f === "xy") {
						d = this.previousZoom, v(b) ? this.previousZoom = [this.min, this.max] : d && (b = d[0], c = d[1], delete this.previousZoom);
					}
				}
			}
		}
		return h !== t ? h : a.call(this, b, c);
	});
	U(Ba.prototype, "init", function (a, b, c) {
		E(this, "beforeRender", function () {
			var a = this.options;
			if (a.navigator.enabled || a.scrollbar.enabled) {
				this.scroller = new Gb(this);
			}
		});
		a.call(this, b, c);
	});
	U(P.prototype, "addPoint", function (a, b, c, d, e) {
		var f = this.options.turboThreshold;
		f && this.xData.length > f && ea(b) && !Ja(b) && this.chart.scroller && ga(20, !0);
		a.call(this, b, c, d, e);
	});
	A(R, {rangeSelector:{buttonTheme:{width:32, height:18, fill:"#f7f7f7", padding:2, r:0, "stroke-width":0, style:{color:"#444", cursor:"pointer", fontWeight:"normal"}, zIndex:7, states:{hover:{fill:"#e7e7e7"}, select:{fill:"#e7f0f9", style:{color:"black", fontWeight:"bold"}}}},height:35, inputPosition:{align:"none"}, labelStyle:{color:"#666"}}});
	R.lang = z(R.lang, {rangeSelectorZoom:"区间", rangeSelectorFrom:"开始时间", rangeSelectorTo:"结束时间"});
	Hb.prototype = {clickButton:function (a, b) {
		var c = this, d = c.selected, e = c.chart, f = c.buttons, g = c.buttonOptions[a], h = e.xAxis[0], i = e.scroller && e.scroller.getUnionExtremes() || h || {}, j = i.dataMin, k = i.dataMax, l, m = h && y(G(h.max, q(k, h.max))), n = g.type, p, i = g._range, r, s, v, u = g.dataGrouping;
		if (!(j === null || k === null || a === c.selected)) {
			e.fixedRange = i;
			if (u) {
				this.forcedDataGrouping = !0, J.prototype.setDataGrouping.call(h || {chart:this.chart}, u, !1);
			}
			if (n === "month" || n === "year") {
				if (h) {
					if (n = {range:g, max:m, dataMin:j, dataMax:k}, l = h.minFromRange.call(n), C(n.newMax)) {
						m = n.newMax;
					}
				} else {
					i = g;
				}
			} else {
				if (i) {
					l = w(m - i, j), m = G(l + i, k);
				} else {
					if (n === "ytd") {
						if (h) {
							if (k === t) {
								j = Number.MAX_VALUE, k = Number.MIN_VALUE, o(e.series, function (a) {
									a = a.xData;
									j = G(a[0], j);
									k = w(a[a.length - 1], k);
								}), b = !1;
							}
							m = new ba(k);
							l = m.getFullYear();
							l = r = w(j || 0, ba.UTC(l, 0, 1));
							m = m.getTime();
							m = G(k || m, m);
						} else {
							E(e, "beforeRender", function () {
								c.clickButton(a);
							});
							return;
						}
					} else {
						n === "all" && h && (l = j, m = k);
					}
				}
			}
			f[d] && f[d].setState(0);
			if (f[a]) {
				f[a].setState(2), c.lastSelected = a;
			}
			h ? (h.setExtremes(l, m, q(b, 1), 0, {trigger:"rangeSelectorButton", rangeSelectorButton:g}), c.setSelected(a)) : (p = e.options.xAxis[0], v = p.range, p.range = i, s = p.min, p.min = r, c.setSelected(a), E(e, "load", function () {
				p.range = v;
				p.min = s;
			}));
		}
	}, setSelected:function (a) {
		this.selected = this.options.selected = a;
	}, defaultButtons:[{type:"month", count:1, text:"一个月"}, {type:"month", count:3, text:"3个月"}, {type:"month", count:6, text:"6个月"}, {type:"ytd", text:"年月日"}, {type:"year", count:1, text:"1年"}, {type:"all", text:"所有"}], init:function (a) {
		var b = this, c = a.options.rangeSelector, d = c.buttons || [].concat(b.defaultButtons), e = c.selected, f = b.blurInputs = function () {
			var a = b.minInput, c = b.maxInput;
			a && a.blur && O(a, "blur");
			c && c.blur && O(c, "blur");
		};
		b.chart = a;
		b.options = c;
		b.buttons = [];
		a.extraTopMargin = c.height;
		b.buttonOptions = d;
		E(a.container, "mousedown", f);
		E(a, "resize", f);
		o(d, b.computeButtonRange);
		e !== t && d[e] && this.clickButton(e, !1);
		E(a, "load", function () {
			E(a.xAxis[0], "setExtremes", function (c) {
				this.max - this.min !== a.fixedRange && c.trigger !== "rangeSelectorButton" && c.trigger !== "updatedData" && b.forcedDataGrouping && this.setDataGrouping(!1, !1);
			});
			E(a.xAxis[0], "afterSetExtremes", function () {
				b.updateButtonStates(!0);
			});
		});
	}, updateButtonStates:function (a) {
		var b = this, c = this.chart, d = c.xAxis[0], e = c.scroller && c.scroller.getUnionExtremes() || d, f = e.dataMin, g = e.dataMax, h = b.selected, i = b.options.allButtonsEnabled, j = b.buttons;
		a && c.fixedRange !== y(d.max - d.min) && (j[h] && j[h].setState(0), b.setSelected(null));
		o(b.buttonOptions, function (a, e) {
			var m = y(d.max - d.min), n = a._range, o = a.type, q = a.count || 1, s = n > g - f, t = n < d.minRange, u = a.type === "all" && d.max - d.min >= g - f && j[e].state !== 2, v = a.type === "ytd" && na("%Y", f) === na("%Y", g), w = c.renderer.forExport && e === h, n = n === m, z = !d.hasVisibleSeries;
			if ((o === "month" || o === "year") && m >= {month:28, year:365}[o] * 86400000 * q && m <= {month:31, year:366}[o] * 86400000 * q) {
				n = !0;
			}
			w || n && e !== h && e === b.lastSelected ? (b.setSelected(e), j[e].setState(2)) : !i && (s || t || u || v || z) ? j[e].setState(3) : j[e].state === 3 && j[e].setState(0);
		});
	}, computeButtonRange:function (a) {
		var b = a.type, c = a.count || 1, d = {millisecond:1, second:1000, minute:60000, hour:3600000, day:86400000, week:604800000};
		if (d[b]) {
			a._range = d[b] * c;
		} else {
			if (b === "month" || b === "year") {
				a._range = {month:30, year:365}[b] * 86400000 * c;
			}
		}
	}, setInputValue:function (a, b) {
		var c = this.chart.options.rangeSelector;
		if (v(b)) {
			this[a + "Input"].HCTime = b;
		}
		this[a + "Input"].value = na(c.inputEditDateFormat || "%Y-%m-%d", this[a + "Input"].HCTime);
		this[a + "DateBox"].attr({text:na(c.inputDateFormat || "%b %e, %Y", this[a + "Input"].HCTime)});
	}, showInput:function (a) {
		var b = this.inputGroup, c = this[a + "DateBox"];
		N(this[a + "Input"], {left:b.translateX + c.x + "px", top:b.translateY + "px", width:c.width - 2 + "px", height:c.height - 2 + "px", border:"2px solid silver"});
	}, hideInput:function (a) {
		N(this[a + "Input"], {border:0, width:"1px", height:"1px"});
		this.setInputValue(a);
	}, drawInput:function (a) {
		function b() {
			var a = j.value, b = (g.inputDateParser || ba.parse)(a), e = d.xAxis[0], f = e.dataMin, h = e.dataMax;
			if (b !== j.previousValue) {
				j.previousValue = b, C(b) || (b = a.split("-"), b = ba.UTC(K(b[0]), K(b[1]) - 1, K(b[2]))), C(b) && (R.global.useUTC || (b += (new ba).getTimezoneOffset() * 60000), i ? b > c.maxInput.HCTime ? b = t : b < f && (b = f) : b < c.minInput.HCTime ? b = t : b > h && (b = h), b !== t && d.xAxis[0].setExtremes(i ? b : e.min, i ? e.max : b, t, t, {trigger:"rangeSelectorInput"}));
			}
		}
		var c = this, d = c.chart, e = d.renderer.style, f = d.renderer, g = d.options.rangeSelector, h = c.div, i = a === "min", j, k, l = this.inputGroup;
		this[a + "Label"] = k = f.label(R.lang[i ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({padding:2}).css(z(e, g.labelStyle)).add(l);
		l.offset += k.width + 5;
		this[a + "DateBox"] = f = f.label("", l.offset).attr({padding:2, width:g.inputBoxWidth || 90, height:g.inputBoxHeight || 17, stroke:g.inputBoxBorderColor || "silver", "stroke-width":1}).css(z({textAlign:"center", color:"#444"}, e, g.inputStyle)).on("click", function () {
			c.showInput(a);
			c[a + "Input"].focus();
		}).add(l);
		l.offset += f.width + (i ? 10 : 0);
		this[a + "Input"] = j = fa("input", {name:a, className:"highcharts-range-selector", type:"text"}, A({position:"absolute", border:0, width:"1px", height:"1px", padding:0, textAlign:"center", fontSize:e.fontSize, fontFamily:e.fontFamily, left:"-9em", top:d.plotTop + "px"}, g.inputStyle), h);
		j.onfocus = function () {
			c.showInput(a);
		};
		j.onblur = function () {
			c.hideInput(a);
		};
		j.onchange = b;
		j.onkeypress = function (a) {
			a.keyCode === 13 && b();
		};
	}, getPosition:function () {
		var a = this.chart, b = a.options.rangeSelector, a = q((b.buttonPosition || {}).y, a.plotTop - a.axisOffset[0] - b.height);
		return {buttonTop:a, inputTop:a - 10};
	}, render:function (a, b) {
		var c = this, d = c.chart, e = d.renderer, f = d.container, g = d.options, h = g.exporting && g.exporting.enabled !== !1 && g.navigation && g.navigation.buttonOptions, i = g.rangeSelector, j = c.buttons, g = R.lang, k = c.div, k = c.inputGroup, l = i.buttonTheme, m = i.buttonPosition || {}, n = i.inputEnabled, p = l && l.states, r = d.plotLeft, s, t = this.getPosition(), u = c.group, w = c.rendered;
		if (!w && (c.group = u = e.g("range-selector-buttons").add(), c.zoomText = e.text(g.rangeSelectorZoom, q(m.x, r), 15).css(i.labelStyle).add(u), s = q(m.x, r) + c.zoomText.getBBox().width + 5, o(c.buttonOptions, function (a, b) {
			j[b] = e.button(a.text, s, 0, function () {
				c.clickButton(b);
				c.isActive = !0;
			}, l, p && p.hover, p && p.select, p && p.disabled).css({textAlign:"center"}).add(u);
			s += j[b].width + q(i.buttonSpacing, 5);
			c.selected === b && j[b].setState(2);
		}), c.updateButtonStates(), n !== !1)) {
			c.div = k = fa("div", null, {position:"relative", height:0, zIndex:1}), f.parentNode.insertBefore(k, f), c.inputGroup = k = e.g("input-group").add(), k.offset = 0, c.drawInput("min"), c.drawInput("max");
		}
		u[w ? "animate" : "attr"]({translateY:t.buttonTop});
		n !== !1 && (k.align(A({y:t.inputTop, width:k.offset, x:h && t.inputTop < (h.y || 0) + h.height - d.spacing[0] ? -40 : 0}, i.inputPosition), !0, d.spacingBox), v(n) || (d = u.getBBox(), k[k.translateX < d.x + d.width + 10 ? "hide" : "show"]()), c.setInputValue("min", a), c.setInputValue("max", b));
		c.rendered = !0;
	}, destroy:function () {
		var a = this.minInput, b = this.maxInput, c = this.chart, d = this.blurInputs, e;
		T(c.container, "mousedown", d);
		T(c, "resize", d);
		Pa(this.buttons);
		if (a) {
			a.onfocus = a.onblur = a.onchange = null;
		}
		if (b) {
			b.onfocus = b.onblur = b.onchange = null;
		}
		for (e in this) {
			this[e] && e !== "chart" && (this[e].destroy ? this[e].destroy() : this[e].nodeType && Ua(this[e])), this[e] = null;
		}
	}};
	J.prototype.toFixedRange = function (a, b, c, d) {
		var e = this.chart && this.chart.fixedRange, a = q(c, this.translate(a, !0)), b = q(d, this.translate(b, !0)), c = e && (b - a) / e;
		c > 0.7 && c < 1.3 && (d ? a = b - e : b = a + e);
		C(a) || (a = b = void 0);
		return {min:a, max:b};
	};
	J.prototype.minFromRange = function () {
		var a = this.range, b = {month:"Month", year:"FullYear"}[a.type], c, d = this.max, e, f, g = function (a, c) {
			var d = new ba(a);
			d["set" + b](d["get" + b]() + c);
			return d.getTime() - a;
		};
		C(a) ? (c = this.max - a, f = a) : c = d + g(d, -a.count);
		e = q(this.dataMin, Number.MIN_VALUE);
		C(c) || (c = e);
		if (c <= e) {
			c = e, f === void 0 && (f = g(c, a.count)), this.newMax = G(c + f, this.dataMax);
		}
		C(d) || (c = void 0);
		return c;
	};
	U(Ba.prototype, "init", function (a, b, c) {
		E(this, "init", function () {
			if (this.options.rangeSelector.enabled) {
				this.rangeSelector = new Hb(this);
			}
		});
		a.call(this, b, c);
	});
	B.RangeSelector = Hb;
	Ba.prototype.callbacks.push(function (a) {
		function b() {
			d = a.xAxis[0].getExtremes();
			C(d.min) && f.render(d.min, d.max);
		}
		function c(a) {
			f.render(a.min, a.max);
		}
		var d, e = a.scroller, f = a.rangeSelector;
		e && (d = a.xAxis[0].getExtremes(), e.render(d.min, d.max));
		f && (E(a.xAxis[0], "afterSetExtremes", c), E(a, "resize", b), b());
		E(a, "destroy", function () {
			f && (T(a, "resize", b), T(a.xAxis[0], "afterSetExtremes", c));
		});
	});
	B.StockChart = B.stockChart = function (a, b, c) {
		var d = Ca(a) || a.nodeName, e = arguments[d ? 1 : 0], f = e.series, g, h = q(e.navigator && e.navigator.enabled, !0) ? {startOnTick:!1, endOnTick:!1} : null, i = {marker:{enabled:!1, radius:2}}, j = {shadow:!1, borderWidth:0};
		e.xAxis = ta(ua(e.xAxis || {}), function (a) {
			return z({minPadding:0, maxPadding:0, ordinal:!0, title:{text:null}, labels:{overflow:"justify"}, showLastLabel:!0}, a, {type:"datetime", categories:null}, h);
		});
		e.yAxis = ta(ua(e.yAxis || {}), function (a) {
			g = q(a.opposite, !0);
			return z({labels:{y:-2}, opposite:g, showLastLabel:!1, title:{text:null}}, a);
		});
		e.series = null;
		e = z({chart:{panning:!0, pinchType:"x"}, navigator:{enabled:!0}, scrollbar:{enabled:!0}, rangeSelector:{enabled:!0}, title:{text:null, style:{fontSize:"16px"}}, tooltip:{shared:!0, crosshairs:!0}, legend:{enabled:!1}, plotOptions:{line:i, spline:i, area:i, areaspline:i, arearange:i, areasplinerange:i, column:j, columnrange:j, candlestick:j, ohlc:j}}, e, {_stock:!0, chart:{inverted:!1}});
		e.series = f;
		return d ? new Ba(a, e, c) : new Ba(e, b);
	};
	U(Ya.prototype, "init", function (a, b, c) {
		var d = c.chart.pinchType || "";
		a.call(this, b, c);
		this.pinchX = this.pinchHor = d.indexOf("x") !== -1;
		this.pinchY = this.pinchVert = d.indexOf("y") !== -1;
		this.hasZoom = this.hasZoom || this.pinchHor || this.pinchVert;
	});
	U(J.prototype, "autoLabelAlign", function (a) {
		var b = this.chart, c = this.options, b = b._labelPanes = b._labelPanes || {}, d = this.options.labels;
		if (this.chart.options._stock && this.coll === "yAxis" && (c = c.top + "," + c.height, !b[c] && d.enabled)) {
			if (d.x === 15) {
				d.x = 0;
			}
			if (d.align === void 0) {
				d.align = "right";
			}
			b[c] = 1;
			return "right";
		}
		return a.call(this, [].slice.call(arguments, 1));
	});
	U(J.prototype, "getPlotLinePath", function (a, b, c, d, e, f) {
		var g = this, h = this.isLinked && !this.series ? this.linkedParent.series : this.series, i = g.chart, j = i.renderer, k = g.left, l = g.top, m, n, p, r, s = [], t = [], u, x;
		if (g.coll === "colorAxis") {
			return a.apply(this, [].slice.call(arguments, 1));
		}
		t = g.isXAxis ? v(g.options.yAxis) ? [i.yAxis[g.options.yAxis]] : ta(h, function (a) {
			return a.yAxis;
		}) : v(g.options.xAxis) ? [i.xAxis[g.options.xAxis]] : ta(h, function (a) {
			return a.xAxis;
		});
		o(g.isXAxis ? i.yAxis : i.xAxis, function (a) {
			if (v(a.options.id) ? a.options.id.indexOf("navigator") === -1 : 1) {
				var b = a.isXAxis ? "yAxis" : "xAxis", b = v(a.options[b]) ? i[b][a.options[b]] : i[b][0];
				g === b && t.push(a);
			}
		});
		u = t.length ? [] : [g.isXAxis ? i.yAxis[0] : i.xAxis[0]];
		o(t, function (a) {
			sa(a, u) === -1 && u.push(a);
		});
		x = q(f, g.translate(b, null, null, d));
		C(x) && (g.horiz ? o(u, function (a) {
			var b;
			n = a.pos;
			r = n + a.len;
			m = p = y(x + g.transB);
			if (m < k || m > k + g.width) {
				e ? m = p = G(w(k, m), k + g.width) : b = !0;
			}
			b || s.push("M", m, n, "L", p, r);
		}) : o(u, function (a) {
			var b;
			m = a.pos;
			p = m + a.len;
			n = r = y(l + g.height - x);
			if (n < l || n > l + g.height) {
				e ? n = r = G(w(l, n), g.top + g.height) : b = !0;
			}
			b || s.push("M", m, n, "L", p, r);
		}));
		return s.length > 0 ? j.crispPolyLine(s, c || 1) : null;
	});
	J.prototype.getPlotBandPath = function (a, b) {
		var c = this.getPlotLinePath(b, null, null, !0), d = this.getPlotLinePath(a, null, null, !0), e = [], f;
		if (d && c && d.toString() !== c.toString()) {
			for (f = 0; f < d.length; f += 6) {
				e.push("M", d[f + 1], d[f + 2], "L", d[f + 4], d[f + 5], c[f + 4], c[f + 5], c[f + 1], c[f + 2]);
			}
		} else {
			e = null;
		}
		return e;
	};
	xa.prototype.crispPolyLine = function (a, b) {
		var c;
		for (c = 0; c < a.length; c += 6) {
			a[c + 1] === a[c + 4] && (a[c + 1] = a[c + 4] = y(a[c + 1]) - b % 2 / 2), a[c + 2] === a[c + 5] && (a[c + 2] = a[c + 5] = y(a[c + 2]) + b % 2 / 2);
		}
		return a;
	};
	if (Xa === B.VMLRenderer) {
		lb.prototype.crispPolyLine = xa.prototype.crispPolyLine;
	}
	U(J.prototype, "hideCrosshair", function (a, b) {
		a.call(this, b);
		if (this.crossLabel) {
			this.crossLabel = this.crossLabel.hide();
		}
	});
	U(J.prototype, "drawCrosshair", function (a, b, c) {
		var d, e;
		a.call(this, b, c);
		if (v(this.crosshair.label) && this.crosshair.label.enabled) {
			var a = this.chart, f = this.options.crosshair.label, g = this.horiz, h = this.opposite, i = this.left, j = this.top, k = this.crossLabel, l, m = f.format, n = "", o = this.options.tickPosition === "inside", r = this.crosshair.snap !== !1;
			l = g ? "center" : h ? this.labelAlign === "right" ? "right" : "left" : this.labelAlign === "left" ? "left" : "center";
			if (!k) {
				k = this.crossLabel = a.renderer.label(null, null, null, f.shape || "callout").attr({align:f.align || l, zIndex:12, fill:f.backgroundColor || this.series[0] && this.series[0].color || "gray", padding:q(f.padding, 8), stroke:f.borderColor || "", "stroke-width":f.borderWidth || 0, r:q(f.borderRadius, 3)}).css(A({color:"white", fontWeight:"normal", fontSize:"11px", textAlign:"center"}, f.style)).add();
			}
			g ? (l = r ? c.plotX + i : b.chartX, j += h ? 0 : this.height) : (l = h ? this.width + i : 0, j = r ? c.plotY + j : b.chartY);
			!m && !f.formatter && (this.isDatetimeAxis && (n = "%b %d, %Y"), m = "{value" + (n ? ":" + n : "") + "}");
			b = r ? c[this.isXAxis ? "x" : "y"] : this.toValue(g ? b.chartX : b.chartY);
			k.attr({text:m ? La(m, {value:b}) : f.formatter.call(this, b), anchorX:g ? l : this.opposite ? 0 : a.chartWidth, anchorY:g ? this.opposite ? a.chartHeight : 0 : j, x:l, y:j, visibility:"visible"});
			b = k.getBBox();
			if (g) {
				if (o && !h || !o && h) {
					j = k.y - b.height;
				}
			} else {
				j = k.y - b.height / 2;
			}
			g ? (d = i - b.x, e = i + this.width - b.x) : (d = this.labelAlign === "left" ? i : 0, e = this.labelAlign === "right" ? i + this.width : a.chartWidth);
			k.translateX < d && (l += d - k.translateX);
			k.translateX + b.width >= e && (l -= k.translateX + b.width - e);
			k.attr({x:l, y:j, visibility:"visible"});
		}
	});
	var gc = ia.init, hc = ia.processData, ic = Ha.prototype.tooltipFormatter;
	ia.init = function () {
		gc.apply(this, arguments);
		this.setCompare(this.options.compare);
	};
	ia.setCompare = function (a) {
		this.modifyValue = a === "value" || a === "percent" ? function (b, c) {
			var d = this.compareValue;
			if (b !== t && (b = a === "value" ? b - d : b = 100 * (b / d) - 100, c)) {
				c.change = b;
			}
			return b;
		} : null;
		if (this.chart.hasRendered) {
			this.isDirty = !0;
		}
	};
	ia.processData = function () {
		var a, b = -1, c, d, e, f;
		hc.apply(this, arguments);
		if (this.xAxis && this.processedYData) {
			c = this.processedXData;
			d = this.processedYData;
			e = d.length;
			this.pointArrayMap && (b = sa(this.pointValKey || "y", this.pointArrayMap));
			for (a = 0; a < e; a++) {
				if (f = b > -1 ? d[a][b] : d[a], C(f) && c[a] >= this.xAxis.min && f !== 0) {
					this.compareValue = f;
					break;
				}
			}
		}
	};
	U(ia, "getExtremes", function (a) {
		var b;
		a.apply(this, [].slice.call(arguments, 1));
		if (this.modifyValue) {
			b = [this.modifyValue(this.dataMin), this.modifyValue(this.dataMax)], this.dataMin = Ma(b), this.dataMax = Da(b);
		}
	});
	J.prototype.setCompare = function (a, b) {
		this.isXAxis || (o(this.series, function (b) {
			b.setCompare(a);
		}), q(b, !0) && this.chart.redraw());
	};
	Ha.prototype.tooltipFormatter = function (a) {
		a = a.replace("{point.change}", (this.change > 0 ? "+" : "") + B.numberFormat(this.change, q(this.series.tooltipOptions.changeDecimals, 2)));
		return ic.apply(this, [a]);
	};
	U(P.prototype, "render", function (a) {
		if (this.chart.options._stock && this.xAxis) {
			!this.clipBox && this.animate ? (this.clipBox = z(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len) : this.chart[this.sharedClipKey] && (Sa(this.chart[this.sharedClipKey]), this.chart[this.sharedClipKey].attr({width:this.xAxis.len, height:this.yAxis.len}));
		}
		a.call(this);
	});
	A(B, {Color:va, Point:Ha, Tick:bb, Renderer:Xa, SVGElement:Z, SVGRenderer:xa, arrayMin:Ma, arrayMax:Da, charts:$, correctFloat:ka, dateFormat:na, error:ga, format:La, pathAnim:void 0, getOptions:function () {
		return R;
	}, hasBidiBug:Zb, isTouchDevice:jb, setOptions:function (a) {
		R = z(!0, R, a);
		Ob();
		return R;
	}, addEvent:E, removeEvent:T, createElement:fa, discardElement:Ua, css:N, each:o, map:ta, merge:z, splat:ua, stableSort:nb, extendClass:ma, pInt:K, svg:ja, canvas:qa, vml:!ja && !qa, product:"Highstock", version:"4.2.5"});
	return B;
});

