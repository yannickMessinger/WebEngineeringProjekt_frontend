import React, { FormEvent, useState } from "react";
import ReactDOM from "react-dom";
import css from "./WeatherForecastElement.module.css"

interface WeatherForecastElementProps {
    tempMax: number,
    tempMin: number,
    time: string,
    description: {description: string, image: string },
}


export const WeatherForecastElement: React.FunctionComponent<WeatherForecastElementProps> = ({ tempMax, tempMin, time, description }) => {
    return (
        <>
            <div>
                <div className={css.Date} >
                    {time}
                </div>
                <div >
                    <img className= {css.Image} src= {"./weather_symbols/" + description.image + ".png"} alt="Not available"/>
                </div>
                <div className={css.Description}>
                    {description.description}
                </div>
                <div className={css.TempMax}>
                    max: {tempMax}°C
                </div>
                <div className={css.TempMin}>
                    min: {tempMin}°C
                </div>
            </div>
        </>
    )
}