"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('Comment', new Schema({
  content: { type: String, required: true },
  edited: [{
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
  }]
}));