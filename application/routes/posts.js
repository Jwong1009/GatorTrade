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

    // file: {
    //     fieldname: 'itemImage',
    //     originalname: 'pouring_coffee.png',
    //     encoding: '7bit',
    //     mimetype: 'image/png',
    //     destination: 'public/images',
    //     filename: '23b58ba9bd5585e5af2818caf18796629a0642dbdcc5.png',
    //     path: 'public\\images\\23b58ba9bd5585e5af2818caf18796629a0642dbdcc5.png',
    //     size: 74409
    //   }

    console.log(req);
    console.log("Parameters:", title, categoryId, description, fileUploaded, thumbnailPath, price, seller);
    // res.send('');

    // Sharp resizes uploaded image to a thumbnail version of the image
    // with a 200x200 size, then exports to destinationOfThumnail, 
    // in thumbnails folder.

    sharp(fileUploaded)
    .resize(200)
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
});

module.exports = router;
