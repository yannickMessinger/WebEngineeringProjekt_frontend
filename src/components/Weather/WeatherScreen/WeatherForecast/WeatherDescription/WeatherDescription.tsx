import React from "react";
import { IWeatherData } from "../../../../../typings/weather/IWeatherData";
import css from "./WeatherDescription.module.css"

interface WeatherDescriptionProps {
    weatherData: IWeatherData;
}
/**
 * Weather description (temperature and wind) at bottom right.
 */
export const WeatherDescription: React.FunctionComponent<WeatherDescriptionProps> = ({ weatherData }) => {

    return (
        <>
            <div className={css.WeatherDescriptionWrapper}>
                <div className={css.WeatherValues}>
                    Temp: {weatherData.temp}
                    <br />
                    Wind: {weatherData.wind}
                </div>
                <div className={css.Weather}>
                    <div className={css.Weather_img}>
                        <img className={css.Image} src={"./weather_symbols/" + weatherData.weatherDescription.image + ".png"} alt="Not available" />
                    </div>
                    <div className={css.Weather_description}>
                        {weatherData.weatherDescription.description}
                    </div>
                </div>
            </div>
        </>
    )
}