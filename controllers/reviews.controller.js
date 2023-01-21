const Review = require("../models/Review.model")

module.exports.reviewsController = {
    addReview: (req, res) => {
        Review.create({
            text: req.body.text,
            nameOfReviewer: req.body.nameOfReviewer,
            reviewedBook: req.body.reviewedBook
        }).then((genre) => {
            res.json(genre)
        });
    },

    getAllReviews: (req, res) => {
        Review.find().populate("reviewedBook", "name").then((genre) => {
            res.json(genre)
        });
    },

    deleteReviewBiId: (req, res) => {
        Review.findByIdAndDelete(req.params.id).then((genre) => {
            res.json(genre)
        });
    },
};