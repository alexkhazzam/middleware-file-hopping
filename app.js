const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/test1", (req, res, next) => {
  console.log("req.body");
  res.sendFile(path.join(__dirname, "views", "test1.html"));
});

app.use("/test2", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "test2.html"));
  console.log(`${req.url}`);
});

app.use("/test3", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "test3.html"));
  console.log(`${req.url}`);
});

app.use((req, res, next) => {
  res.status(400).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(5000);
