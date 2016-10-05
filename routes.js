var login = require('./routes/login');
var register = require('./routes/register');
var addToSale = require('./routes/addToSaleList');
var addToWishlist = require('./routes/addtoWishlist');
var borrowBooks = require('./routes/borrowBooks');
var buyBooks = require('./routes/buyBooks');
var lendBooks = require('./routes/lendbooks');
module.exports = function(app) {
  login(app);
  register(app);
  addToSale(app);
  addToWishlist(app);
  borrowBooks(app);
  buyBooks(app);
  lendBooks(app);
  app.get('/',function(req,res){
    res.status(200).send("This request is for Home Page");
  });

  app.listen(3000,function(){
    console.log("books4u-server is running at port:\t 3000");
  });

}
