import React from "react";
import './main.css'
import './topIcon.css'
import ThunderCloud from "../icons/ThunderCloud";
import RainCloud from "../icons/RainCloud";
import SnowCloud from "../icons/SnowCloud";
import SunCloud from "../icons/SunCloud";
import SunShine from "../icons/SunShine";
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

function Bottom(props) {
  const {t} = useTranslation();
  const { forecast } = props;
  
  return (
    <div className="wetDiv">
      <main className="main-container1">
        <div className="next-5-days">
          <br />
          <h2 className="next-5-days__heading">{t("weather.forecast")}</h2>

          {forecast.map((data, index) => (
            <div className="next-5-days__container" key={index}>
              <div className="next-5-days__row">
                <div className="next-5-days__date">
                  {/* {data && data.day && data.day.slice(0, 3)} */}
                  {t(`weather.day.${data.day.slice(0,3)}`)}
                  <div className="next-5-days__label">
                    {data && data.dayMonth}
                  </div>
                </div>

                <div className="next-5-days__low">
                  {data && data.tempMin}&deg;
                  <div className="next-5-days__label">{t("weather.comp.low")}</div>
                </div>

                <div className="next-5-days__high">
                  {data && data.tempMax}&deg;
                  <div className="next-5-days__label">{t("weather.comp.high")}</div>
                </div>

                <div className="next-5-days__icon" id="divg1">
                  <IconComponent icon={data && data.icon} />
                </div>

                <div className="next-5-days__rain">
                  {data && data.rain}
                  <div className="next-5-days__label">{t("weather.comp.rain")}</div>
                </div>

                <div className="next-5-days__wind">
                  {data && data.wind}mph
                  <div className="next-5-days__label">{t("weather.comp.wind")}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Bottom;
