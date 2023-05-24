import React from "react";

import './main.css'
import "./topIcon.css"
import { useTranslation } from 'react-i18next';
import ThunderCloud from "../icons/ThunderCloud";
import RainCloud from "../icons/RainCloud";

import SnowCloud from "../icons/SnowCloud";
import SunCloud from "../icons/SunCloud";
import SunShine from "../icons/SunShine"
import Wind from "../icons/Wind";
import RainDrizzle from "../icons/RainDrizzle";

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
  



function Top(props) {
  const {t} = useTranslation();
    const { city, day, date, icon, temperature, temperatureMax, temperatureMin,
        weatherDescription, winSpeed, rain,
        sunrise, sunset } = props;




    return (
        <>
        <div className="wetDiv">
                    



            <main className="main-container">

                <div className="location-and-date">
                    <h1 className="location-and-date__location">{city}</h1>
                    <div>{day}, {date}</div>
                </div>


                <div className="current-temperature">
                    <div className="current-temperature__icon-container">
                        {/* <img src="icons/cloud-lightning.svg" className="current-temperature__icon thunder-cloud" alt="" /> */}
                        {/* <object data="icons/cloud-lightning.svg" type="image/svg+xml" className="thunder-cloud"></object> */}
                        <div className="current-temperature__icon" id="divf1">
                        <IconComponent icon={icon} />
                        </div>


                    </div>
                    <div className="current-temperature__content-container">
                        <div className="current-temperature__value">{temperature} &deg;</div>
                        <div className="current-temperature__summary">{t(`weather.desc.${weatherDescription}`)}</div>
                    </div>
                </div>


                <div className="current-stats">
                    <div>
                        <div className="current-stats__value">{temperatureMax}&deg;</div>
                        <div className="current-stats__label">{t('weather.comp.high')}</div>
                        <div className="current-stats__value">{temperatureMin}&deg;</div>
                        <div className="current-stats__label">{t('weather.comp.low')}</div>
                    </div>
                    <div>
                        <div className="current-stats__value">{winSpeed} mph</div>
                        <div className="current-stats__label">{t('weather.comp.wind')}</div>
                        <div className="current-stats__value">{rain}%</div>
                        <div className="current-stats__label">{t('weather.comp.rain')}</div>
                    </div>
                    <div>
                        <div className="current-stats__value">{sunrise}</div>
                        <div className="current-stats__label">{t('weather.comp.sunrise')}</div>
                        <div className="current-stats__value">{sunset}</div>
                        <div className="current-stats__label">{t('weather.comp.sunset')}</div>
                    </div>
                </div>

            </main>
            </div>

        </>
    )
}


export default Top;