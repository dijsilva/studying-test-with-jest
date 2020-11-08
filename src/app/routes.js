const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index)
routes.get('/user', UserController.show)
routes.post('/user', UserController.create)

module.exports = routes;
