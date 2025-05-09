import introLogoIcon from "../../../assets/images/logo-full.svg";

export default function renderIntro() {
  return /*html*/ `
    <div class="intro">
      <div class="intro__logo">
        <img src="${introLogoIcon}" alt="TypeWeather" />
      </div>
      <h1 class="intro__title">
        Добро пожаловать в
        <span class="intro__title-highlighted">TypeWeather</span>
      </h1>
      <p class="intro__text">Напиши место, чтобы узнать прогноз погоды</p>
      <div class="intro__search">
        <form action="" class="search">
          <label class="search__loading">
            <p class="search__error"></p>
            <input
              class="search__input"
              id="autoComplete"
              type="search"
              placeholder="Поиск места"
              dir="ltr"
              spellcheck="false"
              autocorrect="off"
              autocomplete="off"
              autocapitalize="off"
              maxlength="2048"
              tabindex="1"
            />
          </label>
        </form>
      </div>
    </div>
  `;
}
