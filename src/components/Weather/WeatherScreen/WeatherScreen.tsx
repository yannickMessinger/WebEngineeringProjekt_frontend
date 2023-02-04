import React, { useEffect, useState } from "react";
import { useWeather } from "../../../hooks/useWeather";
import { Searchbar } from "../../UI/Searchbar/Searchbar";
import { WeatherDescription } from "../WeatherDescription/WeatherDescription";
import { WeatherForecast } from "../WeatherForecast/WeatherForecast";
import { WeatherPlanet } from "../WeatherPlanet/WeatherPlanet";
import css from "./WeatherScreen.module.css"

export const WeatherScreen = () => {

    let weatherLocation;
    let weatherForecast;
    let weatherDescription;
    const { location, setLocation, fetchCoordinates, weatherData, starWarsPlanet, weatherDataForecast } = useWeather();
    const [backgroundPlanetUrl, setBackgroundPlanetUrl] = useState("");


    useEffect(() => {
        if (location != "") {
            fetchCoordinates();
        }
    }, [location]);

    useEffect(() => {
        setBackgroundPlanetUrl("./weather_backgrounds/" + starWarsPlanet.toLowerCase() + ".png");
        console.log(backgroundPlanetUrl)
    }, [starWarsPlanet])

    if (starWarsPlanet !== "noPlanet" && starWarsPlanet !== "default") {
        weatherLocation = <span>{weatherData.location} </span>;
        weatherForecast = <WeatherForecast weatherForecast={weatherDataForecast} />;
        weatherDescription = <WeatherDescription weatherData={weatherData} />;
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
                        backgroundSize: '100%',
                        backgroundRepeat: 'no-repeat',
                        height: '100vh',
                        width: '100vw',
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
                    <div className={css.WeatherDescription}>
                        {weatherDescription}
                    </div>
                    <div className={css.WeatherForecast}>
                        {weatherForecast}
                    </div>
                </div>
            </div>

        </>
    );
}