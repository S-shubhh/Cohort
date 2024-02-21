const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course } = require("../db");
const { User }  = require("../db");
// User Routes          
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password
    })
    res.json({
        msg: "User created successfully"
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;
    User.updateOne({
        username: username
    } , {
        "&push": {
            purchasedCourse: courseId
        }
    })

    res.json({
        msg: "Purchase Complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {

    // Implement fetching purchased courses logic
    const user = await  User.find({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourse
        }
    });

    res.json({
        courses: courses
    })
});


module.exports = router;

