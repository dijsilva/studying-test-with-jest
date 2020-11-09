const express = require('express');

const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();

routes.get('/users', UserController.index)
routes.get('/user', UserController.show)
routes.post('/user', UserController.create)
routes.post('/session', AuthController.login)

module.exports = routes;