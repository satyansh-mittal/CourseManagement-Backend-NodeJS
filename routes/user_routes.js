const express = require('express');
const router = express.Router();
//const adminController = require("../controller/admin_auth_controller");
const userController = require("../controller/user_controller");
const verifyToken  = require("../middleware/auth_middleware")
const authorise = require("../middleware/role_auth_middleware")

router.get("/loginUser", userController.login);
router.post("/registerUser",verifyToken, authorise, userController.Registration);
router.get("/dashboard",verifyToken, userController.dashboard);
module.exports=router