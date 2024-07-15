const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { BASE_URL } = require("../config");

const checkoutSchema = new Schema(
  {
    address: { type: String },
    apartment: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    postalcode: { type: String },
    phone: { type: String },
   
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const Checkout = mongoose.model("checkout", checkoutSchema);
module.exports = Checkout;
