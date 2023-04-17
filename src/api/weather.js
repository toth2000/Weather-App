import { API } from ".";

const API_KEY = "";

export const getWeatherApiCall = ({ lat, lon }) => {
  console.log("lat: ", lat, " lon: ", lon);

  return API.get(`?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`);
};
