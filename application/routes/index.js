/**********************************************************
 * FILE: routes/index.js
 * 
 * DESCRIPTION: Defines application's endpoints (URIs) to 
 * handle client requests. These endpoints start from "/" 
 * in this index.js file.
**********************************************************/

const express = require('express');
const db = require('../db');
const router = express.Router();
const members = require('./members');

//Get Homepage
//queries database for all categories
//queries database for all items
router.get('/', function (req, res, next) {
  //Used to store objects from query
  const view_data = {};
  db.query('SELECT * FROM Categories').then(([category_rows])=>{
    view_data.categories = category_rows;
    return db.query('SELECT * FROM Items');
  })
      .then(([items_rows])=>{
    view_data.items = items_rows;
  })
  .then(()=>{res.render('homepage',{
    title: 'Team 05 Home Page',
    Categories: view_data.categories,
    Items: view_data.items
  });
  });

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
router.get('/search', function (req, res, next) {


});

// Test homepage with Search bar:

router.get('/test_homepage', function (req,res,next){

  res.render('test_homepage', { title: 'Team 05 Home Page' });

});

// PROBABLY DON'T NEED THIS ANYMORE
/*router.get('/homepage', function (req, res, next) {

  res.render('homepage', { title: 'Team 05 Home Page' });
});*/

/* GET aboutAll page */
router.get('/about', function (req, res, next) {
  const membersArray = Object.values(members).reduce((accum, curr) => {
    return accum.concat({
      lname: curr.lname,
      name: `${curr.fname} ${curr.lname}`,
      role: curr.role,
      img: curr.image,
    })
  }, []);
  res.render('aboutAll', { membersInfo: membersArray });
});

// Results page, redirected from /homepage:
router.get('/results', function (req, res, next) {
  // Targets inputted text from search bar and any selected category field.
  const { search, category } = req.query;
  let categoryId = parseInt(category);
  let totalItemCount = 0;

  // db.query('SELECT * FROM Items').then(([rows]) => {
  //   res.render('homepage', { title: 'Team 05 Home Page', Items: rows });
  // })
  //   .catch(error => {
  //     console.log(error);
  //   });
  
  // Gets total count of items in database to display on Results (/results) page.
  db.query('SELECT COUNT(*) AS length FROM Items;').then(([results]) => {
    totalItemCount = results[0].length;

    // Selected "All" for Category. No need to factor category into search.
    if (categoryId == 0) {
      db.query(`SELECT * FROM Items WHERE title LIKE '%${search}%' ORDER BY title;`).then(([results]) => {
        res.render('results', { title: 'Team 05 Home Page', results: results, total: totalItemCount });
      });
    }

    // Filter results based on category chosen.
    else if (categoryId > 0) {
      db.query(`SELECT * FROM Items WHERE title LIKE '%${search}%' AND category=${categoryId} ORDER BY title;`).then(([results]) => {
        res.render('results', { title: 'Team 05 Home Page', results: results, total: totalItemCount });
      });
    }
  }).catch(error => {
    console.log(error);
  });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Team 05 Home Page' });
});



/* TEAM 5 About Me Pages */
// REFACTOR: Make general template about page with injected EJS parameters for details.

// router.get('/about/patel', function (req, res, next) {
//   res.render('about_patel');
// });

// router.get('/about/lei', function (req, res, next) {
//   res.render('about_lei');
// });

// router.get('/about/zaheer', function (req, res, next) {
//   res.render('about_zaheer');
// });

// router.get('/about/hernandez', function (req, res, next) {
//   res.render('about_hernandez');
// });

// router.get('/about/wong', function (req, res, next) {
//   res.render('about_wong');
// });

// router.get('/about/cheung', function (req, res, next) {
//   res.render('about_cheung');
// });

module.exports = router;
