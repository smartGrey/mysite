//总入口
var http=require("http");
var fs=require("fs");
var url=require("url");
var path=require("path");
var querystring = require('querystring');
var mimeList=fs.readFileSync('./mime.json','utf8');


//创建服务器
var server=http.createServer(function(req,res){
	if (req.url=="./favicon.ico") {
		return;
	}
	var pathname=url.parse(req.url).pathname;

	if (pathname=="/") {
		fs.readFile('../webcontainer/homepage/index.html',function(err,data){
			res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
			res.end(data);
		});
	} else if (pathname=="/getreferencedir") {
		fs.readdir("../webcontainer/reference/files",function(err,files){
			res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
			res.end(JSON.stringify(files));
		});
	} else if (pathname=="/getreferencedirsfilelist") {
		var fileName=decodeURI(url.parse(req.url).query).split("=")[1].split("?")[0];
		fs.readdir("../webcontainer/reference/files/"+fileName,function(err,files){
			res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
			res.end(JSON.stringify(files));
		});
	} else if (pathname=="/adddir") {
		var dirName=decodeURI(url.parse(req.url).query).split("=")[1].split("?")[0];
		fs.mkdir("../webcontainer/reference/files/"+dirName,function(err){
			res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
			res.end("success!");
		});
	} else if (pathname=="/postfile") {
		var data;
	    req.on('data', function (chunk) {
	        data += chunk;
	    });
	    req.on('end', function () {
	        tempContent=data.split("filecontent=")[1]
	        data = querystring.parse(data);
	        fs.writeFile('../webcontainer/reference/files/'+data.undefineddirname+"/"+data.filename,tempContent, function (err) {
	        	if (err) {
	        		console.log(err);
	        	}
				res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
				res.end("success!");
			});
	    });
	} else {
		//获取拓展名
		var extname=path.extname(pathname);
		//写入《道德经》的访问量
		if (pathname=="/ddj/index.html") {
			var x;
			fs.readFile('../webcontainer/ddjviews.txt',function(err,data){
				x=data/1;
				x++;
				fs.writeFile('../webcontainer/ddjviews.txt',x,"utf-8",function(err){
				});
			});
		}
		//写入《孙子兵法》的访问量
		if (pathname=="/szbf/index.html") {
			var x;
			fs.readFile('../webcontainer/szbfviews.txt',function(err,data){
				x=data/1;
				x++;
				fs.writeFile('../webcontainer/szbfviews.txt',x,"utf-8",function(err){
				});
			});
		}
		//读取文件
		fs.readFile('../webcontainer'+decodeURI(pathname),function(err,data){
			//如果不存在，返回404页面
			if (err) {
				console.log(err);
				fs.readFile('../webcontainer/404/index.html',function(err,data){
					res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
					res.end(data);
				})
				return;
			}
			//设置类型，返回
			var mime=getMime(extname);
			res.writeHead(200,{'Content-type':mime});
			res.end(data);
		});
	}
}).listen(80,"0.0.0.0");

function getMime(key) {
	return JSON.parse(mimeList)[key.toLowerCase()];
}