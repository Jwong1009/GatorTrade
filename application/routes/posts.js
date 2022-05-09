/**********************************************************
 * FILE: routes/posts.js
 * 
 * DESCRIPTION: Application's endpoints from this file will
 * start with "/posts".
 * 
 * CREATED BY: Faisal
**********************************************************/
const express = require('express');
const router = express.Router();
const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');
var sharp = require('sharp');
var multer = require('multer');
var crypto = require('crypto');
var PostModel = require('../models/Posts');
var PostError = require('../helpers/error/PostError');
const Color = require('color');

// Creates storage in public/images folder to store user uploaded images.
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/images");
    },
    filename: function(req, file, cb) {
        let fileExt = file.mimetype.split('/')[1];
        let randomName = crypto.randomBytes(22).toString("hex");
        cb(null, `${randomName}.${fileExt}`);
    }
});

// Connects established multer storage to upload files.
var uploader = multer({storage: storage});

router.post('/createPost', uploader.single("itemImage"), (req, res, next) => {
    // Uploaded File + Created Thumbnail paths
    let fileUploaded = req.file.path;
    let filePath = "images/" + req.file.filename;
    let fileAsThumbnail = `thumbnail-${req.file.filename}`;
    let destinationOfThumbnail = req.file.destination + "/thumbnails/" + fileAsThumbnail;
    let thumbnailPath = "images/thumbnails/" + fileAsThumbnail;
    
    // Targeted Post Item form input data:
    let title = req.body.itemTitle;
    let category = req.body.category;
    let categoryId = parseInt(category);
    let price = req.body.itemPrice;
    let description = req.body.itemDesc;

    // Gets seller's user id from their logged in session:
    let seller = req.session.userId;

    //If user not signed redirect to sign-in/login page
    if(seller == undefined){
        res.redirect("/login");
    }

    // Sharp resizes uploaded image to a thumbnail version of the image
    // with a 200x200 size, then exports to destinationOfThumnail, 
    // in thumbnails folder.
    else{
        sharp(fileUploaded)
        .png()
        .resize(200, 200, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .toFile(destinationOfThumbnail)
        .then(() => {
            return PostModel.create(title, categoryId, description, filePath, thumbnailPath, price, seller)
        })
        .then((postWasCreated) => {
            if(postWasCreated) {
                console.log("Your post was created successfully!");
                req.flash('success', "Your post was created successfully!");
                req.session.save( err => {
                    res.redirect('/');
                });
            } else {
                console.log("Your post was NOT created.");
                throw new PostError('Post could not be created!!', '/post', 200);
            }
        })
        .catch((err) => {
            if(err instanceof PostError) {
                errorPrint(err.getMessage());
                req.flash('error', err.getMessage());
                res.status(err.getStatus());
                res.redirect(err.getRedirectURL());
            } else {
                next(err);
            }
        });
    }
});

module.exports = router;
