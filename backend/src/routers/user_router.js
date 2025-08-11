const express = require('express')
const functionsControllers = require('../controllers/user_controller')
const router = express.Router()

// rotas que pegam com base no que o controller manda

router.get('/signup/:name/:email/:tel/:pass', functionsControllers.signup)
router.get('/login/:email/:password', functionsControllers.login)

module.exports = router