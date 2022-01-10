const router = require('express').Router()
const { Bird, Owner } = require('../models')

// GET all Birds
router.get('/birds', async function (req, res) {
  const birds = await Bird.find({}).populate('owner')
  res.json(birds)
})

//GET one bird by iD
router.get('/birds/:id', async function (req, res) {
  const bird = await Bird.findById(req.params.id).populate('owner')
  res.json(bird)
})

//POST one bird
router.post('/birds', async function (req, res) {
  const bird = await Bird.create(req.body)
  await Owner.findByIdAndUpdate(req.body.user, { $push: { birds: bird._id } })
  res.json(bird)
})

//PUT one Dog by iD
router.put('/birds/:id', async function (req, res) {
  await Bird.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

//DELETE one bird by id 
router.delete('/birds/:id', async function (req, res) {
  await Bird.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router