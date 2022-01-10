const {Shcema, model, Schema } = require('mongoose')

const User = new Schema({
  name:{
    type: String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  birds:[{
    type:Schema.Types.ObjectId,
    ref:'bird'
  }],
  cats:[{
    type: Schema.Types.ObjectId,
    ref:'cat'
  }]
})

module.exports = model('user', User)