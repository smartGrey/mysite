window.onload = function() {
	//获得对象css属性数字值
	//参数(2)：对象，属性

	function getStyleNum(obj, attr) {
		if (obj.currentStyle) {
			return parseFloat(obj.currentStyle);
		} else {
			return parseFloat(getComputedStyle(obj)[attr]);
		}
	}

	//顶部导航边上的搜索框
	var oRightNav = document.getElementById('rightnav');
	var oRightSearch = document.getElementById('rightsearch');
	var oSearchBtn = document.getElementById('button');
	var oTextBox = document.getElementById('textbox');
	var timer1 = null;
	var timer2 = null;
	oSearchBtn.onclick = function() {
		clearTimeout(timer1);
		clearTimeout(timer2);
		timer1 = setTimeout(TextBoxShow, 100);
	}
	oRightSearch.onmouseout = function() {
		clearTimeout(timer2);
		clearTimeout(timer1);
		timer2 = setTimeout(TextBoxHidden, 700);
	}
	oTextBox.onmouseover = function() {
		clearTimeout(timer2);
		clearTimeout(timer1);
	}

	function TextBoxShow() {
		oRightNav.style.display = 'none';
		oTextBox.style.display = "inline-block";
	}

	function TextBoxHidden() {
		oRightNav.style.display = 'inline-block';
		oTextBox.style.display = "none";
	}

	var oBody = document.getElementsByTagName('body');
	var oBtn1 = document.getElementById('headerbtn1');
	var oBtn2 = document.getElementById('headerbtn2');
	var oBox = document.getElementById('box');
	var angle = 180;
	var distanse = 900;
	var timerForHeader = null;

	clearInterval(timerForHeader);
	timerForHeader = setInterval(Next, 6000);

	oBtn1.onclick = function() {
		clearInterval(timerForHeader);
		ClickLeftBtn();
		timerForHeader = setInterval(Next, 6000);
	}

	oBtn2.onclick = function() {
		clearInterval(timerForHeader);
		ClickRightBtn();
		timerForHeader = setInterval(Next, 6000);
	}

	function ClickLeftBtn() {
		if (getStyleNum(oBody[0], 'width') > 1000) {
			angle += 180;
			distanse = -distanse;
			oBox.style.transform = 'rotateY(' + angle + 'deg) translateZ(' + distanse + 'px)';
		}
	}

	function ClickRightBtn() {
		if (getStyleNum(oBody[0], 'width') > 1000) {
			oBox.style.transform = 'rotateY(' + angle + 'deg) translateZ(' + distanse + 'px)';
			angle -= 180;
			distanse = -distanse;
		}
	}

	function Next() {
		if (getStyleNum(oBody[0], 'width') > 1000) {
			oBox.style.transform = 'rotateY(' + angle + 'deg) translateZ(' + distanse + 'px)';
			angle -= 180;
			distanse = -distanse;
		}
	}
}