const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    income: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    car: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    phone_price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const usersModel = mongoose.model("Sample Data", userSchema);
module.exports = usersModel;
