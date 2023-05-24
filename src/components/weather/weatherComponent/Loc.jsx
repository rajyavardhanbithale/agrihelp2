import React, { useState, useEffect } from 'react';

function Loc({ onLocationChange }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({ latitude, longitude });
        onLocationChange(latitude, longitude);
      }, error => {
        console.error(error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [onLocationChange]);

  return (
    <div>
      {location ? (
        <p>
          Your location is: {location.latitude}, {location.longitude}
        </p>
      ) : (
        <p>Fetching your location...</p>
      )}
    </div>
  );
}

export default Loc;
