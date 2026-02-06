import MovieCard from "@/components/movieCard";
import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies, saveMovieSearch } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const router = useRouter();

  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeOut);
  }, [searchQuery]);

  const handleMoviePress = async (movie: any) => {
    try {
      // Save search to backend
      await saveMovieSearch(movie);
      console.log(`Search saved for: ${movie.title}`);
    } catch (error) {
      console.error("Error saving search:", error);
    }
    
    // Navigate to movie details
    router.push(`/movie/${movie.id}`);
  };

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0 "
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard {...item} onPress={() => handleMoviePress(item)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center items-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>

            <View className="mt-5">
              <SearchBar
                placeholder="Search Movies"
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color=" #0000ff"
                className="my-3"
              />
            )}
            {error && (
              <Text className="text-red-500 px-5 my-3  ">
                Eroor : {error.message}
              </Text>
            )}

            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className="text-xl text-white font-bold">
                Search Results for{" "}
                <Text className="text-accent">{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-gray-500 text-center mt-10">
                {searchQuery.trim()
                  ? "No movies found. Try a different search!"
                  : "Start typing to search for movies."}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
