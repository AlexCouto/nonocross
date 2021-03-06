const express = require('express')
const Nonogramas = require('./models/nonograms');
const user = require('./models/user');

const router = express.Router();

router.get('/get_nonograms' , async (req,res) =>{
    if(req.isAuthenticated()){
        console.log("autenticado");
    }else{console.log("nao autenticado");}
    try{    
        Nonogramas.find({} , (err, all_nonos) => {
            if(err){
                console.log(err)
                return res.send({error : "Falha ao buscar nonogramas"})
            }
            return res.send(all_nonos)
        })

    }catch (err){
        console.log(err)
        return res.send({ error : "Falha ao buscar nonogramas"})
    }
})

router.post('/create_nonogram' , async (req,res) =>{
    try{    
        const nonograma = await Nonogramas.create(req.body)
        return res.send({ nonograma })
    }catch (err){
        return res.send({ error : err })
    }
})

module.exports = router;