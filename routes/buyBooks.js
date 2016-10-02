var buybooks = require('../config/buyBooks');

module.exports = function(app){
  app.post('/buybooks',function(req,res){
    buybooks.buyBooks(req,function(response){
      res.json(response);
    });
  });
}
