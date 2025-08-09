require('dotenv').config()

module.exports = {
    host: process.env.HOST,
    user: process.env.USER,
    pass: process.env.PASS,
    database: process.env.DATABASE
}