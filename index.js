//Перенаправление при нажатии кнопки. Оба view (до нажатия и после нажатия) представлены в виде отдельных html файлов. Шаблонизация не применяется. Использованы express, http, fs
const express = require('express')
var http = require('http');
var fs = require('fs');

const app = express()
app.use(express.static('input'))
app.use(express.static('output'))

app.get('/', function (req, res) {
    fs.readFile('input/input.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
})

app.post('/form_handler', function (req, res) {
    fs.readFile('output/output.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
