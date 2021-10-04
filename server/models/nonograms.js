const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


// Valida se todas as linhas possuem o mesmo tamanho e se todos os elementos (estão no formato hexadecimal ou são iguais a "empty")
function valid_pixel_color(pixel_color){
    let n_rows = pixel_color.length
    let n_cols = pixel_color[0].length

    for( let i = 0 ; i < n_rows ; i++)
    {
        if( pixel_color[i].length != n_cols)
            return false;
        for( let j = 0 ; j < n_cols  ; j ++)
            if( !( /^#[0-9A-F]{6}$/i.test(pixel_color[i][j])) && (pixel_color[i][j] != "empty") )
                return false;
    }
    return true;
}

// model dos nonogramas no banco de dados
const NonogramSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    pixel_color:{ 
        type: [[String]],
        required: true,
        validate: {
            validator: valid_pixel_color,
            message: "Invalid color matrix"
        }
    }
})

NonogramSchema.plugin(uniqueValidator);

module.exports = mongoose.model('nonograma' , NonogramSchema);