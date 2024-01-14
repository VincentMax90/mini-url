const express = require("express");

const UrlController = require("../controllers/url.controller");

const urlRouter = express.Router();

urlRouter.post("/create", UrlController.createUrl);


module.exports = urlRouter;



