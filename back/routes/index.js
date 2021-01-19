const express = require("express");
const router = express.Router();


router.get("/login=",(req,res,next)=>{
    res.sendStatus(200)
    // .then((fav)=>{
    //    return res.send(fav)
    // })
    // .catch((e)=>next(e))
})

router.get("/register",(req,res,next)=>{
    res.sendStatus(200)
    // .then((fav)=>{
    //    return res.send(fav)
    // })
    // .catch((e)=>next(e))
})


module.exports=router