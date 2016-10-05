var mongoose = require('mongoose');
var usermodel = require('../models/users');

// exports.isUserAlreadyExist = function(email,callback){
//     usermodel.find({'email':email},function(err,user){
//       if(user.length==0){
//         callback({"msg":false})
//       }else{
//         callback({"msg":true})
//       }
//     });
// }
