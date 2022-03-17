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
  const { search, category } = req.query;
  let categoryId = parseInt(category);
  // Selected "All" for Category. No need to factor category into search.
  if(categoryId == 0) {
    db.query(`SELECT * FROM items WHERE title LIKE '${search}%' ORDER BY title;`, (err, results, fields) => {
      res.render('test_results', { title: 'Team 05 Home Page', results: results});
    });
  }
  // Filter results based on category chosen.
  else if(categoryId > 0) {
    db.query(`SELECT * FROM items WHERE title LIKE '${search}%' AND category=${categoryId} ORDER BY title;`, (err, results, fields) => {
      res.render('test_results', { title: 'Team 05 Home Page', results: results});
    });
  }
});

// router.get('/test_results/:item', function(req, res, next) {
//   // res.render('test_results', { title: 'Team 05 Home Page' });
//   const { item } = req.params;
//   // console.log(item);
//   db.query(`SELECT * FROM items WHERE title LIKE '${item}%' ORDER BY title;`, (err, results, fields) => {
//     // console.log(results);
//     res.render('test_results', {results: results});
//   });
// });

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
