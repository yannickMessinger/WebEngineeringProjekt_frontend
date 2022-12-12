import React from "react";
import css from "./WeatherDescription.module.css"

interface WeatherDescriptionProps {
    weatherData: { location: string, temp: string, weatherDescription: string };
}

export const WeatherDescription: React.FunctionComponent<WeatherDescriptionProps> = ({ weatherData }) => {

    return (
        <div className={css.weather_description}>
            <h1>Aktuelle Temperatur in: {weatherData.location} </h1>
            <br />
            Temperatur: {weatherData.temp}
            <br />
            Beschreibung: {weatherData.weatherDescription}
        </div>
    )
}