"use strict";
var BaseRepository = require('../base-repository');
var SpecError = require('../../app-errors').createSpecificationError;
var Q = require('q');

class BoardRepository extends BaseRepository {
  constructor() {
    super("board");
  }

  /**
   * @param{String} boardName - The board name
   * @param{String} boardDescription - The board description    * 
   */
  createBoard(boardName, boardDescription) {
    if (!boardName && boardName.length === 0) {
      return Q.reject(SpecError("O nome é obrigatório."));
    }
    var deferred = Q.defer();

    this.save({ name: boardname, description: boardDescription })
      .then((newBoard) => {
        deferred.resolve(newBoard);
      }, (err) => {
        deferred.resolve(err);
      });
      
    return deferred.promise;
  }
}

module.exports = BoardRepository;