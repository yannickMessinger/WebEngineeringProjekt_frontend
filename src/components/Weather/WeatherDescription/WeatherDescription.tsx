import React from "react";
import css from "./WeatherDescription.module.css"

interface WeatherDescriptionProps {
    weatherData: { location: string, temp: string, wind: string, weatherDescription: { description: string, image: string } };
}

export const WeatherDescription: React.FunctionComponent<WeatherDescriptionProps> = ({ weatherData }) => {

    return (
        <>  <div className={css.WeatherValues}>
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

        </>
    )
}