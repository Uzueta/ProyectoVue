const conexion = require('../config/connection');

//funciones de categorias
function listarCategorias(req, res) {
    if (conexion) {
        let sql = "SELECT * FROM proyecto_web.categorias"
        conexion.query(sql, (err, categoria) => {
            if (err) {
                res.json(err);
            } else {
                console.log(categoria);
                res.json(categoria);
            }
        });
    }
}

function obtenerCategoria(req, res) {
    if (conexion) {
        const { id } = req.params;
        let sql = `SELECT * FROM proyecto_web.categorias WHERE CategoryID = ${conexion.escape(id)}`;
        conexion.query(sql, (err, categorias) => {
            if (err) {
                console.log(err);
            } else {
                var mensaje1 = "";
                if (categorias === undefined || categorias.length == 0)
                    mensaje1 = "Categoria no encontrada";
                res.json({ data: categorias[0], mensaje: mensaje1 });
            }
        })
    }
}

function crearCategoria(req, res) {
    if (conexion) {
        console.log(req.body);
        const categoria = req.body;

        if (!categoria.CategoryName) {
            return res.status(400).send({ error: true, mensaje: "El nombre es obligatorio" });
        }

        if (categoria.CategoryName.length > 50) {
            return res.status(400).send({ error: true, mensaje: "La longitud debe ser menor de 50 caracteres" });
        }

        let sql = "INSERT INTO proyecto_web.categorias set ?";

        conexion.query(sql, [categoria], (err, data) => {
            if (err) {
                console.log(err);
            } else {

                res.json({ error: false, data, mensaje: "Categoria creada con exito." });
            }
        })
    }
}

function eliminarCategoria(req, res) {
    if (conexion) {
        const { id } = req.params;
        let sql = "DELETE FROM proyecto_web.categorias WHERE CategoryID = ?";
        conexion.query(sql, [id], (err, data) => {
            if (err) {
                res.status(400).send({ error: true, mensaje: "Esta categoría no puede ser eliminada por el momento" });
            } else {
                let mensaje = "";
                if (data.affectedRows === 0) {
                    mensaje = "Categoria no encontrada";
                } else {
                    mensaje = "Categoria eliminada con éxito";
                }

                res.json({ error: false, data, mensaje });
            }
        })
    }
}

function editarCategoria(req, res) {
    if (conexion) {
        const { id } = req.params;
        const categoria = req.body;

        let sql = "UPDATE proyecto_web.categorias set ? WHERE CategoryID = ?";

        conexion.query(sql, [categoria, id], (err, data) => {
            if (err) {
                res.json(err);
            } else {
                let mensaje = "";
                if (data.changedRows === 0) {
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Categoria actualizada con exito."
                }

                res.json({ error: false, data, mensaje });
            }
        })


    }
}

//funciones de personal
function listarPersonal(req, res) {
    if (conexion) {
        let sql = "SELECT * FROM proyecto_web.persona"
        conexion.query(sql, (err, persona) => {
            if (err) {
                res.json(err);
            } else {
                console.log(persona);
                res.json(persona);
            }
        });
    }
}

function obtenerPersonal(req, res) {
    if (conexion) {
        const { id } = req.params;
        let sql = `SELECT * FROM proyecto_web.persona WHERE PersonaID = ${conexion.escape(id)}`;
        conexion.query(sql, (err, persona) => {
            if (err) {
                console.log(err);
            } else {
                var mensaje1 = "";
                if (persona === undefined || persona.length == 0)
                    mensaje1 = "Persona no encontrada";
                res.json({ data: persona[0], mensaje: mensaje1 });
            }
        })
    }
}

