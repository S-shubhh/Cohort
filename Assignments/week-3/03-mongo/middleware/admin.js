// Middleware for handling auth
const { User } = require('./indexForDb');
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const{ adminId} = req.headers.adminId;
    const {adminPass} = req.body.adminPass;

    try{
            User.validate({
                AdminID: adminId,
                PassAdmin: adminPass
            });
            next();
    }
    catch(err){
        console.log(err);
        res.status(401).json({msg:"There might be some issue"});
        
    }

};

module.exports = adminMiddleware;