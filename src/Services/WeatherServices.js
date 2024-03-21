const API_KEY = "SzEJA9hdPNJLX6wO12REXr32qYNz4dE2";
const BASE_URL = "https://api.tomorrow.io/v4/weather";

function getWeatherData(infoType, searchParams) {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, apikey: API_KEY });
  console.log(url);
  return fetch(url).then((res) => res.json());
}

const formatCurrentWeather = (data) => {
  const {
    location: { lon, lat, name },
    data: {
      values: { temperature, windSpeed, humidity },
    },
  } = data;
  return {
    lon,
    lat,
    name,
    temperature,
    humidity,
    windSpeed,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "realtime",
    searchParams
  ).then(formatCurrentWeather);

  return { ...formattedCurrentWeather };
};

export default getFormattedWeatherData;
