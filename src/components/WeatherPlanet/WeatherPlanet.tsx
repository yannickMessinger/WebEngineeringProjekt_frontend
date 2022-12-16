import React from "react";
import css from "./WeatherPlanet.module.css"

export const WeatherPlanet = () => {
    return (
        <div className={css.WeatherPlanet}>
            <div className={css.Like}>
                like
            </div>
            <div className= {css.PlanetName}>
                Hoth
            </div>
        </div>
    )
}