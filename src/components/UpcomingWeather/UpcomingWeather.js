import React from "react";

import { SafeAreaView, View, FlatList } from "react-native";

import { styles } from "./style";
import WeatherCard from "./WeatherCard/WeatherCard";

const UpcomingWeather = ({ weather }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
          data={weather}
          renderItem={({ item }) => <WeatherCard weather={item} />}
          keyExtractor={(item) => item?.dt}
        />
      </View>
    </SafeAreaView>
  );
};

export default UpcomingWeather;
