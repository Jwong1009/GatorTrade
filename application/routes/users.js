/**********************************************************
 * FILE: routes/users.js
 * 
 * DESCRIPTION: Application's endpoints from this file will
 * start with "/users".
 * 
 * CREATED BY: Faisal & Ze
**********************************************************/

var express = require('express');
const router = express.Router();

const db = require('../db');
var bcrypt = require('bcryptjs');

const UserModel = require('../models/Users');
const UserError = require('../helpers/error/UserError');
const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');
const { registerValidator, loginValidator } = require('../middleware/validation');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('in users router');
});

/* REGISTER */
router.post('/register', registerValidator, (req, res, next) => {
  const firstname = req.body.fname;
  const lastname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;

  UserModel.emailExists(email)
    .then((emailDoesExist) => {
      if (emailDoesExist) {
        throw new UserError(
          "Registration Failed: Email already exists",
          "/login",
          200
        );
      } else {
        return UserModel.create(password, email, firstname, lastname);
      }
    })
    .then((createdUserId) => {
      if (createdUserId < 0) {
        throw new UserError(
          "Server Error, user could not be created",
          "/login",
          500
        );
      } else {
        successPrint("User.js --> User was created!");
        req.flash('success', 'User account has been made!');
        req.session.save(err => {
          res.redirect('/login');
        });
      }
    })
    .catch((err) => {
      errorPrint("User could not be made", err);
      if (err instanceof UserError) {
        // User error
        errorPrint(err.getMessage());
        req.flash('error', err.getMessage());
        res.status(err.getStatus());
        res.redirect(err.getRedirectURL());
      } else {
        // General Errors
        next(err);
      }
    });
});

/* LOG IN */
router.post('/login', loginValidator, (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  /**
   * Does server side validation
   * Not relying on just front end validation
   * (in case of bypassing front end validation)
   */

  UserModel.authenticate(email, password)
    .then((loggedUser) => {
      if (loggedUser[0] > 0) {
        // Valid Credentials
        successPrint(`User ${email} is logged in`);
        req.session.email = email;
        req.session.userId = loggedUser[0];
        req.session.firstname = loggedUser[1];
        req.session.lastname = loggedUser[2];
        res.locals.logged = true;
        req.flash('success', 'You have been successfully logged in!');
        req.session.save(err => {
          res.redirect('/');
        });
      } else {
        throw new UserError("Invalid email and/or password", "/login", 200);
      }
    })
    .catch((err) => {
      errorPrint("user login failed");
      if (err instanceof UserError) {
        errorPrint(err.getMessage());
        req.flash('error', err.getMessage());
        res.status(err.getStatus());
        res.redirect(err.getRedirectURL());
      } else {
        // next(err);
        res.redirect("/login")
      }
    });
});

/* Get User Posts List */
router.get('/myPage/myPosts', function (req, res, next) {
  const { search, category } = req.query;
  const { userId } = req.session; //used to grab the id of the user logged in to grab the posts made by that user to be displayed
  let categoryId = parseInt(category);
  //grabs all posts made by user
  db.query(`SELECT * FROM Items I WHERE I.seller= ?`,[userId])
    .then(([results]) => {
      res.render('userPosts', {
        title: 'My Posts',
        search: search,
        category: categoryId,
        Items: results,
        total: results.length
      })
  }).catch(error => {
    console.log(error);
  });
});

/* Deletes a post created by user */
router.get('/delete', function (req, res, next) {
  const { id } = req.query;
  let idItems = parseInt(id);
  const { userId } = req.session;

  db.query("DELETE FROM Items WHERE idItems = ? AND seller = ? LIMIT 1;", [idItems, userId]);
  req.flash('success', 'Post was deleted');

  res.redirect("myPage/myPosts")
});

