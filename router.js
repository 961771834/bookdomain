
let bookList = require("./data.js");
exports.showIndex = (req,res)=>{
	res.render(__dirname + "/view/bookmain.html",{list:bookList},200)
}

exports.toAddBook = (req,res)=>{
	res.render(__dirname + "/view/addBook.html",{},200)
}

exports.addBook = (req,res)=>{
		bookList.push(req.body);
		res.render("./",{},302)
}


exports.toEdit = (req,res)=>{
		let id = req.query.id;
		bookList.some((v,i)=>{
			if(i + 1 == id) {
				v.id = id;
				res.render(__dirname+"/view/editBook.html",v,200);
			}
		})
}

exports.editBook = (req,res)=>{
				/*判断返回数据的 id */
				/*将接收到数据转换成对象格式*/
				postData = req.body;				
				bookList.some((v,i)=>{
					if( i + 1 == postData.id ) {
						v.name = postData.name;
						v.author = postData.author;
						v.desc = postData.desc;
						v.categoty = postData.categoty;
						return false;
					}
				})
				res.render("./",{},302);
}

exports.deleteBook = (req,res)=>{
		let id = req.query.id;
		bookList.some((v,i)=>{
			if(i + 1 == id) {
				bookList.splice(i,1);
			}
		});
		res.render("./",{},302)
}