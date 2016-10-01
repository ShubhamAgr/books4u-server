var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var bookSchema = new schema({
  _id : id,
  book_name:{type:String},
  Author:{type:String},
  ISBN:{type:String},
  book_status:{type:String,default:"free"}//sold,occupied,free
},{collection:'books'});
	module.exports = mongoose.model('book',bookSchema);
