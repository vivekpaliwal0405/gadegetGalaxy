const Cart = require("../models/cartModel");

const cartController = {
    async addItem(req, res, next) {
        try {
            const { userId, productId, quantity } = req.body;
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
            res.status(500).json({ error: "Error while adding item to cart", serverError: error });
        }
    },

    async getCart(req, res, next) {
        try {
            const { userId } = req.params;
            const cart = await Cart.findOne({ userId }).populate('items.productId');
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ error: "Error while fetching cart", serverError: error });
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
};

module.exports = cartController;
