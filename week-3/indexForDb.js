const { ServerOpeningEvent } = require('mongodb');
const mongoose = require('mongoose');
const { number, boolean, string } = require('zod');
const { link } = require('./03-mongo/routes/admin');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
   AdminId:  String,
   PassAdmin: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    UserId: String,
    password : String 

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    Id: String,
    Title: String,
    Description: String
    ,price: Number,
    Published: Boolean,
    ImageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}