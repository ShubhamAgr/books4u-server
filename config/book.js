var mongoose = require('mongoose');
var Book = require(./models.books);

module.exports.getBooks = function(callback){
    Book.find(callback);
}

module.exports.addBooks = function(req,callback){
    var id = new mongoose.Types.ObjectId;
    var book = new Book({
      _id:mongoose.Types.ObjectId(id),
      book_name:req.body.bookName,
      Author:req.body.bookAuthor,
      ISBN:req.body.bookIsbn,
      book_status:"free"
    },{collection :'book'});
    book.save(function(err,newUser){
        if(err) {
        	callback({"error":"oops something went wrong"});
        }else{
          callback({"id":id});
        }
      })

}

module.exports.getBookByName = function(book_name,callback){
    Book.find({"book_name":book_name},function(err,book){
      callback("book_Id":book[0]._id);
    });
}
module.exports.getBookByAuthor = function(book_author,callback){
  Book.find({"Author":book_author},function(err,book){
    callback("book_Id":book[0]._id);
  });
}

module.exports.getBookByIsbn = function(book_Isbn,callback){
  Book.find({"ISBN":book_Isbn},function(err,book){
    callback("book_Id":book[0]._id);
  });
}
