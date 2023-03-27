const express = require("express");
const path = require("path");
const app = express();

const trendingRoute = require(path.join(__dirname, "routes/trending"));
const imageNameRoute = require(path.join(__dirname, "routes/imagename"));

app.use(express.json());
// app.use(express.static(path.join(__dirname, "build")));
app.use(express.urlencoded({ extended: true }));

app.use('/trending', trendingRoute);
app.use('/imagename', imageNameRoute);

module.exports = app;
