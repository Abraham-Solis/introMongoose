const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./db')
  .then(() => app.listen(3000))
  .catch(err => console.log(err))



//Bird Schema


// const BirdSchema = new Schema({
//   name: String,
//   age: Number,
//   breed: String,

// })

// const Bird = model('bird', BirdSchema)

// Bird.create({
//   name: 'Chirpy',
//   age: 3,
//   breed: 'Humming Bird',
// })

//   .then(bird => console.log(bird))
//   .catch(err => console.log(err))


//Cat Scheema


// const CatSchema = new Schema({
//   name: String,
//   age: Number,
//   breed: String,

// })


// const Cat = model('cat', CatSchema)

// Cat.create({
//   name: 'Chowder',
//   age: 5,
//   breed: 'Munchikin',
// },
//   {
//     name: 'Tarzan',
//     age: 2,
//     breed: 'Orange Tabi'
//   })

//   .then(cat => console.log(cat))
//   .catch(err => console.log(err))