import axios from 'axios';

export const fetchCityApi = async (cityPrefix) => {
  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_CITY_API_URL}cities?minPopulation=1000000&namePrefix=${cityPrefix}`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_CITY_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_CITY_API_HOST,
      "Content-Type": "application/json"
    },
  };

  var response = {
    status: false,
  };

  try {
    let apiResponse = await axios(options);
    response.status = true;
    response.result = apiResponse.data.data;
    return response;
  } catch (error) {
    console.error(error);
    response.result = error.message;
    return response;
  }
};

export const weatherApi = async (lat, long) => {
  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_WEATHER_API_URL}weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  };
  var response = {
    status: false,
  };

  try {
    let apiResponse = await axios(options);
    response.status = true;
    response.result = apiResponse.data;
    return response;
  } catch (error) {
    console.error(error);
    response.result = error.message;
    return response;
  }
};

export const forecastApi = async (lat, long) => {
  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_WEATHER_API_URL}forecast?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  };
  var response = {
    status: false,
  };

  try {
    let apiResponse = await axios(options);
    response.status = true;
    response.result = apiResponse.data;
    return response;
  } catch (error) {
    console.error(error);
    response.result = error.message;
    return response;
  }
};

export const airPollutionApi = async (lat, long) => {
  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_WEATHER_API_URL}air_pollution?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  };
  var response = {
    status: false,
  };

  try {
    let apiResponse = await axios(options);
    let aqi = "";
    switch (apiResponse.data.list[0].main.aqi) {
      case 1:
        aqi = "Good";
        break;
      case 2:
        aqi = "Fair"; 
        break;
      case 3:
        aqi = "Moderate"; 
        break;
      case 4:
        aqi = "Poor"; 
        break;
      case 5:
        aqi = "Very Poor"; 
        break;
      default:
        aqi = "N/A"; 
        break;
    }
    response.status = true;
    response.result = apiResponse.data.list[0];
    response.result.main.aqi = aqi;
    return response;
  } catch (error) {
    console.error(error);
    response.result = error.message;
    return response;
  }
};
