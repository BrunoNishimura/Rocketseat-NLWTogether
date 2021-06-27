const express = require('express');
const route = require('./route');
const path = require('path');/*É um modulo, não é um arquivo*/

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

//Esta linha de código é Middleware, é o suficiente para poder pegar o conteúdo que esta vindo do formulário, descodificar e passar para o Controller. 
server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, () => console.log("RODANDO"))


