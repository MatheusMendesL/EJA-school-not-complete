const express = require('express')
const functionsControllers = require('../controllers/user_controller')
const router = express.Router()

// rotas que pegam com base no que o controller manda

router.get('/profile/:id', (req, res) => {
    res.send(functionsControllers.userById(req.params.id))
})

router.get('/teste', (req, res) => {
    res.send(functionsControllers.teste2())
})

module.exports = router