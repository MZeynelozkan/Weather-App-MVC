import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import WeatherView from "./view.js";

async function controlWeather(value) {
  // Veri çekme
  await model.fetchData(value);

  // Şehir ismini state'e ekleme
  model.state.city = value;

  // Hava durumu render etme
  WeatherView.renderWeather(model.state);
}

// Enter tuşuna basıldığında event listener
document.querySelector(".input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    controlWeather(WeatherView.getValue());
  }
});
