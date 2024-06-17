const { loginUser, signupUser } = require('../controllers/userController');
const express = require('express');
const route = express.Router();


//make the login request
route.post('/login',loginUser);

route.post('/signup',signupUser);


module.exports = route;