



window.onload=function() {

	var oBox=document.getElementById('box');
	var aP=document.getElementsByTagName('p');

	

	oBox.onclick=function() {
		doShake(oBox,'tilt-right',1000);
	}

	for (var i=0;i<aP.length;i++) {
		aP[i].onmouseover=function() {
			doShake(this,'tilt-right',1000);
		}
	}
}