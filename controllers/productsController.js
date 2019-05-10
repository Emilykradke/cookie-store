// Import the models
const db = require("../models");

// Methods for Controllers
const ProductsController = {
  findAll: function (req, res) {
    db.Product
      .find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Product
      .findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    db.Product
      .create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// Exports
module.exports = ProductsController;
