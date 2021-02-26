//CRIANDO SERVIDOR EXPRESS TESTE

//Importando express
const express = require('express');

const app = express(); //Instanciando Express
const port = 3000;

//Definindo uma reposta para uma requisição GET na raiz do servidor.
app.get('/', (req, res)=> res.send('Bem vindo ao servidor de teste em Express.js!'));
//Experimente abrir http://localhost:3000/


//Definindo porta que o servidor irá executar.
app.listen(port, ()=> console.log('Servidor rodando na porta: '+port));
