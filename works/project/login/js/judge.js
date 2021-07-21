window.onload=function(){
	//用户名
	var oUser=document.getElementById('user');
	var reUser=/(^[\u4e00-\u9fa50-9a-zA-Z._\u3002]{1,14}$)|(^[1]{1}[\d]{10}$)/;
	oUser.onblur=function(){
		if (!reUser.test(this.value)) {
			alert("请输入用户名或11位手机号码");
		}
	}

	//密码
	var oPassword=document.getElementById('password');
	var rePasswordAll=/(^[\d]{8,18}$)|(^[a-zA-Z]{8,18}$)/;
	oPassword.onblur=function(){
		if (this.value.length>=8&&this.value.length<=18) {
			if (!rePasswordAll.test(this.value)) {
				// alert('ok');
			} else {
				alert("密码不能是纯英文和纯中文");
			}
		} else {
			alert("请输入8-18位字符作为您的密码");
		}
	}
}