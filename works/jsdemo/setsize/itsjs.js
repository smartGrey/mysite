

window.onload = function () {
	var buttonfirst = document.getElementById('buttonfirst');
	var colorblock = document.getElementById('colorblock');
	var choosebox = document.getElementById('choosebox');
	var buttonone = document.getElementById('buttonone');
	var buttontwo = document.getElementById('buttontwo');

	var colorone = document.getElementById('colorone');
	var colortwo = document.getElementById('colortwo');
	var colorthree = document.getElementById('colorthree');

	var widthone = document.getElementById('widthone');
	var widthtwo = document.getElementById('widthtwo');
	var widththree = document.getElementById('widththree');

	var heightone = document.getElementById('heightone');
	var heighttwo = document.getElementById('heighttwo');
	var heightthree = document.getElementById('heightthree');


	buttonfirst.onclick = function () {				//点击打开设置窗口
		choosebox.style.display = 'block';
	}
	
	
	buttontwo.onclick = function () {			//点击两个按钮关闭设置窗口
		choosebox.style.display = 'none';
	}
	buttonone.onclick = function () {
		colorblock.style.background = 'red';
		colorblock.style.width = '400px';
		colorblock.style.height = '400px';
		choosebox.style.display = 'none';

		colorone.style.background = 'black';
		colorone.style.color = 'red';
		colortwo.style.background = 'green';
		colortwo.style.color = 'black';
		colorthree.style.background = 'blue';
		colorthree.style.color = 'black';

		widthone.style.background = 'black';
		widthone.style.color = 'white';
		widthtwo.style.background = 'grey';
		widthtwo.style.color = 'black';
		widththree.style.background = 'grey';
		widththree.style.color = 'black';

		heightone.style.background = 'black';
		heightone.style.color = 'white';
		heighttwo.style.background = 'grey';
		heighttwo.style.color = 'black';
		heightthree.style.background = 'grey';
		heightthree.style.color = 'black';
	}



	colorone.onclick = function () {
		colorblock.style.background = 'red';
		colorone.style.background = 'black';
		colorone.style.color = 'red';

		colortwo.style.background = 'green';
		colortwo.style.color = 'black';


		colorthree.style.background = 'blue';
		colorthree.style.color = 'black';
	}
	colortwo.onclick = function () {
		colorblock.style.background = 'green';
		colortwo.style.background = 'black';
		colortwo.style.color = 'green';

		colorone.style.background = 'red';
		colorone.style.color = 'black';


		colorthree.style.background = 'blue';
		colorthree.style.color = 'black';
	}
	colorthree.onclick = function () {
		colorblock.style.background = 'blue';
		colorthree.style.background = 'black';
		colorthree.style.color = 'blue';

		colorone.style.background = 'red';
		colorone.style.color = 'black';


		colortwo.style.background = 'green';
		colortwo.style.color = 'black';
	}

	widthone.onclick = function () {
		colorblock.style.width = '400px';
		widthone.style.background = 'black';
		widthone.style.color = 'white';

		widthtwo.style.background = 'grey';
		widthtwo.style.color = 'black';

		widththree.style.background = 'grey';
		widththree.style.color = 'black';
	}
	widthtwo.onclick = function () {
		colorblock.style.width = '600px';
		widthtwo.style.background = 'black';
		widthtwo.style.color = 'white';

		widthone.style.background = 'grey';
		widthone.style.color = 'black';

		widththree.style.background = 'grey';
		widththree.style.color = 'black';
	}
	widththree.onclick = function () {
		colorblock.style.width = '800px';
		widththree.style.background = 'black';
		widththree.style.color = 'white';

		widthone.style.background = 'grey';
		widthone.style.color = 'black';

		widthtwo.style.background = 'grey';
		widthtwo.style.color = 'black';
	}

	heightone.onclick = function () {
		colorblock.style.height = '400px';
		heightone.style.background = 'black';
		heightone.style.color = 'white';

		heighttwo.style.background = 'grey';
		heighttwo.style.color = 'black';

		heightthree.style.background = 'grey';
		heightthree.style.color = 'black';
	}
	heighttwo.onclick = function () {
		colorblock.style.height = '600px';
		heighttwo.style.background = 'black';
		heighttwo.style.color = 'white';

		heightone.style.background = 'grey';
		heightone.style.color = 'black';

		heightthree.style.background = 'grey';
		heightthree.style.color = 'black';
	}
	heightthree.onclick = function () {
		colorblock.style.height = '800px';
		heightthree.style.background = 'black';
		heightthree.style.color = 'white';

		heightone.style.background = 'grey';
		heightone.style.color = 'black';

		heighttwo.style.background = 'grey';
		heighttwo.style.color = 'black';
	}
}