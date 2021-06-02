//importar express
const express = require('express');

//inicializar express
const app = express();

//configuraciones
app.set('port', process.env.Port || 3000);

//rutas
app.get('/', (req,res) =>{
    console.log("Holi");
    res.send("mensaje");
})

//levantar el servidor
app.listen(app.get('port'), (error)=>{
    if(error){
        console.log('Ha ocurrido un error', error);
    }else{
        console.log('Servidor en puerto', app.get('port'));
    }
});