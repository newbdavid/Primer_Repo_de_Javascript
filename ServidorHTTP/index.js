var e6xpress = require('express')
var app = express()

app.get('/TecnologiasWeb', function (req, res) {
  res.send('con javascript')
})

app.post('/TecnologiasWeb', function (req, res) {
    console.log(res) ;  
    console.log("Response Headers");
    console.log(res.HEADERS_RECEIVED);
    console.log("Request Headers");
    console.log(req.head);
    res.send('con javascript')
  
  
})

app.listen(5050, function () {
  console.log('Example app listening on port 5050!')
})
