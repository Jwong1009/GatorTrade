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
const router = express.Router();

/* TEAM 5 About Me Pages */
// REFACTOR: Make general template page with 

router.get('/patel', function (req, res, next) {
    let fname = 'Kishan';
    let lname = 'Patel';
    let desc = '';
    let email = "kpatel10@sfsu.edu";
    let github_id = 'kp-4137';
    let github_link = "https://github.com/kp-4137";
    let image = "/images/generic-photo.jpg";
    res.render('about', {fname: fname, lname: lname, description: desc, email: email, github_id: github_id, github_link: github_link, image: image});
});

router.get('/lei', function (req, res, next) {
    let fname = 'Ze';
    let lname = 'Lei';
    let desc = 'Ze is in his last semester at SFSU. He is studying for a B.S. in Computer Science. He plays video games like Teamfight Tactics.';
    let email = "zlei1@sfsu.edu";
    let github_id = 'Frogger-Software';
    let github_link = "https://github.com/Frogger-Software";
    let image = "/images/generic-photo.jpg";
    res.render('about', {fname: fname, lname: lname, description: desc, email: email, github_id: github_id, github_link: github_link, image: image});
});

router.get('/zaheer', function (req, res, next) {
    let fname = 'Faisal';
    let lname = 'Zaheer';
    let desc = 'I love computers, I like math, and I enjoy learning how to code, so I incorporate all of that into my projects. I\'m also a huge Star Wars fan! "Parsec" is a unit of distance, not time!';
    let email = "fzaheer@mail.sfsu.edu";
    let github_id = 'Faisal-ZaheerVI';
    let github_link = "https://github.com/Faisal-ZaheerVI";
    let image = "/images/zaheer.jpg";
    res.render('about', {fname: fname, lname: lname, description: desc, email: email, github_id: github_id, github_link: github_link, image: image});
});

router.get('/hernandez', function (req, res, next) {
    let fname = 'Juan';
    let lname = 'Hernandez';
    let desc = 'Lacking direction, expecations, aspirations and overall motivation I decided to pursue Computer Science after someone told me there\'s money to be made.\nI\'ve regretted that decision with each passing day and realize I should have gone into the mountains to farm wasabi.\nI can write "Hello World" programs in C, C++, Python, Javascript, Java and not much else.\nNow what I lack in raw coding ability I don\'t make up with my level of creativity nor ingenuity.';
    let email = "jhernandez54@mail.sfsu.edu";
    let github_id = 'Juan-Hernandez7';
    let github_link = "https://github.com/Juan-Hernandez7";
    let image = "/images/juan_moleman.jpg";
    res.render('about', {fname: fname, lname: lname, description: desc, email: email, github_id: github_id, github_link: github_link, image: image});
});

router.get('/wong', function (req, res, next) {
    let fname = 'Joanne';
    let lname = 'Wong';
    let desc = 'My most recent hobbies include playing games, listening to music, and watching dramas. Besides computer science, I enjoy many topics in psychology and sociology.';
    let email = "jwong45@mail.sfsu.edu";
    let github_id = 'Jwong1009';
    let github_link = "https://github.com/Jwong1009";
    let image = "/images/generic-photo.jpg";
    res.render('about', {fname: fname, lname: lname, description: desc, email: email, github_id: github_id, github_link: github_link, image: image});
});

router.get('/cheung', function (req, res, next) {
    let fname = 'Michael';
    let lname = 'Cheung';
    let desc = 'I am a senior at San Francisco State University, and I am the frontend lead for this web application. \nI have knowledge in HTML, CSS, Javascript, Bootstrap and Node. I also have knowledge in C, C++, Java and Python. \nI enjoy playing Magic the Gathering and Flesh and Blood.';
    let email = "mcheung12@mail.sfsu.edu";
    let github_id = 'weirds111';
    let github_link = "https://github.com/weirds111";
    let image = "/images/Michael_Cheung_Photo.jpg";
    res.render('about', {fname: fname, lname: lname, description: desc, email: email, github_id: github_id, github_link: github_link, image: image});
});
  
module.exports = router;