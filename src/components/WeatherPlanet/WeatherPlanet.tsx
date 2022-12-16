import React, { useState } from "react";
import css from "./WeatherPlanet.module.css"

interface WeatherPlanetProps{
    planetName: string
}

export const WeatherPlanet: React.FunctionComponent<WeatherPlanetProps> = ({ planetName }) => {

    return (
        <div className={css.WeatherPlanet}>
            <div className={css.Like}>
                like
            </div>
            <div className= {css.PlanetName}>
                {planetName}
            </div>
        </div>
    )
}