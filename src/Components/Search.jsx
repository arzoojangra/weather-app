import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCityApi } from "../Api/ApiCall";

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

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    console.log(searchData);
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
