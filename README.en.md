# TypeWeather

[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Open-Meteo](https://img.shields.io/badge/Weather_by-Open_Meteo-orange.svg)](https://open-meteo.com/)
[![Geoapify](https://img.shields.io/badge/Search_by-Geoapify-49368a.svg)](https://www.geoapify.com/)
[![autoComplete.js](https://img.shields.io/badge/Input_with-autoComplete.js-eb5642.svg)](https://github.com/TarekRaafat/autoComplete.js)
![W3C](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fcptblackmore-typeweather.netlify.app%2F)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4cabdbd5-553e-4403-a3a5-038a5cc6f148/deploy-status)](https://app.netlify.com/sites/cptblackmore-typeweather/deploys)

- [Русская версия README](./README.md)

**TypeWeather** is a simple SPA web application for viewing weather forecasts based on a user-entered location. The UI is based on a publicly available [Figma design](https://www.figma.com/design/Al6QzbeKiSoNHB95bHbmMC/TypeWeather-%28Community%29?node-id=3-376&t=1Zwxo7ViOBD21n7e-1).

> [Live demo](https://cptblackmore-typeweather.netlify.app)

## Features

- Search for locations using autocomplete input with selectable suggestions.
- Check real-time weather conditions and a brief five-day forecast for the selected location.
- Quickly search another location from the same screen.
- Return to the home screen using the logo button.

![Example Usage](https://github.com/user-attachments/assets/aef58c09-8557-4f03-b7d6-cf49b0161dfb)

## Tools and Technologies

### Languages & Architecture

- **HTML / CSS / JavaScript** without frameworks
- **SPA architecture**: single-page layout with dynamic content updates

### Build & Tooling

- **Webpack** for bundling and development
- Loaders and plugins used:
    - `css-loader`
    - `style-loader`
    - `file-loader`
    - `favicons-webpack-plugin`
- **ESLint** configured with **Prettier** for consistent formatting and linting

### External Libraries

- [autoComplete.js](https://github.com/TarekRaafat/autoComplete.js) — lightweight autocomplete library with minimal setup

### APIs and Data Sources

- [Open-Meteo](https://open-meteo.com/) — free weather data API
- [Geoapify](https://www.geoapify.com/) — geolocation API for text-based search

### Design & Implementation

- The layout follows the community [TypeWeather Figma design](https://www.figma.com/design/Al6QzbeKiSoNHB95bHbmMC/TypeWeather-%28Community%29?node-id=3-376&t=1Zwxo7ViOBD21n7e-1)
- Custom CSS using **BEM naming convention**
- **Responsive layout** for different screen sizes

![Responsive Design](https://github.com/user-attachments/assets/492cb507-d5c3-422b-b399-9a75943c4729)

## Getting Started

0. Make sure you have:
    - **Node.js v18 or higher** — [download from nodejs.org](https://nodejs.org/)
    - **Git** — [download from git-scm.com](https://git-scm.com/)
1. Clone the repository: `git clone https://github.com/cptblackmore/typeweather`.
2. Navigate into the directory: `cd typeweather`.
3. Install dependencies: `npm install`.
4. Start the project: `npm start`.
5. Webpack will display local network access links in the terminal:
    - `http://localhost:8080` — for local testing
    - `http://<your-IP>:8080` — to test on another device in the same network (e.g. a smartphone)

## Project Highlights

- **Two-step API flow**: retrieves coordinates from Geoapify based on user input, then fetches weather data from Open-Meteo using those coordinates
- **Dynamic UI**: interface is rendered fully through JavaScript without frameworks; only one container updates during screen transitions
- **Coordinate caching**: previously searched locations are stored in `localStorage` to avoid repeat Geoapify requests and improve responsiveness
- **Error handling**: when Open-Meteo fails to return data for given coordinates, a clear error message is shown
- **Search result noise**: free-tier Geoapify may return duplicates or irrelevant results (e.g. postal codes)

### Improvement Ideas

- **History API navigation**: add browser history support for back/forward navigation between home and weather screens
- **Auto-refreshing weather**: periodically update weather data without manual interaction
- **Search result filtering**: post-process suggestions to remove duplicates or irrelevant entries from Geoapify

## Author

**Victor** *aka* **captain\_blackmore**

- [Telegram](https://t.me/captain_blackmore)
- [GitHub](https://github.com/cptblackmore)

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

### Acknowledgements

This project makes use of the following open-source libraries:

- [autoComplete.js](https://github.com/TarekRaafat/autoComplete.js) — licensed under [Apache 2.0](https://opensource.org/license/apache-2-0)

This project uses data from the following sources:

- Weather data provided by [Open-Meteo](https://open-meteo.com/) under the [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). Data used as-is.
- Map data from [OpenStreetMap](https://www.openstreetmap.org/copyright) via [Geoapify](https://www.geoapify.com/), licensed under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/1-0/)
