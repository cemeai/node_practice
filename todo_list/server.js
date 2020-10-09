const connection = require('./model')
const mongoose = require('mongoose');
const http = require('http');
const Todo = mongoose.model('todo')

var items = [];
var server = http.createServer(function(req, res){
  if ('/' == req.url) {
    switch (req.method) {
      case 'GET':
        show(res);
        break;
      case 'POST':
        add(req, res);
        break;
      default:
        badRequest(res);
    }
  } else {
    notFound(res);
  }
});
server.listen(3000);

function show(res) {
  Todo.find((err, docs) => {
    if (!err) {
      var html = '<html><head><title>Todo List</title></head><body>'
      + '<h1>Todo List</h1>'
      + '<ul>'
      + docs.map(function(item){
          return '<li id="'+ item._id +'">' + item.item + '</li>'
        }).join('')
      + '</ul>'
      + '<form method="post" action="/">'
      + '<p><input type="text" name="item" /></p>'
      + '<p><input type="submit" value="Add Item" /></p>'
      + '</form></body></html>';
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Length', Buffer.byteLength(html));
      res.write(html);
      res.end();
    }
  })  
}

function notFound(res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
}

function badRequest(res) {
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bad Request');
}

var qs = require('querystring');
function add(req, res) {
  var body = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk){ body += chunk });
  req.on('end', function(){
  var obj = qs.parse(body);
    var item = new Todo()
    item.item = obj.item
    item.save()
    show(res);
  });
}