import renderWeatherForecastItem from "./renderWeatherForecastItem.mjs";

export default function renderWeatherForecast({ forecast }) {
  return /*html*/ `
    <div class="weather__forecast">
      <h2 class="weather__forecast-title"> Прогноз на 5 дней </h2>
      <div class="weather__forecast-wrapper">
        <div class="weather__forecast-row">
          ${[1, 2, 3, 4, 5].map((item) => renderWeatherForecastItem(forecast[item], item === 1)).join("")}
        </div>
      </div>
    </div>
  `;
}
