import renderWeatherDetails from "./details/renderWeatherDetails.mjs";
import renderWeatherForecast from "./forecast/renderWeatherForecast.mjs";
import renderWeatherPrimary from "./primary/renderWeatherPrimary.mjs";

export default function renderWeather(props) {
  return /*html*/ `
    <div class="container">
      <div class="weather">
        ${renderWeatherPrimary(props)}
        <div class="weather__additional-info">
          ${renderWeatherDetails(props)}
          ${renderWeatherForecast(props)}
        </div>
      </div>
    </div>
  `;
}
