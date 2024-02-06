import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { airPollutionApi, fetchCityApi, forecastApi, weatherApi } from "../Api/ApiCall";

function Search(props) {
  const [search, setSearch] = useState("");

  const loadOptions = async (inputValue) => {
    const cities = await fetchCityApi(inputValue);
    
    return {
      options: cities.result.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const handleOnChange = async (searchData) => {
    setSearch(searchData);
    const [lat, long] = searchData.value.split(" ");
    const weather = await weatherApi(lat, long);
    const forecast = await forecastApi(lat, long);
    const airPollution = await airPollutionApi(lat, long);
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search for a city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default Search;
