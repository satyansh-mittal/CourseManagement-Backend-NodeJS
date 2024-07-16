const express = require('express');
const router = express.Router();
const planController = require("../controller/company_plan_controller");
const verifyToken  = require("../middleware/auth_middleware")

router.post("/addCompany",verifyToken,planController.addCompany);

module.exports = router;
