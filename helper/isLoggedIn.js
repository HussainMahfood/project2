module.exports = (req, res, next) => {
    if(!req.user){
        // res.redirect("/user/signin")
        res.send("You are not logged in");
    }
    else
    {
        next();
    }
}