const router = require('express').Router()
const { Cat, Owner } = require('../models')

// GET all Cats
router.get('/cats', async function (req, res) {
  const cats = await Cat.find({}).populate('owner')
  res.json(cats)
})

//GET one cats by iD
router.get('/cats/:id', async function (req, res) {
  const cat = await Cat.findById(req.params.id).populate('owner')
  res.json(cat)
})

//POST one cat
router.post('/cats', async function (req, res) {
  const cat = await Cat.create(req.body)
  await Owner.findByIdAndUpdate(req.body.user, { $push: { cats: cat._id } })
  res.json(cat)
})

//PUT one cat by iD
router.put('/cats:id', async function (req, res) {
  await Cat.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

//DELETE one bird by id 
router.delete('./cats/:id', async function (req, res) {
  await Cat.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router