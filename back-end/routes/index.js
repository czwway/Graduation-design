
/*
 * .
 */
module.exports = function(app){



  app.get('/api/', function(req,res){
    res.send(JSON.stringify({路由:'/',err:null}));
  });
  app.get('/api/users', function(req,res){
    res.send(JSON.stringify({路由:'/users',err:null}));
  });
  app.post('/api/postusers', function(req,res){
    // res.send(JSON.stringify({路由:'/postusers',err:"11212121"}));
    res.send(JSON.stringify({路由:'/postusers',err:'11212121',id:req.body.userid+'*-'}));
  });

  app.get('*', function(req,res){
    res.send(JSON.stringify({路由:'找不到家',err:null}));
  });


};