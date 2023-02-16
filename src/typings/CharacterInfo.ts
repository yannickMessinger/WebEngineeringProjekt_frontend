/**
 * Interface for objects to dislpay character infos that were fetched from swapi.
 */
export interface CharacterInfo {
  name: string | undefined;
  birth_year: string | undefined;
  eye_color: string | undefined;
  hair_color: string | undefined;
  height: string | undefined;
  homeworld: string | undefined;
  skin_color: string | undefined;
  starships?: [string] | undefined;
}
