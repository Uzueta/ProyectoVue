const conexion = require('../config/connection');

function listar(req,res){
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

function listarTickets(req,res){
    if(conexion){
        let sql = "SELECT * FROM proyecto_web.tickets"
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

function obetenerCategoria(req,res){
    if(conexion){
        const id = req.params.id;
        let sql = `SELECT * FROM proyecto_web.categorias where CategoryID = ${conexion.escape(id)}`;
        conexion.query(sql, (err,categoria) => {
            if(err){
                res.json(err);
            }else{
                var mensaje = ""
                if(categoria === undefined || categoria.length == 0){
                    mensaje = "categoria no encontrada"
                }
                console.log(categoria);
                res.json({data : categoria, mensaje : mensaje});
            }
        });
    }
}


module.exports = {
    listar,
    listarTickets,
    obetenerCategoria
}