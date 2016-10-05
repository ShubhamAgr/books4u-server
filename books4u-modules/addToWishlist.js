var user = require('../models/users');

exports.addTowishlist = function(req,callback){
		var email = req.body.email;
		User.findOneAndUpdate({"email":email},
			{$addToSet:{"books_wishList":{"_id":new mongoose.Types.ObjectId(),"bookId":req.body.bookId}}}
		,{safe:true,upsert:true},function(err){
			if(err){
				console.log(err);
				callback({"msg":"false"});
			}else{
				callback({"msg":"true"});
			}
		});
	}
