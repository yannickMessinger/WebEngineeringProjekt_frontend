import React from "react";
import css from "./WeatherDescription.module.css"

interface WeatherDescriptionProps {
    weatherData: { location: string, temp: string, weatherDescription: string };
}

export const WeatherDescription: React.FunctionComponent<WeatherDescriptionProps> = ({ weatherData }) => {

    return (
        <div className={css.weather_description}>
            {weatherData.temp}
            <br />
            {weatherData.weatherDescription}
        </div>
    )
}