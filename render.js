
const template = require("art-template");
module.exports = (res)=>{
	res.render = (vpath,data,code)=>{
		if(code == 200) {
			let html = template(vpath,data || {});
			res.end(html);
		} else if(code == 302){
			// 处理重定向
			res.writeHead(302,{
				"location":vpath
			})
			res.end();
		}
	}
}