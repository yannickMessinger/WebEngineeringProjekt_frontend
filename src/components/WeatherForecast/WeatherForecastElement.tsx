import React, { useState } from "react";
import css from "./WeatherForecastElement.module.css"

interface WeatherForecastElementProps {
    tempMax: number,
    tempMin: number,
    time: string,
    description: string,
}


export const WeatherForecastElement: React.FunctionComponent<WeatherForecastElementProps> = ({ tempMax, tempMin, time, description }) => {

    return (
        <>
            <div className={css.Element}>
                <div className={css.Date} >
                    {time}
                </div>
                <div className={css.Description}>
                    {description}
                </div>
                <div className={css.TempMax}>
                    {tempMax}°C
                </div>
                <div className={css.TempMin}>
                    {tempMin}°C
                </div>
            </div>
        </>
    )
}