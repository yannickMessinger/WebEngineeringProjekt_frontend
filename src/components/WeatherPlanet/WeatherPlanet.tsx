import React, { useState } from "react";
import css from "./WeatherPlanet.module.css"

interface WeatherPlanetProps {
    planetName: string
}

export const WeatherPlanet: React.FunctionComponent<WeatherPlanetProps> = ({ planetName }) => {

    let content;

    if (planetName === "default") {
        content = (<div className={css.InitialStatement}>Auf welchem Planeten herrscht das selbe Wetter, wie bei dir auf der Erde?<br /> Gebe deinen Standort ein!</div>)
    } else if (planetName === "noPlanet") {
        content = (<div className={css.InitialStatement}>Diesen Standort gibt es leider nicht!</div>)
    } else {
        content = (
            <><div className={css.Like}>
                like
            </div><div className={css.PlanetName}>
                    {planetName}
                </div></>
        )

    }
    
    return (
        <div className={css.WeatherPlanet}>
            {content}
        </div>
    )
}