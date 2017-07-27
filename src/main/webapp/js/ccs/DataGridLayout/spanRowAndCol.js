
function autoRowSpan(tbid, row, col) {
	var tb = document.getElementById(tbid);
	autoRowSpanByTarget(tb, row, col);
}
function autoRowSpanByTarget(tb, row, col) {
	var lastValue = "";
	var value = "";
	var pos = 1;
	for (var i = row; i < tb.rows.length; i++) {
		value = tb.rows[i].cells[col].innerText;
		if (lastValue == value) {
			tb.rows[i].deleteCell(col);
			tb.rows[i - pos].cells[col].rowSpan = tb.rows[i - pos].cells[col].rowSpan + 1;
			pos++;
		} else {
			lastValue = value;
			pos = 1;
		}
	}
}
function autoColSpan(tbid, row, col) {
	var tb = document.getElementById(tbid);
	autoColSpanByTarget(tb, row, col);
}
function autoColSpanByTarget(tb, row, col) {
	var lastValue = "";
	var value = "";
	var pos = 1;
	var len = tb.rows[0].cells.length;
	for (var i = col; i < len; i++) {
		var curCell = tb.rows[row].cells[i];
		if (curCell) {
			value = curCell.innerText;
			if (lastValue == value) {
				tb.rows[row].deleteCell(i);
				tb.rows[row].cells[i - pos].colSpan = tb.rows[row].cells[i - pos].colSpan + 1;
				pos++;
			} else {
				lastValue = value;
				pos = 1;
			}
		}
	}
}

