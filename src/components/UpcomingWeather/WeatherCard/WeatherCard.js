import React from "react";

import { View, Text } from "react-native";
import moment from "moment";

import { Feather } from "@expo/vector-icons";

import { styles } from "./style";
import { weatherType } from "../../../utilities/weatherType";

const WeatherCard = ({ weather }) => {
  const { dt_txt } = weather;
  const { feels_like, humidity, pressure, temp_max, temp_min } = weather?.main;
  const { main } = weather?.weather[0];

  const date_convert = moment(dt_txt).format("D MMMM");
  const time_convert = moment(dt_txt).format("h:mm A");

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Feather name={weatherType[main].icon} size={50} color="black" />
        <View>
          <Text style={styles.description}>{main}</Text>
          <Text style={styles.dateText}>{date_convert}</Text>
          <Text style={styles.dateTime}>{time_convert}</Text>
          <Text style={styles.minMaxText}>
            {`Min: ${temp_min} Max: ${temp_max}`}
          </Text>
        </View>
        <View>
          <Text style={styles.otherText}>{`Feels Like: ${feels_like}`}</Text>
          <Text style={styles.otherText}>{`Pressure: ${pressure}`}</Text>
          <Text style={styles.otherText}>{`Humidity: ${humidity}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;
