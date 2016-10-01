var User = require("../models/users")
//get all user
module.exports.getUser = function(callback){
    User.find(callback);
}

module.exports.addUser = function(user,callback){
    User.create(user,callback);
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
