const express = require("express");
const {
    registerController,
    loginController,
} = require("../controller/manuController");

//roter object 
const router = express.Router();

//CREATE USER || POST 
router.post("/register",registerController);

//LOGIN || POST
router.post("/login",loginController);

module.exports = router;