export default function renderWeatherPrimary({
  query,
  primaryWeatherBackgroundClass,
  primaryDate,
  primaryTime,
  primaryTemperature,
  primaryTemperatureMax,
  primaryTemperatureMin,
  primaryWeatherCondition,
  primaryWeatherIconClass,
}) {
  return /*html*/ `
    <div class="weather__primary">
      <div class="weather__primary-header">
        <button class="weather__primary-logo-button" data-action="show-intro"></button>
        <div class="weather__primary-search">
          <form action="" class="search">
            <label class="search__loading">
              <p class="search__error"></p>
              <input class="search__input" id="autoComplete" type="search" placeholder="Поиск места" dir="ltr" spellcheck="false" autocorrect="off" autocomplete="off" autocapitalize="off" maxlength="2048" tabindex="0" />
            </label>
          </form>
        </div>
      </div>
      <main class="weather__primary-main ${primaryWeatherBackgroundClass}">
        <div class="weather__primary-main-top">
          <div class="weather__primary-main-top-left">
            <p class="weather__primary-place"> ${query} </p>
            <p class="weather__primary-date"> ${primaryDate} </p>
          </div>
          <div class="weather__primary-main-top-right">
            <p class="weather__primary-time"> ${primaryTime} </p>
          </div>
        </div>
        <div class="weather__primary-main-bottom">
          <div class="weather__primary-main-bottom-left">
            <p class="weather__primary-temperature"> ${primaryTemperature}ºc </p>
            <div class="weather__primary-info">
              <p class="weather__primary-minmax-temperature"> ${primaryTemperatureMax}ºc / ${primaryTemperatureMin}ºc </p>
              <p class="weather__primary-weather-condition"> ${primaryWeatherCondition} </p>
            </div>
          </div>
          <div class="weather__primary-main-bottom-right">
            <img alt="" class="weather__primary-weather-icon ${primaryWeatherIconClass}" />
          </div>
        </div>
      </main>
    </div>
  `;
}
