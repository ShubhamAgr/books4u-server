var login = require('./routes/login');
var register = require('./routes/register');
module.exports = function(app) {
  login(app);
  register(app);
  app.get('/',function(req,res){
    res.status(200).send("This request is for Home Page");
  });

  app.listen(3000,function(){
    console.log("books4u-server is running at port:\t 3000");
  });

}
