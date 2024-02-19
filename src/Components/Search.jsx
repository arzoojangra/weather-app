import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import {
  airPollutionApi,
  fetchCityApi,
  forecastApi,
  weatherApi,
} from "../Api/ApiCall";
import Select from "react-select";

function Search({setSearchLocation, setTime}) {
  const [search, setSearch] = useState("");

  const loadOptions = async (inputValue) => {
    const cities = await fetchCityApi(inputValue);

    setSearch("");
    return {
      options: cities.result.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "rgb(249, 115, 22, 0.5)",
      borderColor: "rgb(249, 115, 22)",
      borderRadius: "70px",
      color: "white",
    }),
    indicatorSeparator: () => null,
    indicatorsContainer: () => null,
    placeholder: (provided) => ({
      ...provided,
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "18px", // Set border radius for rounded corners
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "rgb(249, 115, 22, 0.3)" : "white", 
      borderRadius: "12px",
      ":hover": {
        backgroundColor: state.isSelected ? "white" : "rgb(249, 115, 22, 0.3)",
        borderRadius: "12px",
      },
    }),
  };

  const customComponents = {
    DropdownIndicator: () => null,
  };

  const handleOnChange = async (searchData) => {
    setSearch(searchData);
    const [lat, long] = searchData.value.split(" ");
    setSearchLocation({latitude: lat, longitude:long});
    const weather = await weatherApi(lat, long);
    const forecast = await forecastApi(lat, long);
    const airPollution = await airPollutionApi(lat, long);
    setSearch("");
  };

  return (
    <div className="w-full">
      <AsyncPaginate
        placeholder="Search for a city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        components={{
          ...customComponents,
          Select: ({ children, ...props }) => (
            <Select {...props}>{children}</Select>
          ),
        }}
        styles={customStyles}
      />
    </div>
  );
}

export default Search;
