/*
*
*
*该模块是用来搭建静态服务器;
*依赖mime(文件类型所对应的contentType)
*
*
*/


/*依赖的模块*/
const fs = require("fs");
const path = require("path");
const mime = require("./mime.json");

let info404 = `
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<title>404</title>
				</head>
				<body>
					<div>你请求的页面被狗狗叼走了</div>
				</body>
				</html>
				`
let serverInit = (req,res,rootName,staticDir)=>{
	if(req.url.startsWith(staticDir)){
	
		fs.readFile(path.join(rootName,req.url),(error,data)=>{
			//如果请求的页面不存在，返回404页面;
			if(error) {
				res.end(info404);
				return;
			}
			let fileName = path.basename(req.url);
			/*获得请求的扩展名*/
			let ext = path.extname(fileName)
			/*默认类型*/
			let cType = mime[ext] ?  mime[ext]:"text/html";
			
			/*文本内容需要添加字符,图片等就不需要*/
			cType += mime[ext].startsWith("text/")?';charset:utf8':"";

			/*确定返回浏览器段响应内容类型*/
			res.writeHeader(200,{
				'Content-Type': cType,
			})
			res.end(data);
		})
	}
}

module.exports = serverInit;