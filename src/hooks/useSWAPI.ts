import { useContext, useEffect, useState } from "react";
import { CharacterStylingContext } from "../context/CharacterStylingContext";
import { CharacterInfo } from "../typings/CharacterInfo";
import { PlanetInfo } from "../typings/IPlanetInfo";
import { StarshipInfo } from "../typings/IStarshipInfo";

/**
 * custom Hook to fetch Data from swapi API. Api calls are depended on each other. First
 * character info is fetched and if returning info contains link to spaceshipinfo and planetinfo,
 * data is again fetched with received url's. If data comes back faster than expected, time out function ensures that loading
 * state is set to loading for at least 6 seconds so that loading animation can run completely.
 *
 * character value for search param in url is passed from context.
 * @returns data objects containg infos about character, spaceship and planet
 */
export const useSWAPI = () => {
  const [charInfo, setCharInfo] = useState<CharacterInfo>({
    name: "keine Info",
    birth_year: "keine Info",
    eye_color: "keine Info",
    hair_color: "keine Info",
    height: "keine Info",
    homeworld: "keine Info",
    skin_color: "keine Info",
  });
  const [starshipInfo, setStarShipInfo] = useState<StarshipInfo>({
    name: "keine Info",
    model: "keine Info",
    manufacturer: "keine Info",
    length: "keine Info",
    hyperdrive_rating: "keine Info",
    max_atmosphering_speed: "keine Info",
  });
  const [planetInfo, setPlanetInfo] = useState<PlanetInfo>({
    climate: "keine Info",
    diameter: "keine Info",
    gravity: "keine Info",
    name: "keine Info",
    population: "keine Info",
    terrain: "keine Info",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { currentChar } = useContext(CharacterStylingContext);

  useEffect(() => {
    setError(false);
    setLoading(true);
    fetchCharInfo()
      .then((result) => {
        if (result!.starships!.length > 0) {
          fetchStarShipInfo(result!.starships![0])
            .then((starship) => {
              setStarShipInfo(starship!);
            })
            .catch((error) => {
              setError(error);
            });
        } else {
          console.log("no ship data");
        }

        if (result?.homeworld !== "") {
          fetchPlanetInfo(result!.homeworld!)
            .then((planetInfo) => {
              setPlanetInfo(planetInfo!);
            })
            .catch((error) => {
              setError(error);
            });
        } else {
          console.log("no planet data");
        }

        setCharInfo(result!);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 6000);
      });
  }, [currentChar]);

  return {
    fetchCharInfo,
    charInfo,
    starshipInfo,
    planetInfo,
    fetchAllData,
    error,
    loading,
  };

  async function fetchCharInfo(): Promise<CharacterInfo | undefined> {
    const SWAPI_URL = `https://swapi.dev/api//people/?search=${currentChar?.name}`;

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

  async function fetchAllData(url: string) {
    fetchCharInfo()
      .then((result) => {
        if (result!.starships!.length > 0) {
          fetchStarShipInfo(result!.starships![0])
            .then((starship) => {
              setStarShipInfo(starship!);
            })
            .catch((error) => {
              setError(error);
            });
        } else {
          console.log("no ship data");
        }

        if (result?.homeworld !== "") {
          fetchPlanetInfo(result!.homeworld!)
            .then((planetInfo) => {
              setPlanetInfo(planetInfo!);
            })
            .catch((error) => {
              setError(error);
            });
        } else {
          console.log("no planet data");
        }

        setCharInfo(result!);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 6000);
      });
  }
};
