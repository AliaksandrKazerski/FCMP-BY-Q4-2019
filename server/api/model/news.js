const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category: String,
  country: String,
  description: String,
  id: String,
  language: String,
  name: String,
  url: String,
});

module.exports = mongoose.model('News', newsSchema);