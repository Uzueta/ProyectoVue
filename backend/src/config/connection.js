//importar myslq
const mysql = require('mysql');

const objectConnection = {
    "host": "localhost",
    "port": "3306",
    "user": "root",
    "password": "lacerador1",
    "datebase": "proyecto_web"
}

//crear conexion 
const conn = mysql.createConnection(objectConnection);

//conectar
conn.connect((error) => {
    if (error) {
        console.log("Error bd: ", error);
    } else {
        console.log("base de datos conectada");
    }
});

//exportar conexion
module.exports = conn;