const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/nonocross", {
    useNewUrlParser: true , 
    useUnifiedTopology: true }
    ).then( () => {
        console.log("Conectado ao banco de dados com sucesso")
    }).catch( (err) => {
        console.log("Houve um erro ao se conectar ao banco de dados: "+err)}
)

require('./controllers')(app);

app.listen(8081);