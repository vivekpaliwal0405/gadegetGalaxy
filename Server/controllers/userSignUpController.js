// const fs = require('fs');
// const path = require('path');
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const JWT_SECRET = "refreshToken";


// const Signup = require("../models/userSignUpModel");

// const signUpController = {
//     async signupindex(req, res, next) {
//         try {
//             const sign = await Signup.find();
//             res.status(200).json(sign);
//         } catch (error) {
//             res.status(500).json({ error: "Server error", serverError: error });
//         }
//     },

//     async signupstore(req, res, next) {
//         try {
//             const { username , email, password } = req.body;
//             console.log(req.body);

//             const newSignUp = await Signup.create({
//                 username ,
//                  email, 
//                  password 
//             });
//             res.status(201).json(newSignUp);
//         } catch (error) {
//             res.status(500).json({ error: "Error while creating user", serverError: error });
//         }
//     },

//     async signupdelete(req, res, next) {
//         try {
//             const { id } = req.params;
//             const deletedUser = await Signup.findByIdAndDelete(id);
//             if (!deletedUser) {
//                 return res.status(404).json({ error: "user not found" });
//             }
//             res.status(200).json(deletedUser);
//         } catch (error) {
//             res.status(500).json({ error: "Error while deleting user", serverError: error });
//         }
//     },
// };

// module.exports = signUpController;




const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "refreshToken";
const Signup = require("../models/userSignUpModel");

const signUpController = {
    async signupindex(req, res, next) {
        try {
            const sign = await Signup.find();
            res.status(200).json(sign);
        } catch (error) {
            res.status(500).json({ error: "Server error", serverError: error });
        }
    },

    async signupstore(req, res, next) {
        try {
            const { username, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newSignUp = await Signup.create({
                username,
                email,
                password: hashedPassword,
            });
            res.status(201).json(newSignUp);
        } catch (error) {
            res.status(500).json({ error: "Error while creating user", serverError: error });
        }
    },

    async signupdelete(req, res, next) {
        try {
            const { id } = req.params;
            const deletedUser = await Signup.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(deletedUser);
        } catch (error) {
            res.status(500).json({ error: "Error while deleting user", serverError: error });
        }
    },

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await Signup.findOne({ email });
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ error: "Invalid credentials" });
            }
            const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
            res.status(200).json({ token, user });
        } catch (error) {
            res.status(500).json({ error: "Error while logging in", serverError: error });
        }
    },
};

module.exports = signUpController;
