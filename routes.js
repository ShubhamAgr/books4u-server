var login = require('./routes/login');
module.exports = function(app) {
  login(app);

  app.get('/',function(req,res){
    console.log(xyz);
    res.status(200).send("This request is for Home Page");
  });

  app.listen(3000,function(){
    console.log("books4u-server is running at port:\t 3000");
  });

}
