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

const UserModel = require('../models/Users');
const UserError = require('../helpers/error/UserError');
const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');
const { registerValidator, loginValidator } = require('../middleware/validation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* REGISTER */
router.post('/register', registerValidator, (req, res, next) => {
  const firstname = req.body.fname;
  const lastname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;

  UserModel.emailExists(email)
  .then((emailDoesExist) => {
    if(emailDoesExist) {
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
    if(createdUserId < 0) {
      throw new UserError(
        "Server Error, user could not be created",
        "/login",
        500
      );
    } else {
      successPrint("User.js --> User was created!");
      req.flash('success', 'User account has been made!');
      req.session.save( err => {
        res.redirect('/login');
      });
    }
  })
  .catch((err) => {
    errorPrint("User could not be made", err);
    if(err instanceof UserError) {
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
  .then((loggedUserId) => {
    if(loggedUserId > 0) {
      // Valid Credentials
      successPrint(`User ${email} is logged in`);
      req.session.email = email;
      req.session.userId = loggedUserId;
      res.locals.logged = true;
      req.flash('success', 'You have been successfully logged in!');
      req.session.save( err => {
        res.redirect('/');
      });
    } else {
      throw new UserError("Invalid username and/or password", "/login", 200);
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

/* Get User Dashboard */
router.get('/myPage', function (req, res, next) {
  const { search, category } = req.query;
  const { userId } = req.session; // used to grab the id of the user logged in to grab the appropriate name in db
  const categoryId = parseInt(category);
  db.query(`SELECT firstname, lastname FROM Users U WHERE U.idUsers = ${userId};`).then(([results]) => {
    const usersName = `${results[0].firstname} ${results[0].lastname}`; // creates a string literal to be displayed 
    res.render('userPage', { title: 'Team 05 My Page', search: search, category: categoryId, name: usersName });
  }).catch(error => {
    console.log(error);
  });
});

/* Get User Posts List */
router.get('/myPosts', function (req, res, next) {
  const { search, category } = req.query;
  const { userId } = req.session; //used to grab the id of the user logged in to grab the posts made by that user to be displayed
  let categoryId = parseInt(category);
  db.query(`SELECT * FROM Items I WHERE I.seller= ${userId}`).then(([results]) => {
    res.render('userPosts', { title: 'User Posts', search: search, category: categoryId, Items: results, total: results.length })
  }).catch(error => {
    console.log(error);
  });
});

/* Get User Messages */
router.get('/myMessages', function (req, res, next) {
  const { search, category } = req.query;
  const { userId } = req.session;
  let categoryId = parseInt(category);
  let msgSender = {};
  let msgInfo = [];

  db.query(`SELECT firstname, lastname, idUsers FROM Messages INNER JOIN Users ON sender=idUsers AND sender != ${userId};`).then(([senderName]) => {
    msgSender = senderName;
    // console.log({msgSender});
    return db.query(`SELECT DISTINCT body, receiver, sender, photopath, title FROM Messages LEFT JOIN Items ON item=idItems LEFT JOIN Users on receiver=idUsers WHERE receiver= ${userId}`);
  }).then(([results]) => {
    msgInfo = results;
    // console.log({ msgInfo });
  }).then(() => {
    res.render('userMessages', { title: 'Team 05 Messages Page', search: search, category: categoryId, messages: msgInfo, senderN: msgSender })
  });
});

/* Get User Settings */
router.get('/settings', function (req, res, next) {
  const { search, category } = req.query;
  const categoryId = parseInt(category);
  const { email } = req.session;
  res.render('userSettings', { title: 'Team 05 My Settings' , search:search, category:categoryId, userEmail: email});
});

/* LOG OUT */
router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if(err) {
      errorPrint('session could not be destroyed.');
      next(err);
    } else {
      successPrint('Session was destroyed!');
      res.clearCookie('csid');
      res.json({status:"OK", message:"user is logged out"});
    }
  });
});

module.exports = router;
