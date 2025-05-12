import autoComplete from "@tarekraafat/autocomplete.js";
import { elementFadeIn, elementFadeOut } from "../animations.mjs";
import { loadingUI } from "../loadingUI.mjs";
import formatWeatherView from "./formatWeatherView.mjs";
import getCoordinates from "@/js/api/getCoordinates.mjs";
import getWeather from "@/js/api/getWeather.mjs";

export async function showWeatherView(element, event, query) {
  try {
    loadingUI.weather.show();

    const coordinates = await getCoordinates(query);
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    const weather = await getWeather(latitude, longitude);
    const weatherHTML = formatWeatherView(weather, query);

    await elementFadeOut(element);
    element.innerHTML = weatherHTML;

    const forecastItemDays = document.querySelectorAll(
      ".weather__forecast-item-day",
    );
    function changeItemDaysTextOnWidth() {
      const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ];
      const daysShort = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
      if (window.innerWidth <= 600) {
        forecastItemDays.forEach((day, index) => {
          const date = new Date(weather.dailyTime[index + 1]);
          day.textContent = daysShort[date.getDay()];
        });
      } else {
        forecastItemDays.forEach((day, index) => {
          if (index == 0) {
            day.textContent = "Завтра";
          } else {
            const date = new Date(weather.dailyTime[index + 1]);
            day.textContent = days[date.getDay()];
          }
        });
      }
    }
    window.addEventListener("resize", () => {
      changeItemDaysTextOnWidth();
    });
    changeItemDaysTextOnWidth();

    const autoCompleteJS = new autoComplete({
      selector: "#autoComplete",
      data: {
        src: async (query) => {
          try {
            let data = [];
            if (query.length >= 3) loadingUI.address.show();
            const response = await fetch(
              `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&lang=ru&apiKey=e3883b2201c74fe99dbd1ac36a442678`,
            );
            loadingUI.address.hide();
            const result = await response.json();
            data = result.features.map(
              (feature) => feature.properties.formatted,
            );

            return data;
          } catch (error) {
            document.querySelector(".search__error").textContent = `${error}`;
            return error;
          }
        },
      },
      debounce: 300,
      thresold: 3,
      resultsList: {
        maxResults: 3,
      },
      resultItem: {
        highlight: true,
      },
      events: {
        input: {
          selection: (event) => {
            const selection = event.detail.selection.value;
            autoCompleteJS.input.value = selection;
          },
          focus() {
            const inputValue = autoCompleteJS.input.value;

            if (inputValue.length) autoCompleteJS.start();
          },
        },
      },
    });
    elementFadeIn(element);
  } catch (error) {
    document.querySelector(".search__error").textContent = `Ошибка: ${error}`;
    loadingUI.weather.hide();
    event.target.value = "";
  }
}
