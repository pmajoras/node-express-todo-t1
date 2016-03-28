"use strict";

var controllers = [];
controllers.push(require(__dirname + "/routes/task-controller"));
controllers.push(require(__dirname + "/routes/todo-controller"));

module.exports = controllers;