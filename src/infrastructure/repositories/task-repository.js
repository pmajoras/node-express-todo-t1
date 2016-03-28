"use strict";
var BaseRepository = require('../base-repository');

class TaskRepository extends BaseRepository {
  constructor() {
    super("task");
  }
}

module.exports = TaskRepository;