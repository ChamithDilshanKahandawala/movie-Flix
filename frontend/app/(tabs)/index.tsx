import TrendingCard from "../../components/trendingCard";
import MovieCard from "../../components/movieCard";
import SearchBar from "../../components/searchBar";
import { icons } from "../../constants/icons";
import { images } from "../../constants/images";
import { fetchMovies, getTrendingMovies } from "../../services/api";
import useFetch from "../../services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading : trendingMoviesLoading,
    error: trendingMovieErrors,
  } = useFetch(() => getTrendingMovies()); 

  const {
    data: movies,
    loading: moviesLoading,
    error: movieErrors,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary ">
      <Image source={images.bg} className="absolute w-full z-0" />

      {moviesLoading || trendingMoviesLoading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : movieErrors || trendingMovieErrors ? (
        <View className="flex-1 justify-center items-center px-5">
          <Text className="text-white">Error: {movieErrors?.message || trendingMovieErrors?.message}</Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id?.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 20,
            marginBottom: 10,
            paddingRight: 5,
          }}
          className="mt-2 pb-32"
          scrollEnabled={true}
          ListHeaderComponent={
            <View className="px-5">
              <Image
                source={icons.logo}
                className="w-12 h-10 mt-20 mb-5 mx-auto"
              />
              <SearchBar
                onPress={() => router.push("/search")}
                placeholder="Search for a movie"
              />

              {trendingMovies && (<View className="mt-10 ">
                <Text className="text-lg text-white font-bold mt-5 mb-3">
                  Trending Movies
                </Text>
              </View>
            )}
                
                <FlatList className="mt-3 mb-4 "
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={()=> <View className="W-4"/> }
                  data={trendingMovies}
                  renderItem = {({ item, index}) => (
                    <TrendingCard movie = {item}  index = {index}/>
                  )}
                  keyExtractor={(item)=> (item.movieId ?? item._id).toString()}
                />
             


              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
}
