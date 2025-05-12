import renderWeatherDetailsItem from "./renderWeatherDetailsItem.mjs";
import weatherDetailsApparentTemperatureIcon from "@assets/images/details-icons/apparent-temperature.svg";
import weatherDetailsPrecitipationProbabilityIcon from "@assets/images/details-icons/precipitation-probability.svg";
import weatherDetailsRelativeHumidityIcon from "@assets/images/details-icons/relative-humidity.svg";
import weatherDetailsUVIndexIcon from "@assets/images/details-icons/uv-index.svg";
import weatherDetailsWindSpeedIcon from "@assets/images/details-icons/wind-speed.svg";

export default function renderWeatherDetails({
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
