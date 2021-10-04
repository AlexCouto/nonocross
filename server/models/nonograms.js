const mongoose = require('mongoose');

const NonogramSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pixel_color:{ 
        type: [[String]],
        required: true
    }
})

module.exports = mongoose.model('nonograma' , NonogramSchema);