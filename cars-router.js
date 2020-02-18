const express = require('express')

const knex = require('knex')

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/cars.db3'
  },
  useNullAsDefault: true
})

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ error: 'Could not get cars' })
    })
})

router.post('/', (req, res) => {
    db('cars')
    .insert(req.body, 'id')
    .then(ids => {
        res.status(201).json(ids[0])
    })
    .catch(err => {
        res.status(500).json({ error: 'Could not insert car' })
    })
})

module.exports = router