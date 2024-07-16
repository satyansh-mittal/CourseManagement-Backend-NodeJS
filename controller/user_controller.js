//const db = require("../utils");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require("../models/user_model");
//const Admin = require("../models/admin_auth_model");
const bcrypt = require('bcrypt');
dotenv.config();

const secretKey = process.env.SECRET_KEY;
const { Validator } = require('node-input-validator');

// email, username,password, phone, role, plan, licenses

// Only Admin and Manager is authorised
const Registration = async (req, res) => {
    const data = req.body;

    // Validation
    const validator = new Validator(data, {
        email: 'required|email',
        username: 'required|minLength:3|maxLength:20',
        password: 'required|minLength:6|maxLength:20',
        plan: "required|in:A,B",
        phone: "required|minLength:10",
        role: "required|in:Student,Manager",
        licenses: "required"
    });
    const matched = await validator.check();
    if (!matched) {
        return res.status(400).send(validator.errors);
    }

    try {
        const user = await User.findOne({
            where: {
                email: data.email
            }
        });
        if (user) {
            return res.status(401).json({ message: "User already exists" });
        }

        // password encryption
        const hashedPassword = await bcrypt.hash(data.password, 10);
        
        // create student
        const newStudent = await User.create({
            ...data,
            password: hashedPassword
        });
    
        
        
        // decrease license number
        const admin = await User.findByPk(req.user.userId);
        if (admin.licenses < 1) {
            return res.status(412).json({ message: "No licenses available or left" });
        }
        admin.licenses -= 1;
        admin.save();
       
        
        res.status(201).json({ message: "Account created", user: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    // Validation
    const validator = new Validator({
        email: 'required|email',
        password: 'required'
    });
    const matched = await validator.check();
    if (!matched) {
        return res.status(400).send(validator.errors);
    }

    try {
        const findUser = await User.findOne({       // find
            where: {
                email: email,

            }
        });
        if (!findUser) {
            return res.status(404).json({ message: 'Invalid email or password' });
        }

        const passwordValidity = await bcrypt.compare(password, findUser.password);     // password validity
        if (!passwordValidity) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // token
        const token = jwt.sign({ userId: findUser.id, role: findUser.role }, secretKey, { expiresIn: '1h' })

        if (findUser.role == 'Admin') {
            res.status(200).json({ message: 'Login successful', Priviledge: 'You are Admin, You can access admin priviledges', token: token });
        } else if (findUser.role == 'Manager') {
            res.status(200).json({ message: 'Login successful', Priviledge: 'You are Admin, You can access Manager priviledges', token: token });
        } else {
            res.status(200).json({ message: 'Login successful', token: token });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const dashboard = async (req, res) => {
    if (req.user.role == 'Admin') {
        res.status(200).json({ message: "Admin Dashboard" });
    } else if (req.user.role == 'Manager') {
        res.status(200).json({ message: "Manager Dashboard" });
    } else {
        res.status(200).json({ message: "Student Dashboard" });
    }
}

module.exports = {
    Registration,
    login,
    dashboard
}