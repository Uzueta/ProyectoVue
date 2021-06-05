//importar express
const express = require('express');
const cors = require('cors');

//inicializar express
const app = express();

//configuraciones
app.set('port', process.env.Port || 3000);

//middleware
app.use(express.urlencoded({extend: false}));
app.use(express.json());
app.use(cors());

//base de datos
require('./config/connection');

//rutas
app.use(require('./routes/bdrutas'));

//levantar el servidor
app.listen(app.get('port'), (error)=>{
    if(error){
        console.log('Ha ocurrido un error',error);
    }else{
        console.log('Servidor en puerto', app.get('port'));
    }
});

