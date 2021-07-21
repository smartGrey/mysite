window.onload=function() {
	var oList1=document.getElementById('list1');
	var oList2=document.getElementById('list2');
	var aList1=oList1.getElementsByTagName('li');
	var aList2=oList2.getElementsByTagName('li');
	var oImg=document.getElementById('pic');
	var oBackground=document.getElementById('background');
	var oLogo=document.getElementById('logo');
	var index1=0;
	var index2=0;
	var backgroundIndex=1;
	var amount=[4,4,5,4];
	var firstListName=['iphone','imac','ipad','iwatch'];
	var arrList2Name0=['iphoneX','iphone7','iphone6','iphoneSE'];
	var arrList2Name1=['imacpro','macbook2','imac','macbook'];
	var arrList2Name2=['ipadpro2','ipad3','ipadmini2','ipadpro','ipadmini'];
	var arrList2Name3=['iwatch3','iwatch2','iwatchspe','iwatchspo'];
	var timer;

	//给第一个选项卡项目设置index索引
	for (var i=0;i<4;i++) {
		aList1[i].index1=i;
	}
	// 给列表2设置初始样式
	for (var i=0;i<4;i++) {
		aList2[i].id='four';
	}
	Deepen1();
	Deepen2();
	OnClickList2();
	timer=setInterval(AutoChange,2500);
	// 选项卡1点击效果
	for (var i=0;i<4;i++) {
		aList1[i].onmouseover=function() {
			this.style.background='#111';
		}
		aList1[i].onmousedown=function() {
			index1=this.index1;
			Deepen1();
			ChangeList2();
		}
		aList1[i].onmouseout=function() {
			this.style.background='#222';
			Deepen1();
		}
	}
	//点击结束后加深列表一选中项
	function Deepen1() {
		for (var i=0;i<4;i++) {
			if (i==index1) {
				aList1[i].style.background='#000';
			} else {
				aList1[i].style.background='#444';
			}
		}
	}
	//点击列表一改变列表二
	function ChangeList2() {
		var tamp;
		tamp=eval('arrList2Name'+index1);
		oList2.innerHTML=null;
		for (var i=amount[index1];i>=0;i--) {
			oList2.innerHTML='<li>'+tamp[i]+'</li>'+oList2.innerHTML;
		}
		if (index1==2) {
			for (var i=0;i<5;i++) {
				aList2[i].id='five';
			}
		} else {
			for (var i=0;i<4;i++) {
				aList2[i].id='four';
			}
		}
		OnClickList2();
	}
	//给第二个选项卡项目设置index索引
	function SetIndex2() {
		for (var i=0;i<amount[index1];i++) {
			aList2[i].index2=i;
		}
	}
	//选项卡二点击效果
	function OnClickList2() {
		for (var i=0;i<amount[index1];i++) {
			aList2[i].onmouseover=function() {
				this.style.background='#111';
				if (this.index2==index2) {
					clearInterval(timer);
				}
			}
			aList2[i].onmousedown=function() {
				index2=this.index2;
				Deepen2();
				ChangePic();
			}
			aList2[i].onmouseout=function() {
				this.style.background='#222';
				Deepen2();
				clearInterval(timer);
				timer=setInterval(AutoChange,2500);
			}
		}
		SetIndex2();
	}
	//点击结束后加深列表二选中项
	function Deepen2() {
		for (var i=0;i<amount[index1];i++) {
			if (i==index2) {
				aList2[i].style.background='#000';
			} else {
				aList2[i].style.background='#222';
			}
		}
	}
	//点击选项卡二时切换图片
	function ChangePic() {
		var tamp;
		tamp=eval('arrList2Name'+index1);
		oImg.src=firstListName[index1]+'/'+tamp[index2]+'.png';
		if ((index1==1&&index2==0)||(index1==2&&index2==0)) {
			oBackground.style.background='#000';
			oLogo.style.color='#fff';
		} else {
			oBackground.style.background='#fff';
			oLogo.style.color='#000';
		}
	}
	//自动播放
	function AutoChange() {
		if (index2!=amount[index1]-1) {
			index2++;
		} else {
			if (index1<3) {
				index1++;
			} else {
				index1=0;
			}
			index2=0;
		}
		Deepen1();
		ChangeList2();
		Deepen2();
		ChangePic();
	}
}