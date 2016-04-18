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
  app.use(function (req, res, next) {
    res.setJsonResponse = function (json, statusCode) {
      res.jsonContent = json;
      res.jsonResponseStatusCode = statusCode || 200;
    };

    res.getCurrentResponse = function () {
      return {
        content: res.jsonContent,
        status: res.jsonResponseStatusCode
      };
    };

    next();
  });

  app.use('/api', setupApiApp(express()));
  app.use(function (req, res) {
    var response = res.getCurrentResponse();

    if (response && response.status) {
      console.log("Success Response", response);
      res.status(response.status).json(response.content);
    }
    else {
      res.status(404).json("Conteudo não encontrado!");
    }
    res.end();
  });

  app.use(function (err, req, res, next) {
    console.log("Ocorreu um erro!: " + err);
    res.status(500).json("Erro!");
    res.end();
  });

  app.listen(appPort);
  console.log("Express server is listening on port %d", appPort);
};
// *******************************************************
module.exports.app = app;
