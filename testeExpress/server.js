//requisicao express
const express = require('express');
//criar servidor
const server = express();

//get
server.get('/', (req,res)=>{
    res.send('<h1>Olá mundo</h1>')
})
//get contato
server.get('/contato', (req,res)=>{
    res.send('<h1>Contato!</h1>')
})

//qualquer um
server.get('*', (req,res)=>{
    res.send('<h1>Any</h1>')
})

//chamar servidor
server.listen(3001, ()=>{
    console.log("Servidor iniciado em http://localhost:3001 \n Desligar: crtl+c")
})