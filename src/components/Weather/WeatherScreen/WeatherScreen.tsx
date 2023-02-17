import React, { useEffect, useState } from "react";
import { useWeather } from "../../../hooks/useWeather";
import { Searchbar } from "../../UI/Searchbar/Searchbar";
import { WeatherForecastScreen } from "./WeatherForecast/WeatherForecastScreen";
import { WeatherPlanet } from "./WeatherPlanet/WeatherPlanet";

import css from "./WeatherScreen.module.css"
/**
 * 
 * @returns whole weather component
 */
export const WeatherScreen = () => {

    let weatherLocation;
    let weatherForecast;
    const { setLocation, fetchWeatherData, weatherData, starWarsPlanet, weatherDataForecast, fillWeatherDataWithForecast, weatherMode } = useWeather();
    const [backgroundPlanetUrl, setBackgroundPlanetUrl] = useState("");

    /**
     * background decision based on the screen size
     */
    const decideBackgroundPlanet = (() => {
        if (window.innerWidth > 500) {
            setBackgroundPlanetUrl("./weather_backgrounds/desktop/" + starWarsPlanet.toLowerCase() + ".png");

        } else {
            setBackgroundPlanetUrl("./weather_backgrounds/phone/" + starWarsPlanet.toLowerCase() + "_phone.png");
        }
    });
    /**
     * decide background (phone/desktop) during reesize
     */
    useEffect(() => {
        const decideIfBackgroundGetChanged = ((event: UIEvent) => {
            decideBackgroundPlanet();
        });
        window.addEventListener("resize", decideIfBackgroundGetChanged);
        return () => {
            window.removeEventListener("resize", decideIfBackgroundGetChanged);
        }

    });
    /**
     * decide background (phone/desktop) when changing the background
     */
    useEffect(() => {
        decideBackgroundPlanet();
    }, [starWarsPlanet])

    if (starWarsPlanet !== "noPlanet" && starWarsPlanet !== "default") {
        weatherLocation = <span>{weatherData.location}</span>;
        weatherForecast = <WeatherForecastScreen weatherForecast={weatherDataForecast} fillWeatherDataWithForecast={fillWeatherDataWithForecast} fetchWeatherData={fetchWeatherData} weatherMode={weatherMode} weatherData={weatherData} />;
    } else {
        weatherLocation = <span></span>;
        weatherForecast = <span></span>;
    }

    return (
        <>
            <div className={css.WholeWeather}>
                <div className={css.Background}
                    style={{
                        backgroundImage: `url(${backgroundPlanetUrl})`,
                    }}
                    data-cy="weather_background"
                >
                    <div className={css.Searchbar}>
                        <Searchbar setLocation={setLocation} />
                    </div>
                    <div data-cy="weather_location" className={css.Location}>
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