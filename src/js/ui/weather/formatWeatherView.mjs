import { days, months } from "../../constants/date.mjs";
import { weatherConditionsText, WMOCodes } from "../../constants/weather.mjs";
import renderWeather from "./renderWeather.mjs";

export default function formatWeatherView(weather, query) {
  function defineWeatherState(weatherCode, weatherStandard) {
    for (let state in weatherStandard) {
      if (weatherStandard[state].includes(weatherCode)) {
        return state;
      }
    }
  }
  const currentIsDayText = weather.currentIsDay ? "day" : "night";
  const currentWeatherState = defineWeatherState(
    weather.currentWeatherCode,
    WMOCodes,
  );

  const date = new Date(weather.currentTime);
  const primaryWeatherBackgroundClass = `bg-${currentWeatherState}-${currentIsDayText}`;
  const primaryWeatherIconClass = `icon-${currentWeatherState}-${currentIsDayText}`;
  const primaryTemperature = weather.currentTemperature;
  const primaryTemperatureMax = weather.dailyTemperatureMax[0];
  const primaryTemperatureMin = weather.dailyTemperatureMin[0];
  const primaryWeatherCondition = weatherConditionsText[currentWeatherState];
  const primaryTime = weather.currentTime.split("T")[1];
  const primaryDay = days[date.getDay()];
  const primaryDate = `${primaryDay}, ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
  const detailsApparentTemperature = weather.currentApparentTemperature;
  const detailsPrecipitationProbability =
    weather.dailyPrecipitationProbability[0];
  const detailsWindSpeed = weather.currentWindSpeed;
  const detailsRelativeHumidity = weather.currentRelativeHumidity;
  const detailsUVIndex = weather.dailyUVIndex[0];

  const forecast = {};
  for (let i = 1; i < 6; i++) {
    const weatherState = defineWeatherState(
      weather.dailyWeatherCode[i],
      WMOCodes,
    );
    const date = new Date(weather.dailyTime[i]);
    forecast[i] = {
      day: days[date.getDay()],
      weatherIconClass: `icon-${weatherState}-day`,
      weatherCondition: weatherConditionsText[weatherState],
      weatherTemperatureMax: weather.dailyTemperatureMax[i],
      weatherTemperatureMin: weather.dailyTemperatureMin[i],
    };
  }

  const weatherHTML = renderWeather({
    query,
    primaryWeatherBackgroundClass,
    primaryDate,
    primaryTime,
    primaryTemperature,
    primaryTemperatureMax,
    primaryTemperatureMin,
    primaryWeatherCondition,
    primaryWeatherIconClass,
    detailsApparentTemperature,
    detailsPrecipitationProbability,
    detailsWindSpeed,
    detailsRelativeHumidity,
    detailsUVIndex,
    forecast,
  });

  return weatherHTML;
}
