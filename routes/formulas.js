const express = require('express')
const router = express.Router()
module.exports = router

const queries = require('../db/queries')

/*
router.get('formulas/new/:fid/:ename/:pname',  (req, res) => {
  var fid = parseInt(req.params.fid);
  console.log("Here we are " + fid + req.params.ename + req.params.pname)
  queries.formulas.create(req.params.fid)
  .then(data => {
    res.json(data[0])
  })
})
*/

router.get('/formulas', (req,res) => {
  queries.formulas.getAll()
  .then(data => {
    res.json(data)
  })
})

router.get('/formulas/:fid', (req, res) => {
  queries.formulas.getOne(req.params.fid)
  .then(data => {
    res.json(data)
  })
})

router.post('/formulas', (req, res) => {
  queries.formulas.create(req.body)
  .then(data => {
    res.json(data[0])
  })
})

router.put('/formulas/:fid', (req, res) => {
  let fid = req.params.fid
  let english_name = req.params.english_name
  let formulas = req.body
  queries.formulas.update(fid, english_name)
  .then(data => {
    res.json(data[0])
  })
})

router.delete('/formulas/:fid', (req, res) => {
  queries.formulas.delete(req.params.fid)
  .then(() => {
    res.json({
      deleted: true
    })
  })
})
