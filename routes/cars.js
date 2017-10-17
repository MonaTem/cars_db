const express = require('express')
const router = express.Router()
module.exports = router

const queries = require('../db/queries')

router.get('/cars', (req,res) => {
  queries.cars.getAll()
  .then(data => {
    res.json(data)
  })
})

router.get('/cars/:id', (req, res) => {
  queries.cars.getOne(req.params.id)
  .then(data => {
    res.json(data)
  })
})

router.post('/cars', (req, res) => {
  queries.cars.create(req.body)
  .then(data => {
    res.json(data[0])
  })
})

router.put('/cars/:id', (req, res) => {
  let id = req.params.id
  let car = req.body
  queries.cars.update(id, car)
  .then(data => {
    res.json(data[0])
  })
})

router.delete('/cars/:id', (req, res) => {
  queries.cars.delete(req.params.id)
  .then(() => {
    res.json({
      deleted: true
    })
  })
})
