const express = require("express");
const routerBooks = express.Router();
const routerUsers = express.Router();

// Controllers
const Books = require("../controller/book.controller");
const Users = require("../controller/user.controller");

// Books
// Get Method
routerBooks.get("/getAll", Books.showBooks);
routerBooks.get("/getOne/:id", Books.showBookById);
// Post Method
routerBooks.post("/post", Books.createBook);
routerBooks.patch("/update/:id", Books.updateBook);
routerBooks.delete("/delete/:id", Books.deleteBook);

// Users
// Get Method
routerUsers.get("/getAll", Users.showUsers);
routerUsers.get("/getOne/:id", Users.showUserById);
routerUsers.get("/getOneName/:username", Users.showUserByName);
// Post Method
routerUsers.post("/post", Users.createUser);
routerUsers.patch("/update/:id", Users.updateUser);
routerUsers.delete("/delete/:id", Users.deleteUser);
routerUsers.post("/loginAuth/:id", Users.loginAuth);

module.exports = { routerBooks, routerUsers };
