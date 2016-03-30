"use strict";
var BaseRepository = require('../base-repository');
var SpecError = require('../../app-errors').createSpecificationError;
var Q = require('q');

class TaskListRepository extends BaseRepository {
  constructor() {
    super("tasklist");
  }

  /**
   * @param{String} taskListName - The task list name
   * @param{String} boardDescription - The board description    * 
   */
  createTaskList(taskListName, taskListDescription) {
    if (!taskListName || taskListName.length === 0) {
      return Q.reject(SpecError("O nome é obrigatório."));
    }

    var deferred = Q.defer();

    this.save({ name: taskListName, description: taskListDescription })
      .then((newTaskList) => {
        deferred.resolve(newTaskList);
      }, (err) => {
        deferred.resolve(err);
      });

    return deferred.promise;
  }
}

module.exports = TaskListRepository;