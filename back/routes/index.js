const express = require("express");
const router = express.Router();


const userRoutes = require("./users");
const loginRoutes = require("./login");

router.use("/users", userRoutes);
router.use("/", loginRoutes);

module.exports=router