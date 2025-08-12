require('dotenv').config()

module.exports = {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE
}