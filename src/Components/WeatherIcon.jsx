import React from 'react';

function WeatherIcon({weather, time}) {
  time = new Date(time);
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
      }
    let am_pm = time.getHours() > 19 ? "night" : "day";
    var img_url;
    if(weather == "Clear"){
      if(am_pm == "day"){
        img_url = `/images/${image.Clear_Day}`;
      }else img_url = `/images/${image.Clear_Night}`;
    }else{
      img_url = `/images/${image[weather]}`;
    }

    return (
        <div>
            <img src={img_url} className='size-2/3 mx-auto'/>            
        </div>
    );
}

export default WeatherIcon;