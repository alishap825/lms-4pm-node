const express = require('express');

const {
    getAllBooks,
    addBook,
    editBookById,
    deleteBookById,
    findBookById
   } = require("../controllers/books");

const router = express.Router(); //need for creating routes from express package

router.post("/", addBook);

router.get("/", getAllBooks);

router.patch("/:id", editBookById);

router.delete("/:id", deleteBookById);

router.get("/:id", findBookById);

module.exports = router;