"use strict";
var RouteFactory = require('../route-factory');
var BaseController = require('../base-controller');

class TodoController extends BaseController {
  constructor() {
    super();
  }

  getBoards(req, res, next) {
    next();
  }

  createBoard(req, res, next) {
    next();
  }
}

var routeFactory = new RouteFactory("/todo/:id/")
  .get("boards", "getBoards")
  .post("boards", "createBoard");

module.exports = { "Controller": TodoController, "routeFactory": routeFactory };