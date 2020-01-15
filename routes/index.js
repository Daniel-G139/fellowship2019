'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function(req, res, next) {
  models.Post.findAll().then(function(records) {
    res.render('index', {
      records: records
    });
  });
});


router.get('/posts', function(req, res, next){
  models.Post.findByPk(req.query.id).then(function(record){
    res.render('posts', {
      record: record
    });
  });
});

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/cad', function(req, res, next) {
  console.log(req.query);
  res.render('cad' , {
    name: req.query.name,
    lastname: req.query.lastname,

  });
});

router.get('/blog', function(req, res, next) {
  res.render('blog');
});

router.post('/blog2', function(req, res, next) {
  console.log(req.query);
  res.render('blog' , {
    name: req.body.name,
    lastname: req.body.lastname,

  });
});

router.get('/logout', function(req,res,next){
  req.logout();
  req.flash('info', 'You have been logged out.');
  res.redirect('/');
});

module.exports = router;
