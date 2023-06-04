const express = require("express");
const {
    registerController,
    loginController,
} = require("../controller/transController");

//roter object 
const router = express.Router();

//CREATE USER || POST 
router.post("/register",registerController);

//LOGIN || POST
router.post("/login",loginController);

module.exports = router;