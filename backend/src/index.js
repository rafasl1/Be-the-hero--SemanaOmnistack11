const express = require('express'); // importa as funcionalidades do express
const routes = require('./routes');
const cors = require('cors')

const app = express(); // instanciando a aplicação

app.use(cors());
app.use(express.json()); //json será usado no corpo das requisições
app.use(routes);

app.listen(3333); // porta 3333, para acessar basta usar localhost://3333
