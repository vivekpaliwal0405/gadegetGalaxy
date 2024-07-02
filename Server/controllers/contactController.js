const fs = require('fs');
const path = require('path');
const Contact = require("../models/contactModel");

const contactController = {
    async contactindex(req, res, next) {
        try {
            const c = await Contact.find();
            res.status(200).json(c);
        } catch (error) {
            res.status(500).json({ error: "Server error", serverError: error });
        }
    },

 
    async contactstore(req, res, next) {
        try {
            const { firstName, lastName, contact,email, mobile,message } = req.body;
            const newContact = await Contact.create({
                firstName,
                 lastName, 
                 contact, 
                 email,
                 mobile,
                 message
            });
            res.status(201).json(newContact);
        } catch (error) {
            res.status(500).json({ error: "Error while creating contactus", serverError: error });
        }
    },

    async contactdelete(req, res, next) {
        try {
            const { id } = req.params;
            const deletedContact = await Contact.findByIdAndDelete(id);
            if (!deletedContact) {
                return res.status(404).json({ error: "contact not found" });
            }
            res.status(200).json(deletedContact);
        } catch (error) {
            res.status(500).json({ error: "Error while deleting contact", serverError: error });
        }
    },
};

module.exports = contactController;
