//根据last刷新正文内容
function setContent(index) {
	h2.innerHTML=book.pages[index].index_title+" "+book.pages[index].title;
	h3.innerHTML=book.pages[index].abstract;
	main_text.innerHTML="";
	for (var j in book.pages[index].content) {
		main_text.innerHTML+="<p>"+book.pages[index].content[j]+"</p>";
	}
}