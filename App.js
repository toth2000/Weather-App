import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View, Text } from "react-native";

import Tabs from "./src/components/Tabs/Tabs";
import { themeColor } from "./theme";

import { styles } from "./style";

// import { API_KEY } from "@env";

import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
  const [isLoading, error, weather] = useGetWeather();

  return (
    <>
      {error ? (
        <View style={styles.container}>
          <Text style={styles.errorText}> {error} </Text>
        </View>
      ) : (
        <NavigationContainer>
          {isLoading ? (
            <View style={styles.container}>
              <ActivityIndicator size={"large"} color={themeColor.secodary} />
            </View>
          ) : (
            <Tabs weather={weather} />
          )}
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
