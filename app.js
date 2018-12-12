var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var welcomeRouter = require('./routes/welcome');
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var pageRouter1 = require('./routes/page1');
var newsLeftRouter = require('./routes/newsLeft');
var pageRouter2 = require('./routes/page2');
var pageRouter3 = require('./routes/page3');
var pageRouter4 = require('./routes/page4');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', welcomeRouter);
app.use('/users', usersRouter);
app.use('/index', indexRouter);
app.use('/page1', pageRouter1);
app.use('/newsLeft', newsLeftRouter);
app.use('/page2', pageRouter2);
app.use('/page3', pageRouter3);
app.use('/page4', pageRouter4);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
