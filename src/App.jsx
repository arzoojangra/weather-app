import { useState } from "react";
import CurrentLocation from "./Components/CurrentLocation";
import WeatherWidget from "./Components/WeatherWidget";

function App() {
  const [searchLocation, setSearchLocation] = useState(null);
  return (
    <div className="bg-image bg-cover bg-fixed h-screen w-full relative">
      <div className="flex justify-center items-center m-auto w-full">
        {!searchLocation && (
          <CurrentLocation setSearchLocation={setSearchLocation} />
        )}
        {searchLocation && (
          <WeatherWidget
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
          />
        )}
      </div>
      <div className="fixed inset-x-0 bottom-0 font-semibold text-center backdrop-blur-lg">
        © 2024 Weather-App | All rights reserved | Designed and developed by{" "}
        <b>Arzoo Jangra</b>
      </div>
    </div>
  );
}

export default App;
