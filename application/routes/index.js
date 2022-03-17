const express = require('express');
const db = require('../db');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Team 05 Home Page' });
});

// Test homepage with search bar
router.get('/test_homepage', function(req, res, next) {
  res.render('test_homepage', { title: 'Team 05 Home Page' });
});

router.get('/test_results', function(req, res, next) {
  const { search, category } = req.query;
  let categoryId = parseInt(category);
  let totalItemCount = 0;

  // Gets total count of items in database to display on /test_results page.
  db.query('SELECT COUNT(*) AS length FROM items;', (err, results, fields) => {
    console.log(results[0].length);
    totalItemCount = results[0].length;
  });

  // Selected "All" for Category. No need to factor category into search.
  if(categoryId == 0) {
    db.query(`SELECT * FROM items WHERE title LIKE '${search}%' ORDER BY title;`, (err, results, fields) => {
      res.render('test_results', { title: 'Team 05 Home Page', results: results, total: totalItemCount});
    });
  }

  // Filter results based on category chosen.
  else if(categoryId > 0) {
    db.query(`SELECT * FROM items WHERE title LIKE '${search}%' AND category=${categoryId} ORDER BY title;`, (err, results, fields) => {
      res.render('test_results', { title: 'Team 05 Home Page', results: results, total: totalItemCount});
    });
  }
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
