const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://sivar:AllOE1fw6WXKaiJQ@clusterelectrical.i6bbr9g.mongodb.net/Abc",
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Mongo db connection ok");
    }
  }
);

var Customer = mongoose.model("users", {
  name: String,
  designation: String,
  organisation: String,
  address: String,
  mobilenumber: Number,
  email: String,
  comments: String,
});
router.post("/registeruser", function (req, res) {
  var newuser = new Customer({
    name: req.body.name,
    designation: req.body.designation,
    organisation: req.body.organisation,
    address: req.body.address,
    mobilenumber: req.body.mobilenumber,
    email: req.body.email,
    comments: req.body.comments,
  });
  newuser.save(function (err) {
    if (err) {
      res.send("Something wrong");
    } else {
      res.send("User Registration  successful");
    }
  });
});
module.exports = router;
