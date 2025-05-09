# TypeWeather

[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Open-Meteo](https://img.shields.io/badge/Weather_by-Open_Meteo-orange.svg)](https://open-meteo.com/)
[![Geoapify](https://img.shields.io/badge/Search_by-Geoapify-49368a.svg)](https://www.geoapify.com/)
[![autoComplete.js](https://img.shields.io/badge/Input_with-autoComplete.js-eb5642.svg)](https://github.com/TarekRaafat/autoComplete.js)
![W3C](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fcptblackmore-typeweather.netlify.app%2F)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4cabdbd5-553e-4403-a3a5-038a5cc6f148/deploy-status)](https://app.netlify.com/sites/cptblackmore-typeweather/deploys)

- [English version of README](./README.en.md)

**TypeWeather** — простое SPA веб-приложение для просмотра прогноза погоды по введённому названию места. Интерфейс основан на общедоступном [макете в Figma](<https://www.figma.com/design/Al6QzbeKiSoNHB95bHbmMC/TypeWeather-(Community)?node-id=3-376&t=1Zwxo7ViOBD21n7e-1>).

> [Ссылка на демо](https://cptblackmore-typeweather.netlify.app)

## Возможности

- Поиск мест через ввод с автопоиском и выбор из найденных вариантов.
- Получение текущей погоды с подробностями по выбранному месту, включая краткий прогноз на следующие пять дней.
- Возможность тут же узнать погоду другого места, используя поисковую строку в блоке с информацией о погоде.
- Возвращение на главную по нажатию кнопки с логотипом.

![Пример работы](https://github.com/user-attachments/assets/aef58c09-8557-4f03-b7d6-cf49b0161dfb)

## Инструменты и подходы

#### Языки и архитектура

- **HTML / CSS / JavaScript** без фреймворков
- Использование **SPA-подхода**: одна страница, динамический контент без перезагрузки документа
    

#### Сборка и инструменты

- **Webpack** для сборки проекта
- Подключённые загрузчики:
    - `css-loader`  
    - `style-loader`   
    - `file-loader`    
    - `favicons-webpack-plugin`  
- **ESLint** с конфигурацией под **Prettier** для автоформатирования и контроля кодстайла

#### Внешние библиотеки

- [autoComplete.js](https://github.com/TarekRaafat/autoComplete.js) — библиотека для автозаполнения строки ввода с минимальной настройкой

#### API и источники данных

- [Open-Meteo](https://open-meteo.com/) — API прогноза погоды
- [Geoapify](https://www.geoapify.com/) — API геолокации по текстовому запросу

#### Дизайн и реализация

- Свёрстано по [макету TypeWeather на Figma](https://www.figma.com/design/Al6QzbeKiSoNHB95bHbmMC/TypeWeather-\(Community\)?node-id=3-376&t=1Zwxo7ViOBD21n7e-1)
- Стили написаны вручную, с использованием **БЭМ-нейминга**
- **Адаптивная вёрстка** с учётом разных экранов

![Адаптивность](https://github.com/user-attachments/assets/492cb507-d5c3-422b-b399-9a75943c4729)

## Установка и запуск

0. Перед началом убедитесь, что у вас есть:
    - Node.js версии **18 и выше** — [скачать с nodejs.org](https://nodejs.org/)
    - Git — [скачать с git-scm.com](https://git-scm.com/)
1. Клонируйте репозиторий: `git clone https://github.com/cptblackmore/typeweather`.
2. Перейдите в него: `cd typeweather`.
3. Установите зависимости: `npm install`.
4. Запустите проект: `npm start`.
5. После запуска Webpack в терминале появятся адреса для доступа к проекту:
    - `http://localhost:8080` — для текущего устройства
    - `http://<ваш-IP>:8080` — для других устройств в вашей локальной сети (например, для проверки с телефона)

## Особенности проекта

- **Двойной запрос к API**: Проект объединяет данные из двух API: сначала получая данные о местоположении по поисковому запросу, а затем отправляя запрос с координатами выбранного варианта в сервис с погодой.
- **Динамический интерфейс**: Весь UI рендерится динамически через JavaScript, без фреймворков. При смене экрана обновляется только содержимое одного контейнера.
- **Кэширование координат**: Повторы запросов к Geoapify исключены — координаты сохраняются в localStorage, что ускоряет работу и уменьшает нагрузку на API.
- **Обработка ошибок**: Open-Meteo не возвращает информацию по всем возможным координатам — в таких случаях отображается сообщение об ошибке в интерфейсе.
- **Шум в поиске**: API Geoapify может предлагать нерелевантные результаты (дубликаты, индексы) — ограничения бесплатного тарифа.

### Идеи по улучшению

- **Навигация через History API**: реализовать переходы между экранами без потери состояния и с возможностью использования кнопок «назад» и «вперёд» в браузере.
- **Автоматическое обновление данных**: периодически запрашивать актуальную информацию о погоде без необходимости ручного обновления.
- **Фильтрация результатов поиска**: исключать дублирующиеся и нерелевантные результаты (например, индексы и повторяющиеся названия) на этапе обработки данных с Geoapify.

## Author

**Victor** _aka_ **captain_blackmore**

- [Telegram](https://t.me/captain_blackmore)
- [Github](https://github.com/cptblackmore)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

### Acknowledgements

This project makes use of the following open-source libraries:

- [autoComplete.js](https://github.com/TarekRaafat/autoComplete.js) - Licensed under the [Apache 2.0](https://opensource.org/license/apache-2-0).

This project uses data from the following external sources:

- Weather data is provided by [Open-Meteo](https://open-meteo.com/) and licensed under the [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). No changes were made to the original data.
- Map data is provided by [OpenStreetMap](https://www.openstreetmap.org/copyright) with the support of [Geoapify](https://www.geoapify.com/) and licensed under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/1-0/).
