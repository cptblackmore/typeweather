import renderWeatherDetailsItem from "./renderWeatherDetailsItem.mjs";

export default function renderWeatherDetails({
  weatherDetailsApparentTemperatureIcon,
  weatherDetailsPrecitipationProbabilityIcon,
  weatherDetailsWindSpeedIcon,
  weatherDetailsRelativeHumidityIcon,
  weatherDetailsUVIndexIcon,
  detailsApparentTemperature,
  detailsPrecipitationProbability,
  detailsWindSpeed,
  detailsRelativeHumidity,
  detailsUVIndex,
}) {
  const items = [
    {
      icon: weatherDetailsApparentTemperatureIcon,
      name: "Ощутимая температура",
      info: `${detailsApparentTemperature}ºc`,
    },
    {
      icon: weatherDetailsPrecitipationProbabilityIcon,
      name: "Вероятность осадков",
      info: `${detailsPrecipitationProbability}%`,
    },
    {
      icon: weatherDetailsWindSpeedIcon,
      name: "Скорость ветра",
      info: `${detailsWindSpeed} km/h`,
    },
    {
      icon: weatherDetailsRelativeHumidityIcon,
      name: "Влажность воздуха",
      info: `${detailsRelativeHumidity}%`,
    },
    {
      icon: weatherDetailsUVIndexIcon,
      name: "УФ Индекс",
      info: detailsUVIndex,
    },
  ];

  return /*html*/ `
    <div class="weather__details">
      <h2 class="weather__details-title"> Подробности о погоде </h2>
      ${items.map((item) => renderWeatherDetailsItem({ ...item })).join("")}
    </div>
  `;
}
