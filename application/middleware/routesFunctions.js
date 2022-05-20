/**********************************************************
 * FILE: middleware/routesFunctions.js
 * 
 * DESCRIPTION:
 *
 * Created by Michael
**********************************************************/

const checkSignIn = (req,res,next) => {
    if(req.session.email){
        next();     //If session exists, proceed to page
    } else {
        res.redirect("/login") //Redirect to login page if needed
    }
}

module.exports = {checkSignIn};