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
routes.get('/', controller.listarTickets);
routes.get('/:id', controller.obtenerTicket);
routes.post('/', controller.crearTicket);
routes.delete('/:id', controller.eliminarTicket);
routes.put('/:id', controller.editarTicket);

module.exports = routes;