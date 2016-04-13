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

  getTaskById(req, res, next) {
    res.setJsonResponse({ message: 'hooray! welcome to our Tãsks!' });
    next();
  }

  createTask(req, res, next) {
    res.setJsonResponse({ message: 'hooray! welcome to our Tãsks!' });
    next();
  }

  updateTask(req, res, next) {
    res.setJsonResponse({ message: 'hooray! welcome to our Tãsks!' });
    next();
  }

  deleteTask(req, res, next) {
    next();
  }
}

var setup = function(app) {
  let baseUrl = "/todo/taskLists/:id/tasks";

  app.get(baseUrl, function(req, res, next) {
    let taskController = new TaskController();
    taskController.getTasks(req, res, next);
  });

  app.get(baseUrl + "/:id", function(req, res, next) {
    let taskController = new TaskController();
    taskController.getTaskById(req, res, next);
  });

  app.post(baseUrl, function(req, res, next) {
    let taskController = new TaskController();
    taskController.createTask(req, res, next);
  });

  app.put(baseUrl + "/:id", function(req, res, next) {
    let taskController = new TaskController();
    taskController.updateTask(req, res, next);
  });

  app.delete(baseUrl + "/:id", function(req, res, next) {
    let taskController = new TaskController();
    taskController.deleteTask(req, res, next);
  });
};

module.exports = setup;