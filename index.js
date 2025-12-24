require('dotenv').config()

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/x", (req, res) => {
  res.send("This is a twitter server....");
});

app.get("/signup", (req, res) => {
  res.send("<h1>Create a new account</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
