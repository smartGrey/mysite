window.onload = function() {

	var myTime = new Date(); //当前系统的时间对象
		//object类型
	
	alert(new Date().getTime());//时间戳
		//从 1970年 1月1日 0点0分0秒0毫秒 起到现在的时间
		//返回值为数值毫秒

	///////////////////以下都是数字类型////////////////////
	var myYear = myTime.getFullYear();

	var myMonth = myTime.getMonth() + 1;
		//月份是从0开始算，所以要加一才是当前月份

	var myDate = myTime.getDate(); //获取日的方法

	var myDay = myTime.getDay(); //获取星期的方法
		//星期一到六是1~6
		//星期天是0

	var myHours = myTime.getHours();

	var myMinutes = myTime.getMinutes();

	var mySeconds = myTime.getSeconds();
	/////////////////////////////////////////////////////

	clearInterval(timer);
	var timer=setInterval(showTime,1000);

	showTime();
	function showTime() {
		var myTime = new Date();
		var myYear = myTime.getFullYear();
		var myMonth = myTime.getMonth() + 1;
		var myDate = myTime.getDate();
		var myDay = myTime.getDay();
		var myHours = myTime.getHours();
		var myMinutes = myTime.getMinutes();
		var mySeconds = myTime.getSeconds();

		if(myDay===0)myDay='星期日';
		if(myDay===1)myDay='星期一';
		if(myDay===2)myDay='星期二';
		if(myDay===3)myDay='星期三';
		if(myDay===4)myDay='星期四';
		if(myDay===5)myDay='星期五';
		if(myDay===6)myDay='星期六';

		var str=myYear+'年 '+myMonth+'月'+myDate+'日 '+myDay+' '+toDouble(myHours)+':'+toDouble(myMinutes)+':'+toDouble(mySeconds);

		document.body.innerHTML=str;

		function toDouble(n) {
			return n<10?n='0'+n:n=''+n;
		}
	}
}
