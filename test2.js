const API_KEY = '673814ac74ea1ff858f4ae68b945354b';
const lat = -6.2;
const lon = 106.816666;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

const getWeather = async () => {
  try {
    const response = await fetch(url);
    const data = await response
      .json()
      .then((data) =>
        data.list.filter((item) => item.dt_txt.includes('12:00:00'))
      );

    console.log('Weather Forecast :');

    data?.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      const formattedDate = `${
        dayList[date.getUTCDay()]
      }, ${date.getUTCDate()} ${
        months[date.getUTCMonth()]
      } ${date.getUTCFullYear()}`;

      const temp = (item.main.temp - 273.15).toFixed(2);

      console.log(`${formattedDate}: ${temp}°C`);
    });
  } catch (error) {
    console.log(error);
  }
};

getWeather();
