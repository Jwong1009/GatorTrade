/**********************************************************
 * FILE: routes/users.js
 * 
 * DESCRIPTION: Application's endpoints from this file will
 * start with "/users".
**********************************************************/

var express = require('express');
var app = express();
var router = express.Router();
const db = require('../db');
const UserModel = require('../models/Users');
const UserError = require('../helpers/error/UserError');
const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');
const { registerValidator, loginValidator } = require('../middleware/validation');
var bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* REGISTER */
router.post('/register', registerValidator, (req, res, next) => {
  let firstname = req.body.fname;
  let lastname = req.body.lname;
  let email = req.body.email;
  let password = req.body.password;
  let cpassword = req.body.password2;

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
  let email = req.body.email;
  let password = req.body.password;

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
