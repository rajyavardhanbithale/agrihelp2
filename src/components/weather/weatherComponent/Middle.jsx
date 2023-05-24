import React from "react";
import "./main.css";


import ThunderCloud from "../icons/ThunderCloud";
import RainCloud from "../icons/RainCloud";

import SnowCloud from "../icons/SnowCloud";
import SunCloud from "../icons/SunCloud";
import SunShine from "../icons/SunShine"
import Wind from "../icons/Wind";
import RainDrizzle from "../icons/RainDrizzle";
import { useTranslation } from "react-i18next";

const IconComponent = ({ icon, className }) => {
    
  let DynamicComponent;
  switch (icon) {
    case "ThunderCloud":
      DynamicComponent = ThunderCloud;
      break;
    case "RainDrizzle":
      DynamicComponent = RainDrizzle;
      break;
    case "RainCloud":
      DynamicComponent = RainCloud;
      break;
    case "SnowCloud":
      DynamicComponent = SnowCloud;
      break;
    case "Wind":
      DynamicComponent = Wind;
      break;
    case "SunCloud":
      DynamicComponent = SunCloud;
      break;
    case "SunShine":
      DynamicComponent = SunShine;
      break;
    default:
      DynamicComponent = Wind;
  }
  return (
    <React.Suspense fallback={<div>Loading.......</div>}>
      <DynamicComponent className={className} />
    </React.Suspense>
  );
};




function Middle(props) {
  const { temperature } = props;


  const {t} = useTranslation();

  return (
    <>
    <div className="wetDiv">
    <main className="main-container">
      <div className="weather-by-hour">
        <h2 className="weather-by-hour__heading">{t("weather.today")}</h2>
        <div className="weather-by-hour__container">
          {temperature.map((data, index) => (
            <div className="weather-by-hour__item" key={index}>
              <div className="weather-by-hour__hour">{data.time}</div>
              <div className="hourCard">
                <div className="half-width">
                <IconComponent icon={data && data.icon}  />
                </div>
              </div>
              <div>{data.temperature}&deg;</div>
            </div>
          ))}
        </div>
      </div>
      </main>
      </div>
    </>
  );
}

export default Middle;
