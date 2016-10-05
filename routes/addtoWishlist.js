var addToWishList = require('../config/addToWishlist');

module.exports = function(app){
  app.post('/addToWishList',function(req,res){
    addToWishList.addToWishList(req,function(response){
      res.json(response);
    });
 });
}
