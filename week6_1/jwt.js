const express = require("express");
const jwt = require('jsonwebtoken')
const app = express();

app.use(express.json());
const JWT_SECRET = "ilovesumit";

const users = [];

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "U are signed UP",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username; 
  const password = req.body.password;
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    const token = jwt.sign({
        username:username
    },JWT_SECRET);
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

app.get("/me", function (req, res) {
  const token = req.headers.token;
  const decode = jwt.verify(token,JWT_SECRET);
  const username = decode.username;
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "Token is invalid ",
    });
  }
});
app.listen(3000);
