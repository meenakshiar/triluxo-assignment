const express = require("express");
const { bookModel } = require("../Model/book.model");
const bookRouter = express.Router();


// particular user data
bookRouter.get("/", async (req, res) => {
    try {
        const book = await bookModel.find()
        res.send(book);
    } catch (err) {
        res.send({
            msg: "Something went wrong! cannot get details.",
            error: err.message,
        });
    }
});

bookRouter.get("/:id", async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id);
        if (!book) {
            return res.status(404).send({ msg: "No Book found" })
        }
        res.send(book);
    } catch (err) {
        res.send({
            msg: "Something went wrong! cannot get details.",
            error: err.message,
        });
    }
});



// add
bookRouter.post("/add", async (req, res) => {
    try {
        const book = new bookModel(req.body);
        await book.save();
        res.send({ msg: "New book has been added successfully." });
    } catch (err) {
        res.send({
            msg: "Something went wrong!",
            error: err.message,
        });
    }
});



// update
bookRouter.patch("/update/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    try {
        await bookModel.findByIdAndUpdate({ _id: ID }, payload);
        res.send({ msg: `Book with ID: ${ID} has been updated successfully` });
    } catch (err) {
        res.send({ msg: "Something went wrong! cannot update.", error: err.message });
    }
});

// delete
bookRouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;
    try {
        await bookModel.findByIdAndDelete({ _id: ID });
        res.send({ msg: `Book with ID: ${ID} has been deleted successfully` });
    } catch (err) {
        res.send({ msg: "Something went wrong! cannot delete.", error: err.message });
    }
});

module.exports = { bookRouter };
