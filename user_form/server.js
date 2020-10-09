var http = require('http');
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
      case 'DELETE':
        del(req, res);
        break;
      default:
        badRequest(res);
    }
  } else {
    notFound(res);
  }
});

function show(res) {
  var html = '<html><head><title>Todo List</title></head><body>'
            + '<h1>Todo List</h1>'
            + '<ul>'
            + items.map(function(item){
                return '<li>' + item + '</li>'
            }).join('')
            + '</ul>'
            + '<form method="post" action="/">'
            + '<p><input type="text" name="item" /></p>'
            + '<p><input type="submit" value="Add Item" /></p>'
            + '</form></body></html>';
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
}

function notFound(res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
}

var qs = require('querystring');
function add(req, res) {
  var body = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk){ body += chunk });
  req.on('end', function(){
    var obj = qs.parse(body);
    items.push(obj.item);
  show(res);
  });
}

function del(req, res) {
  var path = url.parse(req.url).pathname;
  var i = parseInt(path.slice(1), 10);
  if (isNaN(i)) {
    res.statusCode = 400;
    res.end('Invalid item id');
  } else if (!items[i]) {
    res.statusCode = 404;
    res.end('Item not found');
  } else {
    items.splice(i, 1);
    res.end('OK\n');
  }
  break;
}

server.listen(3000);