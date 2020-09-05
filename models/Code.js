const mongoose = require('mongoose');

var codeSchema = new mongoose.Schema({
  html: String,
  css: String,
  javascript: String,
  created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Code', codeSchema);
