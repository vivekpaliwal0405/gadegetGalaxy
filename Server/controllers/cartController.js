const fs = require('fs');
const path = require('path');
const Cart = require("../models/cartModel");

const cartController = {
    async addItem(req, res, next) {
        try {
            const { userId, productId, quantity } = req.body;
            console.log("Add item request body:", req.body); // Add log for debugging
            let cart = await Cart.findOne({ userId });
            if (cart) {
                const itemIndex = cart.items.findIndex(item => item.productId == productId);
                if (itemIndex > -1) {
                    cart.items[itemIndex].quantity += quantity;
                } else {
                    cart.items.push({ productId, quantity });
                }
            } else {
                cart = new Cart({ userId, items: [{ productId, quantity }] });
            }
            await cart.save();
            res.status(201).json(cart);
        } catch (error) {
            console.error("Error while adding item to cart:", error); // Add log for debugging
            res.status(500).json({ error: "Error while adding item to cart", serverError: error });
        }
    },


    async getCart(req, res, next) {
        try {
            const { userId } = req.params;
            const cart = await Cart.findOne({  userId }).populate('items.productId');
            if (!cart) {
                return res.status(404).json({ error: "Cart not found" });
            }
            res.status(200).json(cart);
        } catch (error) {
            console.error("Error while fetching cart:", error);
            res.status(500).json({ error: "An error occurred while fetching the cart" });
        }
    },

    async removeItem(req, res, next) {
        try {
            const { userId, productId } = req.params;
            const cart = await Cart.findOne({ userId });
            if (cart) {
                cart.items = cart.items.filter(item => item.productId != productId);
                await cart.save();
                res.status(200).json(cart);
            } else {
                res.status(404).json({ error: "Cart not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error while removing item from cart", serverError: error });
        }
    },

    // async updateQuantity(req, res, next) {
    //     try {
    //         const { userId, productId, quantity } = req.body;
    //         const cart = await Cart.findOne({ userId });
    //         if (cart) {
    //             const itemIndex = cart.items.findIndex(item => item.productId == productId);
    //             if (itemIndex > -1) {
    //                 cart.items[itemIndex].quantity = quantity;
    //                 await cart.save();
    //                 res.status(200).json(cart);
    //             } else {
    //                 res.status(404).json({ error: "Item not found in cart" });
    //             }
    //         } else {
    //             res.status(404).json({ error: "Cart not found" });
    //         }
    //     } catch (error) {
    //         res.status(500).json({ error: "Error while updating item quantity", serverError: error });
    //     }
    // },
};

module.exports = cartController;