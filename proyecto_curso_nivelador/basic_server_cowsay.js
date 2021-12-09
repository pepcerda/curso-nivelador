const express = require('express');
const hostname = '127.0.0.1';
const port = 8080;
// const _ = require('lodash')
var cowsay = require('cowsay')
const app = express(); 

app.get('/', function (req, res) {
  res.write('GET request to cowsay\n')
  res.write(cowsay.say({
    text: "Hola, soy Josep Cerda!",
    e: "PP", 
    T: "U "    
  }))
  res.send()
}); 

app.post('/', function (req, res) {
  res.write('POST request to cowsay\n')
  res.write(
    cowsay.say({
    text: "Hola, soy Josep Cerda!",
    e: "Oo", 
    T: "U "    
  }))
  res.send()
}); 

app.listen(port, hostname);
console.log(`Running on http://${hostname}:${port}`);
