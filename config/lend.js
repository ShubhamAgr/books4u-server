var user = require(./config/users)

exports.addtoLend = function(req,callback){
		var email = req.body.email;
		User.findOneAndUpdate({"email":email},
			{$addToSet:{"books_lend":{"_id":new mongoose.Types.ObjectId(),"bookId":req.body.bookId,"date":new Date(),"to":req.body.toId}}}
		,{safe:true,upsert:true},function(err){
			if(err){
				console.log(err);
				callback(false);
			}else{
				callback(true);
			}
		});
	}
