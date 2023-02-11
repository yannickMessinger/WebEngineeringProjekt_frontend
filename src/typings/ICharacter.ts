
import {side} from "./ESide"
export interface Character {
    name?: string,
    img_path?: string,
    side?:side
    validationErrorMsg?:string
    login_img_path?:string
    loginStyle?:{background:string}
    //button_style:{background:string, color:string}
    ship_img_path?:string
    charInfoFrameColor?:{r:number, g:number, b:number, a:number}
    planet_img_path?:string
}
  