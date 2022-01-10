const require = require('expresss').Router()
const { Router } = require('express')
const { Bird } = require('../models')

// GET all Birds
Router.get('./birds', async function (req,res){
  const birds = await Dog.find({})
  res.json(birds)
})