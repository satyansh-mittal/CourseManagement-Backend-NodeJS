const db = require("../utils");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require("../models/user_model");
const bcrypt = require('bcrypt');
dotenv.config();

const Admin = require("../models/admin_auth_model");

const { Validator } = require('node-input-validator');

const secretKey = process.env.SECRET_KEY;


const signUp = async (req, res) => {
    const data = req.body;

    // Validation
    const validator = new Validator(data, {
        email: 'required|email',
        username: 'required|minLength:3|maxLength:20',
        password: 'required|minLength:6|maxLength:20'
    });
    const matched = await validator.check();
    if (!matched) {
        return res.status(400).send(validator.errors);
    }

    try {
        // check existing user
        const existingUser = await Admin.findOne({
            where: {
                email: data.email
            }
        });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already exists' });
        }
        // password encryption
        const saltRounds = 10; // Adjust saltRounds as needed
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        const newAdmin = await Admin.create({
            ...data,
            password: hashedPassword
        });

        res.status(201).json({ message: 'Signup successful', user: newAdmin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;

    // Validation
    const validator = new Validator({ email, password }, {
        email: 'required|email',
        password: 'required'
    });
    const matched = await validator.check();
    if (!matched) {
        return res.status(400).send(validator.errors);
    }

    try {
        const user = await Admin.findOne({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // token
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token: token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const companyCreation = async (req, res) => {
    const data = req.body;

    // Validation
    const validator = new Validator(data, {
        email: 'required|email',
        password: 'required',
        role: 'required|in:Admin',
        plan: 'required|in:A,B',
        phone: 'required',
    });
    const matched = await validator.check();
    if (!matched) {
        return res.status(400).send(validator.errors);
    }

    try {
        const company = await User.findOne({ where: { email: data.email } }); // Await the result
        if (company) {
            return res.status(409).json({ message: 'An account associated with this e-mail already exists' });
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newCompany = await User.create({
            ...data,
            password: hashedPassword
        });
        res.status(201).json({ message: 'Company created successfully', company: newCompany });
    } catch (e) {
        console.error(e); // Log the error
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    signUp,
    login,
    companyCreation
}