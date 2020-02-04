const express = require("express");
const router = express.Router({ mergeParams: true });
const connection = require("../config");
const parser = require("body-parser");

router.use(parser.json());

router.get("/", (req, res) => {
  const sql = "SELECT * FROM reservation";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't get reservation");
    } else {
      res.json(results);
    }
  });
});
// GET ONE RESERVATION
router.get("/:id", (req, res) => {
  const idReservationtOne = parseInt(req.params.id);
  const sql = "SELECT * FROM reservation WHERE id = ? ";
  connection.query(sql, idRservationOne, (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't get reservation");
    } else {
      res.json(results);
    }
  });
});
//POST RESERVATIOn
router.post("/", (req, res) => {
  const reservation = req.body;
  const sql = `INSERT INTO reservation (title, text, price) VALUES ("${reservation.title}", "${reservation.text}", "${reservation.price}")`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't post reservation" + error);
    } else {
      req.body.id = results.insertId;
      res.json(req.body);
    }
  });
});
// PUT RESERVATION
router.put("/:id", (req, res) => {
  const idReservation = req.params.id;
  const reservation = req.body;
  connection.query(
    "UPDATE reservation SET ? WHERE id=?",
    [contact, idReservation],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't put reservation" + error);
      } else {
        res.json(req.body);
      }
    }
  );
});
//DELETE RESERVATION
router.delete("/:id", (req, res) => {
  const idReservation = req.params.id;
  connection.query(
    "DELETE FROM reservation WHERE id= ?",
    [idReservation],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't delete reservation" + error);
      } else {
        res.json(idReservation);
      }
    }
  );
});

module.exports = router;
