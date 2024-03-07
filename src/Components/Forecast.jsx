import React from "react";
import WeatherIcon from "./WeatherIcon";
import dateAndTime from "./TimeCalculation";

function Forecast({ weather, forecast, iconTime }) {
  console.log(forecast);

  return (
    <div className="md:w-4/5 w-5/6 h-11/12 flex md:flex-row flex-col m-auto rounded-2xl bg-orange-500 bg-opacity-20 overflow-hidden backdrop-blur-sm p-3">
      <div className="flex flex-col p-2 md:w-1/2 w-full items-center m-auto text-left">
        <div className="flex flex-row items-center justify-items-center mx-auto p-1 w-full">
          <div className="mx-auto items-center w-1/2 py-3">
            <WeatherIcon weather={weather.weather[0].main} time={iconTime} />
          </div>

          <div className="flex flex-col w-1/2 h-full">
            <div className="md:text-3xl text-xl text-center mb-2">
              {weather.name}, {weather.sys.country}
            </div>

            <div className="flex flex-row items-center mx-auto p-1 md:w-full w-full">
              <div className="md:text-4xl text-xl w-full text-center">
                {weather.main.temp}°C
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-row gap-3 w-full p-2">
            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="w-2/5 h-3/4">
                <img src="/images/sunrise.png" />
              </div>
              <div className="flex flex-col w-full px-2 py-1">
                <div className="text-xs text-gray-900">Sunrise</div>
                <div className="md:text-xl text-md text-orange-600">
                  {dateAndTime.calculateTime(weather.sys.sunrise)}
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="w-2/5 h-3/4">
                <img src="/images/sunset.png" />
              </div>
              <div className="flex flex-col w-full px-2 py-1">
                <div className="text-xs text-gray-900">Sunset</div>
                <div className="md:text-xl text-md text-orange-600">
                  {dateAndTime.calculateTime(weather.sys.sunset)}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3 w-full p-2">
            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="w-2/5 h-3/4">
                <img src="/images/pressure.png" />
              </div>
              <div className="flex flex-col w-full px-2 py-1">
                <div className="text-xs text-gray-900">Pressure</div>
                <div className="md:text-xl text-md text-orange-600">
                  {weather.main.pressure} hPa
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="ms-2 w-2/5 h-3/4 items-center">
                <img src="/images/humidity.png" className="h-full" />
              </div>
              <div className="flex flex-col w-full px-2 py-1">
                <div className="text-xs text-gray-900">Humidity</div>
                <div className="md:text-xl text-md text-orange-600">
                  {weather.main.humidity} %{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3 w-full p-2">
            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="w-2/5 h-3/4 items-centerms-2">
                <img src="/images/wind_speed.png" className="h-full" />
              </div>
              <div className="flex flex-col w-full px-2 py-1">
                <div className="text-xs text-gray-900">Wind Speed</div>
                <div className="md:text-xl text-md text-orange-600">
                  {weather.wind.speed}m/s{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center mx-auto p-1 md:w-1/2 w-full">
              <div className="w-2/5 h-3/4 items-center ms-2">
                <img src="/images/visibility.png" className="h-full" />
              </div>
              <div className="flex flex-col w-full px-2 py-1">
                <div className="text-xs text-gray-900">Visibility</div>
                <div className="md:text-xl text-md text-orange-600">
                  {weather.visibility} m
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-2 md:w-1/2 w-full items-center m-auto text-left">
        <div className="md:text-3xl text-xl text-center mb-2">
          24 hour forecast
        </div>

        {forecast && forecast.map((item, index) => (
            <div className="flex flex-row p-2 w-full items-center m-auto text-left">
            <div className="w-1/4">
              <WeatherIcon weather={item.weather[0].main} time={item.dt * 1000} />
            </div>
            <div className="w-2/4 text-center">
              {dateAndTime.calculateDate(item.dt)}
            </div>
            <div className="w-1/4">{item.main.temp}°C</div>
          </div>
          ))}

        
      </div>
    </div>
  );
}

export default Forecast;
