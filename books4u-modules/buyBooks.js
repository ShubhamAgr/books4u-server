var User = require("../models/users")

exports.buyBooks = function(req,callback){
		var email = req.body.email;
		User.findOneAndUpdate({"email":email},
			{$addToSet:{"books_sold":{"_id":new mongoose.Types.ObjectId(),"bookId":req.body.bookId,"soldPrice":req.body.soldPrice}}}
		,{safe:true,upsert:true},function(err){
			if(err){
				console.log(err);
				callback({"msg":"false"});
			}else{
				callback({"msg":"true"});
			}
		});
	}
