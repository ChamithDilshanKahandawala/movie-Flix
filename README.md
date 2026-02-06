🎬 Movie Flix

A sleek Expo-powered movie explorer with TMDB discovery, smart search, and MongoDB-driven trending history.

<p align="center"> <img src="https://img.shields.io/badge/version-1.0-blue.svg" /> <img src="https://img.shields.io/badge/platform-Expo%20%7C%20React%20Native-black.svg" /> <img src="https://img.shields.io/badge/license-MIT-green.svg" /> </p> <p align="center"> 🚀 Discover • 🔍 Search Smart • 📈 See What’s Trending </p>
📱 Preview

Add screenshots or a demo GIF here

![Movie Flix Preview](./assets/preview.gif)


(Tip: A short GIF massively boosts stars ⭐)

📚 Table of Contents

About

Features

Tech Stack

Getting Started

Environment Variables

API Routes

Roadmap

License

Credits

✨ About

Movie Flix is a modern mobile movie hub built with Expo and React Native.
It allows users to search, discover, and explore trending movies—powered by real user search history stored in MongoDB.

Designed with performance, simplicity, and clean UI in mind.

🚀 Features

✔ Browse latest & popular movies
✔ Fast debounced search experience
✔ Trending movies based on real user searches
✔ Detailed movie view (overview, rating, release date)
✔ Smooth tab-based navigation
✔ Clean & responsive UI

🧰 Tech Stack
Frontend

⚛️ Expo + React Native

🧭 Expo Router

🎨 NativeWind (Tailwind for RN)

Backend

🟢 Node.js + Express

🍃 MongoDB Atlas

🎥 TMDB API

⚙️ Getting Started
📲 Frontend Setup
npm install
npx expo start


Open on:

📱 Expo Go (physical device)

🤖 Android Emulator

🍎 iOS Simulator

🖥 Backend Setup
npm install
npm start


Server runs on port 5001

🔐 Environment Variables
Frontend (.env)
EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
EXPO_PUBLIC_BACKEND_URL=http://localhost:5001

Backend (.env)
MONGO_URI=your_mongodb_connection_string
PORT=5001

🔌 API Routes
Method	Endpoint	Description
POST	/api/search/save	Save user search history
GET	/api/search/trending	Get trending searches
🛣 Roadmap

⭐ Favorites screen

👤 User profiles

📦 Offline caching

🔔 Personalized recommendations

📄 License

This project is licensed under the MIT License.
Feel free to use, modify, and share.

🙌 Credits

🎬 TMDB API — movie data & images

🚀 Expo Team — amazing developer experience

