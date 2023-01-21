const mongoose = require("mongoose");

const rewiewSchema = mongoose.Schema({
    text: String,
    nameOfReviewer: String,
    reviewedBook: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book',
    }
});

const Review = mongoose.model('Rewiew', rewiewSchema);

module.exports = Review;