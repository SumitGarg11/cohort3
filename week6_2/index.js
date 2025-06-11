const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "ilovesumit";
app.use(express.json());
const users = [];
app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "you are sign UP",
  });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const token = jwt.sign(
    {
      username: username,
    },
    JWT_SECRET
  );
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "invalid username or password",
    });
  }
});
app.get("/me", function (req, res) {
  const token = req.headers.token;
  const decode = jwt.verify(token, JWT_SECRET);
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
      message: " Token is invalid ",
    });
  }
});
app.listen(3000);
