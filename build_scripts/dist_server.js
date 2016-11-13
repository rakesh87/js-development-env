var express = require("express");
var path = require("path");
var open = require("open");
import compression from "compression";


/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/lists', function(req, res) {
  res.json([
    {"id": 1, "name": "List 1", "position": 1},
    {"id": 2, "name": "List 2", "position": 4},
    {"id": 3, "name": "List 3", "position": 2},
    {"id": 4, "name": "List 4", "position": 3}
  ]);
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port)
  }
});
