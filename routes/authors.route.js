const {
    Router
} = require("express");
const router = Router();
const {
    authorsController
} = require("../controllers/authors.controller");

router.get("/authors", authorsController.getAuthors);
router.post("/authors", authorsController.addAuthor);

module.exports = router;