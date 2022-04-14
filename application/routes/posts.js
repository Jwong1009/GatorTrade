var express = require('express');
var router = express.Router();
const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');
var sharp = require('sharp');
var multer = require('multer');
var crypto = require('crypto');
var PostModel = require('../models/Posts');
// var PostError = require('../helpers/error/PostError');

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
    let fileUploaded = req.file.path;
    let fileAsThumbnail = `thumbnail-${req.file.filename}`;
    let destinationOfThumbnail = req.file.destination + "/thumbnails/" + fileAsThumbnail;
    
    let title = req.body.itemTitle;
    let category = '';
    let price = req.body.itemPrice;
    let description = req.body.itemDesc;

    let seller = req.session.userId;

    sharp(fileUploaded)
    .resize(200)
    .toFile(destinationOfThumbnail)
    .then(() => {
        return PostModel.create(title, category, description, fileUploaded, destinationOfThumbnail, price, seller, 0)
    })
    .then((postWasCreated) => {
        if(postWasCreated) {
            req.flash('success', "Your post was created successfully!");
            req.session.save( err => {
                res.redirect('/');
            });
        } else {
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
