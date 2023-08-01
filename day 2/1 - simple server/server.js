const { response } = require('express')
const express = require('express')

const server = express()

server.get('/', (request, response) => {
    console.log('New user come');
    response.send('Welcome to my website');
})

server.get('/about', (request, response) => {
    response.send('This is about pages')
})

server.listen(3000, () => {
    console.log('Server is running')
})