var borrow = ('../config/borrow');
var lend = ('../config/lend');
module.exports = function(app){
  app.post('/books_borrowed',function(req,res){
    borrow.addtoborrow(req.body.email,req,function(response){
        res.json(response);
    });

  });
  app.post('/books_lend',function(req,res){
    lend.addtoLend(req.body.email,req,function(response){
        res.json(response);
    });
  })
}
