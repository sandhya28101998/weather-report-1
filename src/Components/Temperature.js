import React from "react";
import { UilTear, UilWind } from "@iconscout/react-unicons";

function Temperature({ weather: { temperature, humidity, windSpeed } }) {
  return (
    <div>
      <div className="flex flex-row items-center justify-around text-white py-3">
        <p className="text-5xl">{temperature.toFixed()}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{humidity.toFixed()}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            wind:
            <span className="font-medium ml-1">{windSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
