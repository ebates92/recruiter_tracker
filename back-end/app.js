

require('dotenv').config()

//  ROUTE FILES
var postData = require('./routes/post-data')
const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const config = require('./config/config');
const passport = require('passport');
const isAuthorized = require('./auth');
//  ROUTE FILES
const auth = require('./routes/auth');
const api = require('./routes/api');
const dashboard = require('./routes/dashboard');
const signup = require('./routes/signup');


// // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [config.session.cookieKey]
}));

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, 'build')));


// ROUTES
app.use(isAuthorized);
app.use('/login', (req, res) => {
  res.sendFile(__dirname + '/build/login.html');
});
app.use('/signup', signup);
app.use('/auth', auth);
app.use('/api', api);
app.use('/posting', postData);
app.use('/dashboard', dashboard);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(res.locals.error);
});

app.listen(3000);

module.exports = app;
