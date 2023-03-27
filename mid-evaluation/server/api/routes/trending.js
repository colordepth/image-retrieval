const express = require('express');
const path = require("path");

const trendingRoute = express.Router();
const trendingList = require(path.join(__dirname, "../../../models/json/trending.json"));

trendingRoute.get('/', async (req, res) => {
    res.json(trendingList);
  });

module.exports = trendingRoute;
