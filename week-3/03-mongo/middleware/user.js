const {Userser } = require('./indexForDb');
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const{ adminId} = req.headers.adminId;
    const {adminPass} = req.body.adminPass;

    try{
            User.validate({
                UserId: adminId,
                password: adminPass
            });
            next();
    }
    catch(err){
        console.log(err);
        res.status(401).json({msg:"There might be some issue"});
        
    }

};

module.exports = userMiddleware;