var user = require(./config/users)

exports.addToSale = function(req,callback){
		var email = req.body.email;
		User.findOneAndUpdate({"email":email},
			{$addToSet:{"books_forSale":{"_id":new mongoose.Types.ObjectId(),"bookId":req.body.bookId,"markedPrice":req.body.markedPrice,"costPrice":req.body.costPrice}}}
		,{safe:true,upsert:true},function(err){
			if(err){
				console.log(err);
				callback(false);
			}else{
				callback(true);
			}
		});
	}
