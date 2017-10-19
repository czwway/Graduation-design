
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var bodyParser  = require('body-parser');

var app = express();

// all environments
app.set('port', process.env.PORT || 8081);
// app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
// app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//创建监听
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


//路由
routes(app);