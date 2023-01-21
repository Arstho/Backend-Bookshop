const {
    Router
} = require("express");
const {
    genresController
} = require("../controllers/genres.controller");
const router = Router();


router.get("/genres", genresController.getAllGenres);
router.post("/genres", genresController.addGenre);
router.delete("/genres/:id", genresController.deleteGenreBiId);

module.exports = router;