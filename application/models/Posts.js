/**********************************************************
 * FILE: models/Posts.js
 * 
 * DESCRIPTION: Handles any db functionality related to Posts.
 * 
**********************************************************/
var db = require('../db');
const PostModel = {};

PostModel.create = (title, category, description, photopath, thumbnail, price, seller) => {
    let baseSQL = 'INSERT INTO GatorTrade.Items (title, category, description, photopath, thumbnail, price, seller) VALUES (?,?,?,?,?,?,?);';
    console.log("Parameters:",title, category, description, photopath, thumbnail, price, seller);
    return db
    .execute(baseSQL,[title, category, description, photopath, thumbnail, price, seller])
    .then(([results, fields]) => {
        return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

module.exports = PostModel;


// KP:  Code Review by Kishan Patel for Milestone 4
//      1. Header and in-line comments are properly used. Provide all the information required and makes understanding the code really easy.
//      2. Method and variable names are consistent. The names clearly defines the role of the method or variable.
//      3. In the header comment for this file, name of the author is misssing.
//      4. Line 12. There is a console log present. Remove it if not required.
//      5. Line 13. Not a big issue. I think it would be better if the .execute will either be on the same line, directly following
//         db or indented directly below db instead of return.( Just a suggestion )