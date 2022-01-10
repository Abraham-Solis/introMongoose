const require = require('expresss').Router()
const { Router } = require('express')
const { Cat } = require('../models')

// GET all Cats
router.get('/cats', async function (req, res) {
  const cats = await Cat.find({})
  res.json(cats)
})

//GET one cats by iD
router.get('/cats/:id', async function (req, res) {
  const cat = await Cat.findById(req.params.id)
  res.json(cat)
})

//POST one cat
router.post('/cat', async function (req, res) {
  const cat = await Cat.create(req.body)
  res.json(cat)
})

//PUT one cat by iD
router.put('/cats:id', async function (req, res) {
  await Cat.findByIdAndUpdates(req.params.id, req.body)
  res.sendStatus(200)
})

//DELETE one bird by id 
router.delete('./cats/:id', async function (req, res) {
  await Cat.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router