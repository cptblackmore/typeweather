# TypeWeather

[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Open-Meteo](https://img.shields.io/badge/Weather_by-Open_Meteo-orange.svg)](https://open-meteo.com/)
[![Geoapify](https://img.shields.io/badge/Location_by-Geoapify-49368a.svg)](https://www.geoapify.com/)
[![autoComplete.js](https://img.shields.io/badge/Search_with-autoComplete.js-eb5642.svg)](https://github.com/TarekRaafat/autoComplete.js)
![W3C](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fcptblackmore-typeweather.netlify.app%2F)
![status](https://img.shields.io/website?url=https%3A%2F%2Fcptblackmore-typeweather.netlify.app%2F)

Готовый пет-проект в виде простого сайта для просмотра прогноза погоды по введённому адресу. Создан мною с нуля по существующему общедоступному [макету](https://www.figma.com/design/Al6QzbeKiSoNHB95bHbmMC/TypeWeather-(Community)?node-id=3-376&t=1Zwxo7ViOBD21n7e-1).

> [Ссылка на демо](https://cptblackmore-typeweather.netlify.app)

## Возможности

- Поиск существующих мест через ввод с автопоиском и выбор из найденных вариантов
- Получение текущей погоды с подробностями по выбранному месту, а также краткого прогноза на следующие пять дней
- Возможность тут же узнать погоду в другом месте, используя поисковую строку в блоке с информацией о погоде
- Возвращение на главную по нажатию кнопки с логотипом

![Пример работы сайта](https://github.com/user-attachments/assets/aef58c09-8557-4f03-b7d6-cf49b0161dfb)

## Технологии/методологии/инструменты
При создании этого пет-проекта использовалось следующее:
- HTML/CSS/JS
- Webpack
- Различные плагины и загрузчики зависимостей для Webpack
- [autoComplete.js](https://github.com/TarekRaafat/autoComplete.js) - небольшая библиотека для лёгкой реализации автозаполнения
- [Open-Meteo](https://open-meteo.com/) - сервис, предоставляющий бесплатный API с данными о погоде
- [Geoapify](https://www.geoapify.com/) - сервис, предоставляющий бесплатный тариф и API с данными о геолокации
- Figma (для вёрстки с [макета](https://www.figma.com/design/Al6QzbeKiSoNHB95bHbmMC/TypeWeather-(Community)?node-id=3-376&t=1Zwxo7ViOBD21n7e-1))
- BEM-нейминг
- Адаптивная вёрстка

![Пример интерфейса](https://github.com/user-attachments/assets/492cb507-d5c3-422b-b399-9a75943c4729)

## Установка и запуск

1. Клонируйте репозиторий: `git clone https://github.com/cptblackmore/typeweather`
2. Перейдите в директорию репозитория: `cd typeweather`
3. Установите зависимости: `npm install`
3. Запустите проект: `npm start`
4. Перейдите по [localhost:8080](http://localhost:8080/) на том же устройстве, либо с другого устройства в вашей сети, по появившемуся в терминале адресу.

## Особенности проекта

- Проект объединяет данные из двух API, сначала получая данные по поисковому запросу, а затем отправляя запрос с координатами из выбранного варианта в сервис с погодой.
- Open-Meteo не может предоставить данные по некоторым предложенным вариантам из Geoapify из-за своих внутренних особенностей. В таких случаях в поисковой строке выводится ошибка.
- На данный момент Geoapify может предлагать лишние варианты (дубли, почтовые индексы).
- Большая часть HTML разметки генерируется кодом и при отображении погоды/возвращении на главную меняется не страница, а содержимое одного блока.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

### Acknowledgements

This project makes use of the following open-source libraries:
- [autoComplete.js](https://github.com/TarekRaafat/autoComplete.js) - Licensed under the [Apache 2.0](https://opensource.org/license/apache-2-0).

This project uses data from the following external sources:
- Weather data is provided by [Open-Meteo](https://open-meteo.com/) and licensed under the [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). No changes were made to the original data.
- Map data is provided by [OpenStreetMap](https://www.openstreetmap.org/copyright) with the support of [Geoapify](https://www.geoapify.com/) and licensed under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/1-0/).
