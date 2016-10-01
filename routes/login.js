module.exports = function(app) {
  app.get('/login',function(req,res){
    var token = req.body.token;
    res.send("This is login");
  });
}
