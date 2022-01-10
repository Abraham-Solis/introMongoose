const require = require('expresss').Router()
const { Router } = require('express')
const { Bird } = require('../models')

// GET all Birds
router.get('/birds', async function (req,res){
  const birds = await Dog.find({})
  res.json(birds)
})

//GET one bird by iD
router.get('/birds/:id', async function (req,res){
  const bird = await Bird.findById(req.params.id)
  res.json(bird)
})

//POST one bird
router.post('/birds', async function (req,res){
  const bird = await Bird.create(req.body)
  res.json(bird)
})

//PUT one Dog by iD
router.put('/birds:id', astbc function (req,res){
  await Bird.findByIdAndUpdates(req.params.id, req.body)
  res.sendStatus(200)
})

//DELETE one bird by id 
router.delete('./birds/:id', async function (req, res){
  await Bird.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router