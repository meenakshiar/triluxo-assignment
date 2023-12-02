const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: String, required: true },
        quantity: { type: String, required: true },
    },
    { versionKey: false }
);

const bookModel = mongoose.model("book", bookSchema);

module.exports = { bookModel };
