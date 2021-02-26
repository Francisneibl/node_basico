//Importando express
const express = require('express');

//Middleware para transformar body da requisição em objeto
const bodyParse = require('body-parser');

const userRoute = require('./routes/userRoute');

const app = express(); //Instanciando Express
const port = 3000;

app.use(bodyParse.urlencoded({ extended: false}));

userRoute(app);

//Definindo uma reposta para uma requisição GET na raiz do servidor.
app.get('/', (req, res)=> res.send('Bem vindo ao servidor de teste em Express.js!'));
//Experimente abrir http://localhost:3000/


//Definindo porta que o servidor irá executar.
app.listen(port, ()=> console.log('Servidor rodando na porta: '+port));
