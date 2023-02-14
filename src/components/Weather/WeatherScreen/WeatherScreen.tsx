import React, { useEffect, useState } from "react";
import { useWeather } from "../../../hooks/useWeather";
import { Searchbar } from "../../UI/Searchbar/Searchbar";
import { WeatherDescription } from "./WeatherForecast/WeatherDescription/WeatherDescription";
import { WeatherForecastScreen } from "./WeatherForecast/WeatherForecastScreen";
import { WeatherPlanet } from "./WeatherPlanet/WeatherPlanet";

import css from "./WeatherScreen.module.css"

export const WeatherScreen = () => {

    let weatherLocation;
    let weatherForecast;
    let weatherDescription;
    const { setLocation, fetchWeatherData, weatherData, starWarsPlanet, weatherDataForecast, fillWeatherDataWithForecast, weatherMode } = useWeather();
    const [backgroundPlanetUrl, setBackgroundPlanetUrl] = useState("");

    const decideBackgroundPlanet = (() => {
        if (window.innerWidth > 450) {
            setBackgroundPlanetUrl("./weather_backgrounds/desktop/" + starWarsPlanet.toLowerCase() + ".png");

        } else {
            setBackgroundPlanetUrl("./weather_backgrounds/phone/" + starWarsPlanet.toLowerCase() + "_phone.png");
        }
    });

    useEffect(() => {
        const decideIfBackgroundGetChanged = ((event: UIEvent) => {
            decideBackgroundPlanet();
        });
        window.addEventListener("resize", decideIfBackgroundGetChanged);
        return () => {
            window.removeEventListener("resize", decideIfBackgroundGetChanged);
        }

    });

    useEffect(() => {
        decideBackgroundPlanet();
    }, [starWarsPlanet])


    if (starWarsPlanet !== "noPlanet" && starWarsPlanet !== "default") {
        weatherLocation = <span>{weatherData.location}</span>;
        weatherForecast = <WeatherForecastScreen weatherForecast={weatherDataForecast} fillWeatherDataWithForecast={fillWeatherDataWithForecast} fetchWeatherData={fetchWeatherData} weatherMode={weatherMode} weatherData={weatherData} />;
    } else {
        weatherLocation = <span></span>;
        weatherForecast = <span></span>;
        weatherDescription = <span></span>;
    }

    return (
        <>
            <div className={css.WholeWeather}>
                <div className={css.Background}
                    style={{
                        backgroundImage: `url(${backgroundPlanetUrl})`,
                    }} >
                    <div className={css.Searchbar}>
                        <Searchbar setLocation={setLocation} />
                    </div>
                    <div className={css.Location}>
                        {weatherLocation}
                    </div>
                    <div className={css.StarWarsPlanet}>
                        <WeatherPlanet planetName={starWarsPlanet} />
                    </div>
                    <div className={css.WeatherForecast}>
                        {weatherForecast}
                    </div>
                </div>
            </div>

        </>
    );
}