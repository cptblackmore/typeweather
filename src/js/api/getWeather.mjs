export default async function getWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,is_day,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&timezone=auto`,
  );
  const result = await response.json();
  const weather = {
    currentTemperature: result.current.temperature_2m,
    currentTime: result.current.time,
    currentIsDay: result.current.is_day,
    currentWeatherCode: result.current.weather_code,
    currentApparentTemperature: result.current.apparent_temperature,
    currentRelativeHumidity: result.current.relative_humidity_2m,
    currentWindSpeed: result.current.wind_speed_10m,
    dailyTemperatureMin: result.daily.temperature_2m_min,
    dailyTemperatureMax: result.daily.temperature_2m_max,
    dailyTime: result.daily.time,
    dailyPrecipitationProbability: result.daily.precipitation_probability_max,
    dailyUVIndex: result.daily.uv_index_max,
    dailyWeatherCode: result.daily.weather_code,
  };

  return weather;
}
