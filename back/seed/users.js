require('../configDB/index')
const Users = require("../DBmodels/users")

const Messi ={
  nombre:'Leonel',
  apellido:'Messi',
  domicilio:'Barcelona, Spain',
  email:'LeonelMessi@gmail.com',
  dni:19742891,
  password: "LuiSuarez"
}

const Suarez={
  nombre:'Luis',
  apellido:'Suarez',
  domicilio:'Madrid, Spain',
  email:'LuiSuarez@gmail.com',
  dni:952342342,
  password: "LuiSuarez"
}

const Neymar ={
  nombre:'Neymar',
  apellido:'Jr',
  domicilio:'Paris, Francia',
  email:'NeymarJr@gmail.com',
  dni:952342342,
  password: "NeymarJr"
}

const Iniesta ={
  nombre:'Andress',
  apellido:'Iniesta',
  domicilio:'china',
  email:'AndressIniesta@gmail.com',
  dni:952342342,
  password: "AndressIniesta"
}

let Xavi ={
  nombre:'Xavi',
  apellido:'Hernandez',
  domicilio:'Quatar',
  email:'XaviHernandez@gmail.com',
  dni:952342342,
  password: 'XaviHernandez'
}


Users.insertMany([Messi,Iniesta,Xavi,Neymar,Suarez]).then((usuarios) => {
    usuarios.forEach((user) => {
      console.log("usuario:",user.nombre)
      console.log(user);
    });
  
    console.log("Ready to go!");
  
    process.exit();
  });