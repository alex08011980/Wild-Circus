const express = require("express");
const router = express.Router({ mergeParams: true });
const connection = require("../config");

// GET IMAGE
router.get("/", (req, res) => {
  const sql = "SELECT * FROM image";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't get image");
    } else {
      res.json(results);
    }
  });
});

// GET ONE IMAGE
router.get("/:id", (req, res) => {
  const idImage = parseInt(req.params.id);
  const sql = "SELECT * FROM image WHERE id = ? ";
  connection.query(sql, idImage, (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't get image");
    } else {
      res.json(results);
    }
  });
});

//POST IMAGE
router.post("/", Auth, (req, res) => {
  const image = req.body;
  const sql = "INSERT INTO image (name, source) VALUES (?, ?)";
  connection.query(
    sql,
    [image.name, image.source],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't post image" + error);
      } else {
        req.body.id = results.insertId;
        res.json(req.body);
      }
    }
  );
});

// PUT IMAGE
router.put("/:id", Auth, (req, res) => {
  const idImage = req.params.id;
  const image = req.body;
  connection.query(
    "UPDATE image SET ? WHERE id=?",
    [image, idImage],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't put image" + error);
      } else {
        res.json(req.body);
      }
    }
  );
});

//DELETE IMAGE
router.delete("/:id", Auth, (req, res) => {
  const idImage = req.params.id;

  connection.query(
    "SELECT * FROM image WHERE id=?",
    [idImage],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't retrieve image" + error);
      } else {
        const currentImage = results.length > 0 ? results[0] : null;

        connection.query(
          "DELETE FROM image WHERE id= ?",
          [idImage],
          (error, results, fields) => {
            if (error) {
              res.status(501).send("couldn't delete image" + error);
            } else {
              res.json(currentImage);
            }
          }
        );
      }
    }
  );
});

module.exports = router;
