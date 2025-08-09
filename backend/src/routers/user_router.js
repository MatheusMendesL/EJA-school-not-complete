const express = require('express')
const router = express.Router()

router.get('/profile', (req, res) => {
    res.send('Perfil de usuário')
})

module.exports = router