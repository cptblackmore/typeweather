# TypeWeather

[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Open-Meteo](https://img.shields.io/badge/Weather_by-Open_Meteo-orange.svg)](https://open-meteo.com/)
[![Geoapify](https://img.shields.io/badge/Search_by-Geoapify-49368a.svg)](https://www.geoapify.com/)
[![autoComplete.js](https://img.shields.io/badge/Input_with-autoComplete.js-eb5642.svg)](https://github.com/TarekRaafat/autoComplete.js)
![W3C](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fcptblackmore-typeweather.netlify.app%2F)
![status](https://img.shields.io/website?url=https%3A%2F%2Fcptblackmore-typeweather.netlify.app%2F)

- [Русская версия README](./README.md)

A finished pet project: a simple weather forecast website allowing users to get weather data for a specified location. Created from scratch based on a publicly available [design template](https://www.figma.com/design/Al6QzbeKiSoNHB95bHbmMC/TypeWeather-(Community)?node-id=3-376&t=1Zwxo7ViOBD21n7e-1).

> [Live Demo](https://cptblackmore-typeweather.netlify.app)

## Features

- Search for locations using an input field with autocomplete and select from suggestions.  
- Get the current weather with detailed information for the selected location, as well as a short five-day forecast.  
- Search for a new location directly from the weather information section.  
- Return to the homepage by clicking the logo button.  

![Example Usage](https://github.com/user-attachments/assets/aef58c09-8557-4f03-b7d6-cf49b0161dfb)

## Tools and Approaches

The following technologies and tools were used to create this project:
- HTML/CSS/JS  
- Webpack  
- Various Webpack plugins and loaders (css-loader, favicons-webpack-plugin, etc.)  
- [autoComplete.js](https://github.com/TarekRaafat/autoComplete.js) - a lightweight library for implementing autocomplete functionality.  
- [Open-Meteo](https://open-meteo.com/) - a free API providing weather data.  
- [Geoapify](https://www.geoapify.com/) - a service with free tier and API for geolocation data.  
- Figma (to implement the layout based on the [design template](https://www.figma.com/design/Al6QzbeKiSoNHB95bHbmMC/TypeWeather-(Community)?node-id=3-376&t=1Zwxo7ViOBD21n7e-1))  
- BEM naming convention  
- Responsive design 

![Responsive Design](https://github.com/user-attachments/assets/492cb507-d5c3-422b-b399-9a75943c4729)

## Getting Started

1. Clone the repository: `git clone https://github.com/cptblackmore/typeweather`  
2. Navigate to the repository directory: `cd typeweather`  
3. Install dependencies: `npm install`  
4. Start the project: `npm start`  
5. Open [localhost:8080](http://localhost:8080/) on the same device, or use the terminal-provided address to access from another device on your network.  

## Project Highlights

- Combines data from two APIs by first retrieving location data based on search input, then sending the selected location's coordinates to a weather API.  
- Most HTML is dynamically generated via code. Only the content of a single block changes when switching between the homepage and the weather view.  
- Re-selecting previously chosen locations does not trigger additional API requests as their coordinates are stored in the browser's localStorage, enhancing speed and conserving limited Geoapify queries.  
- Open-Meteo may lack data for some coordinates provided by Geoapify due to internal limitations. In such cases, an error is displayed in the search bar.  
- Geoapify may suggest duplicate or unnecessary options (e.g., postal codes).  

### Improvement Ideas

- Utilize the History API for easier navigation between the homepage and weather views.  
- Add dynamic updates of weather information at set intervals without requiring manual refresh.  
- Eliminate duplicate or redundant search suggestions.  

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
