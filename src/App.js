import { useEffect, useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import Temperature from "./Components/Temperature";
import TimeAndLocation from "./Components/TimeAndLocation";
import getFormattedWeatherData from "./Services/WeatherServices";

function App() {
  const [query, setQuery] = useState({ location: "India" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query]);
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-600 h-fit shadow-xl shadow-gray-500">
      <Search setQuery={setQuery} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <Temperature weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
