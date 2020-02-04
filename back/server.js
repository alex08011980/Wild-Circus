const express = require("express");
const parser = require("body-parser");
const app = express();
const cors = require("cors");
const contact = require("./routes/contact");
const image = require("./routes/image");
const reservation = require("./routes/reservation");
const spectacle = require("./routes/spectacle");
const users = require("./routes/users");

app.use(parser.json());
app.use(
  parser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.use("/", contact);
app.use("/", image);
app.use("/", reservation);
app.use("/", spectacle);
app.use("/", users);

const server = app.listen(3001, () => {
  console.log("server is listening on port 3001");
});

module.exports = server;
