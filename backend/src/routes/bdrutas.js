const express = require('express');

const routes = express.Router();

const controller = require('../controllers/controller');

//peticiones
//rutas de categorias
routes.get('/categorias', controller.listarCategorias);
routes.get('/categorias:id', controller.obtenerCategoria),
routes.post('/categorias', controller.crearCategoria);
routes.delete('/categorias:id', controller.eliminarCategorias);
//rutas de personal
routes.get('/personal', controller.listarPersonal);
routes.post('/personal', controller.crearPersonal);
//rutas de tickets
routes.get('/', controller.listarTickets);
routes.post('/', controller.crearTicket);



module.exports = routes;