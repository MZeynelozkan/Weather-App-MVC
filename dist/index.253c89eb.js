"use strict";
const parentEl = document.querySelector(".cardContainer");
async function fetchData(name) {
    try {
        // fetch data
        const APIkey = "15e922b5a372911afa02459b6bf08702";
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIkey}`);
        if (!res.ok) {
            console.error("Error fetching the data");
            return;
        }
        const data = await res.json();
        let { main, weather } = data;
        main = {
            feelsLike: main.feels_like,
            humidity: main.humidity,
            temp: main.temp,
            tempMax: main.temp_max,
            tempMin: main.temp_min
        };
        weather = {
            id: weather[0].id,
            main: weather[0].main,
            description: weather[0].description,
            icon: weather[0].icon
        };
        // render card
        parentEl.innerHTML = "";
        const html = `
    <div class="card">
        <p class="city">${name}</p>
        <p class="weather">${weather.main}</p>
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
            href="https://openweathermap.org/img/wn/${weather.icon}@2x.png"
          ></image>
        </svg>
        <p class="temp">${main.temp}</p>
        <div class="minmaxContainer">
          <div class="min">
            <p class="minHeading">min</p>
            <p class="minTemp">${main.tempMin}</p>
          </div>
          <div class="max">
            <p class="maxHeading">max</p>
            <p class="maxTemp">${main.tempMax}</p>
          </div>
        </div>
      </div>
      `;
        parentEl.insertAdjacentHTML("afterbegin", html);
        console.log(main, weather);
    } catch (error) {
        console.error(error);
    }
}
fetchData("ankara");

//# sourceMappingURL=index.253c89eb.js.map
