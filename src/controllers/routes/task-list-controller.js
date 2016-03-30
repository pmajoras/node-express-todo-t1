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

    this.taskListRepository.findAll({ board: req.params.boardId })
      .then((boards) => {
        res.setJsonResponse(boards);
        next();
      }, (err) => {
        next(err);
      });
  }

  getTaskListsById(req, res, next) {

    this.taskListRepository.findOne({ board: req.params.boardId, _id: req.params.id })
      .then((taskList) => {
        let status = taskList != null && taskList != undefined ? null : 404;
        res.setJsonResponse(taskList, status);
        next();
      }, (err) => {
        next(err);
      });
  }

  createTaskList(req, res, next) {

    this.taskListRepository.createTaskList(req.body.name, req.body.description, req.params.boardId)
      .then((newBoard) => {
        res.setJsonResponse(newBoard);
      }, (err) => {
        next(err);
      });
  }
}

var routeFactory = new RouteFactory("/todo/boards/:boardId/taskLists")
  .get("", "getTaskLists")
  .get("/:id", "getTaskListsById")
  .post("", "createTaskList");

module.exports = { "Controller": TaskListController, "routeFactory": routeFactory };