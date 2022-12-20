const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", schema);
