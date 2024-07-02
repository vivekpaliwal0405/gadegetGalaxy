const fs = require('fs');
const path = require('path');
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
            const { username , email, password } = req.body;
            console.log(req.body);

            const newSignUp = await Signup.create({
                username ,
                 email, 
                 password 
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
                return res.status(404).json({ error: "user not found" });
            }
            res.status(200).json(deletedUser);
        } catch (error) {
            res.status(500).json({ error: "Error while deleting user", serverError: error });
        }
    },
};

module.exports = signUpController;
