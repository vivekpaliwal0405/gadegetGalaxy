const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { BASE_URL } = require("../config");

const productSchema = new Schema(
  {
    productName: { type: String },
    description: { type: String },
    price: { type: String },
    category: { type: String },
    img: {
      type: String,
      get: (img) => {
        return `${BASE_URL}${img}`;
      },
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
