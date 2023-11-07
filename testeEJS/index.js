const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

var nome = ['pedro','augusto','andre'];
for (let i = 0; i < nome.length; i++) {
    app.get('/' + i,(req,res)=>{
        console.log(nome[i]);
        res.render('home', {
            id:(i+1),
            nome:nome[i]
        });
    })
}


app.listen(port,(err)=>{
    if(err) console.log(err);
    console.log("Servidor iniciado! http://localhost:3000");
});