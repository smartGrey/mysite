

window.onload=function () {
	var oText=document.getElementById('text');
	var oButton=document.getElementById('button');

	oButton.onclick=function() {
		if (oText.value=='') {
			alert('请输入您的QQ号');
		} else if (isNaN(oText.value)) {
			alert('请不要输入数字以外的其他内容');
		} else if (parseInt(oText.value)!=parseFloat(oText.value)) {
			alert('输入的内容中不能带有小数点');
		} else if (oText.value[0]==0) {
			alert('数字的开头不能是0');
		} else if ((oText.value>99999999999)||(oText.value<10000)) {
			alert('请输入5~10位的数字');
		} else {
			alert('是合法QQ号!');
		}
	}
}