function crearPersonal(req, res) {
    if (conexion) {
        console.log(req.body);
        const Personal = req.body;

        if (!Personal.Nombre) {
            return res.status(400).send({ error: true, mensaje: "El nombre es obligatorio" });
        }

        if (!Personal.Apellidos) {
            return res.status(400).send({ error: true, mensaje: "Los apellidos son obligatorios" });
        }

        if (Personal.Telefono.length > 0 && Personal.Telefono.length !== 10) {
            return res.status(400).send({ error: true, mensaje: "La longitud del telefono debe ser de 10 caracteres" });
        }

        if (Personal.Nombre.length > 50) {
            return res.status(400).send({ error: true, mensaje: "La longitud del nombre debe ser menor de 50 caracteres" });
        }

        if (Personal.Apellidos.length > 80) {
            return res.status(400).send({ error: true, mensaje: "La longitud de los apellidos debe ser menor de 80 caracteres" });
        }

        if (Personal.Direccion.length > 150) {
            return res.status(400).send({ error: true, mensaje: "La longitud de la direccion debe ser menor de 150 caracteres" });
        }

        let sql = "INSERT INTO proyecto_web.persona set ?";

        conexion.query(sql, [Personal], (err, data) => {
            if (err) {
                console.log(err);
            } else {

                res.json({ error: false, data, mensaje: "Personal creada con exito." });
            }
        })
    }
}

function eliminarPersonal(req, res) {
    if (conexion) {
        const { id } = req.params;

        let sql = "DELETE FROM proyecto_web.persona WHERE PersonaID = ?";
        conexion.query(sql, [id], (err, data) => {
            if (err) {
                res.status(400).send({ error: true, mensaje: "Este personal no puede ser eliminado por el momento" });
            } else {
                let mensaje = "";
                if (data.affectedRows === 0) {
                    mensaje = "Personal no encontrado";
                } else {
                    mensaje = "Personal eliminado con éxito";
                }

                res.json({ error: false, data, mensaje });
            }
        })
    }
}

function editarPersonal(req, res) {
    if (conexion) {
        const { id } = req.params;
        const personal = req.body;

        if (personal.Telefono.length > 0 && personal.Telefono.length !== 10) {
            return res.status(400).send({ error: true, mensaje: "La longitud del telefono debe ser de 10 caracteres" });
        }

        let sql = "UPDATE proyecto_web.persona set ? WHERE PersonaID = ?";

        conexion.query(sql, [personal, id], (err, data) => {
            if (err) {
                res.json(err);
            } else {
                let mensaje = "";
                if (data.changedRows === 0) {
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Personal actualizado con exito."
                }

                res.json({ error: false, data, mensaje });
            }
        })


    }
}

//funciones de tickets
function listarTickets(req, res) {
    if (conexion) {
        let sql = `select t.ticketsID,t.Nombre,t.Descripcion,t.Prioridad, concat(p.Nombre,' ',p.Apellidos) as 'Nombre Personal' ,c.CategoryName,t.Estatus 
        from proyecto_web.tickets t 
        inner join proyecto_web.categorias c on c.CategoryID = t.CategoryID 
        inner join proyecto_web.persona p on p.PersonaID = t.PersonaID 
        ORDER BY ticketsID`
        conexion.query(sql, (err, ticket) => {
            if (err) {
                res.json(err);
            } else {
                console.log(ticket);
                res.json(ticket);
            }
        });
    }
}

function filtrarTickets(req, res) {
    const { id } = req.params;
    if (conexion) {
        let sql = `SELECT T.ticketsID, T.Nombre, T.Descripcion, T.Prioridad, P.Nombre as Nombre_Personal, C.CategoryName, T.Estatus
        FROM proyecto_web.tickets as T 
        INNER JOIN proyecto_web.persona as P ON T.PersonaID = P.PersonaID
        INNER JOIN proyecto_web.categorias as C ON T.CategoryID = C.CategoryID
        WHERE T.CategoryID=${id}`
        conexion.query(sql, (err, resp) => {
            if (err) {
                res.json(err);
            } else {
                console.log(resp, 'wcss');
                res.json(resp);
            }
        });
    }
}

