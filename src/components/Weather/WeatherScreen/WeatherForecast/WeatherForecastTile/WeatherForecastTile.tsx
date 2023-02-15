import React, { FormEvent, useState } from "react";
import css from "./WeatherForecastTile.module.css"

interface WeatherForecastTileProps {
    tempMax: number,
    tempMin: number,
    time: string,
    description: { description: string, image: string },
}


export const WeatherForecastTile: React.FunctionComponent<WeatherForecastTileProps> = ({ tempMax, tempMin, time, description }) => {
    return (
        <>
            <div>
                <div className={css.Date} >
                    {time}
                </div>
                <div >
                    <img className={css.Image} src={"./weather_symbols/" + description.image + ".png"} alt="Not available" />
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