var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Classified = require('../models/classified.js');

/* GET ALL BOOKS */
router.get('/ads', function(req, res, next) {
  Classified.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/ads/:id', function(req, res, next) {
  Classified.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/ads', function(req, res, next) {
 // console.log("hi")
  Classified.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/ads/:id', function(req, res, next) {
  Classified.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/ads/:id', function(req, res, next) {
  Classified.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
