const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require("express-session");

var MongoDBStore = require('connect-mongodb-session')(session);


const passport = require('passport');
const dotenv = require('dotenv').config({ path: '../.env' } )

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;

mongoose.connect( process.env.DB_CONNECTION, {
    useNewUrlParser: true , 
    useUnifiedTopology: true }
    ).then( () => {
        console.log("Conectado ao banco de dados com sucesso")
    }).catch( (err) => {
        console.log("Houve um erro ao se conectar ao banco de dados: "+err)}
)


var store = new MongoDBStore({ uri: process.env.DB_CONNECTION, collection: 'mySessions' });

store.on('error', function(error) { console.log(error); } );
  

app.use(session({
    secret: 'This is a secret',
    cookie: {
      maxAge: 1000 * 60 * 60 * 2 //2 hour
    },
    store: store,
    resave: false,
    saveUninitialized: false
  }));
  

const control_router = require('./controllers');
const auth_router = require('./auth.js');

app.use(passport.initialize());
app.use(passport.session());



app.use('/api/controllers', control_router);
app.use('/api/auth', auth_router )

module.exports = app;