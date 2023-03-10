const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.NODE_ENV === "production" ? "localhost" : "0.0.0.0"

// Connect DB
require("./utils/db");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Route
const routes = require("./routes/routes");
app.use("/books", routes.routerBooks);
app.use("/users", routes.routerUsers);

// var server = app.listen(port, () => {
//   console.log(`Mongo App | Listening at http://localhost:${port}`);
// });

app.listen(port, host, () => {
  console.log(`Mongo App | Listening at http://localhost:${port}`);
});
