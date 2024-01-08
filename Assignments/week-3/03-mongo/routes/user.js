const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const  {User, Course } = require("./indexForDb");
// User Routes
app.post('/signup', (req, res) => {
    // Implement user signup logic
    const { user , pass} = req.headers;
    try{
        const existingUSer = User.FindOne({user, pass});
        if(existingUSer){
            res.json({msg: "User already exist "});
        }
        const newUser = new User({user, pass});
        newUser.save();
        res.json({msg: "User created succesfully"});
    }
    catch(err){
        res.send(err);
    }
});

app.get('/courses', (req, res) => {
    
    // Implement listing all courses logic
    try{
    const allBooks = Course.Find();
    res.json({allBooks});
    }
    catch(err){
        res.send(err);
    }
});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
