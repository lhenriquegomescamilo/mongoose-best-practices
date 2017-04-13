var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    logger = require("morgan");
    routers = require("../routers/index");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(logger("dev"));
routers(app);

module.exports = app;