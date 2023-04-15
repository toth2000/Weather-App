import React from "react";

import { Text, View, SafeAreaView } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./style";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Ionicons name="sunny-outline" size={100} color="black" />
        <Text style={styles.tempText}>6</Text>
        <Text style={styles.feelText}>Feels Like 3</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLowText}>High: 5</Text>
          <Text style={styles.highLowText}>Low: 10</Text>
        </View>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionText}>It's Sunny</Text>
        <Text style={styles.messageText}>It's Perferct Sleeping Weather</Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;
