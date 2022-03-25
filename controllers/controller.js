import Model from '../models/model.js';
import cities from '../models/cities.js';
import table from '../pages/table.js';

export default {
  async getAllWeather() {
    let weatherAllCities = [];
    const citiesLength = cities.length;
    for (let i = 0; i < citiesLength; i++) {
      let lat = cities[i].coord.lat;
      let lon = cities[i].coord.lon;
      let cityName = cities[i].name;
      let weather = await Model.getWeather(lat, lon);

      weatherAllCities.push({
        city: cityName,
        temp: weather.current.temp,
        humidity: weather.current.humidity,
        wind_speed: weather.current.wind_speed,
        description: weather.current.weather[0].description,
      });
    }
    return weatherAllCities;
  },
  async Route() {
    let weather = await this.getAllWeather();
    table.setData(weather);
    table.render('temp');
  },
};
