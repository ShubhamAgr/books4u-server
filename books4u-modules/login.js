var user = require('../models/users');
exports.Dologin = function(email,callback){
  User.findOneAndUpdate({"email":email},
    {$Set:{"isLogin":"true"}}
  ,{safe:true,upsert:true},function(err){
    if(err){
      console.log(err);
      callback({"msg":"oops something went wrong"});
    }else{
      callback({"msg":"Login Success"});
    }
  });

}
