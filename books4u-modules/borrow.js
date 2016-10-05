var user = require('../models/users')
//To create lend list
exports.addtoborrow = function(email,req,callback){
		var email = email;
		User.findOneAndUpdate({"email":email},
			{$addToSet:{"books_borrowed":{"_id":new mongoose.Types.ObjectId(),"bookId":req.body.bookId,"date":new Date(),"from":req.body.fromId}}}
		,{safe:true,upsert:true},function(err){
			if(err){
				console.log(err);
				callback({"msg":"false"});
			}else{
				callback({"msg":"true"});
			}
		});
	}
