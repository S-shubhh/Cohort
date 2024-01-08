const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User } = require("../db");
const { Course } = require("../db");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    Admin.create({
        username: username,
        password: password

    })
    res.json({
        msg: "Admin Created Succefully"
    })
});

router.post('/signin', async (req,res) => {
    const username  = req.body.username;
    const password  = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.verify(username , JWT_);
        res.json({
            token
        })
    }
    else{
        res.json({
            msg: "Incorrext email and pass"
        })
    }

})

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;

    const newCourse = await Course.create({
        title: title,
        description: description,
        price : price
    })
    res.json({
        msg: "Course created Succesfully" , courseId: newCourse._id 
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response  = await Course.find({});
    res.json({
        courses: response
    })
});

module.exports = router;