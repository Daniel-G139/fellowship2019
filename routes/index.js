'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/cad', function(req, res, next) {
  res.render('cad');
});

router.get('/blog', function(req, res, next) {
  res.render('blog');
});

router.get('/logout', function(req,res,next){
  req.logout();
  req.flash('info', 'You have been logged out.');
  res.redirect('/');
});

module.exports = router;
