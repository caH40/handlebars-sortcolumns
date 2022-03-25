export default {
  async getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=eb9f34f35376b90946dba6b86f40389a&units=metric&lang=ru`;
    let weather = await fetch(url)
      .then(function (data) {
        return data.json();
      })
      .catch((error) => console.log(error));
    console.log('обращение к базе', new Date().toLocaleString(), lat, lon);
    return weather;
  },
};
