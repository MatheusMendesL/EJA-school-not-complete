const express = require('express')
const app = express()
const userRouter = require('./src/routers/user_router')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Página inicial');
});

app.use('/user', userRouter)

module.exports = app
