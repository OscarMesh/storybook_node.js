const express = require("express");
const router = express.Router();

// @desc Login/Landing page
// @route Get/

router.get("/", (req, res) => {
  res.render("login");
});

// @desc Dashboard
// @route Get/dashboard

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
