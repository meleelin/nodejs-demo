const http = require("http");
const express = require("express");
require("dotenv").config();

app = express();

app.get("/", function (req, res) {
  res.end("Hello from NodeJs Server");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
