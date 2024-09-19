const Order = require("../models/orderModel");

const orderController = {
    async storeOrder(req, res, next) {
        try {
            const { userId, products, totalAmount, paymentId, orderId, address } = req.body;
            const newOrder = await Order.create({
                userId,
                products,
                totalAmount,
                paymentId,
                orderId,
                address,
            });
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).json({ error: "Error while creating Order", serverError: error });
        }
    },

    async getOrderByUserId(req, res, next) {
        try {
            const { userId } = req.params;
            const orders = await Order.find({ userId }).populate('products.productId');
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error: "Server error", serverError: error });
        }
    },
};

module.exports = orderController;
