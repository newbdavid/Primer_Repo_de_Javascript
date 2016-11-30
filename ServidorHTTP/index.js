var express = require('express')
var app = express()

app.get('/TecnologiasWeb', function (req, res) {
  res.send('con javascript')
})

app.post('/TecnologiasWeb', function (req, res) {
    var usuario={
        "nombre":"David",
        "cedula":"1720825346"
    }
    
    /*console.log(res) ;  
    console.log("Response Headers");
    console.log(res.HEADERS_RECEIVED);
    console.log("Request Headers");
    console.log(req.head);
    */
    usuario.apellido= 'Moncayo';
    usuario.mascotas= [];
    res.json(usuario);
  
  
})

app.listen(5050, function () {
  console.log('Example app listening on port 5050!')
})
