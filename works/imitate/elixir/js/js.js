window.onload=function() {
	var oList4=document.getElementById('list4');
	var aImg=oList4.getElementsByTagName('img');

	aImg[0].onmouseover=function(){
		aImg[0].src="./img/atlassian2.png";
	}
	aImg[0].onmouseout=function(){
		aImg[0].src="./img/atlassian1.png";
	}
	aImg[1].onmouseover=function(){
		aImg[1].src="./img/yingxiang2.png";
	}
	aImg[1].onmouseout=function(){
		aImg[1].src="./img/yingxiang1.png";
	}
	aImg[2].onmouseover=function(){
		aImg[2].src="./img/weiruan2.png";
	}
	aImg[2].onmouseout=function(){
		aImg[2].src="./img/weiruan1.png";
	}
	aImg[3].onmouseover=function(){
		aImg[3].src="./img/eventbrite2.png";
	}
	aImg[3].onmouseout=function(){
		aImg[3].src="./img/eventbrite1.png";
	}
}