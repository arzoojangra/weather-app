import { useState } from "react";
import CurrentLocation from "./Components/CurrentLocation";
import WeatherWidget from "./Components/WeatherWidget";

function App() {
  const [searchLocation, setSearchLocation] = useState(null);
  return (
    <div className="bg-image h-screen bg-no-repeat bg-cover bg-fixed">
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr]">
        <div className="sm:min-h-full min-h-36">
          <CurrentLocation setSearchLocation={setSearchLocation} />
        </div>
        <div className="min-h-[67%] flex items-center p-5">
          <WeatherWidget
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
          />
        </div>
      </div>
    </div>
    // <div className="grid grid-cols-1 sm:grid-cols-3">
    //   {/* First element spanning starting two columns on screens bigger than small size */}
    //   <div className="col-span-2 sm:col-span-2 bg-blue-200 p-4">
    //     First Element
    //   </div>

    //   {/* Second element spanning last two rows on smaller screens */}
    //   <div className="sm:col-span-1 row-span-2 bg-green-200 p-4">
    //     Second Element
    //   </div>
    // </div>
  );
}

export default App;
