//获取目录页相关元素
var oBtn=document.getElementById('button');//目录按钮
var oSelectBox=document.getElementById('selectbox');//目录页面
var h1=document.querySelector("h1");
var h2=document.querySelector("h2");
var h3=document.querySelector("h3");
var main_text=document.querySelector(".main_text");
var select_box_content=document.querySelector(".select_box_content");
var content_box=document.querySelector("#content_box");
var switch1=0;//用来关联selectbox的显示与否。显示是1，消失是0
var last=0;//当前页
var pages_ammount=book.pages.length;//书籍页面数

// 设置页面title和h1
document.title=book.page_title;
h1.innerHTML=book.book_name;

// 根据last刷新正文内容
setContent(last);

//填充目录内容
for (var i in book.pages) {
	var temp_item=document.createElement("div");
	temp_item.classList.add("item");

	var temp_val_1=document.createElement("div");
	temp_val_1.classList.add("val_1");
	temp_val_1.innerHTML=book.pages[i].index_title;

	var temp_val_2=document.createElement("div");
	temp_val_2.classList.add("val_2");
	temp_val_2.innerHTML=book.pages[i].abstract==""?"暂无摘要":book.pages[i].abstract;

	temp_item.appendChild(temp_val_1);
	temp_item.appendChild(temp_val_2);
	temp_item.index=i;
	temp_item.onclick=function(){
		last=this.index;
		setContent(last);
		switch1=0;
	}
	select_box_content.appendChild(temp_item);
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
AJAX.open("GET","http://www.liuzhuocheng.com/szbfviews.txt",true);
AJAX.send();
AJAX.onreadystatechange=function(){
	if (AJAX.readyState==4 && AJAX.status==200) {
		document.getElementById("views").innerHTML=AJAX.responseText;
	}
}