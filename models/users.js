var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var userSchema = new schema({
  _id = id,
  username = {type:String,default:null},
  password = {type:String},
})
