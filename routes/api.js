var router = require("express").Router();
var connection = require("../db/connection");

router.get("/api/notes", (req, res) => {
  connection.query("SELECT * FROM notes", (err, dbNotes) => {
    res.json(dbNotes);
  });
});

router.post("/api/notes", (req, res) => {
  connection.query("INSERT INTO notes SET ?", req.body, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;