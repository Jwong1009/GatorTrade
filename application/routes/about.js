/**********************************************************
 * FILE: routes/about.js
 * 
 * DESCRIPTION: Application's endpoints (URIs) start from 
 * "/about" in this file. Ex: "/about/zaheer". Refactored 
 * from previous version in routes/index.js to make a 
 * general template about page with injected EJS parameters 
 * for details.
**********************************************************/

const express = require('express');
const db = require('../db');
const members = require('./members');
const router = express.Router();

/* TEAM 5 About Me Pages */
// REFACTOR: Make general template page with 

router.get('/patel', function (req, res, next) {
    res.render('about', {
        fname: members.patel.fname,
        lname: members.patel.lname,
        description: members.patel.desc,
        email: members.patel.email,  
        github_id: members.patel.github_id,
        github_link: members.patel.github_link,
        image: members.patel.image
    });
});

router.get('/lei', function (req, res, next) {
    res.render('about', {
        fname: members.lei.fname,
        lname: members.lei.lname,
        description: members.lei.desc,
        email: members.lei.email,
        github_id: members.lei.github_id,
        github_link: members.lei.github_link,
        image: members.lei.image
    });
});

router.get('/zaheer', function (req, res, next) {
    res.render('about', {
        fname: members.zaheer.fname,
        lname: members.zaheer.lname,
        description: members.zaheer. desc,
        email: members.zaheer.email,
        github_id: members.zaheer.github_id,
        github_link: members.zaheer.github_link,
        image: members.zaheer.image
    });
});

router.get('/hernandez', function (req, res, next) {
    res.render('about', {
        fname: members.hernandez.fname,
        lname: members.hernandez.lname,
        description: members.hernandez.desc,
        email: members.hernandez.email,
        github_id: members.hernandez.github_id,
        github_link: members.hernandez.github_link,
        image: members.hernandez.image
    });
});

router.get('/wong', function (req, res, next) {
    res.render('about', {
        fname: members.wong.fname,
        lname: members.wong.lname,
        description: members.wong.desc,
        email: members.wong.email,
        github_id: members.wong.github_id,
        github_link: members.wong.github_link,
        image: members.wong.image
    });
});

router.get('/cheung', function (req, res, next) {
    res.render('about', {
        fname: members.cheung.fname,
        lname: members.cheung.lname,
        description: members.cheung.desc,
        email: members.cheung.email,
        github_id: members.cheung.github_id,
        github_link: members.cheung.github_link,
        image: members.cheung.image
    });
});
  
module.exports = router;