Movie Flix
A sleek Expo movie explorer with TMDB discovery, smart search, and MongoDB‑powered trending history.

Badges
• version 1.0
• license MIT
• platform Expo / React Native

Preview
Add a screenshot or demo GIF here.

Table of Contents

About
Features
Tech Stack
Getting Started
Environment Variables
API Routes
Roadmap
License
About
Movie Flix is a modern mobile movie hub built with Expo. Search, discover, and surface trending picks based on real user history.
Features
• Browse latest movies
• Fast search with debounce
• Trending list based on user searches
• Movie details view
• Clean tab navigation

Tech Stack
• Expo + React Native
• Expo Router
• NativeWind
• Node.js + Express
• MongoDB Atlas
• TMDB API

Getting Started
Frontend

Install dependencies
Start Expo
Open on device or simulator
Backend

Install dependencies
Add MongoDB connection string
Start server (port 5001)
Environment Variables
Frontend
• EXPO_PUBLIC_MOVIE_API_KEY
• EXPO_PUBLIC_BACKEND_URL

Backend
• MONGO_URI
• PORT

API Routes
• POST /api/search/save
• GET /api/search/trending

Roadmap
• Favorites screen
• User profiles
• Offline caching

License
MIT

Credits
TMDB API for movie data.
