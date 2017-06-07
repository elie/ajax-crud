var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/burrito-crud')
mongoose.Promise = Promise

module.exports.Burrito = require("./burrito")


