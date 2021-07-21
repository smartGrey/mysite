





window.onload = function () {

	var aUl=document.getElementsByTagName('ul');
	var aLi=aUl[0].getElementsByTagName('li');
	var timer;
	var timer2;

	for (var i=0;i<aLi.length;i++) {
		aLi[i].index=i;
		aLi[i].onmouseover=function() {
			Disappear();
			aUl[this.index+1].style.display='block';
			clearTimeout(timer);
		}
		aUl[i+1].onmouseover=function() {
			clearTimeout(timer);
			clearTimeout(timer2);
		}
		aUl[i+1].onmouseout=function () {
			clearTimeout(timer2);
			timer2=setTimeout(Disappear,10);
		}
	}

	aUl[0].onmouseout=function() {
		clearTimeout(timer);
		timer=setTimeout(Disappear,600);
	}

	function Disappear() {
		for (var i=0;i<aLi.length;i++) {
			aUl[i+1].style.display='none';
		}
	}
}