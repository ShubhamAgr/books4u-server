var login  = require('../config/login')
module.exports = function(app) {
  app.get('/login',function(req,res){
    login.Dologin(req.body.email,function(response){
      res.json(response);
    });
  });
}
