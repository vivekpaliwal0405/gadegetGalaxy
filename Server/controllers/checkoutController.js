const fs = require('fs');
const path = require('path');
const Checkout = require("../models/checkoutModel");

const checkoutController = {
    async checkoutindex(req, res, next) {
        try {
            const c = await Checkout.find();
            res.status(200).json(c);
        } catch (error) {
            res.status(500).json({ error: "Server error", serverError: error });
        }
    },

 
    async checkoutstore(req, res, next) {
        try {
            const { address, apartment,city,country, state,postalcode,phone } = req.body;
            const newCheckout = await Checkout.create({
                address, apartment,city,country, state,postalcode,phone
            });
            res.status(201).json(newCheckout);
        } catch (error) {
            res.status(500).json({ error: "Error while creating Checkout", serverError: error });
        }
    },

    async checkoutdelete(req, res, next) {
        try {
            const { id } = req.params;
            const deletedCheckout = await Checkout.findByIdAndDelete(id);
            if (!deletedCheckout) {
                return res.status(404).json({ error: "Checkout not found" });
            }
            res.status(200).json(deletedCheckout);
        } catch (error) {
            res.status(500).json({ error: "Error while deleting Checkout", serverError: error });
        }
    },
};

module.exports = checkoutController;
