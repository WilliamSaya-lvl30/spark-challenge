require('../configDB/index')
const Users = require("../DBmodels/users")
const bcrypt = require('bcrypt-nodejs');

const Messi ={
  nombre:'Leonel Messi',
  domicilio:'Barcelona, Spain',
  email:'LeonelMessi@gmail.com',
  dni:19742891,
  password: "LuiSuarez",
  fechaDeAlta: new Date(1990,11,17),
  registroSemanal:[1,2,3,4,3,0,2]
}

const Suarez={
  nombre:'Luis Suarez',
  domicilio:'Madrid, Spain',
  email:'LuiSuarez@gmail.com',
  dni:372983278,
  password: "LuiSuarez",
  fechaDeAlta: new Date(1994,12,7),
  registroSemanal:[2,0,0,1,3,0,2]
}

const Neymar ={
  nombre:'Neymar Jr',
  domicilio:'Paris, Francia',
  email:'NeymarJr@gmail.com',
  dni:49328402,
  password: "NeymarJr",
  fechaDeAlta: new Date(1995,1,17),
  registroSemanal:[1,1,1,2,3,0,2]
}

const Iniesta ={
  nombre:'Andress Iniesta',
  domicilio:'China',
  email:'AndressIniesta@gmail.com',
  dni:76463222,
  password: "AndressIniesta",
  fechaDeAlta: new Date(1985,1,27),
  registroSemanal:[1,2,3,4,3,0,2]

}

const Xavi ={
  nombre:'Xavi Hernandez',
  domicilio:'Quatar',
  email:'XaviHernandez@gmail.com',
  dni:3123533,
  password: 'XaviHernandez',
  fechaDeAlta: new Date(1980,2,2),
  registroSemanal:[1,2,3,4,3,0,2]
}

const Spark ={
  nombre:'Spark Solutions',
  domicilio:'Buenos Aires',
  email:'SparkSolutions@gmail.com',
  dni:952342342,
  password: 'challenge'
}

let userSeed=[Messi,Iniesta,Xavi,Neymar,Suarez,Spark]

userSeed = userSeed.map(user=>{
  if(user.nombre === 'Spark Solutions') {
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