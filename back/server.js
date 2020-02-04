const express = require("express");
const parser = require("body-parser");
const app = express();
const multer = require("multer");
const cors = require("cors");
const api = require("./routes");

app.use(parser.json());
app.use(
  parser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.use("/api", api);

app.use("/upload", express.static("public/images"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage }).single("file");

// upload file path
app.post("/api/uploadFile", (req, res) => {
  upload(req, res, err => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    } else {
      // si la sauvegarde a fonctionné, on renvoi un status 200
      return res.status(200).send(req.file);
    }
  });
});

const server = app.listen(3001, () => {
  console.log("server is listening on port 3001");
});

module.exports = server;
