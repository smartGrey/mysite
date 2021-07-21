//目录按钮拖动
var screenWidth=document.body.clientWidth;
var screenHeight=document.body.clientHeight;
oBtn.style.left=oBtn.offsetLeft+"px";
oBtn.style.rigth="auto";
oBtn.style.top=oBtn.offsetTop+"px";
oBtn.style.bottom="auto";
oBtn.addEventListener('touchstart',function(e){
	var ev = e || window.event;
	var touch = ev.targetTouches[0];
	oL = touch.clientX - oBtn.offsetLeft;
	oT = touch.clientY - oBtn.offsetTop;
	oBtn.addEventListener('touchmove',function(e){
		var ev = e || window.event;
			var touch = ev.targetTouches[0];
			oBtn.style.left=touch.clientX-oL+"px";
			oBtn.style.top=touch.clientY-oT+"px";
	});
});

//目录按钮点击
oBtn.onclick=function () {
	if (switch1==0) {
		oSelectBox.style.left="0";
		switch1=1;
	} else if (switch1==1) {
		oSelectBox.style.left="-100%";
		switch1=0;
	}
}
oSelectBox.onclick=function() {
	oSelectBox.style.left="-100%";
}