var express = require('express');
var fakeDatabase = require('../fake-data/fake-database');

module.exports = function (apiApp) {

  apiApp.get("/", function (req, res, next) {
    res.setJsonResponse("Bem vindo a minha API REST feita em NodeJS");
    next();
  });

  apiApp.get("/tasks", function (req, res, next) {

    fakeDatabase.get("tasks", (err, tasks) => {
      
      if (err) {
        next(err);
      }
      else {
        res.setJsonResponse(tasks);
        next();
      }
    });
  });

  apiApp.post("/tasks", function (req, res, next) {
    if (typeof req.body.name !== 'string') {
      next("O nome é obrigatório.");
      return;
    }

    fakeDatabase.save("tasks", req.body, (err, newTask) => {
      if (err) {
        next(err);
      }
      else {
        res.setJsonResponse(newTask);
        next();
      }
    });
  });

  return apiApp;
};