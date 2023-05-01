const http = require("http");
const express = require("express");
require("dotenv").config();

app = express();

app.get("/", function (req, res) {
  res.end("Hello from NodeJs Server");
});

const port = process.env.PORT || 3000;
const ip = process.env.HOSTNAME || "127.0.0.1";

app.listen(port, ip, () => {
  console.log(`Server is running at http://${ip}:${port}`);
});
