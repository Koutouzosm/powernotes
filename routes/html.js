var router = require("express").Router();
var path = require("path");

router.get("/powernotes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/powernotes.html"));
});

router.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;