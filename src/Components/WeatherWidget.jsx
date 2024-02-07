import React, { useEffect, useState } from "react";
import Search from "./Search";
import { weatherApi } from "../Api/ApiCall";

function WeatherWidget({ searchLocation, setSearchLocation }) {
  //   console.log(searchLocation);
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(0);

  const fetchWeather = async (searchLocation) => {
    const weatherResponse = await weatherApi(
      searchLocation.latitude,
      searchLocation.longitude
    );
    setWeather(weatherResponse.result);
    setTime(weatherResponse.result.dt + 1);
  };

  useEffect(() => {
    if (searchLocation) {
      fetchWeather(searchLocation);
    }
  }, [searchLocation]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(time * 1000); // Convert Unix timestamp to milliseconds

  // Get the various components of the date
  const year = date.getFullYear();
  const month = months[date.getMonth()]; // Month is 0-indexed, so we add 1
  const currDate = date.getDate();
  const am_pm = date.getHours() > 12 ? "PM" : "AM";
  const hours = date.getHours() > 12 ? date.getHours()-12 : date.getHours() ;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = days[date.getDay()];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 size-10/12 m-auto rounded-3xl overflow-hidden">
      <div className="bg-morning-image bg-no-repeat bg-cover size-full p-5">
        <div className="items-center mx-auto mt-5">
          <Search setSearchLocation={setSearchLocation}/>
        </div>
        {weather && (
          <div className="flex justify-end text-3xl pt-3 font-bold sm:h-2/3 h-1/2">
            {weather.name}, {weather.sys.country}
          </div>
        )}
        {weather && (
          <div className="flex font-bold text-white w-full">
            <div className="sm:w-2/3 w-1/3">
            <div className="text-xl sm:w-full w-fit">{day}, {currDate} {month} {year}</div>
            <div className="text-xl sm:w-full w-fit">{hours}:{minutes}:{seconds} {am_pm}</div>

            </div>
            <div className="flex justify-end text-6xl font-bold w-1/3">
              {weather.main.temp}
              °C
            </div>
          </div>
        )}
      </div>
      <div className="bg-black bg-opacity-60 h-full w-full"> Image 2</div>
    </div>
  );
}

export default WeatherWidget;
