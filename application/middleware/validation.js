/**********************************************************
 * FILE: middleware/validation.js
 * 
 * DESCRIPTION: Validates sign up information
 * 
 * CREATED BY: Faisal
**********************************************************/

//TODO: check for @sfsu.edu or @mail.sfsu.edu
const checkEmail = (email) => {
    // Simple email regex requires an alphanumeric characer before AND after a literal '@' character 
    let emailChecker = /^\S+@\S+$/;
    return emailChecker.test(email);
};

const checkPassword = (password) => {
    let passwordChecker = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[(\/*-+!@#$^&*)]).{8,20}$/;
    return passwordChecker.test(password);
};

const registerValidator = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    let cpassword = req.body.password2;

    if(!checkEmail(email)) {
        // Invalid email
        req.flash('error', "Invalid email!");
        req.session.save(err => {
            res.redirect("/login");
        });
    } 
    
    else if(password !== cpassword) {
        // Invalid password
        req.flash('error', "Passwords don't match!");
        req.session.save(err => {
            res.redirect("/login");
        });
    } else {
        // Valid credentials
        next();
    }
}
const loginValidator = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    if(!checkEmail(email)) {
        // Invalid email
        req.flash('error', "Invalid email!");
        req.session.save(err => {
            res.redirect("/login");
        });
    } 
    
    else {
        // Valid credentials
        next();
    }
}

module.exports = {registerValidator, loginValidator};
