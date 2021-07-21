

window.onload=function () {
	var aLi=document.getElementsByTagName('li');
	var aCheckBox=document.getElementsByTagName('input');
	var aColor=['#ffffcc','#ffcc99'];
	var temp=0;

	for (var i=0;i<aLi.length;i++) {
		aCheckBox[i].index=i;
	}
	FirstChangeColor();
	//点击全选
	aCheckBox[aLi.length].onclick=function() {
		if (this.checked) {
			CheckAll();
		} else {
			UnCheckAll();
		}
	}
	//选定全部
	function CheckAll() {
		for (var i=0;i<aLi.length;i++) {
			aCheckBox[i].checked=true;
		}
		ChangeColor();
	}
	//取消全部选定
	function UnCheckAll() {
		for (var i=0;i<aLi.length;i++) {
			aCheckBox[i].checked=false;
		}
		ChangeColor();
	}
	for (var i=0;i<aLi.length;i++) {
		aCheckBox[i].onclick=ChangeColor;
	}
	//勾选改变颜色
	function ChangeColor() {
		for (var i=0;i<aLi.length;i++) {
			temp=aColor[i%2];
			aLi[i].style.background=temp;
		}
		for (var i=0;i<aLi.length;i++) {
			if (aCheckBox[i].checked==true) {
				aLi[aCheckBox[i].index].style.background='#cc9966';
			}
		}
	}
	//初始改变颜色
	function FirstChangeColor() {
		for (var i=0;i<aLi.length;i++) {
			temp=aColor[i%2];
			aLi[i].style.background=temp;
		}
	}
}