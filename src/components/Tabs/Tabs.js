import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import CurrentWeather from "../CurrentWeather/CurrentWeather";
import UpcomingWeather from "../UpcomingWeather/UpcomingWeather";
import { themeColor } from "../../../theme";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  console.log("weather data: ", weather);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarActiveTintColor: "grey",
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: themeColor.primary,
          shadowColor: themeColor.primary,
        },
        tabBarStyle: {
          backgroundColor: themeColor.textColor,
        },
      }}
    >
      <Tab.Screen
        name={"Weather"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"cloud"}
              size={25}
              color={focused ? themeColor.secondary : "grey"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weather={weather} />}
      </Tab.Screen>

      <Tab.Screen
        name={"Upcoming Forecast"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? themeColor.secondary : "grey"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weather={weather?.list} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
