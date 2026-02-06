import MaskedView from "@react-native-masked-view/masked-view";
import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { images } from "../constants/images";

const TrendingCard = ({
  movie: { movieId, posterPath, movieTitle },
  index,
}: TrendingCardProps) => {
  const id = movieId;
  const poster = posterPath;
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-32 pl-5">
        <Image
          source={{
            uri: poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : "https://placeholder.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />

        <View className="absolute bottom-2 -left-3.5 px-2 py-1 mb-6 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-bold text-white text-6xl">{index + 1}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>

        <Text className="text-light-200 text-sm font-bold mt-2 ml-2" numberOfLines={2}>
          {movieTitle}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;