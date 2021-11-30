const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: '../.env' } )

const app = express();

app.set('trust proxy', 1);

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

require('./controllers')(app);

app.listen(8081);