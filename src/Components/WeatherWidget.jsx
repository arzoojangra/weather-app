import React, { useEffect, useState } from "react";
import Search from "./Search";
import { airPollutionApi, forecastApi, mapsApi, weatherApi } from "../Api/ApiCall";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";
import dateAndTime from "./TimeCalculation";
import { WeatherWidgetSkeleton } from "./Loaders";

function WeatherWidget({ searchLocation, setSearchLocation }) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airPollution, setAirPollution] = useState(null);
  const [showForecast, setShowForecast] = useState(false);
  const [time, setTime] = useState();
  const [timezone, setTimezone] = useState();

  const fetchWeather = async (searchLocation) => {
    const weatherResponse = await weatherApi(searchLocation.latitude,searchLocation.longitude);
    setWeather(weatherResponse.result);
    setTimezone(weatherResponse.result.timezone);
    setTime(weatherResponse.result.dt);
    const forecastResponse = await forecastApi(searchLocation.latitude,searchLocation.longitude);
    setForecast(forecastResponse.result.list);
    const airPollutionResponse = await airPollutionApi(searchLocation.latitude, searchLocation.longitude);
    setAirPollution(airPollutionResponse.result);  
  };

  const handleClick = () => {
    setShowForecast(true);
  };

  useEffect(() => {
    if (searchLocation) {
      fetchWeather(searchLocation);
    }
  }, [searchLocation]);

  if (!weather || !forecast || !airPollution) {
    return(
      // <div className="">
        <WeatherWidgetSkeleton/>
      // </div>
    )
  } else if (showForecast) {
    return (
      <div>
        <Forecast weather={weather} forecast={forecast} setShowForecast={setShowForecast} airPollution={airPollution}/>
      </div>
    );
  }
  else  return (
    <div>
      <div className="m-auto rounded-2xl bg-pink-400 bg-opacity-20 overflow-hidden flex flex-col backdrop-blur-sm p-2 h-3/5 w-2/3">
        <div className="p-1 mb-2">
          <Search setSearchLocation={setSearchLocation} />
        </div>

        <div className="text-2xl text-center font-semibold">
          {weather.name}, {weather.sys.country}
        </div>

        <div className="flex flex-col h-2/5">
          <div className="mx-auto items-center sm:w-2/3 w-1/2 h-1/5">
            <div className="size-3/4 items-center m-auto">
              <WeatherIcon weather={weather.weather[0].main} time={time} timezone={timezone}/>
            </div>
          </div>

          <div className="text-4xl sm:text-5xl text-center m-auto w-full h-2/5">
            {Math.trunc(weather.main.temp)}
            °C
          </div>
          <div className="text-xl sm:text-xl text-center m-auto w-full h-2/5">
            {dateAndTime.calculateTime(time, timezone)}
            <br />
            {dateAndTime.calculateDate(time)}
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
            <p className="text-sm font-bold">AQI</p>
            <div className="text-center flex flex-row items-center mx-auto">
              <img src="/images/aqi.png" className="w-7 h-7 mr-1" />
              <div>{airPollution.main.aqi}</div>
            </div>
          </div>
        </div>
        <button
          className="text-center flex items-center m-auto font-semibold"
          onClick={handleClick}
        >
          <div className="py-1 px-2 rounded-2xl text-pink-500 bg-pink-500 bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
            Show forecast
          </div>
        </button>
      </div>
    </div>
  );
}

export default WeatherWidget;
