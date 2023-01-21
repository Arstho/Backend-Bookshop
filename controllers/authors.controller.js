const Author = require("../models/Author.model")

module.exports.authorsController = {
  getAuthors: (req, res) => {
    Author.find().then((authors) => {
      res.json(authors)
    });
  },

  addAuthor: (req, res) => {
    Author.create({
      name: req.body.name,
      info: req.body.info
    }).then((authors) => {
      res.json(authors)
    });
  }
};