export default function renderWeatherDetailsItem({ name, icon, info }) {
  return /*html*/ `
    <div class="weather__details-item">
      <img src="${icon}" alt="" class="weather__details-item-icon" />
      <p class="weather__details-item-name">${name}</p>
      <p class="weather__details-item-info">${info}ºc</p>
    </div>
  `;
}
