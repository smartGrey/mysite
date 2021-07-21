window.onload=function(){
	//用户名
	var oUser=document.getElementById('user');
	var reUser=/^[\u4e00-\u9fa50-9a-zA-Z._\u3002]{1,14}$/;
	oUser.onblur=function(){
		alert(reUser.test(this.value));
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
	var oPasswordAgain=document.getElementById('passwordagain');
	oPasswordAgain.onblur=function(){
		if (this.value!=oPassword.value) {
			alert("两次输入的密码不一样");
		}
	}

	//手机号
	var oPhonenum=document.getElementById('phonenum');
	var rePhonenum=/^[1]{1}[\d]{10}$/;
	oPhonenum.onblur=function(){
		if (!rePhonenum.test(this.value)) {
			alert('请输入11位手机号码');
		}
	}

	//个性签名
	var oUsersign=document.getElementById("usersign");
	oUsersign.onblur=function(){
		if (this.value.length==0) {
			alert("请添加您的个性签名");
		} else if (this.value.length>30) {
			alert("最多输入30个字符");
		}
	}

	var oCircle=document.getElementById('circle');
	var oInnercircle=document.getElementById('innercircle');
	oInnercircle.style.display='none';
	oCircle.onclick=function(){
		if (oInnercircle.style.display=='none') {
			oInnercircle.style.display='block';
		} else if (oInnercircle.style.display=='block') {
			oInnercircle.style.display='none';
		}
	}
}