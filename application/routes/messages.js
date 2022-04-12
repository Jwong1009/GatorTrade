/**********************************************************
 * FILE: routes/messages.js
 * 
 * DESCRIPTION: Application's endpoints from this file will
 * start with "/messages". Route is for message posting
 * 
 * CREATED BY: Ze
**********************************************************/

const express = require('express');
const router = express.Router();
const MessagesModel = require('../models/Messages');
const MessagesError = require('../helpers/error/MessagesError');
const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');

router.post('/send', function (req, res, next) {
  const { item, receiver } = req.query;
  try {
    if (!req.session.userId) {
      throw new MessagesError("Must be logged in to message", "/dp?id=" + item, 200);
    }
  } catch (err) {
    errorPrint("message send failed");
    if (err instanceof MessagesError) {
      errorPrint(err.getMessage());
      req.flash('error', err.getMessage());
      res.status(err.getStatus());
      res.redirect(err.getRedirectURL());
      return;
    } else {
      // next(err);
      res.redirect("/dp?id=" + item);
      return;
    }
  }
  const body = req.body.message;
  const sender = req.session.userId;
  MessagesModel.create(item, sender, receiver, body)
    .then((messageStatus) => {
      if (messageStatus > 0) {
        successPrint(`message sent`);
        req.flash('success', 'Message sent');
        req.session.save(err => {
          res.redirect('/');
        });
      } else {
        throw new MessagesError("Could not send message", "/dp?id=" + item, 200);
      }
    })
    .catch((err) => {
      errorPrint("message send failed");
      if (err instanceof MessagesError) {
        errorPrint(err.getMessage());
        req.flash('error', err.getMessage());
        res.status(err.getStatus());
        res.redirect(err.getRedirectURL());
      } else {
        // next(err);
        res.redirect("/message")
      }
    });
});


module.exports = router;