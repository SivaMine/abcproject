const express = require("express");
var app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const userroute = require("./routes/userroute");
app.use("/api/user", userroute);
app.get("/", function (req, res) {
  res.end("This is backend");
});
app.listen(5000, () => {
  console.log("Server is Start");
});
