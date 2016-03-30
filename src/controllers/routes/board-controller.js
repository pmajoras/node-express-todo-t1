"use strict";
var RouteFactory = require('../route-factory');
var BaseController = require('../base-controller');
var BoardRepository = require('../../infrastructure/repositories/board-repository');

class BoardController extends BaseController {
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

  getBoardsById(req, res, next) {

    this.boardRepository.findById(req.params.id)
      .then((board) => {
        let status = board != null && board != undefined ? null : 404;
        res.setJsonResponse(board, status);
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

var routeFactory = new RouteFactory("/todo/boards")
  .get("", "getBoards")
  .get("/:id", "getBoardsById")
  .post("", "createBoard");

module.exports = { "Controller": BoardController, "routeFactory": routeFactory };