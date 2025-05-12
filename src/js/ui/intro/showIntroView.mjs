import autoComplete from "@tarekraafat/autocomplete.js";
import { elementFadeIn, elementFadeOut } from "../animations.mjs";
import { loadingUI } from "../loadingUI.mjs";
import renderIntro from "./renderIntro.mjs";

export async function showIntroView(element) {
  try {
    await elementFadeOut(element);
    element.innerHTML = renderIntro();
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
  }
}
