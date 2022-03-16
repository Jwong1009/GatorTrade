const express = require('express');
const db = require('../db');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Team 05 Home Page' });
});

// router.get('/dbtest', async function(req, res, next) {
//   try {
//     let results = await db.all();
//     res.json(results);
//   } catch(e) {
//     console.log(e);
//     res.sendStatus(500);
//   }
// });

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
