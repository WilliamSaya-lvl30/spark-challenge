require('../configDB/index')
const Users = require("../DBmodels/users")
const bcrypt = require('bcrypt-nodejs');

const Messi ={
  nombre:'Leonel',
  apellido:'Messi',
  domicilio:'Barcelona, Spain',
  email:'LeonelMessi@gmail.com',
  dni:19742891,
  password: "LuiSuarez",
  fechaDeAlta: new Date(1990,11,17)
}

const Suarez={
  nombre:'Luis',
  apellido:'Suarez',
  domicilio:'Madrid, Spain',
  email:'LuiSuarez@gmail.com',
  dni:372983278,
  password: "LuiSuarez",
  fechaDeAlta: new Date(1994,12,7)
}

const Neymar ={
  nombre:'Neymar',
  apellido:'Jr',
  domicilio:'Paris, Francia',
  email:'NeymarJr@gmail.com',
  dni:49328402,
  password: "NeymarJr",
  fechaDeAlta: new Date(1995,1,17)
}

const Iniesta ={
  nombre:'Andress',
  apellido:'Iniesta',
  domicilio:'China',
  email:'AndressIniesta@gmail.com',
  dni:76463222,
  password: "AndressIniesta",
  fechaDeAlta: new Date(1985,1,27)
}

const Xavi ={
  nombre:'Xavi',
  apellido:'Hernandez',
  domicilio:'Quatar',
  email:'XaviHernandez@gmail.com',
  dni:3123533,
  password: 'XaviHernandez'
}

const Spark ={
  nombre:'Spark',
  apellido:'Solutions',
  domicilio:'Buenos Aires',
  email:'SparkSolutions@gmail.com',
  dni:952342342,
  password: 'challenge'
}

let userSeed=[Messi,Iniesta,Xavi,Neymar,Suarez,Spark]

userSeed = userSeed.map(user=>{
  if(user.nombre === 'Spark') {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(16))
  }
  return user
})


Users.insertMany(userSeed).then((usuarios) => {
    usuarios.forEach((user) => {
      console.log("usuario:",user.nombre)
      console.log(user);
    });
  
    console.log("Ready to go!");
  
    process.exit();
  });