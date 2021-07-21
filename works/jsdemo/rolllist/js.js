

window.onload=function () {
	
	var oUp=document.getElementById('up');
	var oDown=document.getElementById('down');
	var oTrue=document.getElementById('trueheight');
	var listHeigh=0;
	var now=0;
	var tamp;

	if (oTrue.currentStyle) {
		listHeigh=oTrue.currentStyle.height;
	} else {
		listHeigh=getComputedStyle(oTrue).height;
	}
	listHeigh=parseInt(listHeigh);

	oDown.onmousedown=function() {
		tamp=setInterval(down,20);
	}
	oDown.onmouseup=function() {
		clearInterval(tamp);
	}

	oUp.onmousedown=function() {
		tamp=setInterval(up,20);
	}
	oUp.onmouseup=function() {
		clearInterval(tamp);
	}

	function down() {
		if (now>-listHeigh+510) {
			now-=10;
			oTrue.style.top=now+'px';
		} else {
			clearInterval(tamp);
		}
	}
	function up() {
		if (now<0) {
			now+=10;
			oTrue.style.top=now+'px';
		} else {
			clearInterval(tamp);
		}
	}
}