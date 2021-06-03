const express = require('express');

const routes = express.Router();

const controller = require('../controllers/controller');

//peticiones
routes.get('/', controller.listarTickets);
routes.get('/:id', controller.obetenerCategoria);

module.exports = routes;