function getLoadingElement() {
  return document.querySelector(".search__loading");
}

function toggleLoadingClass(type, shouldAdd) {
  const el = getLoadingElement();
  if (!el) return;

  const classMap = {
    address: "is-address-loading",
    weather: "is-weather-loading",
  };

  const className = classMap[type];
  if (!className) return;

  el.classList.toggle(className, shouldAdd);
}

export const loadingUI = {
  weather: {
    show: () => toggleLoadingClass("weather", true),
    hide: () => toggleLoadingClass("weather", false),
  },
  address: {
    show: () => toggleLoadingClass("address", true),
    hide: () => toggleLoadingClass("address", false),
  },
};
