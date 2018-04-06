var express = require("express");

var router = express.Router();

var Headline = require("../models/headline.js");

router.get("/", headline.findAll);
router.delete("/:id", headline.delete);
router.put("/:id", headline.update);

module.exports = router;