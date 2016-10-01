var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;

var addressinfo = {
  line1:{type:String},
  line2:{type:String},
  city:{type:String},
  state:{type:String},
  country:{type:String}
};
var userSchema = new schema({
  _id : id,
  username : {type:String,default:null},
  password : {type:String},
  email:{type:String},
  loginInfo:{
      isLogin:{type:Boolean},
      fbLoginToken:{
        token:{type:String},
        timestamp:{type:String},
        isExpired:{type:Boolean}
      }
  }
  address : {
    permanent_address:addressinfo,
    temporary_address:[addressinfo]
  },
  LoginLocations : [String],
  books_borrowed:[{
      bookId : id,
      date : {type:Date},
      from:{type:String},
      timestamp:{type:String},
    }],
  books_lend:[{
      bookId : id,
      date : {type:Date},
      to:{type:String},
      timestamp:{type:String},
    }],
  books_wishList:[book_id],
  books_forSale:[{
    bookId : id,
    markedPrice : {type:Integer},
    costPrice : {type:Integer},
  }],
  books_Sold:[{
    bookId : id,
    soldPrice:{type:Integer}
  }],
})
