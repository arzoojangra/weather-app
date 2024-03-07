import React, { useEffect, useState } from "react";
import Search from "./Search";
import { forecastApi, weatherApi } from "../Api/ApiCall";
import WeatherIcon from "./WeatherIcon";
import calculateTime from "./TimeCalculation";
import Forecast from "./Forecast";

function WeatherWidget({ searchLocation, setSearchLocation }) {
  //   console.log(searchLocation);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [showForecast, setShowForecast] = useState(true);
  const [time, setTime] = useState();

  const fetchWeather = async (searchLocation) => {
    const weatherResponse = await weatherApi(searchLocation.latitude,searchLocation.longitude);
    setWeather(weatherResponse.result);
    setTime(weatherResponse.result.dt * 1000);
    const forecastResponse = await forecastApi(searchLocation.latitude,searchLocation.longitude);
    setForecast(forecastResponse.result.list.slice(0, 8));
    console.log(forecastResponse.result.list)
  };

  useEffect(() => {
    if (searchLocation) {
      fetchWeather(searchLocation);
    }
  }, [searchLocation]);
  

  if (!weather) {
    return <div>Loading...</div>;
  } else if (showForecast) {
    return (
      <div>
        <Forecast weather={weather} forecast={forecast} iconTime={time}/>
      </div>
    );
  }
  return (
    <div>
      <div className="m-auto rounded-2xl bg-orange-500 bg-opacity-20 overflow-hidden flex flex-col backdrop-blur-sm p-2 h-4/5 w-2/3">
        <div className="p-1 mb-2">
          <Search setSearchLocation={setSearchLocation} />
        </div>

        <div className="text-2xl text-center">
          {weather.name}, {weather.sys.country}
        </div>

        <div className="flex sm:flex-col flex-row">
          <div className="mx-auto items-center sm:w-2/3 w-1/2 py-3">
            <WeatherIcon weather={weather.weather[0].main} time={time} />
          </div>

          <div className="text-4xl sm:text-5xl text-center m-auto sm:w-full w-1/2 sm:my-2">
            {Math.trunc(weather.main.temp)}
            °C
          </div>
        </div>

        <div className="m-auto flex flex-row text-center items-center w-full text-xl my-2">
          <div className="flex flex-col items-center w-2/5 sm:w-1/2">
            <p className="text-sm font-bold">Humidity</p>
            <div className="text-center flex flex-row items-center mx-auto">
              <img src="/images/humidity.png" className="w-7 h-7" />
              <div>{weather.main.humidity}%</div>
            </div>
          </div>

          <div className="flex flex-col items-center w-3/5 sm:w-1/2">
            <p className="text-sm font-bold">Wind Speed</p>
            <div className="text-center flex flex-row items-center mx-auto">
              <img src="/images/wind_speed.png" className="w-7 h-7 mr-1" />
              <div>{weather.wind.speed}m/s</div>
            </div>
          </div>
        </div>
        <button className="text-center flex items-center m-auto">
          <div className="py-1 px-2 rounded-2xl text-orange-500 bg-orange-400 bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Show forecast...
          </div>
        </button>
      </div>
    </div>
  );
}

export default WeatherWidget;
