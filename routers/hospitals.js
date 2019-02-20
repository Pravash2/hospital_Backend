const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

router.get("add hospital", (req, res) => {});

module.exports = router;
