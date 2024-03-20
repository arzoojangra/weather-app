import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import dateAndTime from "./TimeCalculation";

function Forecast({ weather, forecast, setShowForecast}) {
  const day1 = [];
  const day2 = [];
  const day3 = [];
  const day4 = [];
  const day5 = [];
  const day6 = [];
  // console.log("forecast",forecast);

  const currDate = forecast[0].dt_txt.split(" ")[0].split("-")[2];

  for (var i = 0; i < forecast.length; i++) {
    var forecastDate = forecast[i].dt_txt.split(" ")[0].split("-")[2];
    const dateDifference = forecastDate - currDate;
    switch (dateDifference) {
      case 0:
        day1.push(forecast[i]);
        break;
      case 1:
        day2.push(forecast[i]);
        break;
      case 2:
        day3.push(forecast[i]);
        break;
      case 3:
        day4.push(forecast[i]);
        break;
      case 4:
        day5.push(forecast[i]);
        break;
      case 5:
        day6.push(forecast[i]);
        break;
    }
  }

  const days = [day1, day2, day3, day4, day5, day6];
  // const days = [day1];
  // console.log(day1)

  return (
    <div className="w-5/6 md:h-98 h-96 flex flex-col md:flex-row m-auto rounded-3xl bg-pink-300 bg-opacity-20 backdrop-blur-sm bg-fixed md:overscroll-none overflow-auto hide-scrollbar">
      <div className="flex flex-col p-3 md:w-1/2 w-full items-center m-auto text-left h-full">
        <div className="flex flex-row items-center justify-items-center m-auto p-1 w-full h-1/3 relative">
          <button
            className="fixed top-2 right-2 bg-pink-500 bg-opacity-35 p-1 rounded-full items-center m-auto w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
            onClick={() => setShowForecast(false)}
          >
            <img src="/images/back.png" className="w-full h-full" />
          </button>
          <div className="items-center w-1/3 h-full">
            <WeatherIcon
              weather={weather.weather[0].main}
              time={weather.dt}
              timezone={weather.timezone}
            />
          </div>

          <div className="flex flex-col w-2/3 m-auto items-center">
            <div className="sm:text-4xl text-xl text-center w-full p-1 font-semibold">
              {weather.name}, {weather.sys.country}
            </div>

            <div className="sm:text-3xl text-lg text-center w-full p-1">
              {weather.main.temp}°C
            </div>
          </div>
        </div>

        <div className="text-center flex flex-col h-2/3">
          <div className="flex flex-row gap-3 w-full h-1/3">
            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="w-2/5 h-3/4">
                <img src="/images/sunrise.png" className="m-auto h-full" />
              </div>
              <div className="flex flex-col w-3/5 py-1">
                <div className="sm:text-md text-sm text-gray-900 text-center w-full font-medium">
                  Sunrise
                </div>
                <div className="sm:text-xl text-md text-pink-600 w-full font-semibold">
                  {dateAndTime.calculateTime(
                    weather.sys.sunrise,
                    weather.timezone
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="w-2/5 h-3/4">
                <img src="/images/sunset.png" className="m-auto h-full" />
              </div>
              <div className="flex flex-col w-3/5 py-1">
                <div className="sm:text-md text-sm text-gray-900 text-center w-full font-medium">
                  Sunset
                </div>
                <div className="sm:text-xl text-md text-pink-600 w-full font-semibold">
                  {dateAndTime.calculateTime(
                    weather.sys.sunset,
                    weather.timezone
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3 w-full h-1/3">
            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="w-2/5 h-3/4">
                <img src="/images/pressure.png" className="m-auto h-full" />
              </div>
              <div className="flex flex-col w-3/5 py-1">
                <div className="sm:text-md text-sm text-gray-900 text-center w-full font-medium">
                  Pressure
                </div>
                <div className="sm:text-xl text-md text-pink-600 w-full font-semibold">
                  {weather.main.pressure} hPa
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="w-2/5 h-3/4">
                <img src="/images/humidity.png" className="m-auto h-full" />
              </div>
              <div className="flex flex-col w-3/5 py-1">
                <div className="sm:text-md text-sm text-gray-900 text-center w-full font-medium">
                  Humidity
                </div>
                <div className="sm:text-xl text-md text-pink-600 w-full font-semibold">
                  {weather.main.humidity} %{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3 w-full h-1/3">
            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="w-2/5 h-3/4">
                <img src="/images/wind_speed.png" className="m-auto h-full" />
              </div>
              <div className="flex flex-col w-3/5 py-1">
                <div className="sm:text-md text-sm text-gray-900 text-center w-full font-medium">
                  Wind Speed
                </div>
                <div className="sm:text-xl text-ml text-pink-600 w-full font-semibold">
                  {weather.wind.speed}m/s{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="w-2/5 h-3/4">
                <img src="/images/visibility.png" className="m-auto h-full" />
              </div>
              <div className="flex flex-col w-3/5 py-1">
                <div className="sm:text-md text-sm text-gray-900 text-center w-full font-medium">
                  Visibility
                </div>
                <div className="sm:text-xl text-md text-pink-600 w-full font-semibold">
                  {weather.visibility} m
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:w-1/2 w-full p-2 sm:overflow-auto hide-scrollbar">
        <div className="flex flex-col px-2 pt-4 m-auto text-center">
          <div className="sm:text-3xl text-lg text-center w-full md:mt-3 text-pink-600">
            5-day Forecast
          </div>

          {days &&
            days.map((dayData, index) => (
              <div key={index}>
                <div className="sm:text-xl text-xl w-full my-5 font-medium">
                  {dateAndTime.calculateDate(dayData[0].dt)}
                </div>
                <div className="flex flex-wrap sm:justify-start justify-center w-full gap-4 items-center text-center">
                  {dayData &&
                    dayData.length &&
                    dayData.map((item, itemIndex) => (
                      <div
                        className="flex flex-col text-center md:w-1/5 sm:w-1/3 w-1/4 bg-pink-400 bg-opacity-30 rounded-3xl p-2"
                        key={itemIndex}
                      >
                        <div className="h-2/5 text-pink-700 text-lg font-semibold">
                          {dateAndTime.calculateTimeWithoutTimezone(item.dt)}
                        </div>
                        <div className="h-1/5">
                          <WeatherIcon
                            weather={item.weather[0].main}
                            time={item.dt}
                          />
                        </div>
                        <div className="text-center h-2/5 text-pink-700 text-lg">
                          {Math.trunc(item.main.temp)}°C
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
