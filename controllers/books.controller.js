const Book = require("../models/Book.model");

module.exports.booksController = {
  getAllbooks: (req, res) => {
    Book.find().populate(("author genre")).then((books) => {
      res.json(books)
    });
  },

  getBookById: (req, res) => {
    Book.findById(req.params.id).populate(("author genre")).then((books) => {
      res.json(books)
    });
  },

  getBooksByGenre: (req, res) => {
    Book.find({
      genre: req.params.genreId
    }).populate(("author genre")).then((books) => {
      res.json(books)
    });
  },

  deleteBook: (req, res) => {
    Book.findByIdAndDelete(req.params.id).then((books) => {
      res.json("Книга удалена")
    }).catch(err => {
      res.json("Ошибка!!!")
    });
  },

  patchBook: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre
    }).then((books) => {
      res.json(books)
    }).catch(err => {
      res.json("Ошибка!!!")
    });
  },

  addBook: (req, res) => {
    Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre
    }).then((books) => {
      res.json(books)
    });
  },
};