const express = require('express');

const carsRouter = require('./cars-router')

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
    res.send('<h2>“The code is more what you’d call ‘guidelines’ than actual rules.” – Hector Barbossa</h2>')
})

module.exports = server;