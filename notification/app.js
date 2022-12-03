const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

const port = parseInt(process.env.PORT, 10) || 3000;

app.listen(port, function () {
  console.log("Example app listening on port 3000!");
});
