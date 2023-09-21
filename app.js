var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var helmet = require('helmet');

var app = express();

app.use(logger('combined'));
//app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist', 'angular-tour-of-heroes')));

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
