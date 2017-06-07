var mongoose = require("mongoose");

var burritoSchema = new mongoose.Schema({
  name: String,
  hasBeans: Boolean
})

var Burrito = mongoose.model('Burrito', burritoSchema);

module.exports = Burrito;