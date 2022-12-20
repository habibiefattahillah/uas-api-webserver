const bcrypt = require("bcrypt");
const Model = require("../models/user.model");

//Get all Method
const showUsers = async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get by ID Method
const showUserById = async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get by name Method
const showUserByName = async (req, res) => {
  try {
    const data = await Model.findOne({ username: req.params.username });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Post Method
const createUser = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 10);

  const data = new Model({
    username: req.body.username,
    password: password,
    role: req.body.role,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Update by ID Method
const updateUser = async (req, res) => {
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
const deleteUser = async (req, res) => {
  try {
    const data = await Model.deleteOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Authentications
const loginAuth = async (req, res) => {
  try {
    const data = await Model.findOne({ _id: req.params.id });
    if (await bcrypt.compare(data.password, req.body.password)) {
      res.status(200).json({ message: "Valid Password" });
    } else {
      res.status(200).json({ message: "Invalid Password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  showUsers,
  showUserById,
  showUserByName,
  createUser,
  updateUser,
  deleteUser,
  loginAuth,
};
