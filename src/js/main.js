import '../styles/css/main.css';
import autoComplete from '@tarekraafat/autocomplete.js';
import introLogoIcon from '../assets/images/logo-full.svg';
import weatherDetailsApparentTemperatureIcon from '../assets/images/details-icons/apparent-temperature.svg';
import weatherDetailsPrecitipationProbabilityIcon from '../assets/images/details-icons/precipitation-probability.svg';
import weatherDetailsRelativeHumidityIcon from '../assets/images/details-icons/relative-humidity.svg';
import weatherDetailsUVIndexIcon from '../assets/images/details-icons/uv-index.svg';
import weatherDetailsWindSpeedIcon from '../assets/images/details-icons/wind-speed.svg';

const contentWrapper = document.querySelector('.content-wrapper');
document.addEventListener('DOMContentLoaded', () => {
    showIntro();
});
contentWrapper.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && event.target.id == 'autoComplete') {
        if (document.querySelector('[aria-selected="true"]') != null) {
            const query = document.querySelector(
                '[aria-selected="true"]'
            ).textContent;
            showWeather(event, query);
        }
    }
    if (event.key === 'Enter') {
        if (document.querySelector('#autoComplete_result_0') != null) {
            const autoCompleteFirstOption = document.querySelector(
                '#autoComplete_result_0'
            );
            const query = autoCompleteFirstOption.textContent;
            event.target.value = query;
            autoCompleteFirstOption.setAttribute('aria-selected', 'true');

            showWeather(event, query);
        }
    }
});
contentWrapper.addEventListener('click', (event) => {
    if (event.target.dataset.action == 'show-intro') {
        showIntro();
    }
    if (event.target.getAttribute('role') == 'option') {
        const query = event.target.textContent;
        showWeather(event, query);
    }
});

