const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "name is required"],
    min: 2,
    max: 255,
  },
  age: {
    type: Number,
    required: [true, "age is required"],
    min: 1,
    max: 150,
  },
});

module.exports = mongoose.model("Author", authorSchema);
