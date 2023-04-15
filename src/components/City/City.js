import React from "react";

import { SafeAreaView, View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

import { styles } from "./style";

const City = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.cityText}>Silchar, Assam</Text>
        <Text style={styles.countryText}>India</Text>
        <View style={styles.iconWrapper}>
          <View style={styles.timeIconWrapper}>
            <Feather name="sunrise" size={40} color="black" />
            <Text style={styles.timeText}>6 am</Text>
          </View>
          <View style={styles.timeIconWrapper}>
            <Feather name="sunset" size={40} color="black" />
            <Text style={styles.timeText}>5 pm</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default City;
