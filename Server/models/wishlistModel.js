const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Signup', required: true },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
        
      }
    ]
  },
  {
    timestamps: true,
  }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
module.exports = Wishlist;
