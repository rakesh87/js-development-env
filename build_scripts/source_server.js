var express = require("express");
var path = require("path");
var open = require("open");

import webpack from "webpack";
import config from "../webpack.config.development";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware") (compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
