const {
    Router
} = require("express");
const {
    reviewsController
} = require("../controllers/reviews.controller");
const router = Router();


router.get("/reviews", reviewsController.getAllReviews);
router.post("/reviews", reviewsController.addReview);
router.delete("/reviews/:id", reviewsController.deleteReviewBiId);

module.exports = router;