/* Get User Messages */
router.get('/myPage/myMessages', function (req, res, next) {
  const { search, category } = req.query;
  const { userId } = req.session;
  let categoryId = parseInt(category);
  let msgSender = {};
  let msgInfo = [];
  // grabs the sender's name of the message sent to the user
  db.query(`SELECT firstname, lastname, idUsers FROM Messages INNER JOIN Users ON sender=idUsers AND sender != ?;`,[userId])
    .then(([senderName]) => {
      msgSender = senderName;
    // grabs the message information to display to the user
    return db.query(`SELECT DISTINCT body, receiver, sender, photopath, title, thumbnail, DATE_FORMAT(date,'%Y %M %d') as date FROM Messages LEFT JOIN Items ON item=idItems LEFT JOIN Users on receiver=idUsers WHERE receiver= ?`,[userId]);
  }).then(([results]) => {
    msgInfo = results;
    res.render('userMessages', {
      title: 'My Messages',
      search: search,
      category: categoryId,
      messages: msgInfo,
      senderN: msgSender
    })
  }).catch(error => {
    console.log(error);
  });
});

/* Get User Reviews */
/* NO LONGER NEEDED as of now
router.get('/reviews', function (req, res, next) {
  const { search, category } = req.query;
  const { userId } = req.session;
  let categoryId = parseInt(category);
  let reviewee = {};
  let reviewInfo = [];

  db.query(`SELECT firstname, lastname, idUsers FROM Reviews INNER JOIN Users ON reviewer=idUsers AND reviewer != ${userId};`).then(([revieweeName]) => {
    reviewee = revieweeName;
    console.log({ reviewee });
    return db.query(`SELECT DISTINCT header, reviewee, reviewer, rating, body FROM Reviews LEFT JOIN Users on reviewee=idUsers WHERE reviewee=${userId};`);
  }).then(([results]) => {
    reviewInfo = results;
    console.log({ reviewInfo });
  }).then(() => {
    res.render('userReviews', { title: 'Team 05 Reviews Page', search: search, category: categoryId, reviewInfo: reviewInfo, reviewerName: reviewee })
  }).catch(error => {
    console.log(error);
  });
});
*/

/* Get User Settings */
router.get('/settings', function (req, res, next) {
  const { search, category } = req.query;
  const categoryId = parseInt(category);
  const { email,firstname, lastname } = req.session;
  res.render('userSettings', {
    title: 'My Settings',
    search: search,
    category: categoryId,
    userEmail: email,
    userFirstName: firstname,
    userLastName: lastname
  });
});

router.post('/updateSettings', function(req,res, next) {
  const newFirstName = req.body.newfname;
  const newLastName = req.body.newlname;
  const email = req.session.email;
  const currPassword = req.body.currPass;
  const newPassword = req.body.newPass;
  const confirmPassword = req.body.conPass;
  let values = [];
  let parameters = [];

  query = `UPDATE GatorTrade.Users SET `;

  if(newFirstName != ""){
    values.push(`firstname = ?`);
    parameters.push(newFirstName);
    req.session.firstname = newFirstName;
  }
  if(newLastName != ""){
    values.push(`lastname = ?`);
    parameters.push(newLastName);
    req.session.lastname = newLastName;
  }
 
  if(newPassword != "" && confirmPassword != "" && confirmPassword.localeCompare(newPassword) == 0){
    UserModel.authenticate(email, currPassword)
     .then((returnValues)=> {
       if(returnValues[0] > 0){

         return bcrypt.hash(newPassword, 15);

       }
     })
     .then((hashedPassword) => {
        let baseSQL = `UPDATE GatorTrade.Users SET password = ? WHERE email = ?`;
        return db.execute(baseSQL, [hashedPassword, email]);
     })
     .then(([results, fields]) => {
      if(results && results.affectedRows) {
          return Promise.resolve(results.insertId);
      } else {
          // User was not created
          return Promise.resolve(-1);
      }
    })
    .catch((err) => Promise.reject(err));
  
  }
  
  // console.log(values);
  if(values.length == 0){
    res.redirect("/users/settings");
  }
  else{
    for(let i=0; i < values.length; i++){

      query += values[i];

      if(i != values.length - 1){
        query+= ", ";
      }
    }
    query += ` WHERE email = ?`
    parameters.push(email)

    console.log(query);
    db.query(query, parameters);
    res.redirect("/users/settings");
  }

});

/* LOG OUT */
router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      errorPrint('session could not be destroyed.');
      next(err);
    } else {
      successPrint('Session was destroyed!');
      res.clearCookie('csid');
      res.json({ status: "OK", message: "user is logged out" });
    }
  });
});

module.exports = router;