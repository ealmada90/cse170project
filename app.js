
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
/*var mongoose = require('mongoose');

var local_database_name = 'powerUpp';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
}); */

var index = require('./routes/index');
var create = require('./routes/create');
var home = require('./routes/home');
var hometest = require('./routes/hometest');
var stats = require('./routes/stats');
var rank = require('./routes/rank');
var avatar = require('./routes/avatar');
var trainer = require('./routes/trainer');
var search = require('./routes/search');
var list = require('./routes/list');
var request = require('./routes/request');
var leader = require('./routes/leader');
var chars = require('./routes/characters');
var help = require('./routes/help');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
//app.use(express.favicon(''));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/home', home.view);
app.post('/home', home.login);
app.get('/hometest', hometest.view);
app.post('/hometest', hometest.login);
app.get('/create', create.view);
app.get('/stats', stats.view);
app.get('/rank', rank.view);
app.get('/avatar', avatar.view);
app.get('/trainer', trainer.view);
app.get('/search', search.view);
app.get('/list', list.view);
app.get('/leader', leader.view);
app.get('/request', request.view);
app.get('/chars', chars.projectInfo);
app.post('/chars', chars.changeInfo);
app.get('/help', help.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
