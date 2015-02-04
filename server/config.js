var dotenv = require('dotenv');
var test = dotenv.load();

var http     = require('http'),
    path     = require('path'),
    express  = require('express'),
    routes   = require('./routes');

var app = express();

app.set('port', process.env.PORT || 9000);

app.use(express.static(path.join(__dirname, '/../public')));

app.use(routes.users);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Server running on port ' + app.get('port'));
});
