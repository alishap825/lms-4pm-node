const {json} = require("express")
const express = require('express'); //import express from "express"
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());
app.use(cors());

const dbURL = "mongodb://localhost/fourpm";

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true}); //to fetch from database using url you have to use url parser

const connectionRef = mongoose.connection;
connectionRef.on("open", () => {
    console.log("connected to DB");
});

const booksRoutes = require("./routes/books")
app.use("/api/books", booksRoutes);

const userRoutes = require("./routes/users")
app.use("/api/user", userRoutes);

const memberRoutes = require("./routes/member");
app.use("/api/member", memberRoutes);

app.listen(4099, () => {
    console.log("app is listening to port", 4099);
})



