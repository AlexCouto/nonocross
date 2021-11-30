const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: '../.env' } )

const control_router = require('./controllers');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = global.Promise;

mongoose.connect( process.env.DB_CONNECTION, {
    useNewUrlParser: true , 
    useUnifiedTopology: true }
    ).then( () => {
        console.log("Conectado ao banco de dados com sucesso")
    }).catch( (err) => {
        console.log("Houve um erro ao se conectar ao banco de dados: "+err)}
)

app.use('/api', control_router);

module.exports = app;