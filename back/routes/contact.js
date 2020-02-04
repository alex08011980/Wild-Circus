const express = require("express");
const router = express.Router({ mergeParams: true });
const connection = require("../config");
const parser = require("body-parser");

router.use(parser.json());

router.get("/", (req, res) => {
  const sql = "SELECT * FROM contact";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't get contact");
    } else {
      res.json(results);
    }
  });
});
// GET ONE CONTACT
router.get("/:id", (req, res) => {
  const idContactOne = parseInt(req.params.id);
  const sql = "SELECT * FROM contact WHERE id = ? ";
  connection.query(sql, idContactOne, (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't get blog");
    } else {
      res.json(results);
    }
  });
});
//POST CONTACT
router.post("/", (req, res) => {
  const contact = req.body;
  const sql = `INSERT INTO contact (phone, email, address) VALUES ("${contact.phone}", "${contact.email}", "${contact.address}")`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't post contact" + error);
    } else {
      req.body.id = results.insertId;
      res.json(req.body);
    }
  });
});
// PUT CONTACT
router.put("/:id", (req, res) => {
  const idContact = req.params.id;
  const contact = req.body;
  connection.query(
    "UPDATE contact SET ? WHERE id=?",
    [contact, idContact],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't put contact" + error);
      } else {
        res.json(req.body);
      }
    }
  );
});
//DELETE CONTACT
router.delete("/:id", (req, res) => {
  const idContact = req.params.id;
  connection.query(
    "DELETE FROM contact WHERE id= ?",
    [idContact],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't delete contact" + error);
      } else {
        res.json(idContact);
      }
    }
  );
});

module.exports = router;
