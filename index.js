
const serverInit = require("./staticServer.js");
const http = require("http");
const handle = require("./handle.js");
const bodyParser = require("./body-parser.js");
const url = require("url");
const render = require("./render.js");

http.createServer((req,res)=>{
	/*创建静态服务器*/
	serverInit(req,res,__dirname,"/www");
	/*动态处理路由*/
	//这里调用render模块,使res有渲染函数;
	render(res);
	//这里先集中处理传过来的post数据
	bodyParser(req,()=>{
		//这里先集中处理get传过来的数据
		req.query = url.parse(req.url,true).query;
		handle(req,res);
	})
	
}).listen(3000,()=>{
	console.log("running....");
})


