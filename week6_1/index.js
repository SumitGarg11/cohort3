const express = require("express");

const app = express();

app.use(express.json());

const users = [];
function genrateToken() {
  return Math.random();
}
app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "U are signed In",
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
    const token = genrateToken();
    foundUser.token = token;
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
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].token == token) {
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
