import React, { useState } from "react";
import css from "./WeatherPlanet.module.css"

interface WeatherPlanetProps {
    planetName: string
}
/**
 * component describes centered middle planet names part  
 */
export const WeatherPlanet: React.FunctionComponent<WeatherPlanetProps> = ({ planetName }) => {

    let content;

    if (planetName === "default") {
        content = (<div className={css.InitialStatement}>Auf welchem Planeten herrschen die gleichen Temperaturen, wie bei dir auf der Erde?<br /> Gebe deinen Standort ein, um es herauszufinden!</div>)
    } else if (planetName === "noPlanet") {
        content = (<div className={css.InitialStatement}>Diesen Standort gibt es leider nicht!</div>)
    } else {
        content = (
            <>
                <div className={css.Like}>
                    wie auf
                </div>
                <div className={css.PlanetName}>
                    {planetName}
                </div>
            </>
        )

    }

    return (
        <div data-cy="weather_planet" className={css.WeatherPlanet}>
            {content}
        </div>
    )
}