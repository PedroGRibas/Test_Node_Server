const express = require('express'); //recebe uma função

const app = express(); //joga o framework (funcao) na variavel app, constante evita que sobrescreva 
const port = 3000;
var path = require('path');


//rotas
app.get("/",(req,res)=>{
    //_dirname = String diretorio padrao da aplicação
    res.sendFile(__dirname + "/html/index.html");
})
app.get("/ola/:nome/:cargo",(req,res)=>{ 
    res.send("<h1>Olá "+req.params.nome+" seu cargo é "+req.params.cargo+"!</h1>");
})
//precisa ser a ultima rota se nao trava as outras!
app.get("*",(req,res)=>{
    //somente um send por rota
    res.send("<h1>Não existe a página!"+req.params+"</h1>" );
})


app.listen(port, ()=>{
    console.log("Servidor rodando na url http://localhost:3000");
});//inicia o servidor, ultima linha