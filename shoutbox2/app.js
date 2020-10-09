//modules
var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

//routes files
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var registerLogin = require('./routes/login');
var entries = require('./routes/entries');
var api = require('./routes/api');

//libs
var page = require('./lib/middleware/page');
var validate = require('./lib/middleware/validate');
var messages = require('./lib/messages');
var user = require('./lib/middleware/user');
var Entry = require('./lib/entry');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'your secret here',
	resave: true,
	saveUninitialized: true
}));
app.use(messages);
app.use('/api', api.auth);
app.use(user);

//routes
app.get('/post', entries.form);
app.post('/post',
	validate.required('title'),
	validate.lengthAbove('title', 4),
	entries.submit);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.get('/login', registerLogin.form);
app.post('/login', registerLogin.submit);
app.get('/logout', registerLogin.logout);
app.get('/:page?', page(Entry.count, 5), entries.list);

//api
app.get('/api/user/:id', api.user);
app.get('/api/entries/:page?', page(Entry.count), api.entries);
app.post('/api/entry', entries.submit);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
