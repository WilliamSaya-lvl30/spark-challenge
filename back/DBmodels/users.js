const mongoose =require("mongoose")
const bcrypt = require('bcrypt-nodejs');


const userSchema= new mongoose.Schema({
  nombre:{
    type:String,
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true
  },
  salt:{
    type:String
  },
  dni:{
    type: Number, 
  },
  fechaDeAlta: {
      type:Date,
      default: Date.now
  },
  domicilio:{
      type:String,
  },
  ultimoLog:{
    type:Date,
    default: Date.now
  },
  registroSemanal:{
    type:[Number],
    default:[0,0,0,0,0,0,0]
  }
})

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(16));
};

userSchema.methods.comparePassword= function (password) {
  return bcrypt.compareSync(password, this.password);
};

const Users= mongoose.model("User",userSchema)
module.exports = Users;