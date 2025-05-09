export default function renderWeatherForecastItem(item, isTomorrow = false) {
  return /*html*/ `
    <div class="weather__forecast-item">
      <p class="weather__forecast-item-day">${isTomorrow ? "Завтра" : item.day}</p>
      <img alt="" class="weather__forecast-item-icon ${item.weatherIconClass}" />
      <p class="weather__forecast-weather-condition">${item.weatherCondition}</p>
      <div class="weather__forecast-temperatures">
        <p class="weather__forecast-max-temperature">${item.weatherTemperatureMax}ºc</p>
        <p class="weather__forecast-min-temperature">${item.weatherTemperatureMin}ºc</p>
      </div>
    </div>
  `;
}
