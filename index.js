const express = require("express");
const { bookRouter } = require("./Route/book.route");
require("dotenv").config();
const connection = require("./Config/db");
const app = express();
app.use(express.json());


app.use("/book", bookRouter);

app.get("/", (req, res) => {
    res.send("Welcome to Triluxo Book Service Library.");
})

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log('Connected to Database');
    } catch (error) {
        console.log(error);
    }
    console.log('Server is running on port 4040');
})