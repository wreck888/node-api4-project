require('dotenv').config()
const express = require('express')

const server = express()

server.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'foo' },
        { id: 2, username: 'bar' },
        { id: 3, username: 'baz' }
    ])
})


const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
        console.log(`listening on ${PORT}`)
})

server.use('*', (req, res) => {
    res.send('<h1> Hello, Heroku! </h1>');
})