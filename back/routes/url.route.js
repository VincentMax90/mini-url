const express = require("express");

const UrlController = require("../controllers/url.controller");

const urlRouter = express.Router();

urlRouter.post("/create", UrlController.createUrl);
urlRouter.get ("/:id",UrlController.findMiniUrl)

module.exports = urlRouter;



