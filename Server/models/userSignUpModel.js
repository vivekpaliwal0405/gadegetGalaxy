const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { BASE_URL } = require("../config");

const signupSchema = new Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
    
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const Signup = mongoose.model("signup", signupSchema);
module.exports = Signup;
