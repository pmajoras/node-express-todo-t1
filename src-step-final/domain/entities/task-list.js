"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('TaskList', new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
}));