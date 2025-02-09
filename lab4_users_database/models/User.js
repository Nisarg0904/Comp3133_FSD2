const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, minlength: 4 },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "Invalid email format",
    },
  },
  address: {
    street: String,
    suite: String,
    city: {
      type: String,
      required: true,
      match: [
        /^[A-Za-z\s]+$/,
        "City name should contain only alphabets and spaces",
      ],
    },
    zipcode: {
      type: String,
      required: true,
      match: [/^\d{5}-\d{4}$/, "Zip code must follow the format 12345-1234"],
    },
  },
  phone: {
    type: String,
    required: true,
    match: [
      /^1-\d{3}-\d{3}-\d{4}$/,
      "Phone number must be in the format 1-XXX-XXX-XXXX",
    ],
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: (value) =>
        validator.isURL(value, { protocols: ["http", "https"] }),
      message: "Invalid website URL",
    },
  },
});

module.exports = mongoose.model("User", userSchema);
