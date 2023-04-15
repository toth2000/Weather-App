import react from "react";

import { SafeAreaView, View, Text, FlatList } from "react-native";

import { styles } from "./style";
import WeatherCard from "./WeatherCard/WeatherCard";

const data = [
  {
    id: 1,
    temp: 25,
    date: "25th Feb",
  },
  {
    id: 2,
    temp: 22,
    date: "26th Feb",
  },
  {
    id: 3,
    temp: 28,
    date: "27th Feb",
  },
  {
    id: 4,
    temp: 30,
    date: "28th Feb",
  },
];

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Upcoming Days Weather Forecast</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <WeatherCard date={item.date} temp={item.temp} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default UpcomingWeather;
