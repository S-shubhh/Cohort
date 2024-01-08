const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use((req,res,next) =>{
  const userId = req.headers["user-Id"];
  if(numberOfRequestsForUser[userId]){
    numberOfRequestsForUser = numberOfRequestsForUser + 1;
  if(numberOfRequestsForUser > 5){
    res.status(404).send("Not allowed request more than 5 in 1 Sec");
  }
  else{
    next(); }
  }
    else{
      numberOfRequestsForUser[userId] = 1;
      next();
    }  
});
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});


module.exports = app;
























