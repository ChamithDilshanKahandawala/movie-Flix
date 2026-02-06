export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?language=en-US&page=1`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("TMDB Error:", response.status, errorText);
      throw new Error(
        `TMDB API Error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    console.log("Movies fetched:", data?.results?.length);

    return data?.results || [];
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const saveMovieSearch = async (movie: any) => {
  const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL || "http://localhost:5000";
  
  try {
    const response = await fetch(`${BACKEND_URL}/api/search/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        movieId: movie.id,
        movieTitle: movie.title,
        posterPath: movie.poster_path,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to save search: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Search saved:", data);
    return data;
  } catch (error) {
    console.error("Failed to save search:", error);
    throw error;
  }
};

export const getTrendingMovies = async () => {
  const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL || "http://localhost:5000";
  
  try {
    console.log(`Fetching from: ${BACKEND_URL}/api/search/trending`);
    
    const response = await fetch(`${BACKEND_URL}/api/search/trending`);
    
    console.log("Response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`Failed to fetch trending: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Trending movies fetched:", data?.length);
    return data || [];
  } catch (error) {
    console.error("Failed to fetch trending:", error);
    throw error;
  }
};

{
  /* Example standalone fetch usage 
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Nzc2OGQxOTM5ODVjYmVlMmNiMjdlN2M2YTAxMzY1NiIsIm5iZiI6MTcyMTE1OTQ5NC42ODcsInN1YiI6IjY2OTZjZjQ2NjJkZjI3YzcyNWJlNzdjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dTLvcGUjwrRYZO5P4wJBIPcOVZRb9AKRw3ltjvQrA74'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
  */
}

export const getTrendingMoviesFromDB = async () => {
  try {
    const response = await fetch('http://YOUR_BACKEND_URL/api/search/trending');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch trending:', error);
    throw error;
  }
};


export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
  try {
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}`, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("TMDB Error:", response.status, errorText);
      throw new Error(`TMDB API Error: ${response.status} ${response.statusText}`);
    }else{
      const data = await response.json();
      console.log("Movie details fetched:", data);
      return data;
    }
  }catch (error){
    console.log(error);
    throw error;
  }
}