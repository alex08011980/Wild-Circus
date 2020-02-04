const express = require("express");

const spectacle = require("./spectacle");
const reservation = require("./reservation");
const contact = require("./contact");
const image = require("./image");

const router = express.Router();

router.use("/spectacle", spectacle);
router.use("/reservation", reservation);
router.use("/contact", contact);
router.use("/image", image);

module.exports = router;
