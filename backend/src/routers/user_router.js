const express = require('express')
const functionsControllers = require('../controllers/user_controller')
const router = express.Router()

// rotas que pegam com base no que o controller manda

router.get('/get_user_data/:id', functionsControllers.get_user)
router.get('/signup/:name/:email/:tel/:pass', functionsControllers.signup)
router.get('/login/:email/:password', functionsControllers.login)
router.get('/xp', functionsControllers.get_level_xp)
router.get('/update_level', functionsControllers.update_xp_level)

module.exports = router