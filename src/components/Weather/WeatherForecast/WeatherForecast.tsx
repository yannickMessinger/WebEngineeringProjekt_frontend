import React, { useState } from "react";
import css from "./WeatherForecast.module.css"
import { WeatherForecastElement } from "./WeatherForecastElement";


interface WeatherForecastProps {
    weatherForecast: {
        tempMax: Array<number>,
        tempMin: Array<number>
        sunrise : Array<number>
        sunset : Array<number>
        time : Array<string>
        weathercode: Array<{description: string, image: string}>
        windspeed : Array<number>
    };
}

export const WeatherForecast: React.FunctionComponent<WeatherForecastProps> = ({weatherForecast}) => {
    return (
        <>
         <div className={css.WeatherForecast}>
                <WeatherForecastElement 
                    tempMax = {weatherForecast.tempMax[0]} 
                    tempMin = {weatherForecast.tempMin[0]}
                    time = {weatherForecast.time[0]}
                    description = {weatherForecast.weathercode[0]}
                />
                <WeatherForecastElement 
                    tempMax = {weatherForecast.tempMax[1]} 
                    tempMin = {weatherForecast.tempMin[1]}
                    time = {weatherForecast.time[1]}
                    description = {weatherForecast.weathercode[1]}
                />
                <WeatherForecastElement 
                    tempMax = {weatherForecast.tempMax[2]} 
                    tempMin = {weatherForecast.tempMin[2]}
                    time = {weatherForecast.time[2]}
                    description = {weatherForecast.weathercode[2]}
                />
                <WeatherForecastElement 
                    tempMax = {weatherForecast.tempMax[3]} 
                    tempMin = {weatherForecast.tempMin[3]}
                    time = {weatherForecast.time[3]}
                    description = {weatherForecast.weathercode[3]}
                />
                <WeatherForecastElement 
                    tempMax = {weatherForecast.tempMax[4]} 
                    tempMin = {weatherForecast.tempMin[4]}
                    time = {weatherForecast.time[4]}
                    description = {weatherForecast.weathercode[4]}
                />
                <WeatherForecastElement 
                    tempMax = {weatherForecast.tempMax[5]} 
                    tempMin = {weatherForecast.tempMin[5]}
                    time = {weatherForecast.time[5]}
                    description = {weatherForecast.weathercode[5]}
                />
                <WeatherForecastElement 
                    tempMax = {weatherForecast.tempMax[6]} 
                    tempMin = {weatherForecast.tempMin[6]}
                    time = {weatherForecast.time[6]}
                    description = {weatherForecast.weathercode[6]}
                />
         </div>
        </>
    )
}

