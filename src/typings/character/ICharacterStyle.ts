/**
 * interface for styling objects that contain styling informations about certain character.
 * Contains image paths to display correct picture and values for colors to style application indivually.
 */
import {side} from "./ESide"
export interface CharacterStyle {
    name?: string,
    img_path?: string,
    side?:side
    validationErrorMsg?:string
    login_img_path?:string
    loginStyle?:{background:string}
    ship_img_path?:string
    charInfoFrameColor?:{r:number, g:number, b:number, a:number}
    planet_img_path?:string
}
  