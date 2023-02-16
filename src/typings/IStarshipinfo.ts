/**
 * Interface for objects to dislpay starship infos that were fetched from swapi.
 */
export interface StarshipInfo{
    name:string,
    model:string,
    manufacturer:string,
    length:string,
    hyperdrive_rating:string
    max_atmosphering_speed:string
}