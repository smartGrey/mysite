//获得对象css属性
//参数(2)：对象，属性
	function getStyle(obj,attr) {
		if (obj.currentStyle) {
			return obj.currentStyle;
			//parseInt();
		} else {
			return getComputedStyle(obj)[attr];
		}
	}
//获得对象css属性数字值
//参数(2)：对象，属性
	function getStyleNum(obj,attr) {
		if (obj.currentStyle) {
			return parseInt(obj.currentStyle);
		} else {
			return parseInt(getComputedStyle(obj)[attr]);
		}
	}

//向指定距离位置移动一个对象(position下)
//参数(5)：对象，水平移动距离，垂直移动距离，总移动时间，回调函数
//距离单位：px
//时间单位：毫秒(最小值14)
	function doMove(obj,horizontal,vertical,time,endfn) {
		clearInterval(timer);

		if (typeof(obj.ifGo)=='undefined'||obj.ifGo==0) {
			obj.ifGo=1;
			var timer=null;
			var single_x=horizontal/(time/14);
			var single_y=vertical/(time/14);
			var initial_x=getStyleNum(obj,'left');
			var initial_y=getStyleNum(obj,'top');
			var now_x=initial_x;
			var now_y=initial_y;
			go();
			obj.ifGo=0;
		}
	
		function go() {
				timer=setInterval(function(){
					now_x+=single_x;
					now_y+=single_y;
					obj.style.left=now_x+'px';
					obj.style.top=now_y+'px';
					if (vertical<0) {
						if (now_y<initial_y+vertical) {
							obj.style.left=initial_x+horizontal+'px';
							obj.style.top=initial_y+vertical+'px';
							clearInterval(timer);
							if (endfn) {
								endfn();
							}
						}
					}
					if (vertical>0) {
						if (now_y>initial_y+vertical) {
							obj.style.left=initial_x+horizontal+'px';
							obj.style.top=initial_y+vertical+'px';
							clearInterval(timer);
							if (endfn) {
								endfn();
							}
						}
					}
					if (vertical==0) {
						if (horizontal<0) {
							if (now_x<initial_x+horizontal) {
								obj.style.left=initial_x+horizontal+'px';
								obj.style.top=initial_y+vertical+'px';
								clearInterval(timer);
								if (endfn) {
									endfn();
								}
							}
						}
						if (horizontal>0) {
							if (now_x>initial_x+horizontal) {
								obj.style.left=initial_x+horizontal+'px';
								obj.style.top=initial_y+vertical+'px';
								clearInterval(timer);
								if (endfn) {
									endfn();
								}
							}
						}
					}
			},14);
		}
	}

//当鼠标移入对象时使对象抖动
//参数（6）：对象，抖动方向，抖动频率，抖动幅度，抖动时间，回调函数
//幅度单位：px
//时间单位：毫秒（最小值14）
//频率单位：毫秒/次
//抖动方向：'horizontal','vertical','tilt-left','tilt-right'
//时间最好为频率的整数倍
	function doShake(obj,direction,time,endfn) {
		clearInterval(timer);

		if (typeof(obj.ifgo)=='undefined'||obj.ifgo==0) {
			obj.ifgo=1;
			var times=parseInt(time/120);//抖动次数
			var timer=null;
			var x=0,y=0;
			var thisTimes=0;
			var initial_x=getStyle(obj,'left');
			var initial_y=getStyle(obj,'top');
			go();
		}

		function go() {
			if (direction=='horizontal') {
				x=1;
				y=0;
			} else if (direction=='vertical') {
				x=0;
				y=1;
			} else if (direction=='tilt-left') {
				x=0.5;
				y=0.5;
			} else if (direction=='tilt-right') {
				x=-0.5;
				y=0.5;
			}

			timer=setInterval(function(){
				doMove(obj,-x*10,-y*10,10,function(){
					doMove(obj,x*20,y*20,20,function(){
						doMove(obj,-x*10,-y*10,10);
					});
				});
				thisTimes++;
				if (thisTimes>=times) {
					obj.style.left=initial_x;
					obj.style.top=initial_y;
					obj.ifgo=0;
					clearInterval(timer);
				}
			},70);
		}
	}