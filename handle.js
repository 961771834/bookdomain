
const handle = require("./router.js");

module.exports = (req,res)=>{
	if(req.url == "/" && req.method == "GET"){
		//显示主页；
		handle.showIndex(req,res);
	} else if(req.url == "/toAddBook" && req.method == "GET"){
		//跳转到添加图书那页
		handle.toAddBook(req,res);
	} else if(req.url == "/addBook" && req.method == "POST"){
		//添加过后向服务器发生请求
		handle.addBook(req,res);
	} else if(req.url.startsWith("/toEdit") && req.method == "GET"){
		//跳转到编辑页面
		handle.toEdit(req,res);
	} else if(req.url === "/editBook" && req.method == "POST"){
		//编辑完成后向服务器发送数据
		handle.editBook(req,res);	
	} else if(req.url.startsWith("/deleteBook") && req.method == "GET") {
		//点击删除按钮向后台发送数据;
		handle.deleteBook(req,res);
	}


}