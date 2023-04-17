import React from "react";

import { Text, View, SafeAreaView } from "react-native";

import { Feather } from "@expo/vector-icons";

import City from "../City/City";
import { styles } from "./style";
import { themeColor } from "../../../theme";
import { weatherType } from "../../utilities/weatherType";

const CurrentWeather = ({ weather }) => {
  const { feels_like, temp, temp_max, temp_min } = weather?.list[0]?.main;
  const { main } = weather?.list[0]?.weather[0];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <City city={weather?.city} />
      <View style={styles.container}>
        <Feather
          name={weatherType[main].icon}
          size={100}
          color={themeColor.textColor}
        />
        <Text style={styles.tempText}>{temp} &#8451;</Text>
        <Text style={styles.feelText}>
          {`Feels Like: ${feels_like}`} &#8451;
        </Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLowText}>{`High: ${temp_max}`} &#8451;</Text>
          <Text style={styles.highLowText}>{`Low: ${temp_min}`} &#8451;</Text>
        </View>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionText}>{main}</Text>
        <Text style={styles.messageText}>{weatherType[main].message}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;
