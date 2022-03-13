var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Team 05 Home Page' });
});

router.get('/test_homepage', function(req, res, next) {
  res.render('test_homepage', { title: 'Team 05 Home Page' });
});

router.get('/test_results', function(req, res, next) {
  res.render('test_results', { title: 'Team 05 Home Page' });
});

router.get('/about/patel', function(req, res, next) {
  res.render('about_patel');
});

router.get('/about/lei', function(req, res, next) {
  res.render('about_lei');
});

router.get('/about/zaheer', function(req, res, next) {
  res.render('about_zaheer');
});

router.get('/about/hernandez', function(req, res, next) {
  res.render('about_hernandez');
});

router.get('/about/wong', function(req, res, next) {
  res.render('about_wong');
});

router.get('/about/cheung', function(req, res, next) {
  res.render('about_cheung');
});

module.exports = router;
