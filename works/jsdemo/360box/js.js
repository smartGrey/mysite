





window.onload = function () {
	var oUl = document.getElementById('ul');
	var aLi = oUl.getElementsByTagName('li');
	
	for (var i=0;i<aLi.length;i++) {
		aLi[i].style.left += i*150  + 'px';
		aLi[i].style.background = 'url("./pic/' + i + '.jpg")';

		aLi[i].onclick = function () {
			this.getElementsByTagName('img')[0].style.display = 'block';
			this.style.border = '4px solid #222'
		}
		aLi[i].onmouseout = function () {
			this.getElementsByTagName('img')[0].style.display = 'none';
			this.style.border = '4px solid #555';
		}
	}
}