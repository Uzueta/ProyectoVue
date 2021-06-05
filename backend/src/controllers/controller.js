const conexion = require('../config/connection');

//funciones de categorias
function listarCategorias(req,res){
    if(conexion){
        let sql = "SELECT * FROM proyecto_web.categorias"
        conexion.query(sql, (err,categoria) => {
            if(err){
                res.json(err);
            }else{
                console.log(categoria);
                res.json(categoria);
            }
        });
    }
}
function obtenerCategoria(req, res) {
    if(conexion){
        const { id } = req.params; 
        let sql = `SELECT * FROM proyecto_web.categorias WHERE CategoryID = ${conexion.escape(id)}`;
        conexion.query(sql, (err, categorias) => {
            if(err){
                console.log(err);
            } else {
                var mensaje1 = "";
                if(categorias === undefined || categorias.length == 0)
                mensaje1 = "Categoria no encontrada";
                res.json({data: categorias[0], mensaje: mensaje1});
            }
        })
    }
}
function crearCategoria(req, res){
    if(conexion){
        console.log(req.body);
        const categoria = req.body;

        if(!categoria.CategoryName){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"});
        }

        if(categoria.CategoryName.length > 50){
            return res.status(400).send({error: true, mensaje: "La longitud debe ser menor de 50 caracteres"});
        }

        let sql = "INSERT INTO proyecto_web.categorias set ?";

        conexion.query(sql, [categoria], (err, data) => {
            if(err){
                console.log(err);
            } else {
            
                res.json({error: false, data, mensaje: "Categoria creada con exito."});
            }
        })
    }
}
function eliminarCategorias(req, res) {
    if(conexion) {
        const { id } = req.params;
        let sql = "DELETE FROM proyecto_web.categorias WHERE CategoryID = ?";
        conexion.query(sql, [id], (err, data) => {
            if(err) {
                res.json(err);
            } else {
                let mensaje = "";
                if(data.affectedRows === 0) {
                    mensaje = "Categoria no encontrada";
                } else {
                    mensaje = "Categoria elimina con éxito";
                }

                res.json({error: false, data, mensaje});
            }
        })
    }
}

//funciones de personal
function listarPersonal(req,res){
    if(conexion){
        let sql = "SELECT * FROM proyecto_web.persona"
        conexion.query(sql, (err,persona) => {
            if(err){
                res.json(err);
            }else{
                console.log(persona);
                res.json(persona);
            }
        });
    }
}
function crearPersonal(req, res){
    if(conexion){
        console.log(req.body);
        const Personal = req.body;

        if(!Personal.Nombre){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"});
        }

        if(!Personal.Apellidos){
            return res.status(400).send({error: true, mensaje: "Los apellidos son obligatorios"});
        }

        if(Personal.Telefono.length !== 10){
            return res.status(400).send({error: true, mensaje: "La longitud del telefono debe ser de 10 caracteres"});
        }

        if(Personal.Nombre.length > 50){
            return res.status(400).send({error: true, mensaje: "La longitud del nombre debe ser menor de 50 caracteres"});
        }

        if(Personal.Apellidos.length > 80){
            return res.status(400).send({error: true, mensaje: "La longitud de los apellidos debe ser menor de 80 caracteres"});
        }

        if(Personal.Direccion.length > 150){
            return res.status(400).send({error: true, mensaje: "La longitud de la direccion debe ser menor de 150 caracteres"});
        }

        let sql = "INSERT INTO proyecto_web.persona set ?";

        conexion.query(sql, [Personal], (err, data) => {
            if(err){
                console.log(err);
            } else {
            
                res.json({error: false, data, mensaje: "Personal creada con exito."});
            }
        })
    }
}

//funciones de tickets
function listarTickets(req,res){
    if(conexion){
        let sql = "select t.ticketsID,t.Nombre,t.Descripcion,t.Prioridad,p.Nombre as 'Nombre Personal',c.CategoryName,t.Estatus from proyecto_web.tickets t inner join proyecto_web.categorias c on c.CategoryID = t.CategoryID inner join proyecto_web.persona p on p.PersonaID = t.PersonaID"
        conexion.query(sql, (err,ticket) => {
            if(err){
                res.json(err);
            }else{
                console.log(ticket);
                res.json(ticket);
            }
        });
    }
}
function crearTicket(req, res){
    if(conexion){
        console.log(req.body);
        const ticket = req.body;

        if(!ticket.Nombre){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"});
        }

        if(!ticket.Prioridad){
            return res.status(400).send({error: true, mensaje: "La prioridad es obligatoria"});
        }
        
        if(!ticket.PersonaID){
            return res.status(400).send({error: true, mensaje: "El personal es obligatorio"});
        }

        if(!ticket.CategoryID){
            return res.status(400).send({error: true, mensaje: "La categoria es obligatoria"});
        }

        if(ticket.Nombre.length > 50){
            return res.status(400).send({error: true, mensaje: "La longitud del nombre debe ser menor de 50 caracteres"});
        }

        if(ticket.Descripcion.length > 100){
            return res.status(400).send({error: true, mensaje: "La longitud de la descripcion debe ser menor de 100 caracteres"});
        }

        let sql = "INSERT INTO proyecto_web.tickets set ?";

        conexion.query(sql, [ticket], (err, data) => {
            if(err){
                console.log(err);
            } else {
            
                res.json({error: false, data, mensaje: "Ticket creado con exito."});
            }
        })
    }
}

module.exports = {
    listarCategorias,
    listarPersonal,
    listarTickets,
    crearCategoria,
    crearTicket,
    eliminarCategorias,
    obtenerCategoria,
    crearPersonal
}