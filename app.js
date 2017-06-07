const express = require("express");
const app = express();
const methodOverride = require("method-override");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const burritoRoutes = require("./routes/burritos");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); // need to parse JSON from a POST request!
app.use(methodOverride("_method"));
app.use('/burritos', burritoRoutes);

app.get("/", function(req,res){
  res.render("index");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
