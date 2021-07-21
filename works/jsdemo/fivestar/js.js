

window.onload=function () {

	var oDiv=document.getElementsByTagName('div');
	var aStar=document.getElementsByTagName('i');
	var n=-1;//记录点击的星星

	for (var i=0;i<5;i++) {
		aStar[i].index=i;
		aStar[i].onmouseover=OnMouseOver;
		aStar[i].onmousedown=OnMouseDown;
	}
	oDiv[0].onmouseout=OnMouseOut;
	//鼠标移入变彩色
	function OnMouseOver() {
		for (var i=0;i<5;i++) {
			aStar[i].style.color='#ffffff';
		}
		if (this.index<2) {
			for (var i=0;i<=this.index;i++) {
				aStar[i].style.color='#666';
			}
		} else {
			for (var i=0;i<=this.index;i++) {
				aStar[i].style.color='#ffee22';
			}
		}
	}
	//鼠标移出变白色
	function OnMouseOut() {
		if (n<2) {
			for (var i=0;i<5;i++) {
				aStar[i].style.color='#ffffff';
			}
			for (var i=0;i<=n;i++) {
				aStar[i].style.color='#666';
			}
		} else {
			for (var i=0;i<5;i++) {
				aStar[i].style.color='#ffffff';
			}
			for (var i=0;i<=n;i++) {
				aStar[i].style.color='#ffee22';
			}
		}
	}
	//鼠标点击保存颜色
	function OnMouseDown() {
		n=this.index;
	}
}