const express = require("express");
const router = express.Router();
const passport=require('passport')
// require('../configDB/index')


router.post("/register",passport.authenticate('local-signup'),(req,res,next)=>{
    console.log('se registro el usuario',req.user)
    res.send(req.user)
})


router.post("/login",passport.authenticate('local-signin'),(req,res,next)=>{
    console.log('se logeo el usuario',req.user)
    res.send(req.user)
})


router.post("/logout",(req,res,next)=>{
    console.log("se desloguea el usuario",req.user)
    req.logout();
    res.sendStatus(200)
})


// router.get("/me",(req,res,next)=>{
//     if(req.user) return res.send(req.user)
//     console.log("no hay usuario")
//     res.sendStatus(401)
//   })

module.exports=router