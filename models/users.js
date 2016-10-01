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
  username : {type:String,required:true,unique:true},
  password : {type:String,default:null},
  email:{type:String},
  // loginInfo:{
  //     isLogin:{type:Boolean},
  //     fbLoginToken:{
  //       token:{type:String},
  //       timestamp:{type:String},
  //       LoginLocations : [String],
  //       isExpired:{type:Boolean}
  //     }
  // },
  isLogin:{type:String,default:"false"},
  address:{
    permanent_address:addressinfo,
    temporary_address:[addressinfo]
  },
  books_borrowed:[{
      bookId : id,
      date : {type:Date},
      from:{type:String}
    }],
  books_lend:[{
      bookId : id,
      date : {type:Date},
      to:{type:String},
    }],
  books_wishList:[String],
  books_forSale:[{
    bookId : id,
    markedPrice : {type:String},
    costPrice : {type:String},
  }],
  books_Sold:[{
    bookId : id,
    soldPrice:{type:String}
  }],
},{collection:'users'});
	module.exports = mongoose.model('user',userSchema);
