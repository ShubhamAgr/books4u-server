var addToSale = require('../config/addToSaleList');
module.exports = function(app){
   app.post("/addToSale",function(req,res){
       addToSale.addToSale(req,function(response){
         res.json(response);
       });
   });
}
