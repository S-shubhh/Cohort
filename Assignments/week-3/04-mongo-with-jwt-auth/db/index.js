const mongoose = require('mongoose');
const { number } = require('zod');


// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:PQxC0wvc8b0aGRYl@cluster0.1dcnaye.mongodb.net/Bolooo');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String 
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
     

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}