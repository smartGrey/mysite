window.onload=function () {
	//获取页面元素，声明全局变量
	//获取目录页相关元素
	var oBtn=document.getElementById('button');
	var oSelectBox=document.getElementById('selectbox');
	var switch1=0;//用来关联selectbox的显示与否。显示是1，消失是0
	//页面元素
	var oShowBox=document.getElementById("showbox");
	var aParagraphBox=oShowBox.getElementsByClassName('paragraph');
	var aSelection=oSelectBox.getElementsByTagName("span");
	var aAnnotation=document.getElementsByClassName("hasAnnotation");//所有的注释元素
	//当前页
	var last=0;
	var ifHasBack=0;//用来记录是否有一页显示的是翻页面,0为无，1为有
	var ifHasAnnotationShow=10000;//用来记录是否有注释正在显示，10000为无，否则为当前序号（最多能有一万条注释）
	//给所有页面添加索引
	for (var i=0;i<aParagraphBox.length;i++) {
		aSelection[i].index=i;
	}
	//给目录添加点击换页事件
	for (var i=0;i<aParagraphBox.length;i++) {
		aSelection[i].onclick=function() {
			ChangePage(0,this.index);
		}
	}

	//判断【滑动时】该换哪一页了
	function changeWhichPage1(event) {
		var distance=nowposition-initialposition;
		if (touchswitch==1) {
			if (ifHasAnnotationShow!=10000) {
				aAnnotation[ifHasAnnotationShow].classList.remove("annotation");
				ifHasAnnotationShow=10000;
			}
				if (distance>85&&ifHasBack==0) {
					if (switch1==0) {
						if (last>0) {
							ChangePage(1);
						} else {
							oSelectBox.style.left="0";
							switch1=1;
						}
					} 
				} else if (distance<-85&&ifHasBack==0) {
					if (switch1==1) {
						oSelectBox.style.left="-100%";
						switch1=0;
					} else {
						if (last<81) {
							ChangePage(2);
						}
					}
				} else if((distance>85||distance<-85)&&ifHasBack!=0) {
					aParagraphBox[last].style.transform="rotateY(0deg) translateX(-50%)";
					ifHasBack=0;
				}
			touchswitch=0;
		}
	}

	//判断【滚动时】该换哪一页了
	var wheelswitch=1;
	//放止重复触发
	//0为不能滚动
	//1为可以滚动
	function changeWitchPage2(event) {
		var e=window.event||event;
		if (wheelswitch==1) {
			wheelswitch=0;
			if (ifHasAnnotationShow!=10000) {
				aAnnotation[ifHasAnnotationShow].classList.remove("annotation");
				ifHasAnnotationShow=10000;
			}
			if (ifHasBack==0) {
				if (e.wheelDelta>0) {
					if (switch1==0) {
						if (last>0) {
							ChangePage(1);
						} else {
							oSelectBox.style.left="0";
							switch1=1;
						}
					}
				} else if (e.wheelDelta<0) {
					if (switch1==0) {
						if (last<81) {
							ChangePage(2);
						}
					} else {
						oSelectBox.style.left="-100%";
						switch1=0;
					}
				}
			} else {
				aParagraphBox[last].style.transform="rotateY(0deg) translateX(-50%)";
				ifHasBack=0;
			}
			setTimeout(function(){wheelswitch=1},140);
		}
	}
	//换页函数
	//[换页模式，要换到的页数]
	//换页模式：任意页-0，向前一页-1，向后一页-2，
	function ChangePage(model,pageNum) {
		aParagraphBox[last].style.display="none";
		aParagraphBox[last].style.transform="rotateY(0deg) translateX(-50%)";
		if (model==0) {
			last=pageNum;
		} else if (model==1) {
			last--;
		} else if (model==2) {
			last++;
		}
		aParagraphBox[last].style.display="block";
		Cookie.set("lastPos",last,365*2);
	}

	//Cookie对象
	var Cookie = {
	    set: function(key,val,expiresDays){
	        if (expiresDays){
	            var date = new Date();
	            date.setTime(date.getTime()+expiresDays*24*3600*1000);
	            var expiresStr = "expires=" + date.toGMTString() + ';' ;
	        } else {
	            var expiresStr = '';
	        }
	        document.cookie = key+'='+escape(val)+';' + expiresStr;
	    },
	    get: function(key){
	        var getCookie = document.cookie.replace(/[ ]/g,'');
	        var resArr = getCookie.split(';');
	        var res;
	        for (var i = 0; i < resArr.length; i++) {
	            var arr = resArr[i].split('=');
	            if (arr[0] == key){
	                res = arr[1];
	                break;
	            }
	        }
	        return unescape(res);
	    }
	}

	//决定启动时到哪一页
	//地址有参数，则到指定页
	//无参数则到cookie记录的上次页
	var skip=document.location.href.split("?")[1];
	if (skip) {
		//跳转到指定页
		ChangePage(0,parseInt(skip)+1)
	} else {
		//跳转到上次位置
		if (Cookie.get("lastPos")>0) {
			document.getElementById("lastPos").style.display="inline-block";
			ChangePage(0,Number(Cookie.get("lastPos")));
			document.getElementById("backToHome").onclick=function() {
				ChangePage(0,0);
				document.getElementById("lastPos").style.display="none";
			}
		}
	}

	//目录按钮的点击事件
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

	//滑动换页
	var initialposition=0;//用来记录滑动的位置
	var nowposition=0;//用来记录滑动的位置
	var touchswitch=0;//用来阻止触摸事件反复出发,0为关，1为开
	oSelectBox.addEventListener("touchstart",function(event) {
		initialposition=event.targetTouches[0].pageX;
		oSelectBox.addEventListener("touchmove",function(event){
			nowposition=event.targetTouches[0].pageX;
			touchswitch=1;
		});
	});
	oSelectBox.addEventListener("touchend",changeWhichPage1);
	oShowBox.addEventListener("touchstart",function(event) {
		initialposition=event.targetTouches[0].pageX;
		window.addEventListener("touchmove",function(event){
			nowposition=event.targetTouches[0].pageX;
			touchswitch=1;
		});
	});
	oShowBox.addEventListener("touchend",changeWhichPage1);

	//滚动鼠标换页
	window.onmousewheel=changeWitchPage2;
	window.addEventListener("DOMMouseScroll",changeWitchPage2,true);


	//拖动目录按钮
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

	//显示翻译
	var aTransBtn1=document.getElementsByClassName("icon-fanyi");
	var aTransBtn2=document.getElementsByClassName("icon-yuan");
	for (var i=0;i<aTransBtn1.length;i++) {
		aTransBtn1[i].index=i;
		aTransBtn2[i].index=i;
	}
	for (var i=0;i<aTransBtn1.length;i++) {
		aTransBtn1[i].onclick=function() {
			aParagraphBox[this.index+2].style.transform="rotateY(180deg) translateX(-50%)";
			ifHasBack=1;
		}
		aTransBtn2[i].onclick=function() {
			aParagraphBox[this.index+2].style.transform="rotateY(0deg) translateX(-50%)";
			ifHasBack=0;
		}
	}

	//显示注释
	for (var i=0;i<aAnnotation.length;i++) {
		aAnnotation[i].index=i;
	}
	for (var i=0;i<aAnnotation.length;i++) {
		aAnnotation[i].onmouseover=function () {
			var n=this.index;
			aAnnotation[n].classList.add("annotation");
			ifHasAnnotationShow=n;
			setTimeout(function(){
				aAnnotation[n].classList.remove("annotation");
				ifHasAnnotationShow=10000;
			},7000);
		}
		aAnnotation[i].onmouseout=function () {
			this.classList.remove("annotation");
				ifHasAnnotationShow=10000;
		}
	}

	//设置访问量
	var AJAX=new XMLHttpRequest();
	if (window.XMLHttpRequest) {
   		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		AJAX=new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		AJAX=new ActiveXObject("Microsoft.XMLHTTP");
	}
	AJAX.open("GET","http://www.liuzhuocheng.com/ddjviews.txt",true);
	AJAX.send();
	AJAX.onreadystatechange=function(){
		if (AJAX.readyState==4 && AJAX.status==200) {
			document.getElementById("views").innerHTML=AJAX.responseText;
		}
	}
}