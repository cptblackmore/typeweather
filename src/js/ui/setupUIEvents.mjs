import { showIntroView } from "./intro/showIntroView.mjs";
import { showWeatherView } from "./weather/showWeatherView.mjs";

export function setupUIEvents() {
  const contentWrapper = document.querySelector(".content-wrapper");
  document.addEventListener("DOMContentLoaded", () => {
    showIntroView(contentWrapper);
  });
  contentWrapper.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    if (event.target.id == "autoComplete") {
      if (document.querySelector('[aria-selected="true"]') != null) {
        const query = document.querySelector(
          '[aria-selected="true"]',
        ).textContent;
        showWeatherView(contentWrapper, event, query);
      }
    }
    if (document.querySelector("#autoComplete_result_0") !== null) {
      const autoCompleteFirstOption = document.querySelector(
        "#autoComplete_result_0",
      );
      const query = autoCompleteFirstOption.textContent;
      event.target.value = query;
      autoCompleteFirstOption.setAttribute("aria-selected", "true");
      showWeatherView(contentWrapper, event, query);
    }
  });
  contentWrapper.addEventListener("click", (event) => {
    if (event.target.dataset.action === "show-intro") {
      showIntroView(contentWrapper);
    }
    if (event.target.getAttribute("role") === "option") {
      const query = event.target.textContent;
      showWeatherView(contentWrapper, event, query);
    }
  });
}
