const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
require('../configDB/index')
const Users = require('../DBmodels/users');

//actualiza el registro de logueos diarios

const RegistroDeLogeos = (user)=>{
  const date= new Date
  const dia=date.getDay()
  const fecha=date.getDate()
  const mes=date.getMonth()

  console.log("primero",user)

  const registroAct={
    ultimoLog:new Date(user.ultimoLog),
    registroSemanal:[...user.registroSemanal]
  }
  console.log("registroAct",registroAct,registroAct.ultimoLog)
  if(registroAct.ultimoLog.getDate() === fecha && registroAct.ultimoLog.getMonth()=== mes){
    console.log("mismo dia")
    registroAct.registroSemanal[dia]+=1
  }else{
    console.log("diferente dia")
    registroAct.registroSemanal[dia]=1
    registroAct.ultimoLog= new Date
  }
  return registroAct
}

//configuracion de passport

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await Users.findById(id);
  done(null, user);
});

//metodo para registros

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await Users.findOne({'email': email}).exec()
  console.log(user)
  if(user) {
    return done(null, false, { message: 'The Email is already Taken.' });
  } else {
    const newUser = new Users();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
  console.log(newUser)
    await newUser.save();
    done(null, newUser);
  }
}));

//metodo para loguear

passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await Users.findOne({email: email});
  if(!user) {
    return done(null, false, { message: 'Incorrect username.' });
  }
  if(!user.comparePassword(password)) {
    return done(null, false, { message: 'Incorrect password.' });
  }
  const registroUpdate=RegistroDeLogeos(user)
  const userUpdate= await Users.findByIdAndUpdate(user._id,registroUpdate,{new:true})  
  return done(null, userUpdate);
}));