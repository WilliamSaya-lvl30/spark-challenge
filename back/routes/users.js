const express = require("express");
const router = express.Router();
const Users=require('../DBmodels/users')
require('../configDB/index')

router.get("/", async (req,res,next)=>{
    const users= await Users.find() 
    console.log("se trae todos los usuarios")
    res.send(users)
})

router.put("/:id", async (req,res,next)=>{
    const userUpdate= await Users.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(userUpdate)
})

router.delete("/:id", async (req,res,next)=>{
 
    const userDelete= await Users.deleteOne({ _id: req.params.id }) 
    console.log("se borro el usuario", userDelete)
    res.sendStatus(200)
})


module.exports=router