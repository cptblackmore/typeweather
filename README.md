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

###### Другие проекты

[![JobTracker](https://img.shields.io/badge/JobTracker-96b9ff.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA3MiA3Mic+DQogIDxyZWN0IHdpZHRoPSc3MicgaGVpZ2h0PSc3Micgcng9JzgnIGZpbGw9JyMzNzVFOTcnIC8+DQogIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUsIDUpJyBmaWxsPScjRUFGMkZGJz4NCiAgICA8cGF0aCBkPSdNMTEuNDAgNDlRNy44NSA0OSA0Ljg4IDQ3LjY3UTEuOTAgNDYuMzUgMCA0My45MEw0LjUwIDM4LjUwUTUuOTUgNDAuNDAgNy41NSA0MS4zOFE5LjE1IDQyLjM1IDExLjAwIDQyLjM1UTE1Ljk1IDQyLjM1IDE1Ljk1IDM2LjU1TDE1Ljk1IDE5LjkwTDMuNjUgMTkuOTBMMy42NSAxMy40MEwyNC4wMCAxMy40MEwyNC4wMCAzNi4xMFEyNC4wMCA0Mi42MCAyMC44MCA0NS44MFExNy42MCA0OSAxMS40MCA0OVpNMzkuMjUgNDguNDBMMzkuMjUgMjAuMDBMMjguMDUgMjAuMDBMMjguMDUgMTMuNDBMNTguNTUgMTMuNDBMNTguNTUgMjAuMDBMNDcuMzUgMjAuMDBMNDcuMzUgNDguNDBMMzkuMjUgNDguNDBaJy8+DQogIDwvZz4NCjwvc3ZnPg==)](https://github.com/cptblackmore/jobtracker) [![JobTracker Server](https://img.shields.io/badge/JobTracker-Server-96b9ff.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA3MiA3Mic+DQogIDxyZWN0IHdpZHRoPSc3MicgaGVpZ2h0PSc3Micgcng9JzgnIGZpbGw9JyMzNzVFOTcnIC8+DQogIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUsIDUpJyBmaWxsPScjRUFGMkZGJz4NCiAgICA8cGF0aCBkPSdNMTEuNDAgNDlRNy44NSA0OSA0Ljg4IDQ3LjY3UTEuOTAgNDYuMzUgMCA0My45MEw0LjUwIDM4LjUwUTUuOTUgNDAuNDAgNy41NSA0MS4zOFE5LjE1IDQyLjM1IDExLjAwIDQyLjM1UTE1Ljk1IDQyLjM1IDE1Ljk1IDM2LjU1TDE1Ljk1IDE5LjkwTDMuNjUgMTkuOTBMMy42NSAxMy40MEwyNC4wMCAxMy40MEwyNC4wMCAzNi4xMFEyNC4wMCA0Mi42MCAyMC44MCA0NS44MFExNy42MCA0OSAxMS40MCA0OVpNMzkuMjUgNDguNDBMMzkuMjUgMjAuMDBMMjguMDUgMjAuMDBMMjguMDUgMTMuNDBMNTguNTUgMTMuNDBMNTguNTUgMjAuMDBMNDcuMzUgMjAuMDBMNDcuMzUgNDguNDBMMzkuMjUgNDguNDBaJy8+DQogIDwvZz4NCjwvc3ZnPg==)](https://github.com/cptblackmore/jobtracker-server) [![React ToDo List](https://img.shields.io/badge/React_ToDo_List-13877b?logo=react)](https://github.com/cptblackmore/reacttodolist)

## Возможности

- Поиск мест через ввод с автопоиском и выбор из найденных вариантов.
- Получение текущей погоды с подробностями по выбранному месту, включая краткий прогноз на следующие пять дней.
- Возможность тут же узнать погоду другого места, используя поисковую строку в блоке с информацией о погоде.
- Возвращение на главную по нажатию кнопки с логотипом.

![Пример работы](https://github.com/user-attachments/assets/aef58c09-8557-4f03-b7d6-cf49b0161dfb)

## Стек

#### Языки и архитектура

- **HTML / CSS / JavaScript** без фреймворков
- Использование **SPA-подхода**: одна страница, динамический контент без перезагрузки документа
    
#### Сборка и разработка

- **Webpack** для сборки проекта и dev-сервера
- Подключённые загрузчики:
    - `css-loader`  
    - `style-loader`   
    - `file-loader`    
    - `favicons-webpack-plugin`  
- **ESLint** с конфигурацией под **Prettier** для контроля кодстайла

#### Библиотеки

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
1. Клонируйте репозиторий: `git clone https://github.com/cptblackmore/typeweather`
2. Перейдите в него: `cd typeweather`
3. Установите зависимости: `npm install`
4. Запустите проект: `npm start`
5. После запуска Webpack в терминале появятся адреса для доступа к проекту:
    - `http://localhost:8080` — для текущего устройства
    - `http://<ваш-IP>:8080` — для других устройств в вашей локальной сети (например, для проверки с телефона)

## Особенности проекта

- **Двойной запрос к API**: проект объединяет данные из двух API: сначала получая данные о местоположении по поисковому запросу, а затем отправляя запрос с координатами выбранного варианта в сервис с погодой.
- **Динамический интерфейс**: весь UI рендерится динамически через JavaScript, без фреймворков. При смене экрана обновляется только содержимое одного контейнера.
- **Кэширование координат**: повторы запросов к Geoapify исключены — координаты сохраняются в localStorage, что ускоряет работу и уменьшает нагрузку на API.
- **Обработка ошибок**: open-Meteo не возвращает информацию по всем возможным координатам — в таких случаях отображается сообщение об ошибке в интерфейсе.
- **Шум в поиске**: API Geoapify может предлагать нерелевантные результаты (дубликаты, индексы) — ограничения бесплатного тарифа.

## Планы по улучшению

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
