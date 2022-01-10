const {Shcema, model } = require('mongoose')

const User = new Schema({
  name:{
    type: String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  biird:[{
    type:Schema.Types.ObjectId,
    ref:'dog'
  }]
})