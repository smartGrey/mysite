//判断【滑动时】该换哪一页了
function changeWhichPage(event) {
	var distance=nowposition-initialposition;
	if (touchswitch==1) {
		if (distance>85) {
			if (switch1==0) {
				if (last>0) {
					setContent(--last);
				} else {
					oSelectBox.style.left="0";
					switch1=1;
				}
			} 
		} else if (distance <-85) {
			if (switch1==1) {
				oSelectBox.style.left="-100%";
				switch1=0;
			} else {
				if (last<pages_ammount-1) {
					setContent(++last);
				}
			}
		}
		touchswitch=0;
	}
}

//注册滑动事件
var initialposition=0;//用来记录滑动的位置
var nowposition=0;//用来记录滑动的位置
var touchswitch=0;//用来阻止触摸事件反复出发,0为关，1为开
content_box.addEventListener("touchstart",function(event) {
	initialposition=event.targetTouches[0].pageX;
	content_box.addEventListener("touchmove",function(event){
		nowposition=event.targetTouches[0].pageX;
		touchswitch=1;
	});
});
content_box.addEventListener("touchend",changeWhichPage);
oSelectBox.addEventListener("touchstart",function(event) {
	initialposition=event.targetTouches[0].pageX;
	oSelectBox.addEventListener("touchmove",function(event){
		nowposition=event.targetTouches[0].pageX;
		touchswitch=1;
	});
});
oSelectBox.addEventListener("touchend",changeWhichPage);