var io   = require('socket.io'),
    url  = require('url'),
    util  = require('util'),
    express = require('express'),
    http=require('http'),
   path = require('path');

var port = process.env.PORT || 8080;
var app = express();
var server = http.createServer(app);
var socket = io.listen(server);


app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/dist');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(port);
util.puts('server running ' + 'now ' + Date.now());