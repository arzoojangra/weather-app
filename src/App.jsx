import { useState } from "react";
import CurrentLocation from "./Components/CurrentLocation";
import WeatherWidget from "./Components/WeatherWidget";

function App() {
  const [searchLocation, setSearchLocation] = useState(null);
  return (
    <div className="bg-image bg-cover bg-fixed h-screen w-full">
        <div className="flex justify-center items-center m-auto w-full">
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
