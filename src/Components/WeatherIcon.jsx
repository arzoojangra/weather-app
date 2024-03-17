import React from "react";

function WeatherIcon({ weather, time, timezone }) {
  let image = {
    Thunderstorm: "thunderstorm.png",
    Drizzle: "light_rain.png",
    Rain: "rain.png",
    Haze: "haze.png",
    Smoke: "haze.png",
    Snow: "snow.png",
    Clear_Day: "clear_day.png",
    Clear_Night: "clear_night.png",
    Clouds: "clouds.png",
  };

  timezone = timezone ? timezone : 0;

  time = (time + timezone) * 1000;
  const date = new Date(time);
  let am_pm = date.getUTCHours() > 19 || date.getUTCHours() < 4 ? "night" : "day";
  var img_url;
  if (weather == "Clear") {
    if (am_pm == "day") {
      img_url = `/images/${image.Clear_Day}`;
    } else img_url = `/images/${image.Clear_Night}`;
  } else {
    img_url = `/images/${image[weather]}`;
  }

  return (
    <div className="h-full p-2">
      <img src={img_url} className="m-auto h-full"/>
    </div>
  );
}

export default WeatherIcon;
