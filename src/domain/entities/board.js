"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('Board', new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  taskLists: [{ type: Schema.Types.ObjectId, ref: 'TaskList' }]
}));