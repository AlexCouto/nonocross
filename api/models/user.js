const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// model dos usuários no banco de dados
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password:{ 
        type: String,
        required: false,    // required false por que o passportlocalmongoose que lida com a senha
    }
})

UserSchema.plugin(passportLocalMongoose,{ usernameField: 'email' });

module.exports = mongoose.model('user' , UserSchema);