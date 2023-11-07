//requisicao http
const http = require('http');

//host local
const hostname = 'localhost';

//porta
const port = 3000;

//criar o servidor
const server = http.createServer( (req,res)=>{
    //tipo de conteudo
    res.setHeader('Content-Type','text/plain');
    console.log(req.url);

    //array de respostas
    const resp = [];
    resp['/'] = "padrão";
    resp['/get'] = "get";
    resp['/home'] = "home";
    resp['semURL'] = "Sem URL";

    //chamada da resposta
    res.end(resp[req.url] || resp['semURL']);  
});

//iniciar o servidor
server.listen(port,hostname, ()=>{
    console.log("Server on!");
});