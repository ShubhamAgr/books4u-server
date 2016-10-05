var User = require("../models/users")
//get all user
module.exports.getUser = function(callback){
    User.find(callback);
}

module.exports.addUser = function(emailId,callback){
      var id = new mongoose.Types.ObjectId;
      var user = new User({
        _id:mongoose.Types.ObjectId(id),
        email:emailId,
      },{collection :'users'});
    user.save(function(err,newUser){
          if(err) {
            callback({"error":"oops something went wrong"});
          }else{
            callback({"msg":"userAdded"});
          }
        })


}

module.exports.getUserByEmail = function(email,callback){
    var query = {'email':email};
    User.findOne(query,function(err,user){
      if(err){
        callback({"response":"oops something went wrong..."});
      }else{
        callback({"response":user[0].body._id});//might be wrong...
      }
    });
}
