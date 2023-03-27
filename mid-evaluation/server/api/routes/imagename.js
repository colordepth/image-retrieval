const express = require('express');
const path = require("path");

const imageNameRoute = express.Router();
const filenames = require(path.join(__dirname, "../../../models/json/filenames-pix.json"));

imageNameRoute.get('/:imageID', async (req, res) => {
  const imageID = req.params.imageID;

  if (imageID >= 0 && imageID < filenames.length)
    res.json(filenames[imageID].split("/"));
  else
    res.status(404).end();
});

module.exports = imageNameRoute;
