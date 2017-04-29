/*这是集中处理post传输数据的方法*/

const query = require("querystring");
module.exports = (req,next)=>{
			if(req.method == "POST") {
				let postData = '';
				req.on("data",(chunk)=>{
					postData += chunk ;
				});
				req.on("end",()=>{
					req.body = query.parse(postData);
					//next 表示后续操作
					next();
				})	
			}else {
				//非post处理方式；
				req.body = {};
				next();
			}
			
}