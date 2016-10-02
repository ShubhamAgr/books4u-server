 var register = require("../config/register");
var user = require("../config/user");
module.exports = function(app){
  //search user by username
app.get('/user/:email',function(req,res){
    user.getUserByEmail(req.params.email,function(err,user){
        if(err){
            res.json({"msg":"oops something went wrong"});
        }else if(user.length != 0){
            res.json({"msg":"user found"});
        }else{
             res.json({"msg":"newUser"});
        }
      });
});
app.post('/user/addUser',function(req,res){
 user.addUser(req.body.email,function(response){
res.json(response);
 });
});
}
