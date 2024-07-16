const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require("../models/user_model");
const Plan = require("../models/company_plan_model");
//const Admin = require("../models/admin_auth_model");
const bcrypt = require('bcrypt');
dotenv.config();

const secretKey = process.env.SECRET_KEY;
const { Validator } = require('node-input-validator');

const addCompany = async (req,res) => {
    const data = req.body;

    // Validation
    const validator = new Validator(data,{
        username: 'required|minLength:3|maxLength:20',
        plan: "required|in:A,B",
        licenses: "required",
        years: "required",
        expiryDate: "required|date"
    });
    const matched = await validator.check(validator);
    if(!matched){
        return res.status(400).send(validator.errors);
    }

    try{
        const exists = await Plan.findOne({
            where: {
                username: data.username,
            }
        });
        if(exists){
            return res.status(409).json({message: "Plan already exists"});
        }

        const newCompany = await Plan.create(data);

        res.status(201).json({message: "Account created", user: newCompany});
    } catch(err){
        res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = {
    addCompany
}