const mongoose = require('mongoose');

const searchHistorySchema = new mongoose.Schema({
  movieId: Number,
  movieTitle: String,
  posterPath: String,
  searchCount: {
    type: Number,
    default: 1
  },
  lastSearched: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SearchHistory', searchHistorySchema);