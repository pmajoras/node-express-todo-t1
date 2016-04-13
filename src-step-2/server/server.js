"use strict";

// Package modules
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

const appPort = "8080";
const app = express();
const setupApiApp = require("./api-config");

module.exports.start = () => {

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())
  // use morgan to log requests to the console
  app.use(morgan('dev'));
  app.use('/api', setupApiApp(express()));
  app.use("*", function(req, res) {

    res.status(404).json("Conteudo não encontrado!");
  });

  app.listen(appPort);
  console.log("Express server is listening on port %d", appPort);
};
// *******************************************************
module.exports.app = app;
