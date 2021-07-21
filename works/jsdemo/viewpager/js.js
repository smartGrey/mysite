



window.onload=function() {

	var oImg=document.getElementById('img');
	var aBtn=document.getElementsByTagName('input');
	var aArrow=document.getElementsByTagName('span');
	var oPrev=document.getElementById('prev');
	var oPrevImg=oPrev.getElementsByTagName("img");
	var now=1;
	var inputHeight=40;

	aBtn[0].style.background='#777';
	aBtn[0].style.color='#fff';
	for (var i=0;i<6;i++) {
		aBtn[i].onclick=function() {
			now=this.value;
			oImg.src='pic'+now+'.jpeg';
			for (var i=0;i<6;i++) {
				aBtn[i].style.background='#111';
				aBtn[i].style.color='#bbb';
			}
			this.style.background='#333';
			this.style.color='#bbb';
		}
		aBtn[i].onmouseover=function() {
			oPrev.style.display="block";
			oPrev.style.top=196+(this.value-1)*inputHeight+"px";
			oPrevImg[0].src="pic"+this.value+".jpeg";
			this.style.background='#333';
			this.style.color='#bbb';
			
		}
		aBtn[i].onmouseout=function() {
			oPrev.style.display="none";
			this.style.background='#111';
			aBtn[now-1].style.background='#777';
			aBtn[now-1].style.color='#fff';
		}
	}
	aArrow[0].onclick=function() {
		now--;
		if (now==0) {
			now=6;
		}
		oImg.src='pic'+now+'.jpeg';
		for (var i=0;i<6;i++) {
			aBtn[i].style.background='#111';
			aBtn[i].style.color='#bbb';
		}
		aBtn[now-1].style.background='#777';
		aBtn[now-1].style.color='#fff';
	}
	aArrow[1].onclick=function() {
		now++;
		if (now==7) {
			now=1;
		}
		oImg.src='pic'+now+'.jpeg';
		for (var i=0;i<6;i++) {
			aBtn[i].style.background='#111';
			aBtn[i].style.color='#bbb';
		}
		aBtn[now-1].style.background='#777';
		aBtn[now-1].style.color='#fff';
	}
	aArrow[0].onmouseover=function() {
		this.style.opacity="0.6";
	}
	aArrow[0].onmouseout=function() {
		this.style.opacity="0.4";
	}
	aArrow[1].onmouseover=function() {
		this.style.opacity="0.6";
	}
	aArrow[1].onmouseout=function() {
		this.style.opacity="0.4";
	}
	aArrow[0].onmousedown=function() {
		this.style.opacity="1";
	}
	aArrow[0].onmouseup=function() {
		this.style.opacity="0.6";
	}
	aArrow[1].onmousedown=function() {
		this.style.opacity="1";
	}
	aArrow[1].onmouseup=function() {
		this.style.opacity="0.6";
	}
}



























