export default async function getCoordinates(query) {
  const storedCoordinates = localStorage.getItem(query);
  if (storedCoordinates) {
    const coordinatesArray = storedCoordinates.split(",");
    return [coordinatesArray[0], coordinatesArray[1]];
  } else {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&lang=ru&type=city&apiKey=e3883b2201c74fe99dbd1ac36a442678`,
    );
    const result = await response.json();
    if (result.features[0]) {
      const latitude = result.features[0].properties.lat;
      const longitude = result.features[0].properties.lon;
      const coordinates = [latitude, longitude];
      localStorage.setItem(query, coordinates);
      return coordinates;
    } else {
      throw new Error("Координаты отсутствуют");
    }
  }
}
