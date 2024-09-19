const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
        }
    ],
    totalAmount: { type: Number, required: true },
    paymentId: { type: String, required: true },
    orderId: { type: String, required: true },
    address: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: { getters: true }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
