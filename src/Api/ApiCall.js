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
