import { icons } from "../constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const movieCard = ({
  id,
  poster_path,
  release_date,
  title,
  vote_average,
  onPress,
}: Movie & { onPress?: () => void }) => {
  const card = (
    <TouchableOpacity className="w-[30%]" onPress={onPress}>
      <Image
        source={{
          uri: poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://placeholder.co/600x400/1a1a1a/ffffff.png`,
        }}
        className="w-full h-52 rounded-lg "
        resizeMode="cover"
      />
      <Text className="text-white text-sm text-bold  mt-2 " numberOfLines={1}>
        {title}
      </Text>
      <View className="flex-row items-center justify-start gap-x-1">
        <Image source={icons.star} className="size-4" />
        <Text className="text-white text-xs font-bold uppercase">
          {Math.round(vote_average / 2)}
        </Text>
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="text-light-300 uppercase text-xs mt-1">
          {release_date?.split("-")[0]}
        </Text>
        <Text className="text-light-300">Movie</Text>
      </View>
    </TouchableOpacity>
  );

  return onPress ? card : (
    <Link href={`/movie/${id}`} asChild>
      {card}
    </Link>
  );
};

export default movieCard;
