var express = require('express')
var app = express()
var fs = require('fs');


var quePasa = '';
quePasa='esta por leer el archivo';
console.log(quePasa)
//funcion(path,codification,function)


quePasa='Termino de leer el archivo';
console.log(quePasa);
//paginas/pagina.html --> busca en C:/paginas/pagina html

//.paginas/pagina.html
//>path/paginas/pagina.html

var usuarios = [
        {
            id:1,
            nombre:"Carlos",
            cedula:1720825346,
        },
        {
            id:2,
            nombre:"Mario",
            cedula:1720825346,
        },
        {
            id:3,
            nombre:"Balseca",
            cedula:1720825346,
        },
    ];
app.get('/TecnologiasWeb', function (req, res) {
    var archivoLeido;
    console.log('1 Antes de leer');
    fs.readFile('./paginas/pagina.html','utf8',
           function(error,archivoLeido){
            console.log('3'+error);
            console.log('4'+archivoLeido);
            res.send(archivoLeido);
    
        });//funcion al final sera un callback
    
    console.log('1 Antes de leer');
    fs.readFile('./paginas/usuario.html','utf8',
           function(error,archivoLeido1){
            console.log('3'+error);
            console.log('4'+archivoLeido1);
            res.send(archivoLeido+archivoLeido1);
    
        });
    console.log('1,parece que termino de leer');
  
})

app.post('/TecnologiasWeb', function (req, res) {
    var usuario={
        "nombre":"David",
        "cedula":"1720825346"
    }
    
//    console.log(res);
// console.log("Response Headers");
// console.log(res.HEADERS_RECEIVED);
// console.log("Request Headers");
// console.log(req.head);
    
    usuario.apellido= 'Moncayo';
    usuario.mascotas= [];
    
    
    
    
    
    //anadimos a las cabeceras de respuesta un tokenPostman
    res.append("token",1234);
    res.json(usuario);
  
  
})
app.get('/Usuario', function (req, res) {

    res.json(usuarios);
    
})
//accedemos de la siguiente manera
//http://localhost:5050/Usuario/1
app.get('/Usuario/:idUsuario', function (req,res){
    
    var idActual = req.params.idUsuario;
for (var i = 0; usuarios.length; i++) {
    if (idActual == usuarios[i].id) {
        res.json(usuarios[i]);
    }
}
res.send('I dont know such family ')
})

app.post('/Usuario', function (req, res) {
    console.log(req.query.nombre);
    console.log(req.query.cedula);
    
    if(!req.query.nombre){
        res.send('No envio el nombre');
    }
    
    if(!req.query.cedula){
        res.send('No envio el cedula');
    }
    
    var nuevoUsuario = {
        id:usuarios.length+1,
        nombre:req.query.nombre,
        cedula:req.query.cedula
    }
    usuarios.push(nuevoUsuario)
    
    res.json(nuevoUsuario);
    
})

app.listen(5050, function () {
  console.log('Example app listening on port 5050!')
})
