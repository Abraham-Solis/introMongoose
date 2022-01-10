require('mongoose').connect('mongodb://localhost:27017/animals_db')

const { Schema, model } = require('mongoose')


//Bird Schema


const BirdSchema = new Schema({
  name: String,
  age: Number,
  breed: String,

})

const Bird = model('bird', BirdSchema)

Bird.create({
  name: 'Chirpy',
  age: 3,
  breed: 'Humming Bird',
})

  .then(bird => console.log(bird))
  .catch(err => console.log(err))


//Cat Scheema


const CatSchema = new Schema({
  name: String,
  age: Number,
  breed: String,

})


const Cat = model('cat', CatSchema)

Cat.create({
  name: 'Chowder',
  age: 5,
  breed: 'Munchikin',
},
  {
    name: 'Tarzan',
    age: 2,
    breed: 'Orange Tabi'
  })

  .then(cat => console.log(cat))
  .catch(err => console.log(err))