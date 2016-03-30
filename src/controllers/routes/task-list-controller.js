"use strict";
var RouteFactory = require('../route-factory');
var BaseController = require('../base-controller');
var TaskListRepository = require('../../infrastructure/repositories/task-list-repository');

class TaskListController extends BaseController {
  constructor() {
    super();
    this.taskListRepository = new TaskListRepository();
  }

  getTaskLists(req, res, next) {

    this.taskListRepository.findAll()
      .then((taskLists) => {
        res.setJsonResponse(taskLists);
        next();
      }, (err) => {
        next(err);
      });
  }

  getTaskListsById(req, res, next) {

    this.taskListRepository.findById(req.params.id)
      .then((taskList) => {
        let status = taskList != null && taskList != undefined ? null : 404;
        res.setJsonResponse(taskList, status);
        next();
      }, (err) => {
        next(err);
      });
  }

  createTaskList(req, res, next) {

    this.taskListRepository.createTaskList(req.body.name, req.body.description)
      .then((newTaskList) => {
        res.setJsonResponse(newTaskList);
      }, (err) => {
        next(err);
      });
  }
}

var setup = function(app) {
  let baseUrl = "/todo/taskLists";
  app.get(baseUrl, function(req, res, next) {
    let taskListController = new TaskListController();
    taskListController.getTaskLists(req, res, next);
  });

  app.get(baseUrl + "/:id", function(req, res, next) {
    let taskListController = new TaskListController();
    taskListController.getTaskListsById(req, res, next);
  });

  app.post(baseUrl, function(req, res, next) {
    let taskListController = new TaskListController();
    taskListController.createTaskList(req, res, next);
  });
};

module.exports = setup;