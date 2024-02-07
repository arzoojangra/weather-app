import { useState } from "react";
import CurrentLocation from "./Components/CurrentLocation";
import WeatherWidget from "./Components/WeatherWidget";

function App() {
  const [searchLocation, setSearchLocation] = useState(null);
  return (
    <>
      <div className="bg-bg-image h-screen bg-no-repeat bg-cover bg-fixed pt-20">
        <CurrentLocation setSearchLocation={setSearchLocation} />
        <WeatherWidget searchLocation = {searchLocation} setSearchLocation = {setSearchLocation} />
      </div>
    </>
  );
}

export default App;
