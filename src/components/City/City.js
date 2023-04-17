import React from "react";

import { SafeAreaView, View, Text } from "react-native";
import moment from "moment";

import { Feather } from "@expo/vector-icons";

import { styles } from "./style";

const City = ({ city }) => {
  const sunrise_time = moment.unix(city?.sunrise).format("h:mm A");
  const sunset_time = moment.unix(city?.sunset).format("h:mm A");

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.cityText}>{city?.name}</Text>
        <Text style={styles.countryText}>{city.country}</Text>
        <View style={styles.iconWrapper}>
          <View style={styles.timeIconWrapper}>
            <Feather name="sunrise" size={40} color="black" />
            <Text style={styles.timeText}>{sunrise_time}</Text>
          </View>
          <View style={styles.timeIconWrapper}>
            <Feather name="sunset" size={40} color="black" />
            <Text style={styles.timeText}>{sunset_time}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default City;
