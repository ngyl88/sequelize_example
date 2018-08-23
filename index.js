// dependencies to get models
const { User, Blog, Tag } = require("./sequelize");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// API ENDPOINTS

// create a user
app.post("/api/users", (req, res) => {
  User.create(req.body).then(user => res.json(user));
});
// get all users
app.get("/api/users", (req, res) => {
  User.findAll().then(users => res.json(users));
});

module.exports = {
  app
};
