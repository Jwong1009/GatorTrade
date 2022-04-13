/**********************************************************
 * FILE: app.js
 * 
 * DESCRIPTION: (TO UPDATE) 
**********************************************************/

require("dotenv").config();
var express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var sessions = require('express-session');
var mysqlSession = require('express-mysql-session')(sessions);
var flash = require('express-flash');

// Routers:
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var usersRouter = require('./routes/users');
var messagesRouter = require('./routes/messages')


var app = express();

// Configure sessions?
var mysqlSessionStore = new mysqlSession(
  {
    /* using default options */
  },
  require('./db')
);

app.use(sessions({
  key: "csid",
  secret: "csc648-team05",
  store: mysqlSessionStore,
  resave: false,
  saveUninitialized: false
}));

// Flash
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Sessions
app.use((req, res, next) => {
  console.log(req.session);
  if(req.session.email) {
    // If sessions is initialized, aka if logged in
    res.locals.logged = true;
  }
  next();
});

// Route middleware from ./routes/
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/users', usersRouter);
app.use('/messages', messagesRouter)

// Catches 404 and forwards to error handler.
app.use(function(req, res, next) {
  // next(createError(404));
  res.status(404).send('Unable to find the requested resource!');
});

// Error handler:
app.use(function(err, req, res, next) {
  // Sets locals, only providing error in development.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // Renders the error page.
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT || 3000}`);
});

module.exports = app;
