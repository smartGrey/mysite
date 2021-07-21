




window.onload=function () {
	
	var oBoxbar=document.getElementById('boxbar');
	var aBox=oBoxbar.getElementsByTagName('div');
	var oHeader=document.getElementById('header');
	var aLi=oHeader.getElementsByTagName('li');
	var n=0;
	var timer;
	var aP=oHeader.getElementsByTagName('p');

	if (getStyleNum(oHeader,'width')>800) {
		timer=setInterval(Next,3500);

		for (var i=0;i<aLi.length;i++) {
			aLi[i].index=i;
		}
		for (var i=0;i<aLi.length;i++) {
			aLi[i].onclick=function() {
				clearInterval(timer);
				n=-this.index;
				oBoxbar.style.left=n*800+'px';
				ChangeColor(n);
				timer=setInterval(Next,3500);
			}
			aLi[i].onmouseover=function() {
				clearInterval(timer);
				if (this.index!=-n) {
					this.style.background="#999";
				}
			}
			aLi[i].onmouseout=function() {
				if (this.index!=-n) {
					this.style.background="transparent";
				}
				clearInterval(timer);
				timer=setInterval(Next,3500);
			}
		}
		for (var i=0;i<aP.length;i++) {
			aP[i].onmouseover=function() {
				clearInterval(timer);
			}
			aP[i].onmouseout=function() {
				clearInterval(timer);
				timer=setInterval(Next,3500);
			}
		}

		function Next() {
			n--;
			if (n<-2) {
				n=0;
			}
			oBoxbar.style.left=n*800+'px';
			ChangeColor(n);
		}
		function ChangeColor(n) {
			for (var i=0;i<aLi.length;i++) {
				aLi[i].style.background='transparent';
			}
			aLi[-n].style.background='#fff';
		}
	}
}