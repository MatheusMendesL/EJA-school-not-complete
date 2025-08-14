require('dotenv').config();
const express = require('express')
const path = require('path');
const fs = require('fs');
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

app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/api/getHTML', (req, res) => {
    const page = req.query.p; // ex: 'login'
    if (!page) return res.status(400).send('Parâmetro p é obrigatório');

    const filePath = path.join(__dirname, '../frontend/', page + '.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(404).send('Página não encontrada');
        res.send(data);
    });
});

app.use('/user', userRouter)
app.use('/matter', matterRouter)

module.exports = app
