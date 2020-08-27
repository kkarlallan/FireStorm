const path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session');

const isProduction = process.env.NODE_ENV === 'production';

// Create global app object
const app = express();

// Normal express config defaults
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));
app.use(express.json());

//app body
app.use(require('./api'));

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

// finally, let's start our server...
var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port);
});