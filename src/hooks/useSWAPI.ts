import React, { useContext, useEffect, useState } from "react";
import { CharacterStylingContext } from "../context/CharacterStylingContext";
import { CharacterInfo } from "../typings/CharacterInfo";
import { PlanetInfo } from "../typings/IPlanetInfo";
import { StarshipInfo } from "../typings/IStarshipInfo";



export const useSWAPI = () => {
  const [charInfo, setCharInfo] = useState<CharacterInfo>();
  const [starshipInfo, setStarShipInfo] = useState<StarshipInfo>();
  const [planetInfo, setPlanetInfo] = useState<PlanetInfo>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentChar } = useContext(CharacterStylingContext);

  //geht das iwie coola mit promise.all?

  useEffect(() => {
    setError(false);
    setLoading(true);
    fetchCharInfo()
      .then((result) => {
        if (result!.starships!.length > 0) {
          fetchStarShipInfo(result!.starships![0])
            .then((starship) => {
              setStarShipInfo(starship);
            })
            .catch((error) => {
              setError(error);
            });
        }

        if (result?.homeworld !== "") {
          fetchPlanetInfo(result!.homeworld!)
            .then((planetInfo) => {
              setPlanetInfo(planetInfo);
            })
            .catch((error) => {
              setError(error);
            });
        }

        setCharInfo(result);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 10000);
      });
  }, []);

  return {
    fetchCharInfo,
    charInfo,
    starshipInfo,
    planetInfo,
    error,
    loading,
  };

  async function fetchCharInfo(): Promise<CharacterInfo | undefined> {
    console.log("fetch Char Info from Swapi");

    const SWAPI_URL = `http://swapi.dev/api/people/?search=${
      currentChar?.name
    }`;

    try {
      const response = await fetch(SWAPI_URL, { method: "GET" });

      if (!response.ok) {
        console.log("Error fetch swapi");

        throw new Error(response.statusText);
      }

      const rawInfo = await response.json();

      const charInfo: CharacterInfo = rawInfo.results[0];

      return charInfo;
    } catch (error) {
      console.log(error);

      return {
        name: "error",
        birth_year: "error",
        eye_color: "error",
        hair_color: "error",
        height: "error",
        homeworld: "error",
        skin_color: "error",
      };
    }
  }

  async function fetchStarShipInfo(
    STARSHIP_URL: string
  ): Promise<StarshipInfo | undefined> {
    console.log("fetch Ship Info from Swapi");
    try {
      const response = await fetch(STARSHIP_URL, { method: "GET" });

      if (!response.ok) {
        console.log("Error fetch swapi starship");
        throw new Error(response.statusText);
      }

      const rawInfo = await response.json();

      const starshipInfo: StarshipInfo = rawInfo;

      return starshipInfo;
    } catch (error) {
      console.log(error);
      return {
        name: "error",
        model: "error",
        manufacturer: "error",
        length: "error",
        hyperdrive_rating: "error",
        max_atmosphering_speed: "errors",
      };
    }
  }

  async function fetchPlanetInfo(
    PLANET_URL: string
  ): Promise<PlanetInfo | undefined> {
    console.log("fetch Planet Info from Swapi");
    try {
      const response = await fetch(PLANET_URL, { method: "GET" });

      if (!response.ok) {
        console.log("Error fetch swapi planet");
        throw new Error(response.statusText);
      }

      const rawInfo = await response.json();
      console.log(rawInfo);
      const planetInfo: PlanetInfo = rawInfo;

      return planetInfo;
    } catch (error) {
      console.log(error);
      return {
        climate: "error",
        diameter: "error",
        gravity: "error",
        name: "error",
        population: "error",
        terrain: "errors",
      };
    }
  }
};
