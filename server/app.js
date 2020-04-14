import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import api from "./routes/api";
import debugConstructor from "debug";
import mongoose from "mongoose";
import config from "./config";

const debug = debugConstructor('klaus:server');
const app = express();

mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/api', api);
app.get('*', (req, res) => {
    res.sendFile('build/index.html', { root: global });
});

// catch 404 and forward to error handler
// note this is after all good routes and is not an error handler
// to get a 404, it has to fall through to this route - no error involved
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers - these take err object.
// these are per request error handlers.  They have two so in dev
// you get a full stack trace.  In prod, first is never setup

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

export {app as default, debug};