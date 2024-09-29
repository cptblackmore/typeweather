# TypeWeather

[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Open-Meteo](https://img.shields.io/badge/Weather_by-Open_Meteo-orange.svg)](https://open-meteo.com/)
[![Geoapify](https://img.shields.io/badge/Search_by-Geoapify-49368a.svg)](https://www.geoapify.com/)
[![autoComplete.js](https://img.shields.io/badge/Input_with-autoComplete.js-eb5642.svg)](https://github.com/TarekRaafat/autoComplete.js)
![W3C](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fcptblackmore-typeweather.netlify.app%2F)
![status](https://img.shields.io/website?url=https%3A%2F%2Fcptblackmore-typeweather.netlify.app%2F)

Готовый пет-проект в виде простого сайта для просмотра прогноза погоды по введённому названию места. Создан мною с нуля по существующему общедоступному [макету](https://www.figma.com/design/Al6QzbeKiSoNHB95bHbmMC/TypeWeather-(Community)?node-id=3-376&t=1Zwxo7ViOBD21n7e-1).

> [Ссылка на демо](https://cptblackmore-typeweather.netlify.app)

## Возможности

- Поиск существующих мест через ввод с автопоиском и выбор из найденных вариантов
- Получение текущей погоды с подробностями по выбранному месту, а также краткого прогноза на следующие пять дней
- Возможность тут же узнать погоду в другом месте, используя поисковую строку в блоке с информацией о погоде
- Возвращение на главную по нажатию кнопки с логотипом

![Пример работы сайта](https://github.com/user-attachments/assets/aef58c09-8557-4f03-b7d6-cf49b0161dfb)

## Инструменты и подходы
При создании этого пет-проекта использовалось следующее:
- HTML/CSS/JS
- Webpack
- Различные плагины и загрузчики зависимостей для Webpack (css-loader, favicons-webpack-plugin и т.п.)
- [autoComplete.js](https://github.com/TarekRaafat/autoComplete.js) - небольшая библиотека для лёгкой реализации автозаполнения
- [Open-Meteo](https://open-meteo.com/) - сервис, предоставляющий бесплатный API с данными о погоде
- [Geoapify](https://www.geoapify.com/) - сервис, предоставляющий бесплатный тариф и API с данными о геолокации
- Figma (для вёрстки по [макету](https://www.figma.com/design/Al6QzbeKiSoNHB95bHbmMC/TypeWeather-(Community)?node-id=3-376&t=1Zwxo7ViOBD21n7e-1))
- БЭМ-нейминг
- Адаптивная вёрстка

![Пример интерфейса](https://github.com/user-attachments/assets/492cb507-d5c3-422b-b399-9a75943c4729)

## Установка и запуск

1. Клонируйте репозиторий: `git clone https://github.com/cptblackmore/typeweather`
2. Перейдите в директорию репозитория: `cd typeweather`
3. Установите зависимости: `npm install`
3. Запустите проект: `npm start`
4. Перейдите по [localhost:8080](http://localhost:8080/) на том же устройстве, либо с другого устройства в вашей сети, по появившемуся в терминале адресу.

## Особенности проекта

- Проект объединяет данные из двух API, сначала получая данные по поисковому запросу, а затем отправляя запрос с координатами выбранного варианта в сервис с погодой.
- Большая часть HTML разметки генерируется динамически с помощью кода. При отображении погоды/возвращении на главную меняется не вся страница, а только содержимое одного блока.
- Повторный выбор одних и тех же мест не приводит к повторным запросам, так как их координаты сохраняются в хранилище браузера (localStorage). Это добавляет быстродействия и экономит ограниченное количество запросов в Geopify.
- Open-Meteo не может предоставить полные данные по некоторым координатам из Geoapify из-за своих внутренних особенностей. В таких случаях в поисковой строке выводится ошибка.
- На данный момент Geoapify может предлагать лишние варианты (дубли, почтовые индексы).

### Идеи по улучшению

- Использование History API для удобного перемещения между главной и погодой.
- Создание динамического обновления информации о погоде с определённым интервалом, без необходимости повторять запрос вручную.
- Избавление от лишних/повторяющихся вариантов в поиске.

## Author

**Victor** *aka* **captain_blackmore**
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
