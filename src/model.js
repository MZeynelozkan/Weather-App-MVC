import { async } from "regenerator-runtime";
import { API_KEY } from "./helper.js";
import { fetchDatas } from "./helper.js";

export const state = {
  main: {},
  weather: {},
};

export async function fetchData(value) {
  try {
    const data = await fetchDatas(value);
    state.main = {
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
    };

    state.weather = {
      main: data.weather[0].main,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    console.error(error);
  }
}
