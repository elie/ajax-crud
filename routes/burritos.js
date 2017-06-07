var express = require("express");
var router = express.Router();
var db = require('../models/index');

router.get('/', async function(req,res,next){
  try {
    let burritos = await db.Burrito.find();
    res.send(burritos);
  } catch(err){
    next(err);
  }
});

router.post('/', async function(req,res,next){
  try {
    let newBurrito = await db.Burrito.create(req.body);
    res.status(201).send(newBurrito);
  } catch(err){
    next(err);
  }
});

module.exports = router;