const express = require('express');
const router = express.Router();
const SearchHistory = require('../models/searchHistory');

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Search routes are working!' });
});

// Save/update search
router.post('/save', async (req, res) => {
  try {
    const { movieId, movieTitle, posterPath } = req.body;
    
    let search = await SearchHistory.findOne({ movieId });
    
    if (search) {
      // Movie already searched - increment count
      search.searchCount += 1;
      search.lastSearched = new Date();
      await search.save();
    } else {
      // New movie search - create entry
      search = new SearchHistory({
        movieId,
        movieTitle,
        posterPath,
        searchCount: 1
      });
      await search.save();
    }
    
    res.json({ message: 'Search saved', search });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get trending (most searched)
router.get('/trending', async (req, res) => {
  try {
    const trending = await SearchHistory.find()
      .sort({ searchCount: -1 })
      .limit(10);
    
    res.json(trending);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