function obtenerTicket(req, res) {
    if (conexion) {
        const { id } = req.params;
        let sql = `SELECT * FROM proyecto_web.tickets WHERE ticketsID = ${conexion.escape(id)}`;
        conexion.query(sql, (err, Ticket) => {
            if (err) {
                console.log(err);
            } else {
                var mensaje1 = "";
                if (Ticket === undefined || Ticket.length == 0)
                    mensaje1 = "Ticket no encontrado";
                res.json({ data: Ticket[0], mensaje: mensaje1 });
            }
        })
    }
}

function crearTicket(req, res) {
    if (conexion) {
        console.log(req.body);
        const ticket = req.body;

        if (!ticket.Nombre) {
            return res.status(400).send({ error: true, mensaje: "El nombre es obligatorio" });
        }

        if (!ticket.Prioridad) {
            return res.status(400).send({ error: true, mensaje: "La prioridad es obligatoria" });
        }

        if (!ticket.PersonaID) {
            return res.status(400).send({ error: true, mensaje: "El personal es obligatorio" });
        }

        if (!ticket.CategoryID) {
            return res.status(400).send({ error: true, mensaje: "La categoria es obligatoria" });
        }

        if (ticket.Nombre.length > 50) {
            return res.status(400).send({ error: true, mensaje: "La longitud del nombre debe ser menor de 50 caracteres" });
        }

        if (ticket.Descripcion.length > 100) {
            return res.status(400).send({ error: true, mensaje: "La longitud de la descripcion debe ser menor de 100 caracteres" });
        }

        let sql = "INSERT INTO proyecto_web.tickets set ?";

        conexion.query(sql, [ticket], (err, data) => {
            if (err) {
                console.log(err);
            } else {

                res.json({ error: false, data, mensaje: "Ticket creado con exito." });
            }
        })
    }
}

function eliminarTicket(req, res) {
    if (conexion) {
        const { id } = req.params;
        let sql = "DELETE FROM proyecto_web.tickets WHERE ticketsID = ?";
        conexion.query(sql, [id], (err, data) => {
            if (err) {
                res.json(err);
            } else {
                let mensaje = "";
                if (data.affectedRows === 0) {
                    mensaje = "Ticket no encontrado";
                } else {
                    mensaje = "Ticket eliminado con éxito";
                }
                res.json({ error: false, data, mensaje });
            }
        })
    }
}

function editarTicket(req, res) {
    if (conexion) {
        const { id } = req.params;
        const ticket = req.body;

        if (!(ticket.Estatus && !ticket.Prioridad && !ticket.PersonaID && !ticket.CategoryID)) {
            if (!ticket.Prioridad) {
                return res.status(400).send({ error: true, mensaje: "La prioridad es obligatoria" });
            }

            if (!ticket.PersonaID) {
                return res.status(400).send({ error: true, mensaje: "El personal es obligatorio" });
            }

            if (!ticket.CategoryID) {
                return res.status(400).send({ error: true, mensaje: "La categoria es obligatoria" });
            }

            if (ticket.Descripcion.length > 100) {
                return res.status(400).send({ error: true, mensaje: "La longitud de la descripcion debe ser menor de 100 caracteres" });
            }
        }

        let sql = "UPDATE proyecto_web.tickets set ? WHERE ticketsID = ?";

        var query = conexion.query(sql, [ticket, id], (err, data) => {
                if (err) {
                    res.json(err);
                } else {
                    let mensaje = "";
                    if (data.changedRows === 0) {
                        mensaje = "La información es la misma"
                    } else {
                        mensaje = "Ticket actualizado con exito."
                    }

                    res.json({ error: false, data, mensaje });
                }
            })
            // res.status(400).send({ error: true, mensaje: "err" + query.sql });


    }
}


module.exports = {
    //categorias
    listarCategorias,
    obtenerCategoria,
    eliminarCategoria,
    crearCategoria,
    editarCategoria,

    //tickets
    listarTickets,
    obtenerTicket,
    crearTicket,
    eliminarTicket,
    editarTicket,
    filtrarTickets,

    //personal
    listarPersonal,
    obtenerPersonal,
    crearPersonal,
    eliminarPersonal,
    editarPersonal
}