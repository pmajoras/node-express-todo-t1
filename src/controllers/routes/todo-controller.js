"use strict";
var RouteFactory = require('../route-factory');
var BaseController = require('../base-controller');
var BoardRepository = require('../../infrastructure/repositories/board-repository');

class TodoController extends BaseController {
  constructor() {
    super();
    this.boardRepository = new BoardRepository();
  }

  getBoards(req, res, next) {

    this.boardRepository.findAll()
      .then((boards) => {
        res.setJsonResponse(boards);
        next();
      }, (err) => {
        next(err);
      });
  }

  createBoard(req, res, next) {

    this.boardRepository.createBoard(req.body.name, req.body.description)
      .then((newBoard) => {
        res.setJsonResponse(newBoard);
      }, (err) => {
        next(err);
      });
  }
}

var routeFactory = new RouteFactory("/todo/")
  .get("boards", "getBoards")
  .post("boards", "createBoard");

module.exports = { "Controller": TodoController, "routeFactory": routeFactory };