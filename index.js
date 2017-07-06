const express = require('express')
const app = express()
app.use(express.static('input'))
app.use(express.static('output'))

app.get('/', function (req, res) {
    res.redirect('input/input.html');
})

app.post('/form_handler', function (req, res) {
    res.redirect('output/output.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
