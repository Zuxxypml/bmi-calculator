//Creating Prerequisites and setting up Modules.
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { Router } = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
const PORT = process.env.PORT || 8080;
const homeRoute = "/";
const thanksRoute = "/thankyou";
const Underweight = "You're Underweight.";
const ThinForHeight = "You're thin for your Height.";
const Healthy = "You're Healthy :)";
const OverWeight =
  "You're Overweight. Try going to the Gym to exercise your body and stop eating fatty foods.";
const Obesity =
  "I have only one advice for you :) Goto the Doctor. Stay Healthy.";
//Get requests
app.get(homeRoute, (req, res) => {
  res.render("index");
});
app.get(thanksRoute, (req, res) => {
  res.render("thankyou");
});
//Post requests
app.post(homeRoute, (req, res) => {
  // User Inputs
  let name = req.body.name;
  let weight = req.body.weight;
  let userheight = req.body.height;
  let height = userheight ** 2;
  // Comment and feedback Logics using if-else conditional statements.
  if (weight / height <= 18) {
    res.render("answer", {
      name: name,
      bmi: (weight / height).toFixed(2),
      comment: Underweight,
    });
  } else if (weight / height <= 18.5) {
    res.render("answer", {
      name: name,
      bmi: (weight / height).toFixed(2),
      comment: ThinForHeight,
    });
  } else if (weight / height <= 24.9) {
    res.render("answer", {
      name: name,
      bmi: (weight / height).toFixed(2),
      comment: Healthy,
    });
  } else if (weight / height <= 29.9) {
    res.render("answer", {
      name: name,
      bmi: (weight / height).toFixed(2),
      comment: OverWeight,
    });
  } else {
    res.render("answer", {
      name: name,
      bmi: (weight / height).toFixed(2),
      comment: Obesity,
    });
  }
});
//Listener
app.listen(PORT, () => {
  console.log("Server started on port 8080");
});
