const PORT = 80;

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

var apps = require("./apps")(app, express);

app.listen(PORT)
console.log("Alive on " + PORT);


