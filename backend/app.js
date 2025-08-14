require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./src/routers/user_router')
const matterRouter = require('./src/routers/matter_router')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.send('Página inicial');
});

app.use('/user', userRouter)
app.use('/matter', matterRouter)

module.exports = app