async function showIntro() {
    try {
        await fadeOut();
        contentWrapper.innerHTML = `<div class="intro">
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
    </div>`;
        const autoCompleteJS = new autoComplete({
            selector: '#autoComplete',
            data: {
                src: async (query) => {
                    try {
                        let data = [];
                        if (query.length >= 3) addAddressLoadingClass();
                        const response = await fetch(
                            `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&lang=ru&apiKey=e3883b2201c74fe99dbd1ac36a442678`
                        );
                        removeAddressLoadingClass();
                        const result = await response.json();
                        data = result.features.map(
                            (feature) => feature.properties.formatted
                        );
                        return data;
                    } catch (error) {
                        document.querySelector(
                            '.search__error'
                        ).textContent = `${error}`;
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
        fadeIn();
    } catch (error) {
        document.querySelector(
            '.search__error'
        ).textContent = `Ошибка: ${error}`;
    }
}

async function getCoordinates(query) {
    try {
        const storedCoordinates = localStorage.getItem(query);
        if (storedCoordinates) {
            const coordinatesArray = storedCoordinates.split(',');
            return [coordinatesArray[0], coordinatesArray[1]];
        } else {
            const response = await fetch(
                `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&lang=ru&type=city&apiKey=e3883b2201c74fe99dbd1ac36a442678`
            );
            const result = await response.json();
            if (result.features[0]) {
                const latitude = result.features[0].properties.lat;
                const longitude = result.features[0].properties.lon;
                const coordinates = [latitude, longitude];
                localStorage.setItem(query, coordinates);
                return coordinates;
            } else {
                throw new Error('Координаты отсутствуют');
            }
        }
    } catch (error) {
        throw error;
    }
}

async function getWeather(latitude, longitude) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,is_day,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&timezone=auto`
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
            dailyPrecipitationProbability:
                result.daily.precipitation_probability_max,
            dailyUVIndex: result.daily.uv_index_max,
            dailyWeatherCode: result.daily.weather_code,
        };

        return weather;
    } catch (error) {
        throw error;
    }
}

function setWeatherHTML(weather, query) {
    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ];
    const daysShort = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];
    const weatherConditionsText = {
        clear: 'Ясно',
        fewclouds: 'Облачно с прояснениями',
        cloudy: 'Пасмурно',
        rain: 'Дождь',
        storm: 'Гроза',
        snow: 'Снег',
    };
    const WMOCodes = {
        clear: [0, 1, 2],
        fewclouds: [3],
        cloudy: [
            4, 5, 6, 7, 8, 9, 11, 12, 18, 19, 28, 30, 31, 32, 33, 34, 35, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 76,
        ],
        rain: [
            14, 15, 16, 20, 21, 25, 50, 51, 52, 53, 54, 55, 58, 59, 60, 61, 62,
            63, 64, 65, 80, 81, 82, 91, 92,
        ],
        storm: [13, 17, 29, 95, 96, 97, 98, 99],
        snow: [
            22, 23, 24, 26, 27, 36, 37, 38, 39, 56, 57, 66, 67, 68, 69, 70, 71,
            72, 73, 74, 75, 77, 78, 79, 83, 84, 85, 86, 87, 88, 89, 90, 93, 94,
        ],
    };

    function defineWeatherState(weatherCode, weatherStandard) {
        for (let state in weatherStandard) {
            if (weatherStandard[state].includes(weatherCode)) {
                return state;
            }
        }
    }
    const currentIsDayText = weather.currentIsDay ? 'day' : 'night';
    const currentWeatherState = defineWeatherState(
        weather.currentWeatherCode,
        WMOCodes
    );

    const date = new Date(weather.currentTime);
    const primaryWeatherBackgroundClass = `bg-${currentWeatherState}-${currentIsDayText}`;
    const primaryWeatherIconClass = `icon-${currentWeatherState}-${currentIsDayText}`;
    const primaryTemperature = weather.currentTemperature;
    const primaryTemperatureMax = weather.dailyTemperatureMax[0];
    const primaryTemperatureMin = weather.dailyTemperatureMin[0];
    const primaryWeatherCondition = weatherConditionsText[currentWeatherState];
    const primaryTime = weather.currentTime.split('T')[1];
    const primaryDay = days[date.getDay()];
    const primaryDate = `${primaryDay}, ${date.getDate()} ${
        months[date.getMonth()]
    } ${date.getFullYear()}`;
    const detailsApparentTemperature = weather.currentApparentTemperature;
    const detailsPrecipitationProbability =
        weather.dailyPrecipitationProbability[0];
    const detailsWindSpeed = weather.currentWindSpeed;
    const detailsRelativeHumidity = weather.currentRelativeHumidity;
    const detailsUVIndex = weather.dailyUVIndex[0];

    const forecast = {};
    for (let i = 1; i < 6; i++) {
        const weatherState = defineWeatherState(
            weather.dailyWeatherCode[i],
            WMOCodes
        );
        const date = new Date(weather.dailyTime[i]);
        forecast[i] = {
            day: days[date.getDay()],
            weatherIconClass: `icon-${weatherState}-day`,
            weatherCondition: weatherConditionsText[weatherState],
            weatherTemperatureMax: weather.dailyTemperatureMax[i],
            weatherTemperatureMin: weather.dailyTemperatureMin[i],
        };
    }

    const weatherHTML = `<div class="container">
        <div class="weather">
            <div class="weather__primary">
                <div class="weather__primary-header">
                    <button class="weather__primary-logo-button" data-action="show-intro">
                    </button>
                    <div class="weather__primary-search">
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
                                    tabindex="0"
                                />
                            </label>
                        </form>
                    </div>
                </div>
                <main class="weather__primary-main ${primaryWeatherBackgroundClass}">
                    <div class="weather__primary-main-top">
                        <div
                            class="weather__primary-main-top-left"
                        >
                            <p
                                class="weather__primary-place"
                            >
                                ${query}
                            </p>
                            <p
                                class="weather__primary-date"
                            >
                                ${primaryDate}
                            </p>
                        </div>
                        <div
                            class="weather__primary-main-top-right"
                        >
                            <p
                                class="weather__primary-time"
                            >
                                ${primaryTime}
                            </p>
                        </div>
                    </div>
                    <div class="weather__primary-main-bottom">
                        <div
                            class="weather__primary-main-bottom-left"
                        >
                            <p
                                class="weather__primary-temperature"
                            >
                                ${primaryTemperature}ºc
                            </p>
                            <div class="weather__primary-info">
                                <p
                                    class="weather__primary-minmax-temperature"
                                >
                                    ${primaryTemperatureMax}ºc / ${primaryTemperatureMin}ºc
                                </p>
                                <p
                                    class="weather__primary-weather-condition"
                                >
                                    ${primaryWeatherCondition}
                                </p>
                            </div>
                        </div>
                        <div
                            class="weather__primary-main-bottom-right"
                        >
                            <img
                                alt=""
                                class="weather__primary-weather-icon ${primaryWeatherIconClass}"
                            />
                        </div>
                    </div>
                </main>
            </div>
            <div class="weather__additional-info">
                <div class="weather__details">
                    <h2 class="weather__details-title">
                        Подробности о погоде
                    </h2>
                    <div class="weather__details-item">
                        <img
                            src="${weatherDetailsApparentTemperatureIcon}"
                            alt=""
                            class="weather__details-item-icon"
                        />
                        <p class="weather__details-item-name">
                            Ощутимая температура
                        </p>
                        <p
                            class="weather__details-item-info"
                        >
                            ${detailsApparentTemperature}ºc
                        </p>
                    </div>
                    <div class="weather__details-item">
                        <img
                            src="${weatherDetailsPrecitipationProbabilityIcon}"
                            alt=""
                            class="weather__details-item-icon"
                        />
                        <p class="weather__details-item-name">
                            Вероятность осадков
                        </p>
                        <p
                            class="weather__details-item-info"
                        >
                            ${detailsPrecipitationProbability}%
                        </p>
                    </div>
                    <div class="weather__details-item">
                        <img
                            src="${weatherDetailsWindSpeedIcon}"
                            alt=""
                            class="weather__details-item-icon"
                        />
                        <p class="weather__details-item-name">
                            Скорость ветра
                        </p>
                        <p
                            class="weather__details-item-info"
                        >
                            ${detailsWindSpeed} km/h
                        </p>
                    </div>
                    <div class="weather__details-item">
                        <img
                            src="${weatherDetailsRelativeHumidityIcon}"
                            alt=""
                            class="weather__details-item-icon"
                        />
                        <p class="weather__details-item-name">
                            Влажность воздуха
                        </p>
                        <p
                            class="weather__details-item-info"
                        >
                            ${detailsRelativeHumidity}%
                        </p>
                    </div>
                    <div class="weather__details-item">
                        <img
                            src="${weatherDetailsUVIndexIcon}"
                            alt=""
                            class="weather__details-item-icon"
                        />
                        <p class="weather__details-item-name">
                            УФ Индекс
                        </p>
                        <p
                            class="weather__details-item-info"
                        >
                            ${detailsUVIndex}
                        </p>
                    </div>
                </div>
                <div class="weather__forecast">
                    <h2 class="weather__forecast-title">
                        Прогноз на 5 дней
                    </h2>
                    <div class="weather__forecast-wrapper">
                        <div class="weather__forecast-row">
                            <div class="weather__forecast-item">
                                <p
                                    class="weather__forecast-item-day"
                                >
                                    Завтра
                                </p>
                                <img
                                    alt=""
                                    class="weather__forecast-item-icon ${forecast[1].weatherIconClass}"
                                />
                                <p
                                    class="weather__forecast-weather-condition"
                                >
                                    ${forecast[1].weatherCondition}
                                </p>
                                <div
                                    class="weather__forecast-temperatures"
                                >
                                    <p
                                        class="weather__forecast-max-temperature"
                                    >
                                        ${forecast[1].weatherTemperatureMax}ºc
                                    </p>
                                    <p
                                        class="weather__forecast-min-temperature"
                                    >
                                        ${forecast[1].weatherTemperatureMin}ºc
                                    </p>
                                </div>
                            </div>
                            <div class="weather__forecast-item">
                                <p
                                    class="weather__forecast-item-day"
                                >
                                    ${forecast[2].day}
                                </p>
                                <img
                                    alt=""
                                    class="weather__forecast-item-icon ${forecast[2].weatherIconClass}"
                                />
                                <p
                                    class="weather__forecast-weather-condition"
                                >
                                    ${forecast[2].weatherCondition}
                                </p>
                                <div
                                    class="weather__forecast-temperatures"
                                >
                                    <p
                                        class="weather__forecast-max-temperature"
                                    >
                                        ${forecast[2].weatherTemperatureMax}ºc
                                    </p>
                                    <p
                                        class="weather__forecast-min-temperature"
                                    >
                                        ${forecast[2].weatherTemperatureMin}ºc
                                    </p>
                                </div>
                            </div>
                            <div class="weather__forecast-item">
                                <p
                                    class="weather__forecast-item-day"
                                >
                                    ${forecast[3].day}
                                </p>
                                <img
                                    alt=""
                                    class="weather__forecast-item-icon ${forecast[3].weatherIconClass}"
                                />
                                <p
                                    class="weather__forecast-weather-condition"
                                >
                                    ${forecast[3].weatherCondition}
                                </p>
                                <div
                                    class="weather__forecast-temperatures"
                                >
                                    <p
                                        class="weather__forecast-max-temperature"
                                    >
                                        ${forecast[3].weatherTemperatureMax}ºc
                                    </p>
                                    <p
                                        class="weather__forecast-min-temperature"
                                    >
                                        ${forecast[3].weatherTemperatureMin}ºc
                                    </p>
                                </div>
                            </div>
                            <div class="weather__forecast-item">
                                <p
                                    class="weather__forecast-item-day"
                                >
                                    ${forecast[4].day}
                                </p>
                                <img
                                    alt=""
                                    class="weather__forecast-item-icon ${forecast[4].weatherIconClass}"
                                />
                                <p
                                    class="weather__forecast-weather-condition"
                                >
                                    ${forecast[4].weatherCondition}
                                </p>
                                <div
                                    class="weather__forecast-temperatures"
                                >
                                    <p
                                        class="weather__forecast-max-temperature"
                                    >
                                        ${forecast[4].weatherTemperatureMax}ºc
                                    </p>
                                    <p
                                        class="weather__forecast-min-temperature"
                                    >
                                        ${forecast[4].weatherTemperatureMin}ºc
                                    </p>
                                </div>
                            </div>
                            <div class="weather__forecast-item">
                                <p
                                    class="weather__forecast-item-day"
                                >
                                    ${forecast[5].day}
                                </p>
                                <img
                                    alt=""
                                    class="weather__forecast-item-icon ${forecast[5].weatherIconClass}"
                                />
                                <p
                                    class="weather__forecast-weather-condition"
                                >
                                    ${forecast[5].weatherCondition}
                                </p>
                                <div
                                    class="weather__forecast-temperatures"
                                >
                                    <p
                                        class="weather__forecast-max-temperature"
                                    >
                                        ${forecast[5].weatherTemperatureMax}ºc
                                    </p>
                                    <p
                                        class="weather__forecast-min-temperature"
                                    >
                                        ${forecast[5].weatherTemperatureMin}ºc
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    return weatherHTML;
}

async function fadeOut() {
    if (contentWrapper.classList.contains('fade-out')) {
        return;
    }
    return new Promise((resolve) => {
        contentWrapper.classList.remove('fade-in');
        contentWrapper.classList.add('fade-out');
        contentWrapper.addEventListener('animationend', () => {
            resolve();
        });
    });
}
function fadeIn() {
    if (contentWrapper.classList.contains('fade-in')) {
        return;
    }
    contentWrapper.classList.remove('fade-out');
    contentWrapper.classList.add('fade-in');
}
function addAddressLoadingClass() {
    document
        .querySelector('.search__loading')
        .classList.add('is-address-loading');
}
function removeAddressLoadingClass() {
    document
        .querySelector('.search__loading')
        .classList.remove('is-address-loading');
}
function addWeatherLoadingClass() {
    document
        .querySelector('.search__loading')
        .classList.add('is-weather-loading');
}
function removeWeatherLoadingClass() {
    document
        .querySelector('.search__loading')
        .classList.remove('is-weather-loading');
}

async function showWeather(event, query) {
    try {
        addWeatherLoadingClass();
        // if (localStorage.getItem(query)) {
        //     console.log('Такие координаты уже есть, используем их');
        //     const coordinates = localStorage.getItem(query).split(',');
        //     console.log(coordinates);
        //     const weather = await getWeather(coordinates[0], coordinates[1]);
        //     console.log(weather);
        //     return weather;
        // } else {
        //     console.log('Таких координат ещё нет, получаем новые');
        //     const coordinates = await getCoordinates(query);
        //     localStorage.setItem(query, coordinates);
        //     const weather = await getWeather(coordinates[0], coordinates[1]);
        //     return weather;
        // }
        // console.log(coordinates);

        const coordinates = await getCoordinates(query);
        const latitude = coordinates[0];
        const longitude = coordinates[1];
        const weather = await getWeather(latitude, longitude);
        const weatherHTML = setWeatherHTML(weather, query);

        await fadeOut();
        contentWrapper.innerHTML = weatherHTML;

        const forecastItemDays = document.querySelectorAll(
            '.weather__forecast-item-day'
        );
        function changeItemDaysTextOnWidth() {
            const days = [
                'Воскресенье',
                'Понедельник',
                'Вторник',
                'Среда',
                'Четверг',
                'Пятница',
                'Суббота',
            ];
            const daysShort = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
            if (window.innerWidth <= 600) {
                forecastItemDays.forEach((day, index) => {
                    const date = new Date(weather.dailyTime[index + 1]);
                    day.textContent = daysShort[date.getDay()];
                });
            } else {
                forecastItemDays.forEach((day, index) => {
                    if (index == 0) {
                        day.textContent = 'Завтра';
                    } else {
                        const date = new Date(weather.dailyTime[index + 1]);
                        day.textContent = days[date.getDay()];
                    }
                });
            }
        }
        window.addEventListener('resize', () => {
            changeItemDaysTextOnWidth();
        });
        changeItemDaysTextOnWidth();

        const autoCompleteJS = new autoComplete({
            selector: '#autoComplete',
            data: {
                src: async (query) => {
                    try {
                        let data = [];
                        if (query.length >= 3) addAddressLoadingClass();
                        const response = await fetch(
                            `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&lang=ru&apiKey=e3883b2201c74fe99dbd1ac36a442678`
                        );
                        removeAddressLoadingClass();
                        const result = await response.json();
                        data = result.features.map(
                            (feature) => feature.properties.formatted
                        );

                        return data;
                    } catch (error) {
                        document.querySelector(
                            '.search__error'
                        ).textContent = `${error}`;
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
        fadeIn();
    } catch (error) {
        document.querySelector(
            '.search__error'
        ).textContent = `Ошибка: ${error}`;
        removeWeatherLoadingClass();
        event.target.value = '';
    }
}
