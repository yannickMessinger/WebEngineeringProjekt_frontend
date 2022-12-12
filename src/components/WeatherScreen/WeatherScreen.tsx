import React, { useEffect } from "react";
import { useWeather } from "../../hooks/useWeather";
import { Searchbar } from "../Searchbar/Searchbar";
import { WeatherDescription } from "../WeatherDescription/WeatherDescription";


export const WeatherScreen = () => {


    const { location, setLocation, fetchCoordinates, weatherData } = useWeather();


    useEffect(() => {
        if (location != "") {
            fetchCoordinates();
        }
    }, [location]);

    return (
        <>
            <Searchbar setLocation={setLocation} />
            <WeatherDescription weatherData={weatherData} />
        </>
    );
}