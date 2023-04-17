import axios from "axios";

import { get_weather_data_url } from "../constants/url";

export const API = axios.create({
  baseURL: `${get_weather_data_url}`,
});
