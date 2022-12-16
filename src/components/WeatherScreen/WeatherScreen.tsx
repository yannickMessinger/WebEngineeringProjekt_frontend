import React, { useEffect } from "react";
import { useWeather } from "../../hooks/useWeather";
import { Searchbar } from "../Searchbar/Searchbar";
import { WeatherDescription } from "../WeatherDescription/WeatherDescription";
import { WeatherPlanet } from "../WeatherPlanet/WeatherPlanet";
import css from "./WeatherScreen.module.css"



export const WeatherScreen = () => {


    const { location, setLocation, fetchCoordinates, weatherData } = useWeather();

    useEffect(() => {
        if (location != "") {
            fetchCoordinates();
        }
    }, [location]);

    return (
        <>
        
            <div className={css.WholeWeather}>
                <div className={css.Background}>
                    <div className={css.Searchbar}>
                        <Searchbar setLocation={setLocation} />
                    </div>
                    <div className={css.Location}>
                        <span>{location} </span>
                    </div>
                    <div className={css.StarWarsPlanet}>
                        <WeatherPlanet />
                    </div>
                    <div className={css.WeatherDescription}>
                        <WeatherDescription weatherData={weatherData} />
                    </div>
                </div>
            </div>
        </>
    );
}