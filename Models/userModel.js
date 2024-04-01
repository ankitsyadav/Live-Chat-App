const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLenth: 30 },
    email: {
      type: String,
      require: true,
      minLength: 3,
      maxLenth: 30,
      unique: true,
    },
    password: { type: String, required: true, minLength: 3, maxLenth: 1024 },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
