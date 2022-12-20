const Model = require("../models/book.model");

//Get all Method
const showBooks = async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get by ID Method
const showBookById = async (req, res) => {
  try {
    const data = await Model.findOne({ _id: req.params.id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Post Method
const createBook = async (req, res) => {
  const data = new Model({
    title: req.body.title,
    author: req.body.author,
    releaseDate: req.body.releaseDate,
    description: req.body.description,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Update by ID Method
const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Delete by ID Method
const deleteBook = async (req, res) => {
  try {
    const data = await Model.deleteOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  showBooks,
  showBookById,
  createBook,
  updateBook,
  deleteBook,
};
