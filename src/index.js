const express = require("express");
const app = express();
const users = require("../users.json");
module.exports = app;

//Example endpoint
//app.get("/foo", (req, res) => {
//  res.send(`foo`);
//});

//Write your code here
app.get("/users", (req, res) => {
  var id = req.query.id;
  if (id == null) res.json(users);
  else {
    var user = users.filter((user) => user.id == req.query.id);
    res.json(user);
  }
});