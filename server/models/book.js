const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "name is required"],
    min: 2,
    max: 255,
  },
  genre: {
    type: String,
    trim: true,
    required: [true, "genre is required"],
    min: 2,
    max: 255,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: [true, "authorId is required"],
  },
});

module.exports = mongoose.model("Book", bookSchema);
