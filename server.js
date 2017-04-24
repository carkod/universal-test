require('babel-register')({
  presets: ['react']
});

var express = require('express');
// Instances
var app = express();

app.use(express.static('assets'));
app.use(require('./routes/index.jsx'));


var PORT = 8080;
var HOST = 'http://0.0.0.0:'
app.listen(PORT, function(){
  console.log(HOST + PORT);
});
