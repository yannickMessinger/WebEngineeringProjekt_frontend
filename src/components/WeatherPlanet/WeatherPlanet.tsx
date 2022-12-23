import React, { useState } from "react";
import css from "./WeatherPlanet.module.css"

interface WeatherPlanetProps {
    planetName: string
}

export const WeatherPlanet: React.FunctionComponent<WeatherPlanetProps> = ({ planetName }) => {

    let content;

    if (planetName === "default") {
        console.log("default");
        content = (<div className={css.InitialStatement}>Auf welchem Planeten herrscht das selbe Wetter, wie bei dir auf der Erde?<br /> Gebe deinen Standort ein!</div>)
    }else {
        if(planetName === "noPlanet") {
            console.log("nothingFound");

            content =  (<div className={css.InitialStatement}>Diesen Planeten gibt es leider nicht!</div>)
        } else {
            console.log("Planet");
            content = (<><div className={css.Like}>
                like
            </div><div className={css.PlanetName}>
                    {planetName}
                </div></>)
        }
    }


    return (
        <div className={css.WeatherPlanet}>
            {content}
        </div>
    )
}