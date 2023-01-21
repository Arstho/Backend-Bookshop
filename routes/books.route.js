const {
    Router
} = require("express");
const router = Router();
const {
    booksController
} = require("../controllers/books.controller");

router.get("/books", booksController.getAllbooks);
router.get("/books/:id", booksController.getBookById);
router.get("/books/genres/:genreId", booksController.getBooksByGenre);
router.delete("/books/:id", booksController.deleteBook);
router.patch("/books/:id", booksController.patchBook);
router.post("/books", booksController.addBook);


module.exports = router;