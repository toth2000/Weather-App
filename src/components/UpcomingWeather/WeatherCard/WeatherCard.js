import React from "react";

import { View, Text } from "react-native";
import { styles } from "./style";

import { Ionicons } from "@expo/vector-icons";

const WeatherCard = ({ date, temp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Ionicons name="partly-sunny" size={50} color="black" />
        <View>
          <Text style={styles.description}>Sunny Day</Text>
          <Text style={styles.dateText}>{date}</Text>
          <Text style={styles.minMaxText}>Min: 29 Max: 29</Text>
        </View>
        <View>
          <Text style={styles.otherText}>Feels Like: 29</Text>
          <Text style={styles.otherText}>Pressure: 29</Text>
          <Text style={styles.otherText}>Humidity: 29</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;
