// Middleware for handling auth
const   { Admin } = require('../db');
function adminMiddleware(req, res, next) {
    
    const username = req.headers.username;
    const password = req.headers.password;
    
    Admin.find({
        username,
        password})
    .then(function(value){
    if(value){
        next();
    }
    else
    {
        res.json({
            msg: "USer not Found"
    })
    }
    })    
    }

module.exports = adminMiddleware;