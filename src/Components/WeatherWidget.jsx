import React, { useEffect, useState } from "react";
import Search from "./Search";
import { forecastApi, weatherApi } from "../Api/ApiCall";

function WeatherWidget({ searchLocation, setSearchLocation }) {
  //   console.log(searchLocation);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const fetchWeather = async (searchLocation) => {
    const weatherResponse = await weatherApi(searchLocation.latitude,searchLocation.longitude);
    setWeather(weatherResponse.result);
    const forecastResponse = await forecastApi(searchLocation.latitude,searchLocation.longitude);
    setForecast(forecastResponse.result.list.slice(0, 8));
  };

  useEffect(() => {
    if (searchLocation) {
      fetchWeather(searchLocation);
    }
  }, [searchLocation]);

  if (!weather) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="sm:w-full w-2/3 m-auto rounded-2xl bg-blue-500 sm:bg-opacity-30 bg-opacity-20 overflow-hidden sm:h-4/5 h-full flex flex-col backdrop-blur-sm sm:backdrop-filter-none">
        <div className="p-2">
          <Search setSearchLocation={setSearchLocation} />
        </div>

        <div className="sm:text-2xl text-xl text-center">
          {weather.name}, {weather.sys.country}
        </div>

        <div className="flex sm:flex-col flex-row">
          <div className="mx-auto items-center sm:w-2/3 w-1/2 py-3">
            <img src="/images/clear.png" />
          </div>

          <div className="text-4xl sm:text-5xl text-center m-auto sm:w-full w-1/2 sm:my-2">
            {Math.trunc(weather.main.temp)}
            °C
          </div>
        </div>

        <div className=" m-auto grid grid-cols-2 items-center w-full sm:text-2xl text-lg">
          <div className="text-center">
            {weather.main.temp_min}
            °C
          </div>
          <div className="text-center">
            {weather.main.temp_max}
            °C
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherWidget;
