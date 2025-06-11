const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const JWT_SECRET = "ilovesumit";
const user = [];
function generatedToken() {
  return Math.random();
}
app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  user.push({
    username: username,
    password: password,
  });
  res.status(200).send({
    message: "u are sign up",
  });
});
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  let foundUser = null;
  for (let i = 0; i < user.length; i++) {
    if (user[i].username == username && user[i].password == password) {
      foundUser = user[i];
    }
  }
  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    foundUser.token = token;
    res.json({
      token: token,
    });
  } else {
    res.status(404).send({
      message: "wrong password or username",
    });
  }
});
app.get("/me", function (req, res) {
  const token = req.header("token");
  const decode = jwt.verify(token, JWT_SECRET);
  const username = decode.username;
  let foundUser = null;
  console.log(user.token);
  for (let i = 0; i < user.length; i++) {
    if (user[i].username == username) {
      foundUser = user[i];
    }
  }
  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "token invalid",
    });
  }
});
app.listen(3000);
