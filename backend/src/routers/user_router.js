const express = require('express')
const functionsControllers = require('../controllers/user_controller')
const router = express.Router()

// rotas que pegam com base no que o controller manda

router.get('/get_user_data/:id', functionsControllers.get_user)
router.post('/signup', functionsControllers.signup)
router.post('/login', functionsControllers.login)
router.get('/xp/:id', functionsControllers.get_level_xp)
router.put('/update_level/:id', functionsControllers.update_xp_level)


module.exports = router