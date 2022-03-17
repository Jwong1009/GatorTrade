const express = require('express');
const db = require('../db');
const router = express.Router();

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

router.post('/test_results/:item', function(req, res, next) {
  // res.render('test_results', { title: 'Team 05 Home Page' });
  const { item } = req.params;
  // console.log(item);
  db.query(`SELECT * FROM items WHERE title LIKE '${item}%' ORDER BY title;`, (err, results, fields) => {
    // console.log(results);
    res.send(results);
  });
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
