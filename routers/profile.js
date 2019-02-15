const express = require("express");
const router = express.Router();

//Profile Routes
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
