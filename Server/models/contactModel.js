const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { BASE_URL } = require("../config");

const contactSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    mobile: { type: String },
    message: { type: String },
   
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const Contact = mongoose.model("contact", contactSchema);
module.exports = Contact;
