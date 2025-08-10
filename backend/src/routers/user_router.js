const express = require('express')
const functionsControllers = require('../controllers/user_controller')
const router = express.Router()

// rotas que pegam com base no que o controller manda

router.get('/add_user/:name', functionsControllers.add_user)

module.exports = router