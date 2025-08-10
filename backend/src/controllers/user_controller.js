const funcitonsModel = require('../models/user_model')

function userById(id){
    return 'id do user: ' + id
}

function teste2(){
    return 'teste'
}

module.exports = {
    userById,
    teste2
}