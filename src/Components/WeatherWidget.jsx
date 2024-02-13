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
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = days[date.getDay()];

  if(!weather){
    return(<div>Loading...</div>)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 size-10/12 m-auto rounded-3xl overflow-hidden">
      <div className="bg-color2 size-full p-5">
        <div className="items-center mx-auto mt-5">
          <Search setSearchLocation={setSearchLocation} />
        </div>
        {weather && (
          <div className="text-end pt-3 sm:h-3/5 h-2/3">
            <div className="sm:text-5xl text-4xl font-bold">
              {weather.main.temp}
              °C
            </div>
            <div className="sm:text-3xl text-2xl">
              {weather.name}, {weather.sys.country}
            </div>
          </div>
        )}
        {weather && (
          <div className="grid grid-cols-3 place-content-between">
            <div className="sm:text-start col-span-2">
              {day}, {currDate} {month} {year}
              <br />
            </div>
            <div className="text-end">
              {hours}:{minutes}:{seconds} {am_pm}
            </div>
          </div>
        )}
      </div>
      <div className="bg-color2 h-full w-full">
        {weather.main.temp_min}
        <br/>
        {weather.main.feels_like}
        <br/>
        {weather.main.temp_max}
      </div>
    </div>
  );
}

export default WeatherWidget;
