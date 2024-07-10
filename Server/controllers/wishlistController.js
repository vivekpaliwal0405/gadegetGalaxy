const fs = require('fs');
const path = require('path');
const Wishlist = require("../models/wishlistModel");

const wishlistController = {
    async addItem(req, res, next) {
        try {
            const { userId, productId, quantity } = req.body;
            console.log("Add item request body:", req.body); // Add log for debugging
            let wishlist = await Wishlist.findOne({ userId });
            if (wishlist) {
                const itemIndex = wishlist.items.findIndex(item => item.productId == productId);
                if (itemIndex > -1) {
                    wishlist.items[itemIndex].quantity += quantity;
                } else {
                    wishlist.items.push({ productId, quantity });
                }
            } else {
                wishlist = new Wishlist({ userId, items: [{ productId, quantity }] });
            }
            await wishlist.save();
            res.status(201).json(wishlist);
        } catch (error) {
            console.error("Error while adding item to wishlist:", error); // Add log for debugging
            res.status(500).json({ error: "Error while adding item to wishlist", serverError: error });
        }
    },


    async getWishlist(req, res, next) {
        try {
            const { userId } = req.params;
            const wishlist = await Wishlist.findOne({  userId }).populate('items.productId');
            if (!wishlist) {
                return res.status(404).json({ error: "wishlist not found" });
            }
            res.status(200).json(wishlist);
        } catch (error) {
            console.error("Error while fetching wishlist:", error);
            res.status(500).json({ error: "An error occurred while fetching the wishlist" });
        }
    },

    async removeItem(req, res, next) {
        try {
            const { userId, productId } = req.params;
            const wishlist = await Wishlist.findOne({ userId });
            if (wishlist) {
                wishlist.items = wishlist.items.filter(item => item.productId != productId);
                await wishlist.save();
                res.status(200).json(wishlist);
            } else {
                res.status(404).json({ error: "wishlist not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error while removing item from wishlist", serverError: error });
        }
    },

};

module.exports = wishlistController;
