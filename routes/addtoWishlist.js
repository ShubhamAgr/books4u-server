var addToWishList = require('../config/addToWishList');

module.exports = function(app){
  app.post('/addToWishList',function(req,res){
    addToWishList.addToWishList(req,function(response){
      res.json(response);
    });
 });
}
