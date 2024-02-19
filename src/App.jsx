import { useState } from "react";
import CurrentLocation from "./Components/CurrentLocation";
import WeatherWidget from "./Components/WeatherWidget";

function App() {
  const [searchLocation, setSearchLocation] = useState(null);
  return (
    <div className="bg-image bg-cover bg-fixed h-screen w-full">
        <div className="flex justify-center items-center sm:h-4/5 h-2/3 w-2/3 sm:w-1/3 m-auto">
          <CurrentLocation setSearchLocation={setSearchLocation} />
          <WeatherWidget
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
          />
      </div>
    </div>
  );
}

export default App;
