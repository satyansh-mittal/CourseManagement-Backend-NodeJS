const express = require('express');
const router = express.Router();
//const adminController = require("../controller/admin_auth_controller");
const userController = require("../controller/user_controller");
//const managerController = require("../controller/manager_controller");
const verifyToken  = require("../middleware/auth_middleware");
const authorise = require("../middleware/role_auth_middleware");

router.post("/registerStudent", verifyToken, authorise, userController.Registration);

module.exports=router;