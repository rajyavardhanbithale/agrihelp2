import React from "react";
import { useState, useEffect } from 'react'


import Search from "./weatherComponent/Search";
import Top from "./weatherComponent/Top";
import Middle from "./weatherComponent//Middle";
import Bottom from "./weatherComponent//Bottom";
import { useTranslation } from "react-i18next";
import Loader from './Loader'
import Imgsat from "./weatherComponent/Imgsat";




function CompileWeather() {
    const { t } = useTranslation();
    const [city, setInputValue] = useState('');


    const [isLoading, setIsLoading] = useState(true);


    const handleSearch = (value) => {
        setInputValue(value);
    };

    useEffect(() => {
        console.log('Input Value:', city);
    }, [city]);



    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    //=============User Location==========
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }, error => {
                console.error(error);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);


    // ===================== TOP Current Fetching API ==========================
    const [data, setData] = useState(null);
    const [data4, setData4] = useState(null);
    const [data2, setData2] = useState(null);
    const [data3, setData3] = useState(null);

    const host= "https://agrihelp.online/api"

    useEffect(() => {
        if (city) {
            const url4 = `${host}/latlong/?city=${city}`
            fetch(url4)
                .then(response => response.json())
                .then(data4 => {
                    setLatitude(data4.lat);
                    setLongitude(data4.long);
                    console.log("Latitude:", data4.lat);
                    console.log("Longitude:", data4.long);
                })
                .catch(error => console.error(error));
        }
    }), [city]



    useEffect(() => {
        if (latitude && longitude) {
            const url = `${host}/weather/?lat=${latitude}&long=${longitude}`;
            fetch(url)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error(error));


            // ===================== Middle Future N Hour Fetching API ==========================
            const url2 = `${host}/forecastndays/?lat=${latitude}&long=${longitude}&days=8`;
            fetch(url2)
                .then(response => response.json())
                .then(data2 => setData2(data2))
                .catch(error => console.error(error));

            const url3 = `${host}/forecast/?lat=${latitude}&long=${longitude}&days=5`;
            fetch(url3)
                .then(response => response.json())
                .then(data3 => setData3(data3))
                .catch(error => console.error(error));


        }

    }, [latitude, longitude]);





    if (!data || !data2 || !data3) {
        return <div>
            <h1 class="text-5xl font-extrabold text-center dark:text-white m-5 mb-6">{t("weather.title")}</h1>
            <Search handleSearch={handleSearch} />
            <br />
            <br />
            <Loader/>
            <br />
            <br />
            <p className="loading">try searching you location</p>
        </div>;
    }


    const temperatures = data2.map((datafore) => ({
        temperature: datafore.temperature,
        time: datafore.time,
        icon: datafore.icon_name
    }));

    const forecast = data3.map((forecast1) => ({
        day: forecast1.day,
        dayMonth: forecast1.day_month,
        icon: forecast1.icon_name,
        tempMin: forecast1.temperature_min,
        tempMax: forecast1.temperature_max,
        rain: forecast1.rain,
        wind: forecast1.wind_speed,


    }));

    console.log(data3[0])
    console.log(data3[1])
    console.log(data3[2])
    console.log(data3[3])
    console.log(data3[4])
    return (
        <>
            <h1 class="text-5xl font-extrabold text-center dark:text-white m-5 mb-6">{t("weather.title")}</h1>

            {latitude && longitude ? (
                <>
                </>
            ) : (
                <p>Fetching your location...</p>
            )}
            <Search handleSearch={handleSearch} />
            <Top city={data.region}
                day={data.day}
                date={data.date}
                icon={data.icon_name}
                temperature={data.temperature}
                temperatureMax={data.temperature_max}
                temperatureMin={data.temperature_min}
                weatherDescription={data.weather_description}
                winSpeed={data.wind_speed}
                rain={data.rain}
                sunrise={data.sunrise}
                sunset={data.sunset}
            />

            <Middle temperature={temperatures} />

            <Bottom forecast={forecast} />
            <br />
            <br />
            <Imgsat/>



        </>

    );
}


export default CompileWeather;