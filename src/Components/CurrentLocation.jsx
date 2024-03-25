import React, { useEffect, useState } from "react";

function CurrentLocation({ setSearchLocation }) {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setSearchLocation({ latitude, longitude });
        },
        (error) => {
          setError(true);
          setMessage("Please allow the site to access your location!!");
          console.error("Error getting user location:", error.message);
        }
      );
    } else {
      setError(true);
      setMessage("Sorry your browser does not support Geolocation services!");
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (!location) {
      getUserLocation();
    }
  }, [location]);

  return (
    <div className="sm:text-xl text-lg font-semibold text-center sm:font-bold bg-pink-400 p-5 bg-opacity-30 backdrop-blur-md rounded-xl w-2/3 sm:w-fit">
      {error && <div>{message}</div>}
    </div>
  );
}

export default CurrentLocation;
