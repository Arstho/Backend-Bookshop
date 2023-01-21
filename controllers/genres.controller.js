const Genre = require("../models/Genre.model")

module.exports.genresController = {
  getAllGenres: (req, res) => {
    Genre.find().then((genre) => {
      res.json(genre)
    });
  },

  addGenre: (req, res) => {
    Genre.create({
      name: req.body.name,
      description: req.body.description
    }).then((genre) => {
      res.json(genre)
    });
  },

  deleteGenreBiId: (req, res) => {
    Genre.findByIdAndDelete(req.params.id).then((genre) => {
      res.json(genre)
    });
  },
};