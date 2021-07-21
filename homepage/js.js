window.onload=function() {
	//获取页面元素
	var oCube=document.getElementById("cube");
	var oInnerBox=document.getElementById("innerbox");
	var oContent=document.getElementById('content');
	var aContents=oContent.getElementsByTagName('ul');
	var aSides=oInnerBox.getElementsByTagName('div');
	//各页面参数
	var angle=["rotateY(-22deg) rotateX(18deg)","rotateY(-14deg) rotateX(65deg) rotateZ(11deg)","rotateY(-23deg) rotateX(108deg) rotateZ(46deg)","rotateY(-21deg) rotateX(159deg) rotateZ(91deg)","rotateY(-21deg) rotateX(253deg) rotateZ(90deg)","rotateY(-4deg) rotateX(290deg) rotateZ(26deg)"];
	var backgroundcolor=["rgb(240,240,230)","rgb(170,80,20)","rgb(150,110,50)","rgb(80,60,0)","rgb(60,60,60)","rgb(187,48,45)"];
	var contentsBackground=["transparent","transparent","rgba(0,0,0,0.3)","none","none","none"];
	var contentsShadow=["none","none","0 0 30px 3px rgba(0,0,0,0.7)","none","none","none"];
	var hasAnimation=["none","none","movein 1s ease-out","none","none","none"];

	//初始化
	render(0);

	//全屏展示照片
	var oMyPic=document.getElementById("myPic");
	var oFullScreen1=document.getElementById("fullscreen1");
	oMyPic.onclick=function() {
		oFullScreen1.style.display="inline-block";
	}
	oFullScreen1.onclick=function() {
		this.style.display="none";
	}
	window.onkeydown=function() {
		oFullScreen1.style.display="none";
	}

	// //检测设备改变文字
	// var oChanpagemethod=document.getElementById("chanpagemethod");
	// if (parseInt(screen.width)<1100) {
	// 	oChanpagemethod.innerHTML="<span>左右滑动屏幕</span>或<span>点击立方体</span>换页";
	// }
	// if (!!window.ActiveXObject || "ActiveXObject" in window) {
	// 	oChanpagemethod.innerHTML="<span>滚动鼠标</span>换页";
	// }


	//添加索引
	for (var i=0;i<6;i++) {
		aSides[i].index=i;
	}


	//点击换页
	for (var i=0;i<6;i++) {
		aSides[i].onclick=function() {
			render(this.index);
			// nowPage=this.index;
			// 内容够了6页才能开
		}
	}


	//滚动换页
	var nowPage=0;
	//0为基本信息
	//1为技术能力
	//2为个人介绍
	var wheelswitch=1;
	//0为关
	//1为开
	window.onmousewheel=function(event) {
		var e=window.event||event;

		if (wheelswitch==1) {
			wheelswitch=0;
			if (e.wheelDelta>0) {
				nowPage--;
			} else if (e.wheelDelta<0) {
				nowPage++;
			}
			if (nowPage==4) {
				nowPage=0;
			} else if (nowPage==-1) {
				nowPage=3;
			}
			render(nowPage);
			setTimeout(function(){wheelswitch=1},800);
		}
	}
	window.addEventListener("DOMMouseScroll",function(event) {
		var e=window.event||event;

		if (wheelswitch==1) {
			wheelswitch=0;
			if (e.detail>0) {
				nowPage++;
			} else if (e.detail<0) {
				nowPage--;
			}
			if (nowPage==4) {
				nowPage=0;
			} else if (nowPage==-1) {
				nowPage=3;
			}
			render(nowPage);
			setTimeout(function(){wheelswitch=1},800);
		}
	},false);

	//滑动换页
	var initialposition=0;
	var nowposition=0;
	var touchswitch=0;
	//0为关
	//1为开
	window.addEventListener("touchstart",function(event) {
		initialposition=event.targetTouches[0].pageX;
		window.addEventListener("touchmove",function(event){
			nowposition=event.targetTouches[0].pageX;
			touchswitch=1;
		});
	});
	window.addEventListener("touchend",function(event){
		var distance=nowposition-initialposition;
		if (touchswitch==1) {
			if (distance>40) {
				nowPage++;
			} else if (distance<-40) {
				nowPage--;
			}
			if (nowPage==4) {
				nowPage=0;
			} else if (nowPage==-1) {
				nowPage=3;
			}
			render(nowPage);
			touchswitch=0;
		}
	});

	//渲染页面函数
	function render(num) {
		if (!!window.ActiveXObject || "ActiveXObject" in window) {
			oCube.style.perspective="none";
			oInnerBox.style.transform="none";
			for (var i=0;i<6;i++) {
				aSides[i].style.opacity="0";
				aSides[i].style.transform="none";
				aSides[i].style.zIndex="0";
				aSides[i].getElementsByTagName("img")[0].style.transform="none";
			}
			aSides[num].style.opacity="1";
			aSides[num].style.zIndex="1";
		} else {
			oInnerBox.style.transform=angle[num];
		}
		for (i=0;i<6;i++) {
			aContents[i].style.opacity="0";
			aContents[i].style.zIndex="-1";
			aContents[i].style.display="none";
		}
		aContents[num].style.opacity="1";
		aContents[num].style.zIndex="1";
		aContents[num].style.display="inline-block";
		document.body.style.background=backgroundcolor[num];
		oContent.style.background=contentsBackground[num];
		oContent.style.boxShadow=contentsShadow[num];
		oContent.style.animation=hasAnimation[num];
	}
}