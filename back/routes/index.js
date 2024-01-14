const express = require("express");
const router = express.Router();
const urlRouter = require("./url.route");


router.use("/url", urlRouter);



module.exports = router;
