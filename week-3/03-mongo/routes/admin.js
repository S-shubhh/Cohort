const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin , Course } =require("./indexForDb");
const app = express();

// Admin Routes
app.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const { username , password}  = req.headers;
    try{
        const existingAdmin = await Admin.FindOne({username});
            if(existingAdmin){
                res.json({
                    msg: "User already exist"
                })
            }
            const newAdmin = Admin({username ,password});
            await newAdmin.save();
            res.json({
                msg: " Admin Created Succesfully"
            })
    }
    catch(err){
        console.log("There might bew some error");
        res.status(401);
    }

});

app.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const { id, title , description  } = req.headers;
    try{const existingBook = await Course.FindOne({id});
    if(existingBook){
        res.status|(402).json({msg: "Book already present in lib"});
    }

    const newBook = Course({id ,title, description});
    newBook.save();
    res.json({msg: "book Added succesfully"});
    }
    catch(err){
        console.log(err);
    }

});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    try{
        const allCourses = Course.find();
        res.json({allCourses});
    }
    catch(err){
            res.json({msg: "it's not u , it's us"});
    }

});

module.exports = router;