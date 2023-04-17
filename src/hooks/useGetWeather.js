import { useEffect, useState } from "react";

import * as Location from "expo-location";
import { getWeatherApiCall } from "../api/weather";

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState({});

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setError("Permission to access location was denied");
      setIsLoading(false);
      return;
    }

    let userLocation = await Location.getCurrentPositionAsync({});
    setLocation(userLocation);
  };

  const getWeather = async () => {
    try {
      const { data } = await getWeatherApiCall({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
      setWeather(data);
    } catch (error) {
      setIsLoading(false);
      console.log("API RES ERROR: ", error);
      setError("Error fetching data from server");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (!location) {
      setLocation({});
      return;
    }

    getWeather();
  }, [location]);

  return [isLoading, error, weather];
};
