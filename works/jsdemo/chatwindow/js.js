

alert('点击圆形头像以切换说话人物');


window.onload = function () {
	var oInPutBox = document.getElementById('inputbox');
	var oSendButton = document.getElementById('sendbutton');
	var oFigure = document.getElementById('figure');
	var oChatContent = document.getElementById('chatcontent');
	var figure = 0;


	oFigure.onclick = function () {				//切换人物，0是me，1是her
		if (figure==0) {
			oFigure.src = "her.jpg";
			figure=1;
		} else if (figure==1) {
			oFigure.src = "me.jpg";
			figure=0;
		}
	}

	oFigure.onmouseover = function () {			//换任务时候的透明度效果
		oFigure.style.opacity = '0.8';
	}
	oFigure.onmousedown = function () {
		oFigure.style.opacity = '1';
	}
	oFigure.onmouseup = function () {
		oFigure.style.opacity = '0.8';
	}
	oFigure.onmouseout = function () {
		oFigure.style.opacity = '0.5';
	}

	oSendButton.onmouseover = function () {			//发送按钮的点击效果
		oSendButton.style.background = '#aaa';
	}
	oSendButton.onmousedown = function () {
		oSendButton.style.background = '#ddd';
	}
	oSendButton.onmouseup = function () {
		oSendButton.style.background = '#aaa';
	}
	oSendButton.onmouseout = function () {
		oSendButton.style.background = '#3377f6';
	}

	oSendButton.onclick = function () {				//发送至对话窗口
		if (figure==0&&oInPutBox.value!='') {
			oChatContent.innerHTML += '<br><div id="mywords"><img src="me.jpg"><div class="mycorner"></div><p>' + oInPutBox.value + '</p></div><div style="float: right;width: 100%;height: 1px;"></div><p id="last"></p>';
			oInPutBox.value = '';
		} else if (figure==1&&oInPutBox.value!='') {
			oChatContent.innerHTML += '<br><div id="herwords"><img src="her.jpg"><div class="hercorner"></div><p>' + oInPutBox.value + '</p></div><div style="float: left;width: 100%;height: 1px;"></div><p id="last"></p>';
			oInPutBox.value = '';
		}
	}
}