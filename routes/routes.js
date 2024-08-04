const express = require('express');
const usersController = require('../controllers/userControllers');
const route = express.Router();
const User = require('../models/User')

route.route('/')
   .get(usersController.user_route_get)

route.route('/signUp')
   .get(usersController.user_signup_get)
   .post(usersController.user_signup_post);
   
route.route('/login')
   .get(usersController.user_login_get)
   .post(usersController.user_login_post)

route.route('/allUsers')
   .get(usersController.user_allUsers_get)

route.route('/deleteUser/:id')
   .delete(usersController.user_delete)

module.exports = route;