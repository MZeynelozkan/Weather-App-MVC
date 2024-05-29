import { kelvinToCelcius } from "./helper.js";

class WeatherView {
  #parentElement = document.querySelector(".cardContainer");
  #data;

  renderWeather(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#clearInput();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #getValue() {
    return document.querySelector(".input").value.trim();
  }

  handleTextInput(callback) {
    document.querySelector(".input").addEventListener(
      "keydown",
      function (e) {
        if (e.key === "Enter") {
          const value = this.#getValue();
          callback(value);
        }
      }.bind(this)
    );
  }

  #clearInput() {
    return (document.querySelector(".input").value = "");
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup() {
    return `
      <div class="card">
        <p class="city">${this.#data.city}</p>
        <p class="weather">${this.#data.weather.main}</p>
        <svg
          class="weather"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          xml:space="preserve"
        >
          <image
            id="image0"
            width="100"
            height="100"
            x="0"
            y="0"
            href="https://openweathermap.org/img/wn/${
              this.#data.weather.icon
            }@2x.png"
          ></image>
        </svg>
        <p class="temp">${kelvinToCelcius(this.#data.main.temp)}</p>
        <div class="minmaxContainer">
          <div class="min">
            <p class="minHeading">min</p>
            <p class="minTemp">${kelvinToCelcius(this.#data.main.tempMin)}</p>
          </div>
          <div class="max">
            <p class="maxHeading">max</p>
            <p class="maxTemp">${kelvinToCelcius(this.#data.main.tempMax)}</p>
          </div>
        </div>
      </div>
    `;
  }
}

export default new WeatherView();
