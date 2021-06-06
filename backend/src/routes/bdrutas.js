const express = require('express');

const routes = express.Router();

const controller = require('../controllers/controller');

//peticiones
//rutas de categorias
routes.get('/categorias', controller.listarCategorias);
routes.get('/categorias/:id', controller.obtenerCategoria);
routes.post('/categorias', controller.crearCategoria);
routes.delete('/categorias/:id', controller.eliminarCategoria);
routes.put('/categorias/:id', controller.editarCategoria);
//rutas de personal
routes.get('/personal', controller.listarPersonal);
routes.get('/personal/:id', controller.obtenerPersonal);
routes.post('/personal', controller.crearPersonal);
routes.delete('/personal/:id', controller.eliminarPersonal);
routes.put('/personal/:id', controller.editarPersonal);

//rutas de tickets
routes.get('/tickets', controller.listarTickets);
routes.get('/tickets/:id', controller.obtenerTicket);
routes.post('/tickets', controller.crearTicket);
routes.delete('/tickets/:id', controller.eliminarTicket);
routes.put('/tickets/:id', controller.editarTicket);

module.exports = routes;