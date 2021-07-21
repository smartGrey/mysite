


window.onload = function () {
	var oInPutBox = document.getElementById('inputbox');
	var oSendButton = document.getElementById('sendbutton');
	var oChatContent = document.getElementById('chatcontent');

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

	//对话部分
	var wordsArr=["嗯","啊？","这。。","是","去你的吧！","什么？","这都不挨着。","诶？还有这事儿","对","也行","要不您先去吃个饭？","得解释解释","你就和我说这个？","呵","嗬！","········","您先等会","唉","呃","我呀？","哎呦","谁说不是呢","对，您说得对","好家伙,还能这样？","那不能够","咋回事？您说说","奥。。","我得想想。。。。"];
	setTimeout(function(){
		oChatContent.innerHTML='<br><div id="herwords"><img src="her.jpg"><div class="hercorner"></div><p>玩会儿吧小哥哥~</p></div><div style="float: left;width: 100%;height: 1px;"></div><p id="last"></p>' + oChatContent.innerHTML;
	},1000);
	oSendButton.onclick = function () {				//发送至对话窗口
		if (oInPutBox.value!='') {
			oChatContent.innerHTML =oChatContent.innerHTML+ '<br><div id="mywords"><img src="me.jpg"><div class="mycorner"></div><p>' + oInPutBox.value + '</p></div><div style="float: right;width: 100%;height: 1px;"></div><p id="last"></p>';
			oInPutBox.value = '';
			setTimeout(function(){
				oChatContent.innerHTML=oChatContent.innerHTML+'<br><div id="herwords"><img src="her.jpg"><div class="hercorner"></div><p>'+wordsArr[Math.floor(Math.random()*wordsArr.length)]+'</p></div><div style="float: left;width: 100%;height: 1px;"></div><p id="last"></p>';
			},1200);
		} else {
			oChatContent.innerHTML=oChatContent.innerHTML+'<br><div id="herwords"><img src="her.jpg"><div class="hercorner"></div><p>说点什么才能发送哦~</p></div><div style="float: left;width: 100%;height: 1px;"></div><p id="last"></p>';
		}
	}
}