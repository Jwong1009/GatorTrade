/**********************************************************
 * FILE: routes/messages.js
 * 
 * DESCRIPTION: Application's endpoints from this file will
 * start with "/messages".
**********************************************************/

const express = require('express');
const db = require('../db');
const router = express.Router();
const MessagesModel = require('../models/Messages');
const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');

router.post('/send', function (req, res, next) {
    // const {item, sender, receiver, body} = req.query;
    const body = req.body.message;
    MessagesModel.create('1', '1', '2', body)
    .then((messageStatus) => {
      if(messageStatus > 0) {
        successPrint(`message sent`);
        req.flash('success', 'Message sent');
        req.session.save( err => {
          res.redirect('/');
        });
      } else {
        throw new MessagesError("Could not send message", "/message", 200);
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