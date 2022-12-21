// Function to redirect to sign in page if user is not logged in
module.exports = (req, res, next) => {
    if(!req.user){
        res.redirect("/user/signin")
    }
    else
    {
        next();
    }
}