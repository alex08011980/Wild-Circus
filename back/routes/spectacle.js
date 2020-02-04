const express = require("express");
const router = express.Router({ mergeParams: true });
const connection = require("../config");
const parser = require("body-parser");

router.use(parser.json());

router.get("/", (req, res) => {
  const sql = "SELECT * FROM spectacle";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't get spectacle");
    } else {
      res.json(results);
    }
  });
});
// GET ONE SPECTACLE
router.get("/:id", (req, res) => {
  const idSpectacleOne = parseInt(req.params.id);
  const sql = "SELECT * FROM spectacle WHERE id = ? ";
  connection.query(sql, idSpectacleOne, (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't get spectacle");
    } else {
      res.json(results);
    }
  });
});
//POST SPECTACLE
router.post("/", Auth, (req, res) => {
  const spectacle = req.body;
  const sql = `INSERT INTO spectacle (title, text) VALUES ("${spectacle.title}", "${spectacle.text}")`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't post spectacle" + error);
    } else {
      req.body.id = results.insertId;
      res.json(req.body);
    }
  });
});
// PUT SPECTACLE
router.put("/:id", (req, res) => {
  const idSpectacle = req.params.id;
  const spectacle = req.body;
  connection.query(
    "UPDATE spectacle SET ? WHERE id=?",
    [spectacle, idSpectacle],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't put spectacle" + error);
      } else {
        res.json(req.body);
      }
    }
  );
});
//DELETE SPECTACLE
router.delete("/:id", (req, res) => {
  const idSpectacle = req.params.id;
  connection.query(
    "DELETE FROM spectacle WHERE id= ?",
    [idSpectacle],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't delete Spectacle" + error);
      } else {
        res.json(idSpectacle);
      }
    }
  );
});

module.exports = router;
