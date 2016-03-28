"use strict";
var RouteFactory = require('../route-factory');
var BaseController = require('../base-controller');

class TaskController extends BaseController {
  constructor() {
    super();
  }

  /**
   * Get the tasks.
   */
  getTasks(req, res, next) {
    res.setJsonResponse({ message: 'hooray! welcome to our Tãsks!' });
    next();
  }
  /**
   * Insert a new task
   */
  insertTask() {
    console.log("Passei para o próximo");
  }
}

var routeFactory = new RouteFactory("/tasks")
  .get("", "getTasks");

module.exports = { "Controller": TaskController, "routeFactory": routeFactory };